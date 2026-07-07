"use client";

import { useEffect, useRef } from "react";
import styles from "./GlobalBackground.module.css";

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null,
      y: null,
      radius: 120, // Distance for hover effect
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45; // Gentle, slow speed
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 1; // 1px to 2.5px
        this.alpha = Math.random() * 0.4 + 0.15; // Soft opacity
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with soft correction
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -1;
        } else if (this.x > width) {
          this.x = width;
          this.vx *= -1;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy *= -1;
        } else if (this.y > height) {
          this.y = height;
          this.vy *= -1;
        }

        // Mouse interaction (Gentle push away)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Add a soft push vector away from mouse
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Using brand blue color for particles
        ctx.fillStyle = `rgba(30, 101, 179, ${this.alpha})`;
        ctx.fill();

        // Ambient glow ring around nodes
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 101, 179, ${this.alpha * 0.15})`;
        ctx.fill();
      }
    }

    function init() {
      // Dynamic density: 1 particle per 32000px, capped at 55 for absolute 0 lag
      const particleCount = Math.min(Math.floor((width * height) / 32000), 55);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    // Resize Handler
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    }

    // Mouse Tracking
    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    // Touch support for mobile devices
    function handleTouchMove(e) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function handleTouchEnd() {
      mouse.x = null;
      mouse.y = null;
    }

    init();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
