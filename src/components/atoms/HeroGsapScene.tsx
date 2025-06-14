import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// 円の型
interface Circle {
  x: number;
  y: number;
  r: number;
  color: string;
  alpha: number;
  dx: number;
  dy: number;
}

const COLORS = [
  'rgba(178,235,255,0.7)',
  'rgba(255,224,178,0.5)',
  'rgba(197,225,165,0.5)',
  'rgba(255,205,210,0.5)',
  'rgba(187,222,251,0.5)',
];

const CIRCLE_COUNT = 14;

const HeroGsapScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circles = useRef<Circle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // サイズ調整
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 円の初期化
    circles.current = Array.from({ length: CIRCLE_COUNT }).map(() => {
      const r = 32 + Math.random() * 32;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.5 + Math.random() * 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      };
    });

    // === 1. パルスアニメーション（半径を拡大縮小） ===
    circles.current.forEach((c, i) => {
      gsap.to(c, {
        r: c.r * (1.1 + Math.random() * 0.2), // 10〜30%拡大
        duration: 2 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
    // === 2. 透明度アニメーション ===
    circles.current.forEach((c, i) => {
      gsap.to(c, {
        alpha: 0.3 + Math.random() * 0.7,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
    // === 3. タイムラインで1つ目の円を順番に動かす ===
    if (circles.current.length > 0) {
      const c = circles.current[0];
      const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 });
      tl.to(c, { x: c.x + 60, duration: 1.2, ease: "power1.inOut" })
        .to(c, { y: c.y + 60, duration: 1.2, ease: "power1.inOut" })
        .to(c, { x: c.x, y: c.y, duration: 1.2, ease: "power1.inOut" });
    }

    // アニメーションループ
    let running = true;
    function animate() {
      if (!running) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const c of circles.current) {
        // ふわふわ移動
        c.x += c.dx;
        c.y += c.dy;
        // 端で跳ね返る
        if (c.x < c.r) c.dx = Math.abs(c.dx);
        if (c.x > width - c.r) c.dx = -Math.abs(c.dx);
        if (c.y < c.r) c.dy = Math.abs(c.dy);
        if (c.y > height - c.r) c.dy = -Math.abs(c.dy);
        // 描画
        if (!ctx) return;
        ctx.globalAlpha = c.alpha;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }
    animate();

    // マウス・タッチイベントでGSAPアニメーション
    function handlePointer(e: MouseEvent | TouchEvent) {
      if (!canvas) return;
      let x = 0, y = 0;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
      } else if ('clientX' in e) {
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
      }
      // すべての円をマウス位置にgsapでゆっくり引き寄せる
      circles.current.forEach((c, i) => {
        gsap.to(c, {
          x: x + Math.cos((i / CIRCLE_COUNT) * Math.PI * 2) * 80,
          y: y + Math.sin((i / CIRCLE_COUNT) * Math.PI * 2) * 80,
          duration: 1.2,
          ease: 'power2.out',
        });
      });
    }
    canvas.addEventListener('mousemove', handlePointer);
    canvas.addEventListener('touchmove', handlePointer);

    // クリーンアップ
    return () => {
      running = false;
      if (!canvas) return;
      canvas.removeEventListener('mousemove', handlePointer);
      canvas.removeEventListener('touchmove', handlePointer);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', margin: '0 auto', overflow: 'hidden', background: '#eaf7fa' }}>
      {/* 
        Canvas要素で2D描画を行い、GSAPで円の座標をTweenアニメーションします。
        - マウスやタップで全円が中心を囲むように移動し、優しいインタラクションを演出
        - gsap.toで物理的な動きやイージングを簡単に制御
      */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
};

export default HeroGsapScene;