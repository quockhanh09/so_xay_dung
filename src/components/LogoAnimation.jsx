// LogoAnimation.jsx
import React, { useEffect, useRef } from 'react';
import logo from '../assets/img/logo-sxd.png';


const LogoAnimation = ({ onFinish }) => {
  const logoRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    // Lấy vị trí logo header
    const headerLogo = document.querySelector('.udi-header-logo');
    const logoImg = logoRef.current;
    const overlay = overlayRef.current;
    if (!headerLogo || !logoImg || !overlay) return;

    // Lấy toạ độ logo header (so với viewport)
    const headerRect = headerLogo.getBoundingClientRect();
    const startRect = logoImg.getBoundingClientRect();

    // Tính scale và translate
    const scale = headerRect.width / startRect.width;
    const translateX = headerRect.left + headerRect.width/2 - (startRect.left + startRect.width/2);
    const translateY = headerRect.top + headerRect.height/2 - (startRect.top + startRect.height/2);

    // Sau 1.2s, animate logo về header
    const timer1 = setTimeout(() => {
      logoImg.style.transition = 'transform 0.8s cubic-bezier(0.7,0.2,0.2,1), opacity 0.5s';
      logoImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      logoImg.style.opacity = '0.7';
      overlay.style.background = 'rgba(255,255,255,0)';
    }, 1200);

    // Sau 2s, gọi onFinish
    const timer2 = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div ref={overlayRef} className="logo-animation-overlay">
      <img ref={logoRef} src={logo} alt="UDI Logo" className="logo-animate" />
    </div>
  );
};

export default LogoAnimation;
