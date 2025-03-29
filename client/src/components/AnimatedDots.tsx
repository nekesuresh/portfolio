import { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

const AnimatedDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | null>(null);
  const numDots = 100; // Number of dots

  // Initialize dots with random positions and velocities
  const initializeDots = () => {
    if (!containerRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const dots: Dot[] = [];
    for (let i = 0; i < numDots; i++) {
      dots.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1, // Size between 1-3px
        vx: (Math.random() - 0.5) * 0.5, // Velocity X component
        vy: (Math.random() - 0.5) * 0.5, // Velocity Y component
        opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3-0.8
      });
    }
    
    dotsRef.current = dots;
  };

  // Update dot positions
  const updateDots = () => {
    if (!containerRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    dotsRef.current = dotsRef.current.map(dot => {
      let { x, y, vx, vy, size, opacity } = dot;
      
      // Update position
      x += vx;
      y += vy;
      
      // Bounce off edges
      if (x < 0 || x > width) {
        vx = -vx;
        x = x < 0 ? 0 : width;
      }
      
      if (y < 0 || y > height) {
        vy = -vy;
        y = y < 0 ? 0 : height;
      }
      
      // Random slight velocity changes to make movement more organic
      if (Math.random() < 0.01) {
        vx += (Math.random() - 0.5) * 0.1;
        vy += (Math.random() - 0.5) * 0.1;
        
        // Limit max speed
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > 1) {
          vx = (vx / speed) * 1;
          vy = (vy / speed) * 1;
        }
      }
      
      // Randomly change opacity for twinkling effect
      if (Math.random() < 0.01) {
        opacity = Math.random() * 0.5 + 0.3;
      }
      
      return { ...dot, x, y, vx, vy, opacity };
    });
    
    // Request next animation frame
    rafRef.current = requestAnimationFrame(updateDots);
  };

  // Initialize animation on mount
  useEffect(() => {
    initializeDots();
    rafRef.current = requestAnimationFrame(updateDots);
    
    // Handle window resize
    const handleResize = () => {
      initializeDots();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {dotsRef.current.map(dot => (
        <animated.div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            width: dot.size,
            height: dot.size,
            transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;
