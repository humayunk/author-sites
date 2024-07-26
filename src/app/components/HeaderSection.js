import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// import SubscribeModal from './SubscribeModal';

export default function HeaderSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      const timeline = gsap.timeline();
      timeline.from(headerRef.current, { y: -50, opacity: 0, duration: 1, ease: 'power3.out' });
      timeline.from(textRef.current, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5');
      timeline.from(buttonRef.current, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5');
    }
  }, [isMounted]);

  return (
    <div className="px-6 py-16 sm:py-16 lg:px-8">
      <div className="container mx-auto p-4">
        <h2 ref={headerRef} className="text-4xl max-w-lg font-bold text-stone-900 sm:text-5xl font-serif">
          Handpicked author & book websites
        </h2>
        <p ref={textRef} className="mt-6 text-2xl leading-8 text-stone-600">

        </p>
        {/* Commented out subscribe button
        <button
          ref={buttonRef}
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 bg-rose-500 text-white text-lg rounded-full hover:bg-rose-600 transition-colors"
        >
          Subscribe
        </button>
        */}
      </div>
      {/* <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </div>
  );
}
