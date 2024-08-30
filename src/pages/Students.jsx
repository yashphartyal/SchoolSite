import React, { useEffect } from 'react';
import { FaMusic, FaTheaterMasks, FaPaintBrush, FaRunning, FaRobot, FaBook, FaTree, FaStar, FaUsers, FaCrown } from 'react-icons/fa';

const Students = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <main className="container mx-auto p-4">
            {/* Page Header Section */}
            <section aria-labelledby="life-at-springdale" className="my-12 text-center">
                <h2 id="life-at-springdale" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">Life at Springdale</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    Discover the vibrant and engaging life at Springdale Public School. Our students are encouraged to participate in a wide range of activities and clubs to explore their interests and talents.
                </p>
            </section>

            {/* Extracurricular Activities Section */}
            <section aria-labelledby="extracurricular-activities" className="my-12">
                <h3 id="extracurricular-activities" className="text-3xl font-semibold mb-6 text-center text-gray-700">Extracurricular Activities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Music", icon: <FaMusic className="text-6xl text-blue-500 mx-auto" aria-hidden="true" /> },
                        { name: "Drama", icon: <FaTheaterMasks className="text-6xl text-purple-500 mx-auto" aria-hidden="true" /> },
                        { name: "Art", icon: <FaPaintBrush className="text-6xl text-pink-500 mx-auto" aria-hidden="true" /> },
                        { name: "Sports", icon: <FaRunning className="text-6xl text-green-500 mx-auto" aria-hidden="true" /> },
                        { name: "Robotics", icon: <FaRobot className="text-6xl text-red-500 mx-auto" aria-hidden="true" /> },
                        { name: "Literary Society", icon: <FaBook className="text-6xl text-yellow-500 mx-auto" aria-hidden="true" /> },
                        { name: "Environmental Club", icon: <FaTree className="text-6xl text-green-700 mx-auto" aria-hidden="true" /> },
                    ].map((activity, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" role="figure" aria-labelledby={`activity-${index}`}>
                            {activity.icon}
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">{activity.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section aria-labelledby="achievements" className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 id="achievements" className="text-3xl font-semibold mb-6 text-center text-gray-700">Achievements and Accolades</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" role="figure" aria-labelledby="award-winning-debaters">
                        <FaStar className="text-6xl text-yellow-500 mx-auto" aria-hidden="true" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">Award-Winning Debaters</h4>
                        <p className="text-lg leading-relaxed text-gray-600 mt-2">
                            Our debate team has won multiple state and national level competitions.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" role="figure" aria-labelledby="science-fair-champions">
                        <FaStar className="text-6xl text-yellow-500 mx-auto" aria-hidden="true" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">Science Fair Champions</h4>
                        <p className="text-lg leading-relaxed text-gray-600 mt-2">
                            Students have achieved top honors in various science fairs and exhibitions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Student Leadership Section */}
            <section aria-labelledby="student-leadership" className="my-12">
                <h3 id="student-leadership" className="text-3xl font-semibold mb-6 text-center text-gray-700">Student Council and Leadership</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" role="figure" aria-labelledby="student-council">
                        <FaUsers className="text-6xl text-blue-500 mx-auto" aria-hidden="true" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">Student Council</h4>
                        <p className="text-lg leading-relaxed text-gray-600 mt-2">
                            Our student council plays a vital role in school governance and organizing events.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" role="figure" aria-labelledby="leadership-opportunities">
                        <FaCrown className="text-6xl text-purple-500 mx-auto" aria-hidden="true" />
                        <h4 className="text-xl font-semibold text-gray-800 mt-4">Leadership Opportunities</h4>
                        <p className="text-lg leading-relaxed text-gray-600 mt-2">
                            We provide various leadership opportunities to nurture future leaders.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Students;
