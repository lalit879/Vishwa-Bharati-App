import React from "react";
import NewsCard from "./NewsCard";
import FeaturedNews from "./FeaturedNews";
import RecentPostTags from "./RecentPostTags";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

import news1 from "./NewsImage/news1.png";
import news2 from "./NewsImage/news2.png";
import news3 from "./NewsImage/news3.png";
import news4 from "./NewsImage/news4.png";
import news5 from "./NewsImage/news5.png";

const dummyNews = [
  {
    image: news1,
    title: "Kegiatan Belajar Mengajar di Rumah 2020",
    description:
      "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem",
  },
  {
    image: news2,
    title: "Kegiatan Belajar Mengajar di Rumah",
    description:
      "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem",
  },
  {
    image: news3,
    title: "Belajar dirumah",
    description:
      "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem",
  },
  {
    image: news4,
    title: "Kegiatan Pembelajaran daring",
    description:
      "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem",
  },
];

const NewsPage = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Berita Baru</h1>
          <a href="#" className="text-blue-600 font-medium">
            See all
          </a>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyNews.slice(0, 3).map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* Featured News */}
        <FeaturedNews
          image={news5}
          title="Kegiatan Belajar Mengajar dirumah"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lobortis lorem. Quisque mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh."
        />

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {dummyNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* Recent Posts */}
        <div className="mt-12">
          <h2 className="text-lg font-bold mb-4">Recent Post</h2>
          <div className="flex flex-wrap gap-3">
            <RecentPostTags label="Belajar di rumah" />
            <RecentPostTags label="Belajar Sehari di Luar di Kelas SMPN 1 Cibadak" />
            <RecentPostTags label="Kegiatan Belajar mengajar di rumah" />
            <RecentPostTags label="Kegiatan Belajar Mengajar di Rumah 2020" />
            <RecentPostTags label="Kegiatan Belajar Mengajar di Rumah 2020" />
            <RecentPostTags label="Kegiatan Belajar Mengajar di Rumah 2020" />
            <RecentPostTags label="Kegiatan Belajar Mengajar di Rumah 2020" />
            <RecentPostTags label="Kegiatan Belajar Mengajar di Rumah 2020" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
