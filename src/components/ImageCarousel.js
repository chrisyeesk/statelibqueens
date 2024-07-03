import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import { ContentType1, ContentType2, ContentType3 } from './CarouselDesign';
import { Slides } from '../data/Slides';

const variants = {
  initial: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};


function ImageCarousel({ isDialogOpen, closeDialog }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setDirection(1);
        setIndex((prevIndex) =>
          prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  function togglePause() {
    setIsPaused(!isPaused);
  }

  function nextStep() {
    setDirection(1);
    setIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevStep() {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
    );
  }

  if (!isDialogOpen) {
    return null;
  }

  const renderContent = () => {
    const image = Slides[index];
    switch (image.type) {
      case 'contentType1':
        return <ContentType1 image={image} />;
      case 'contentType2':
        return <ContentType2 image={image} />;
      case 'contentType3':
        return <ContentType3 image={image} />;
      default:
        return null;
    }
  };
  function handleDotClick(dotIndex) {
    if (dotIndex !== index) {
      const direction = dotIndex > index ? 1 : -1;
      setDirection(direction);
      setIndex(dotIndex);
    }
  }
  
  function ProgressDots({ index, total, onDotClick }) {
    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {Array.from({ length: total }).map((d, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? ' bg-white' : 'bg-gray-400'
            }`}
            onClick={() => onDotClick(i)}
          ></div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="max-w-[1500px] fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11/12 sm:w-4/5 aspect-[16/12] sm:aspect-[16/7] overflow-hidden rounded-md shadow-xl">
      <button
        className="absolute top-2 right-2 z-30 p-2 text-xl rounded-full border-none cursor-pointer text-white bg-opacity-50 hover:bg-opacity-75"
        onClick={closeDialog}
      >
        <X size={21} strokeWidth={3} />
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full"
          key={Slides[index].src}
          custom={direction}
          onComplete={() => setDirection(0)}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
      <ProgressDots index={index} total={Slides.length} onDotClick={handleDotClick}/>
      <button
        className="hover:scale-125 duration-300 absolute top-1/2 -left-3 sm:-left-1 z-20 transform -translate-y-1/2 p-4 text-xl w-16 h-16 rounded-full border-none cursor-pointer text-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevStep}
      >
        <ChevronLeft size={24} strokeWidth={3} color="#878787" />
      </button>
      <button
        className="hover:scale-125 duration-300 absolute top-1/2 -right-4 sm:-right-3 z-20 transform -translate-y-1/2 p-4 text-xl w-16 h-16 rounded-full border-none cursor-pointer text-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextStep}
      >
        <ChevronRight size={24} strokeWidth={3} color="#878787" />
      </button>
      <button
        className="hover:scale-125 duration-300 absolute bottom-2 right-2 z-30 p-2 text-xl rounded-full border-none cursor-pointer text-white bg-opacity-50 hover:bg-opacity-75"
        onClick={togglePause}
      >
        {isPaused ? (
          <Play size={21} strokeWidth={3} />
        ) : (
          <Pause size={21} strokeWidth={3} />
        )}
      </button>
    </div>
  );
}

export default ImageCarousel;
