'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle between Whimsy and Corporate theme"
    >
      <div className="toggle-track">
        <div className="toggle-knob" />
      </div>
    </button>
  );
}
