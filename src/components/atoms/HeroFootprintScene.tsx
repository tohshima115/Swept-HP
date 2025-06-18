import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTheme, useMediaQuery } from '@mui/material';

const COLORS = [
  '#B2EBFF',
  '#FFD180',
  '#C5E1A5',
  '#FFCDD2',
  '#BBDEFB',
];

const TRAIL_LENGTH = 16;
const STEP_INTERVAL = 0.45;
const FADE_DURATION = 5.0; // 足跡が完全に消えるまでの秒数
const MAX_FOOTPRINTS = 8;

interface Step {
  x: number;
  y: number;
  angle: number;
  isLeft: boolean;
  createdAt: number;
}

interface Walker {
  x: number;
  y: number;
  angle: number;
  color: string;
  steps: Step[];
  isLeft: boolean;
  active: boolean;
}

function drawFootprint(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, color: string, size: number, alpha: number, isLeft: boolean) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle + (isLeft ? -0.18 : 0.18));
  ctx.scale(size / 32, size / 32);

  if (isLeft) {
    // 左足用パス（右足のパスを左右反転＋指も反転）
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-6, -8, -18, -8, -20, 0);
    ctx.bezierCurveTo(-22, 10, -10, 18, 0, 12);
    ctx.bezierCurveTo(10, 8, 6, -8, 0, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * 0.8;
    ctx.fill();
    ctx.globalAlpha = alpha * 1;
    ctx.beginPath();
    ctx.arc(-6, -2, 2, 0, Math.PI * 2);
    ctx.arc(-12, -1, 2, 0, Math.PI * 2);
    ctx.arc(-16, 2, 2, 0, Math.PI * 2);
    ctx.arc(-18, 6, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * 0.6;
    ctx.fill();
  } else {
    // 右足用パス（従来通り）
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(6, -8, 18, -8, 20, 0);
    ctx.bezierCurveTo(22, 10, 10, 18, 0, 12);
    ctx.bezierCurveTo(-10, 8, -6, -8, 0, 0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * 0.8;
    ctx.fill();
    ctx.globalAlpha = alpha * 1;
    ctx.beginPath();
    ctx.arc(6, -2, 2, 0, Math.PI * 2);
    ctx.arc(12, -1, 2, 0, Math.PI * 2);
    ctx.arc(16, 2, 2, 0, Math.PI * 2);
    ctx.arc(18, 6, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha * 0.6;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function randomWalkerStart(width: number, height: number, footprintSize: number) {
  // 画面外のどこかから画面内に向かう
  const edge = Math.floor(Math.random() * 4); // 0:左,1:上,2:右,3:下
  let x = 0, y = 0, angle = 0;
  switch (edge) {
    case 0: // left
      x = -footprintSize * 2;
      y = Math.random() * height;
      angle = Math.random() * Math.PI - Math.PI / 2; // 右方向
      break;
    case 1: // top
      x = Math.random() * width;
      y = -footprintSize * 2;
      angle = Math.random() * Math.PI + Math.PI / 2; // 下方向
      break;
    case 2: // right
      x = width + footprintSize * 2;
      y = Math.random() * height;
      angle = Math.random() * Math.PI + Math.PI / 2; // 左方向
      break;
    case 3: // bottom
      x = Math.random() * width;
      y = height + footprintSize * 2;
      angle = Math.random() * Math.PI - Math.PI / 2; // 上方向
      break;
  }
  return { x, y, angle };
}

const HeroFootprintScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const walkers = useRef<Walker[]>([]);
  const widthRef = useRef<number>(0);
  const heightRef = useRef<number>(0);

  // MUIのブレークポイントで足跡サイズを決定
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  let FOOTPRINT_SIZE = 32;
  if (isXs) FOOTPRINT_SIZE = 40;
  else if (isSm) FOOTPRINT_SIZE = 40;
  else if (isMd) FOOTPRINT_SIZE = 64;
  else if (isLg) FOOTPRINT_SIZE = 104;

  // 歩幅を足跡サイズに比例させる
  const STEP_DIST = Math.round(FOOTPRINT_SIZE * 1.4);
  // オフセットも足サイズに比例
  const SIDE_OFFSET = Math.round(FOOTPRINT_SIZE * 0.35);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // サイズ調整
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    widthRef.current = width;
    heightRef.current = height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Walker生成
    function createWalker(color: string): Walker {
      const { x, y, angle } = randomWalkerStart(width, height, FOOTPRINT_SIZE);
      return {
        x,
        y,
        angle,
        color,
        steps: [],
        isLeft: Math.random() < 0.5,
        active: true,
      };
    }

    // 初期化
    walkers.current = Array.from({ length: MAX_FOOTPRINTS }).map((_, i) => createWalker(COLORS[i % COLORS.length]));

    // 一歩ずつ進む
    function stepWalker(walker: Walker) {
      if (!walker.active) return;
      // 進行方向をランダムに少し変える
      walker.angle += (Math.random() - 0.5) * 0.3;
      // 中心線から左右にオフセット
      const offset = walker.isLeft ? -SIDE_OFFSET : SIDE_OFFSET;
      const nx = walker.x + Math.cos(walker.angle) * STEP_DIST;
      const ny = walker.y + Math.sin(walker.angle) * STEP_DIST;
      const ox = nx + Math.cos(walker.angle + Math.PI / 2) * offset;
      const oy = ny + Math.sin(walker.angle + Math.PI / 2) * offset;
      // 本体が画面外に出ても、stepsが画面内に残っていればactive維持
      walker.x = nx;
      walker.y = ny;
      walker.steps.unshift({ x: ox, y: oy, angle: walker.angle, isLeft: walker.isLeft, createdAt: Date.now() });
      if (walker.steps.length > TRAIL_LENGTH) walker.steps.pop();
      walker.isLeft = !walker.isLeft; // 交互に
      // 次の一歩
      // 画面外に出たら新たな一歩は追加しない
      if (
        ox < -FOOTPRINT_SIZE * 2 || ox > width + FOOTPRINT_SIZE * 2 ||
        oy < -FOOTPRINT_SIZE * 2 || oy > height + FOOTPRINT_SIZE * 2
      ) {
        walker.active = false; // ただし、すぐには消さない（spawnWalkersでstepsの消滅を待つ）
        return;
      }
      gsap.delayedCall(STEP_INTERVAL + Math.random() * 0.2, () => stepWalker(walker));
    }
    walkers.current.forEach(walker => stepWalker(walker));

    // 定期的に新しいWalkerを追加
    function spawnWalkers() {
      for (let i = 0; i < walkers.current.length; i++) {
        const walker = walkers.current[i];
        if (!walker.active) {
          // steps配列内の足跡が全て画面外 or 透明度0なら新しいWalker生成
          const now = Date.now();
          const hasVisibleStep = walker.steps.some(step => {
            const dt = (now - step.createdAt) / 1000;
            const alpha = 1 - dt / FADE_DURATION;
            const inView = (
              step.x >= 0 && step.x <= width &&
              step.y >= 0 && step.y <= height
            );
            return alpha > 0.01 && inView;
          });
          if (!hasVisibleStep) {
            walkers.current[i] = createWalker(COLORS[Math.floor(Math.random() * COLORS.length)]);
            stepWalker(walkers.current[i]);
          }
        }
      }
      gsap.delayedCall(0.7, spawnWalkers);
    }
    spawnWalkers();

    // 描画ループ
    let running = true;
    function draw() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();
      for (const walker of walkers.current) {
        for (let i = walker.steps.length - 1; i >= 0; i--) {
          const step = walker.steps[i];
          // 新しいほど濃く、古いほど薄く
          const dt = (now - step.createdAt) / 1000;
          let alpha = 1 - dt / FADE_DURATION;
          if (alpha < 0) alpha = 0;
          drawFootprint(ctx, step.x, step.y, step.angle, walker.color, FOOTPRINT_SIZE, alpha, step.isLeft);
        }
      }
      requestAnimationFrame(draw);
    }
    draw();

    return () => { running = false; };
  }, [FOOTPRINT_SIZE, STEP_DIST, SIDE_OFFSET]);

  return (
    <div style={{ width: '100%', height: '100%', margin: '0 auto', overflow: 'hidden', background: '#eaf7fa' }}>
      {/* 右足・左足交互、画面外から現れ続ける足跡アニメーション */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default HeroFootprintScene; 