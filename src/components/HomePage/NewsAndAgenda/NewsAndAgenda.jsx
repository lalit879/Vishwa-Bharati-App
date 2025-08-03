// pages/NewsAndAgenda.jsx
import React from "react";
import NewsCard from "./NewsCard";
import AgendaItem from "./AgendaItem";
import { Link } from "react-router-dom";

// Sample Images
import img1 from "@assets/HomePage/NewsAndAgenda/news1.png";
import img2 from "@assets/HomePage/NewsAndAgenda/news2.png";
import img3 from "@assets/HomePage/NewsAndAgenda/news3.png";
import img4 from "@assets/HomePage/NewsAndAgenda/news4.png";
import agenda1 from "@assets/HomePage/NewsAndAgenda/agenda1.png";
import agenda2 from "@assets/HomePage/NewsAndAgenda/agenda2.png";
import agenda3 from "@assets/HomePage/NewsAndAgenda/agenda3.png";

const NewsAndAgenda = () => {
  const newsItems = [
    {
      image: img1,
      title: "Learning at Home",
      description:
        "Lorem ipsum dolor sit amet adipiscing amet adipcingamet adipci aqua lorem ipsum.",
      date: "20 June",
    },
    {
      image: img2,
      title: "Teaching and Learning Activities at Home",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 June",
    },
    {
      image: img3,
      title: "Teaching and Learning Activities at Home",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 June",
    },
    {
      image: img4,
      title: "Online Learning Activities",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 June",
    },
  ];

  const agendaItems = [
    {
      image: agenda1,
      date: "01 - 06 - 2021",
      title: "Child-Friendly School Declaration",
    },
    {
      image: agenda2,
      date: "01 - 06 - 2021",
      title: "Diploma Distribution / Certificate Awarding",
    },
    {
      image: agenda3,
      date: "01 - 06 - 2021",
      title: "New Student Admission",
    },
  ];

  return (
    <>
      <section id="news" className="py-12 px-6 lg:px-20 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          News and Agenda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left: News */}
          <div className="xl:mr-20 2xl:mr-32 md:col-span-3 space-y-2">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          {/* Right: Agenda */}
          <div className="md:col-span-2 space-y-2">
            {agendaItems.map((item, index) => (
              <AgendaItem key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/news">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
              More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NewsAndAgenda;
