import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function getInitialTheme(): Theme {
  const saved = localStorage.getItem('studyhub_theme');
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return 'dark'; // Dark mode default as specified
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
  localStorage.setItem('studyhub_theme', theme);
}

function triggerWaterWaveEffect(x: number, y: number, isToLight: boolean) {
  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'theme-water-ripple-container';
  rippleContainer.style.position = 'fixed';
  rippleContainer.style.top = '0';
  rippleContainer.style.left = '0';
  rippleContainer.style.width = '100vw';
  rippleContainer.style.height = '100vh';
  rippleContainer.style.pointerEvents = 'none';
  rippleContainer.style.zIndex = '9999999';
  rippleContainer.style.overflow = 'hidden';

  const waveColors = isToLight
    ? ['rgba(56, 189, 248, 0.4)', 'rgba(6, 182, 212, 0.25)']
    : ['rgba(16, 185, 129, 0.35)', 'rgba(99, 102, 241, 0.25)'];

  waveColors.forEach((color, idx) => {
    const ring = document.createElement('div');
    ring.style.position = 'absolute';
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    ring.style.width = '12px';
    ring.style.height = '12px';
    ring.style.borderRadius = '50%';
    ring.style.border = `2px solid ${color}`;
    ring.style.boxShadow = `0 0 15px 2px ${color}`;
    ring.style.transform = 'translate(-50%, -50%) scale(0)';
    ring.style.opacity = '0.9';
    ring.style.transition = `transform ${0.55 + idx * 0.12}s cubic-bezier(0.1, 0.9, 0.2, 1), opacity ${0.55 + idx * 0.12}s ease-out`;

    rippleContainer.appendChild(ring);

    requestAnimationFrame(() => {
      ring.style.transform = `translate(-50%, -50%) scale(${Math.max(window.innerWidth, window.innerHeight) / 3.5})`;
      ring.style.opacity = '0';
    });
  });

  document.body.appendChild(rippleContainer);
  setTimeout(() => {
    if (rippleContainer.parentNode) {
      rippleContainer.parentNode.removeChild(rippleContainer);
    }
  }, 900);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    const isToLight = nextTheme === 'light';

    const x = e ? e.clientX : window.innerWidth - 80;
    const y = e ? e.clientY : 30;

    const doc = document as any;
    if (doc.startViewTransition) {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = doc.startViewTransition(() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            pseudoElement: '::view-transition-new(root)',
            fill: 'forwards'
          }
        );
      });
    } else {
      triggerWaterWaveEffect(x, y, isToLight);
      applyTheme(nextTheme);
      setTheme(nextTheme);
    }
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
