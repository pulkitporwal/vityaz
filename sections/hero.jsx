"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const Slide1 = () => (
  <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 text-gray-900 overflow-hidden">
    <img
      src="/slider1.jpg"
      alt="Study in India"
      className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/60 to-transparent"></div>

    <div className="relative top-20 md:top-0 z-10 max-w-2xl text-center lg:text-left space-y-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white">
        <span className="text-red-500">#Your</span>{" "}
        <span>PathTo</span>{" "}
        <span className="text-slate-400">StudyingInIndia</span>
      </h1>

      <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
        India is home to top-ranked universities like IITs, IIMs, AIIMS, and NITs,
        known globally for excellence in engineering, business, and medicine.
        Tuition fees and living costs are much lower than in Western countries —
        offering affordable, high-quality education.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <button className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          <GraduationCap size={20} />
          Apply Now
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          <PhoneCall size={20} />
          Free Counselling
        </button>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="relative w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-20 py-10 text-gray-900 overflow-hidden">
    <img
      src="/slider2.jpg"
      alt="Career-Oriented Courses"
      className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90"
    />
    <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/60 to-transparent"></div>

    <div className="relative top-20 md:top-0 z-10 max-w-2xl text-center lg:text-right space-y-5">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white">
        Career-<span className="text-slate-400">Oriented</span> Courses
      </h1>

      <div className="hidden lg:block h-1 w-24 bg-slate-500 ml-auto"></div>

      <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
        From AI, Data Science, Cyber Security, Law, Management, and Finance to
        Pharmacy and Optometry — Indian universities offer cutting-edge courses
        aligned with global industries. All courses are taught in English for easy learning.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
        <button className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          <GraduationCap size={20} />
          Apply Now
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          <PhoneCall size={20} />
          Free Counselling
        </button>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const slides = [Slide1, Slide2];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-[80vh] sm:h-screen  bg-[#1d1d1d] overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 sm:w-12 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 right-4 bg-white/25 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white transition-all duration-300 z-20"
        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
      >
        {isAutoPlaying ? (
          <Pause size={18} className="sm:w-5 sm:h-5" />
        ) : (
          <Play size={18} className="sm:w-5 sm:h-5" />
        )}
      </button>
    </div>
  );
};

export default HeroSection;
