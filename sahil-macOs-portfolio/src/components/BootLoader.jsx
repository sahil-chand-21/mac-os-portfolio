import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import Icon from '@mdi/react';
import { mdiApple } from '@mdi/js';

const BootLoader = ({ onComplete }) => {
  const logoRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    // Icon fade-in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 0.9, scale: 1, duration: 2, ease: "power2.out" }
    )
      // Loader bar fill
      .fromTo(
        barRef.current,
        { width: "0%" },
        { width: "100%", duration: 3, ease: "power1.out" },
        "-=1"
      );
  }, [onComplete]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black">
      {/* Apple Icon */}
      <div ref={logoRef} className="mb-10">
        <Icon path={mdiApple} size={6} color="white" />
      </div>

      {/* Loader bar */}
      <div className="w-52 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div ref={barRef} className="h-full bg-white" />
      </div>
    </div>
  );
};

export default BootLoader;
