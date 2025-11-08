"use client";
import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage || 0);
    }
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center bg-linear-to-br from-[#f0f7ff] to-[#e7f5ff] px-6 py-10 rounded-3xl shadow-sm">
    
      <p className="text-sm text-slate-700 font-medium uppercase tracking-wide mb-3 text-center">
        Your Trusted Partner for Studying in India
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 leading-snug max-w-3xl">
        Fulfill Your Dream of Studying in India with Expert Guidance & 24/7 Support
      </h1>

      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg mb-6 group">
        <video
          ref={videoRef}
          src="/videosection.mp4"
          className="w-full h-auto rounded-2xl"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              <Play className="w-8 h-8 text-slate-700" />
            </div>
          </button>
        )}

        <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md text-white flex items-center justify-between px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={togglePlay} className="hover:scale-110 transition">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>

          <div
            className="flex-1 h-2 mx-4 bg-white/30 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-2 bg-slate-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button onClick={toggleMute} className="hover:scale-110 transition">
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <p className="text-gray-700 text-center max-w-2xl mb-8">
        From <strong>application to graduation</strong>, we provide end-to-end
        assistance — admission, visa, travel, and on-campus support — to make
        your academic journey in India smooth and successful.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-slate-700 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition">
          Start Your Journey
        </button>
        <button className="border border-gray-300 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Explore Our Services
        </button>
      </div>
    </section>
  );
}
