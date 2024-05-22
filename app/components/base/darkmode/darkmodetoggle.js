'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const iconStyle = { fontSize: '2rem', cursor: 'pointer' };

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <FiSun style={iconStyle} onClick={() => setTheme('light')} />
      ) : (
        <FiMoon style={iconStyle} onClick={() => setTheme('dark')} />
      )}
    </>
  );
}
