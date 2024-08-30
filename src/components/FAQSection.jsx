import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I apply for admission?",
      answer: "You can apply by downloading the admission form from our website and submitting it along with the required documents at the school office."
    },
    {
      question: "What are the admission requirements?",
      answer: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
    },
    {
      question: "What extracurricular activities are offered?",
      answer: "We offer a range of extracurricular activities including sports, music, dance, drama, and various clubs and societies."
    },
    {
      question: "What are the school timings?",
      answer: "The school operates from 8:00 AM to 3:00 PM from Monday to Friday, and 9:00 AM to 1:00 PM on Saturdays."
    },
    {
      question: "Is transportation available?",
      answer: "Yes, we provide transportation facilities for students. For more details, please contact the school office."
    },
    {
      question: "What is the fee structure?",
      answer: "The fee structure varies by grade and can be obtained from the school office or the school website."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, scholarships are available for meritorious students. Please contact the school office for more details."
    },
    {
      question: "Does the school offer after-school programs?",
      answer: "Yes, we offer a variety of after-school programs including tutoring, sports, and arts."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-10">
      <div className="mx-auto bg-white rounded-xl shadow-md">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left px-4 py-2 flex justify-between items-center text-lg font-medium shadow-md border border-gray-200 rounded-md focus:outline-none"
            >
              {faq.question}
              <span>
                {openIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
