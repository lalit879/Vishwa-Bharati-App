import React from "react";
import { FaClock, FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import AgendaCard from "./AgendaCard";
import staffGroupPhoto from "./Image/staffGroupPhoto.png";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

const InfoAgenda = () => {
  const agendaData = [
    {
      icon: FaClock,
      iconColor: "text-yellow-500",
      title: "Waktu Mulai",
      line1: "08:00 AM",
      line2: "2020-06-29",
    },
    {
      icon: FaFlag,
      iconColor: "text-blue-500",
      title: "Waktu Selesai",
      line1: "05:00 PM",
      line2: "2020-07-04",
    },
    {
      icon: FaMapMarkerAlt,
      iconColor: "text-blue-700",
      title: "Tempat",
      line1: "Gedung SMPN 1 Cibadak",
      line2: "",
    },
  ];

  return (
    <>
      <Banner />
      <div className="w-full text-gray-800">


        {/* Agenda Info Section */}
        <div className="bg-white py-12 px-6 md:px-20">
          <h3 className="text-center text-xl font-semibold mb-4">
            Info Agenda
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:p-20 md:gap-20 gap-10">
            {agendaData.map((item, idx) => (
              <AgendaCard
                key={idx}
                icon={item.icon}
                iconColor={item.iconColor}
                title={item.title}
                line1={item.line1}
                line2={item.line2}
              />
            ))}
          </div>
        </div>

        {/* Description and Image Section */}
        <div className="bg-[#29a7df] text-white px-6 py-10 xl:py-20 xl:px-32 flex flex-col md:flex-row xl:gap-40 gap-10 items-center">
          <div className="flex-1">
            <p className="xl:mb-12 mb-6">Assalamualaikum wrwb,</p>
            <p className="lg:leading-loose text-sm md:text-base text-justify">
              Diberitahukan dengan hormat, di tengah masih mewabahnya penyebaran
              Covid-19, semoga Bapak/Ibu dalam keadaan sehat walafiat.
              Selanjutnya, menindaklanjuti Surat Keputusan Bupati Sukabumi Nomor
              421/Kep.444/Disdik/2020 tentang Penerimaan Peserta Didik Baru pada
              Taman Kanak-kanak, Sekolah Dasar, dan Sekolah Menengah Pertama
              Tahun Pelajaran 2020/2021, maka perlu kami sampaikan bahwa
              Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2020/2021 di
              SMP Negeri 1 Cibadak dilaksanakan secara daring (online) melalui
              http://smpn1cibadak.sch.id/ppdb/ dengan jadwal seperti pada
              lampiran surat ini.
            </p>
            <button className="xl:mt-12 mt-6 bg-white text-[#29a7df] font-medium px-5 py-2 rounded-md hover:bg-blue-100 transition">
              Informasi lebih lanjut
            </button>
          </div>

          <div className="flex-shrink-0">
            <img
              src={staffGroupPhoto}
              alt="Staff Group"
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoAgenda;
