import React, { useEffect } from 'react';
import UserImg from "../assets/user.jpg";

const facultyMembers = [
  {
    name: "John Doe",
    title: "Principal",
    qualification: "M.Ed",
    experience: "20 years of experience in educational administration",
    image: UserImg
  },
  {
    name: "Jane Smith",
    title: "Vice Principal",
    qualification: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
    image: UserImg
  },
  {
    name: "Emily Johnson",
    title: "English Teacher",
    qualification: "M.A. in English",
    experience: "10 years of teaching experience",
    image: UserImg
  },
  {
    name: "Michael Brown",
    title: "Mathematics Teacher",
    qualification: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
    image: UserImg
  },
  {
    name: "Sophia Davis",
    title: "Science Teacher",
    qualification: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
    image: UserImg
  },
  {
    name: "David Wilson",
    title: "Computer Science Teacher",
    qualification: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
    image: UserImg
  }
];

const Faculty = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <main className="container mx-auto p-4">
            {/* Page Header Section */}
            <section aria-labelledby="faculty-header" className="my-12 text-center">
                <h2 id="faculty-header" className="text-4xl font-bold mb-6 text-gray-800 border-b-2 pb-2 border-gray-300">Our Faculty</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                    Meet our dedicated and experienced faculty members who are committed to providing the best education for our students.
                </p>
            </section>

            {/* Faculty Profiles Section */}
            <section aria-labelledby="faculty-profiles" className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyMembers.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" role="article" aria-labelledby={`faculty-member-${index}`}>
                        <img
                            src={member.image}
                            alt={`Photo of ${member.name}`}
                            className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md object-cover"
                            aria-labelledby={`faculty-member-${index}`}
                        />
                        <h3 id={`faculty-member-${index}`} className="text-2xl font-semibold text-gray-800 text-center">{member.name}</h3>
                        <h4 className="text-xl text-gray-600 text-center">{member.title}</h4>
                        <p className="text-center text-gray-700 mt-2">{member.qualification}</p>
                        <p className="text-center text-gray-600 mt-1">{member.experience}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Faculty;
