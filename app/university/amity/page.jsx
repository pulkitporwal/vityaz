"use client"
import React, { useState } from 'react';
import { MapPin, Users, DollarSign, Award, BookOpen, Globe, GraduationCap, Building2, ChevronRight, Star, Download, ArrowLeft, Phone, Mail, Calendar, Clock, Share2, Bookmark, ArrowRight, Sparkles, Coffee, Menu } from 'lucide-react';

const UniversityDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const universityData = {
    name: "Amity University",
    location: "Multiple Locations",
    courses: ["Engineering", "Management", "Law"],
    ranking: "Top 20 in India",
    students: "95,000+",
    fees: "$9,000/year",
    image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
    country: "India",
    navigation: "amity",
    code: '/AMITY.pdf'
  };

  const overviewDetails = {
    highlights: [
      "29 campuses across India",
      "240+ academic programmes",
      "4,000+ expert faculty members",
      "95,000+ students globally",
      "ACBSP (USA) accredited programs",
      "Grade 'A' NAAC accreditation",
      "First Indian University as IET's Academic Partner"
    ],
    globalPresence: [
      "London, United Kingdom",
      "New York, United States",
      "Singapore",
      "San Francisco, United States",
      "Dubai, UAE",
      "Romania",
      "Taiwan",
      "Mauritius"
    ]
  };

  const courses = [
    { name: "Engineering & Technology", duration: "4 years", description: "Cutting-edge programs in various engineering disciplines with focus on innovation and research.", icon: Building2 },
    { name: "Management Studies", duration: "2 years", description: "ACBSP-accredited management programs with global business perspective and industry integration.", icon: GraduationCap },
    { name: "Applied Sciences", duration: "3-4 years", description: "Research-oriented programs in pure and applied sciences with state-of-the-art laboratories.", icon: Sparkles },
    { name: "Law", duration: "3-5 years", description: "Comprehensive legal education programs with focus on international and corporate law.", icon: Award },
    { name: "Communication", duration: "3-4 years", description: "Dynamic programs in journalism, media, and mass communication with modern media facilities.", icon: Globe },
    { name: "Healthcare", duration: "4-5 years", description: "Advanced programs in medical sciences, nursing, and healthcare management.", icon: Users }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      country: "UK",
      course: "MBA International Business",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "Amity's global exposure and industry connections have transformed my perspective on international business."
    },
    {
      name: "Ananya Patel",
      country: "India",
      course: "B.Tech Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      quote: "The world-class infrastructure and research opportunities at Amity have given me a strong foundation for my career in technology."
    }
  ];

  const facilities = [
    "World-class campus infrastructure",
    "Advanced research laboratories",
    "International faculty exchange programs",
    "Industry-integrated curriculum",
    "Global internship opportunities",
    "State-of-the-art libraries and resources"
  ];

  const tags = ["Top Ranked", "Global Recognition", "Research Excellence", "Industry Partnerships", "International Exposure", "Innovation Hub"];

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-red-50/30 via-transparent to-slate-50/50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-slate-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-red-600 via-slate-700 to-slate-800"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${universityData.image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>

        {/* Top Actions Bar */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 px-3 sm:px-4 md:px-6 z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
            <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-slate-800 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg font-medium text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 ${isSaved ? 'bg-red-600 text-white' : 'bg-white text-slate-800'} rounded-lg sm:rounded-xl hover:shadow-lg transition-all shadow-md font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base`}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                <span className="hidden md:inline">{isSaved ? 'Saved' : 'Save'}</span>
              </button>
              <button className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 bg-white text-slate-800 rounded-lg sm:rounded-xl hover:shadow-lg transition-all shadow-md font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Share2 className="w-4 h-4" />
                <span className="hidden md:inline">Share</span>
              </button>
              <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 bg-linear-to-r from-red-600 to-red-700 text-white rounded-lg sm:rounded-xl hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg font-semibold flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <span className="hidden xs:inline">Apply</span>
                <span className="xs:hidden">Apply</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white shadow-lg">
              {universityData.ranking}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              {universityData.name}
            </h1>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{universityData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{universityData.country}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{universityData.students}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>29 Campuses</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 lg:max-w-7xl mx-auto grid lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 -mt-12 sm:-mt-16 md:-mt-14">
        {/* Left / Main Content */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
          {/* Tab Navigation */}
          <div className="bg-white border border-gray-200 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl shadow-lg">
            <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
              {['overview', 'courses', 'testimonials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab
                      ? 'bg-linear-to-r from-red-600 to-red-700 text-white shadow-md'
                      : 'text-slate-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* About Section */}
              <div className="group bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-200 hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 text-slate-800">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-red-600 to-slate-700 rounded-full"></span>
                  About This University
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                  Amity University is a leading research and innovation-driven institution with a global presence. 
                  We offer world-class education across multiple disciplines with a focus on holistic development and industry readiness.
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-red-100 transition-all duration-300 cursor-pointer font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-slate-800">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-red-600 to-slate-700 rounded-full"></span>
                  Key Highlights
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {overviewDetails.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br from-red-600 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="grow">
                        <div className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300 font-medium text-sm sm:text-base">{highlight}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Presence */}
              <div className="bg-linear-to-br from-red-50 to-slate-50 border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-slate-800">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" />
                  Global Presence
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {overviewDetails.globalPresence.map((location, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 cursor-pointer group shadow-sm"
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1.5 sm:mb-2 text-red-600 group-hover:scale-110 transition-transform" />
                      <div className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{location}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-slate-800">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-red-600 to-slate-700 rounded-full"></span>
                  Academic Programs
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {courses.map((course, index) => {
                    const Icon = course.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-gray-50 border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br from-red-600 to-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="grow min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">{course.name}</h3>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-red-600 font-semibold text-xs sm:text-sm shrink-0">
                              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              <span>{course.duration}</span>
                            </div>
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-3 text-sm sm:text-base">{course.description}</p>
                          <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all text-xs sm:text-sm font-semibold shadow-md">
                            Learn More
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-slate-800">
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-red-600 to-slate-700 rounded-full"></span>
                  Student Success Stories
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-linear-to-br from-gray-50 to-red-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 sm:border-4 border-white shadow-md group-hover:scale-110 transition-transform"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 truncate">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 truncate">{testimonial.course}</p>
                          <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                            <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-600">{testimonial.country}</span>
                          </div>
                        </div>
                        <div className="hidden sm:flex gap-0.5 sm:gap-1 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 italic leading-relaxed text-sm sm:text-base">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Sticky */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:sticky lg:top-6 lg:self-start">
          {/* Pricing Card */}
          <div
            className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:border-red-200 transition-all duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="text-right text-gray-400 line-through text-xs sm:text-sm mb-1">
              $12,000/year
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-red-600 to-slate-700 bg-clip-text text-transparent">
              {universityData.fees}
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <div className="flex justify-between text-xs sm:text-sm mb-2">
                <span className="text-slate-600 font-medium">Scholarship Availability</span>
                <span className="font-semibold text-red-600">Limited Spots</span>
              </div>
              <div className="bg-gray-100 h-2.5 sm:h-3 rounded-full overflow-hidden border border-gray-200">
                <div
                  className="bg-linear-to-r from-red-600 to-slate-700 h-2.5 sm:h-3 rounded-full transition-all duration-1000"
                  style={{ width: isHovering ? '70%' : '65%' }}
                ></div>
              </div>
            </div>

            <button className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl mb-3 sm:mb-4 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="w-full bg-linear-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-bold py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Brochure</span>
            </button>
          </div>

          {/* What's Included */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-xl hover:border-red-200 transition-all duration-300">
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5 flex items-center gap-2 text-slate-800">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              What's Included
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-slate-700">
              {facilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 sm:gap-3 group cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-linear-to-r from-red-600 to-slate-700 mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform duration-300 shrink-0"></div>
                  <span className="group-hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-white border border-gray-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-xl hover:border-red-200 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-800">Need Help?</h3>
            <div className="space-y-2.5 sm:space-y-3">
              <button className="w-full flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg sm:rounded-xl hover:bg-red-100 transition-all font-semibold text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Us</span>
              </button>
              <button className="w-full flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg sm:rounded-xl hover:bg-slate-100 transition-all font-semibold text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default UniversityDetailPage;