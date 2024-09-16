import React from "react";
import SingleFAQ from "../components/SingleFAQ";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FAQpage = () => {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/faq");
        if (!response.ok) {
          console.log(`Failed to fetch categories.`);
          return;
        }

        const result = await response.json();
        const faq = Array.isArray(result.data) ? result.data : [];
        setFaqData(faq);
        console.log("Fetched FAQs:", result);
      } catch (error) {
        console.log("Error fetching FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);
  const faqDeleteHandler = async (faqId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/faq/${faqId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        console.log(`Failed to delete faq.`);
        return;
      }
      setFaqData((prevFaqs) =>
        prevFaqs.filter((faq) => faq._id !== faqId)
      );
    } catch (error) {
      console.log("Error deleting category:", error);
    }
  };
  return (
    <div className="bg-gray-900 min-h-[100vh] flex flex-col p-4">
        <Link to="/addFaq">
        <button className="border-green-700 border-2 rounded-lg py-1 px-4 bg-green-800 text-white font-bold">
          Add FAQ
        </button>
        </Link>
      {faqData &&
        faqData.map((faq) => {
          return (
            <SingleFAQ
              key={faq._id}
              title={faq.title}
              description={faq.description}
              faqDeleteHandler={()=>{faqDeleteHandler(faq._id);}}
            />
          );
        })}
    </div>
  );
};

export default FAQpage;
