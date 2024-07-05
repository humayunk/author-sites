import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function HeaderSection() {
  const [isMounted, setIsMounted] = useState(false);
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Indicate that the component has mounted
    setIsMounted(true);

    if (isMounted) {
      const timeline = gsap.timeline();
      timeline.from(headerRef.current, { y: -50, opacity: 0, duration: 1, ease: 'power3.out' });
      timeline.from(textRef.current, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5');
    }
  }, [isMounted]);

  return (
    <div className="px-6 py-24 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 ref={headerRef} className="text-4xl font-bold text-stone-900 sm:text-5xl font-serif">
          Author Website Examples
        </h2>
        <p ref={textRef} className="mt-6 text-xl leading-8 text-stone-600 font-sans">
          Discover the best author websites and get ideas and inspiration for your own website.
        </p>
      </div>
    </div>
  );
}
