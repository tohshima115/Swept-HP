import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const PIECE_RADIUS = 40;
const COLORS = [
  'rgba(178,235,255,0.7)',
  'rgba(255,224,178,0.5)',
  'rgba(197,225,165,0.5)',
  'rgba(255,205,210,0.5)',
  'rgba(187,222,251,0.5)',
];

interface GridCell {
  x: number;
  y: number;
  filled: boolean;
  color: string;
}

interface Piece {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  placed: boolean;
}

const HeroGsapScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grid = useRef<GridCell[]>([]);
  const pieces = useRef<Piece[]>([]);
  const [lastPlaced, setLastPlaced] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const lastScrollY = useRef<number | null>(null);

  function setupGridAndPieces(width: number, height: number) {
    const cols = Math.floor(width / (PIECE_RADIUS * 2 + 8));
    const rows = Math.floor(height / (PIECE_RADIUS * 2 + 8));
    const gridW = (cols - 1) * (PIECE_RADIUS * 2 + 8);
    const gridH = (rows - 1) * (PIECE_RADIUS * 2 + 8);
    const startX = width / 2 - gridW / 2;
    const startY = height / 2 - gridH / 2;
    const totalCells = rows * cols;
    const emptyCount = Math.min(5, totalCells - 1);
    const allIndexes = Array.from({ length: totalCells }, (_, i) => i);
    const emptyIndexes = [] as number[];
    while (emptyIndexes.length < emptyCount) {
      const idx = allIndexes.splice(Math.floor(Math.random() * allIndexes.length), 1)[0];
      emptyIndexes.push(idx);
    }
    const gridCells: GridCell[] = [];
    let colorIdx = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const idx = row * cols + col;
        gridCells.push({
          x: startX + col * (PIECE_RADIUS * 2 + 8),
          y: startY + row * (PIECE_RADIUS * 2 + 8),
          filled: !emptyIndexes.includes(idx),
          color: COLORS[colorIdx++ % COLORS.length],
        });
      }
    }
    const emptyCells = emptyIndexes.map(idx => gridCells[idx]);
    const pieceList = emptyCells.map((cell) => ({
      x: Math.random() < 0.5 ? -PIECE_RADIUS * 2 : width + PIECE_RADIUS * 2,
      y: Math.random() * height,
      targetX: cell.x,
      targetY: cell.y,
      color: cell.color,
      placed: false,
    }));
    return { gridCells, pieceList };
  }

  useEffect(() => {
    function handleResize() {
      const parent = canvasRef.current?.parentElement;
      if (parent) {
        setCanvasSize({ width: parent.offsetWidth, height: parent.offsetHeight });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!canvasSize.width || !canvasSize.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvasSize.width;
    const height = canvasSize.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { gridCells, pieceList } = setupGridAndPieces(width, height);
    grid.current = gridCells;
    pieces.current = pieceList;
    setLastPlaced(false);

    // パズルピース型のPath2Dを返す関数（上：凸、右・下・左：凹）
    function createPuzzlePiecePath(x: number, y: number, size: number, tab: number = 12) {
      const path = new Path2D();
      // 上辺（凸）
      path.moveTo(x - size, y - size);
      path.lineTo(x - tab, y - size);
      path.bezierCurveTo(x, y - size - tab, x, y - size - tab, x + tab, y - size);
      path.lineTo(x + size, y - size);
      // 右辺（凹）
      path.lineTo(x + size, y - tab);
      path.bezierCurveTo(x + size - tab, y, x + size - tab, y, x + size, y + tab);
      path.lineTo(x + size, y + size);
      // 下辺（凹）
      path.lineTo(x + tab, y + size);
      path.bezierCurveTo(x, y + size - tab, x, y + size - tab, x - tab, y + size);
      path.lineTo(x - size, y + size);
      // 左辺（凹）
      path.lineTo(x - size, y + tab);
      path.bezierCurveTo(x - size - tab, y, x - size - tab, y, x - size, y - tab);
      path.closePath();
      return path;
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < grid.current.length; i++) {
        const cell = grid.current[i];
        if (cell.filled) {
          ctx.globalAlpha = 0.25;
          const path = createPuzzlePiecePath(cell.x, cell.y, PIECE_RADIUS, 12);
          ctx.fillStyle = cell.color;
          ctx.fill(path);
          ctx.globalAlpha = 1;
          ctx.strokeStyle = '#01677D';
          ctx.lineWidth = 2;
          ctx.stroke(path);
          ctx.globalAlpha = 1;
        }
      }
      for (const p of pieces.current) {
        ctx.save();
        const path = createPuzzlePiecePath(p.x, p.y, PIECE_RADIUS, 12);
        ctx.shadowColor = '#01677D';
        ctx.shadowBlur = p.placed ? 0 : 12;
        ctx.fillStyle = p.color;
        ctx.fill(path);
        ctx.restore();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#01677D';
        ctx.lineWidth = 3;
        ctx.stroke(path);
      }
    }

    const tl = gsap.timeline();
    for (let i = 0; i < pieces.current.length - 1; i++) {
      tl.to(pieces.current[i], {
        x: pieces.current[i].targetX,
        y: pieces.current[i].targetY,
        duration: 0.7,
        ease: 'power2.out',
        onUpdate: draw,
        onComplete: () => {
          pieces.current[i].placed = true;
          draw();
        },
      }, i * 0.3);
    }
    draw();

    function placeLastPiece() {
      if (lastPlaced) return;
      setLastPlaced(true);
      const last = pieces.current[pieces.current.length - 1];
      gsap.to(last, {
        x: last.targetX,
        y: last.targetY,
        duration: 0.7,
        ease: 'bounce.out',
        onUpdate: draw,
        onComplete: () => {
          last.placed = true;
          draw();
        },
      });
    }

    function handleUserAction() {
      if (!lastPlaced) {
        placeLastPiece();
      }
    }
    function handleScroll() {
      if (lastPlaced) return;
      const y = window.scrollY;
      if (lastScrollY.current === null) {
        lastScrollY.current = y;
        return;
      }
      if (Math.abs(y - lastScrollY.current) > 50) {
        placeLastPiece();
      }
    }
    window.addEventListener('click', handleUserAction);
    window.addEventListener('scroll', handleScroll);

    let running = true;
    function animate() {
      if (!running) return;
      draw();
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('click', handleUserAction);
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [canvasSize]);

  return (
    <div style={{ width: '100%', height: '100%', margin: '0 auto', overflow: 'hidden', background: '#eaf7fa' }}>
      {/* 画面いっぱいにグリッドを敷き詰め、空き枠は透明。ピースが順番にはまる。 */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default HeroGsapScene;