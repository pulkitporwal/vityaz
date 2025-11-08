"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, PhoneCall, Download, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"


const Slide1 = () => (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-12 text-gray-900 overflow-hidden">
        <Image
            src="/slider1.jpg"
            alt="Study in India"
            fill
            className="object-cover opacity-40 brightness-90"
            priority
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-xl space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight text-white">
                <span className="text-red-500">#Your</span>
                <span>PathTo</span>
                <span className="text-slate-500">StudyingInIndia</span>
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed">
                India is home to top-ranked universities like IITs, IIMs, AIIMS, and
                NITs, recognized globally for excellence in engineering, business, and
                medicine. Compared to Western countries, tuition fees and living costs
                are significantly lower, making it an affordable yet high-quality
                education option.
            </p>

            <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <GraduationCap size={20} />
                    Apply Now
                </button>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <PhoneCall size={20} />
                    Free Counselling
                </button>
            </div>
        </div>
    </div>
)

const Slide2 = () => (
    <div className="relative w-full h-full flex flex-col lg:flex-row-reverse items-center justify-between px-8 lg:px-24 py-12 text-gray-900 overflow-hidden">
        <Image
            src="/slider2.jpg"
            alt="Career-Oriented Courses"
            fill
            className="object-cover opacity-40 brightness-90"
            priority
        />

        <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/60 to-transparent"></div>

        <div className="relative z-10 max-w-2xl space-y-6 text-right">
            <h1 className="text-5xl font-extrabold leading-tight text-white">
                Career-
                <span className="text-slate-500">Oriented</span> Courses
            </h1>

            <div className="h-1 w-24 bg-slate-500 ml-auto"></div>

            <p className="text-gray-200 text-lg leading-relaxed">
                From AI, data science, cyber security, engineering, Bio Medical courses,
                Law, Management, Finance, Science, Pharmacy, Optometry, etc — Indian
                universities offer cutting-edge courses aligned with modern industries.
                All universities use English as the primary language, ensuring ease of
                learning and communication.
            </p>

            <div className="flex flex-wrap justify-end gap-4">
                <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <GraduationCap size={20} />
                    Apply Now
                </button>
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    <PhoneCall size={20} />
                    Free Counselling
                </button>
            </div>
        </div>
    </div>
)



const HeroSection = () => {
    const slides = [Slide1, Slide2]
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, slides.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlaying(false)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAutoPlaying(false)
    }

    const CurrentSlideComponent = slides[currentSlide]

    return (
        <div className="relative w-full bg-[#1d1d1d] h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <CurrentSlideComponent />
                </motion.div>
            </AnimatePresence>

            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                            ? "w-12 h-3 bg-white"
                            : "w-3 h-3 bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-4 right-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm transition-all duration-300"
            >
                {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
        </div>
    )
}

export default HeroSection
