"use client"
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Users, DollarSign, Award, BookOpen, Filter, X } from 'lucide-react';

const UniversitiesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const universities = [
        {
            name: "Parul University",
            location: "Vadodara, India",
            courses: ["Engineering", "Pharmacy", "Architecture"],
            ranking: "Top 50 in India",
            students: "15,000+",
            fees: "$5,000/year",
            image: "https://paruluniversity.ac.in/app/images/post/blog/featured_image/190307Gate%20Picture.jpg",
            country: "India",
            navigation: "parul",
            code: '/PARUL.pdf'
        },

        {
            name: "DIT University",
            location: "Dehradun, India",
            courses: ["Engineering", "Architecture", "Management"],
            ranking: "Top 40 in India",
            students: "7,000+",
            fees: "$7,000/year",
            image: "https://www.dituniversity.edu.in/uploads/album/1697633898_a50fb86d864091b23666.webp",
            country: "India",
            navigation: "dit",
            code: '/DIT_D.pdf'
        },
        {
            name: "Amity University ",
            location: "Multiple Locations",
            courses: ["Engineering", "Management", "Law"],
            ranking: "Top 20 in India",
            students: "20,000+",
            fees: "$9,000/year",
            image: "https://amity.edu/asb/globuss2019/assets/images/about-amity.jpg",
            country: "India",
            navigation: "amity",
            code: '/AMITY.pdf'
        },
        {
            name: "Lovely Professional University (LPU)",
            location: "Punjab, India",
            courses: ["Engineering", "Management", "Pharmacy"],
            ranking: "Top 35 in India",
            students: "30,000+",
            fees: "$6,500/year",
            image: "https://distanceeducation360.com/wp-content/uploads/2017/05/Lovely-Professional-University.jpg",
            country: "India",
            navigation: "lpu",
            code: '/LPU.pdf'
        },
        {
            name: "Chandigarh University",
            location: "Chandigarh, India",
            courses: ["Engineering", "Management", "Law"],
            ranking: "Top 50 in India",
            students: "22,000+",
            fees: "$7,500/year",
            image: "https://www.learningroutes.in/_next/image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchandigarh-university%2Fhero-image%2Fchandigarhuniversitybanner.webp&w=1200&q=75",
            country: "India",
            navigation: "CU",
            code: '/CU.pdf'
        },
        {
            name: "Bennet University",
            location: "Greater Noida, India",
            courses: ["Engineering", "Management", "Law"],
            ranking: "Top 30 in India",
            students: "6,000+",
            fees: "$7,000/year",
            image: "https://www.mycampusreview.com/assest/front/images/fb/bennut.jpg",
            country: "India",
            navigation: "bennett",
            code: '/BANNET.pdf'
        },
        {
            name: "Symboisis International",
            location: "Ghaziabad, India",
            courses: ["Engineering", "Management", "Law"],
            ranking: "Top 50 in India",
            students: "22,000+",
            fees: "$7,500/year",
            image: "https://www.symbiosis.ac.in/images/about-us/Symbiosis-International-University.jpg",
            country: "India",
            navigation: "Symboisis",
            code: '/SYMBOISIS.pdf'
        },
        {
            name: "SRM University",
            location: "Multiple Locations",
            courses: ["Engineering", "Management", "Law"],
            ranking: "Top 50 in India",
            students: "22,000+",
            fees: "$7,500/year",
            image: "https://mdmsenquiry.com/wp-content/uploads/2017/09/srm-university.jpg",
            country: "India",
            navigation: "SRM",
            code: '/SRMIST.pdf'
        },
    ];

    // Extract unique countries and courses for filters
    const countries = useMemo(() => {
        const countrySet = new Set(universities.map(uni => uni.country));
        return ['all', ...Array.from(countrySet)];
    }, []);

    const courses = useMemo(() => {
        const courseSet = new Set();
        universities.forEach(uni => uni.courses.forEach(course => courseSet.add(course)));
        return ['all', ...Array.from(courseSet)];
    }, []);

    // Filter universities based on search and filters
    const filteredUniversities = useMemo(() => {
        return universities.filter(uni => {
            const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                uni.courses.some(course => course.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCountry = selectedCountry === 'all' || uni.country === selectedCountry;
            const matchesCourse = selectedCourse === 'all' || uni.courses.includes(selectedCourse);

            return matchesSearch && matchesCountry && matchesCourse;
        });
    }, [searchQuery, selectedCountry, selectedCourse]);

    return (
        <div className="w-full min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
            {/* Hero Section */}
            <div
                className="w-full rounded-b-[4vw] h-[50vh] relative overflow-hidden"
                style={{
                    backgroundImage: "url('/indian-culture-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 flex flex-col justify-center items-center px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 text-center">
                        Discover Your Future
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl text-center max-w-2xl">
                        Explore world-class universities and find the perfect fit for your academic journey
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search universities, locations, or courses..."
                                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors"
                        >
                            <Filter className="w-5 h-5" />
                            Filters
                        </button>
                    </div>

                    {/* Filter Options */}
                    {showFilters && (
                        <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Country
                                </label>
                                <select
                                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                >
                                    {countries.map(country => (
                                        <option key={country} value={country}>
                                            {country === 'all' ? 'All Countries' : country}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Course
                                </label>
                                <select
                                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                                    value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                >
                                    {courses.map(course => (
                                        <option key={course} value={course}>
                                            {course === 'all' ? 'All Courses' : course}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Active Filters Display */}
                    {(selectedCountry !== 'all' || selectedCourse !== 'all') && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {selectedCountry !== 'all' && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                    {selectedCountry}
                                    <X
                                        className="w-4 h-4 cursor-pointer hover:text-blue-900"
                                        onClick={() => setSelectedCountry('all')}
                                    />
                                </span>
                            )}
                            {selectedCourse !== 'all' && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                    {selectedCourse}
                                    <X
                                        className="w-4 h-4 cursor-pointer hover:text-green-900"
                                        onClick={() => setSelectedCourse('all')}
                                    />
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-slate-600 text-lg">
                        Found <span className="font-bold text-slate-900">{filteredUniversities.length}</span> {filteredUniversities.length === 1 ? 'university' : 'universities'}
                    </p>
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    {filteredUniversities.map((uni, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* University Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                                    <span className="text-sm font-semibold text-slate-700">{uni.country}</span>
                                </div>
                            </div>

                            {/* University Details */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{uni.name}</h3>

                                <div className="flex items-center gap-2 text-slate-600 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{uni.location}</span>
                                </div>

                                {/* Info Grid */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Award className="w-4 h-4 text-amber-500" />
                                        <span className="text-slate-700">{uni.ranking}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span className="text-slate-700">{uni.students} students</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <DollarSign className="w-4 h-4 text-green-500" />
                                        <span className="text-slate-700">{uni.fees}</span>
                                    </div>
                                </div>

                                {/* Courses */}
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <BookOpen className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-semibold text-slate-700">Courses Offered:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {uni.courses.map((course, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className="w-full py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredUniversities.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-2">No universities found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UniversitiesPage;