import React, { useState, useEffect, useRef } from "react";
import InfoCard from "./InfoCard";

const InfoGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  const info = [
    {
      title: "School Establishment",
      subtitle: "ESTD",
      value: "2001",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.75585"
            y="19.593"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="8.65723"
            y="21.3916"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="8.65723"
            y="28.1919"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <mask id="path-4-inside-1_156_754" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            fill="white"
          />
          <path
            d="M19.6092 9.80731L20.2028 10.3642V10.3642L19.6092 9.80731ZM20.3385 9.80731L19.7449 10.3642V10.3642L20.3385 9.80731ZM12.4869 17.3988L11.8933 16.8419H11.8933L12.4869 17.3988ZM14.2761 18.2409H15.0901V17.4269H14.2761V18.2409ZM14.2761 33.8374H13.4622V34.6513H14.2761V33.8374ZM25.6715 33.8374V34.6513H26.4855V33.8374H25.6715ZM25.6715 18.2409V17.4269H24.8576V18.2409H25.6715ZM27.4607 17.3988L26.8671 17.9557L26.8671 17.9557L27.4607 17.3988ZM20.2028 10.3642C20.0788 10.4964 19.8689 10.4964 19.7449 10.3642L20.9321 9.25039C20.413 8.69715 19.5346 8.69715 19.0156 9.25039L20.2028 10.3642ZM13.0805 17.9557L20.2028 10.3642L19.0156 9.25039L11.8933 16.8419L13.0805 17.9557ZM12.8516 17.4269C13.1265 17.4269 13.2686 17.7552 13.0805 17.9557L11.8933 16.8419C11.1061 17.6809 11.7011 19.0548 12.8516 19.0548V17.4269ZM14.2761 17.4269H12.8516V19.0548H14.2761V17.4269ZM15.0901 33.8374V18.2409H13.4622V33.8374H15.0901ZM25.6715 33.0234H14.2761V34.6513H25.6715V33.0234ZM24.8576 18.2409V33.8374H26.4855V18.2409H24.8576ZM27.0961 17.4269H25.6715V19.0548H27.0961V17.4269ZM26.8671 17.9557C26.6791 17.7552 26.8212 17.4269 27.0961 17.4269V19.0548C28.2466 19.0548 28.8415 17.6809 28.0543 16.8419L26.8671 17.9557ZM19.7449 10.3642L26.8671 17.9557L28.0543 16.8419L20.9321 9.25039L19.7449 10.3642Z"
            fill="#F8C301"
            mask="url(#path-4-inside-1_156_754)"
          />
          <circle
            cx="20.0001"
            cy="17.5581"
            r="2.03488"
            stroke="#60C1F8"
            strokeWidth="0.813954"
          />
          <rect
            x="25.2908"
            y="19.5405"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="28.1921"
            y="21.3391"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="28.1921"
            y="28.1396"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="17.2443"
            y="24.5698"
            width="5.51163"
            height="7.95349"
            stroke="#60C1F8"
          />
          <rect
            x="17.1512"
            y="22.0349"
            width="5.69767"
            height="0.813953"
            stroke="#60C1F8"
            strokeWidth="0.813953"
          />
          <path
            d="M21.9956 6.80613L20.0657 7.36323V6.24903L21.9956 6.80613Z"
            fill="#FFBF00"
          />
          <rect
            x="19.79"
            y="6.16284"
            width="0.367593"
            height="3.49213"
            rx="0.183796"
            fill="#0C101A"
          />
        </svg>
      ),
    },
    {
      title: "School Statistics",
      subtitle: "School ID",
      value: "200080",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.01123 21.5715L14.4974 16.7889L21.4243 21.0125L30.5112 13.7144"
            stroke="#60C1F8"
            strokeWidth="1.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.06702 8V33H33.067"
            stroke="#60C1F8"
            strokeWidth="2.14286"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="12.654"
            y="22.6428"
            width="3.57143"
            height="8.57143"
            rx="1.78571"
            stroke="#F8C301"
            strokeWidth="0.714286"
          />
          <rect
            x="19.797"
            y="24.7856"
            width="3.57143"
            height="6.42857"
            rx="1.78571"
            stroke="#F8C301"
            strokeWidth="0.714286"
          />
          <rect
            x="26.9398"
            y="19.7856"
            width="3.57143"
            height="11.4286"
            rx="1.78571"
            stroke="#F8C301"
            strokeWidth="0.714286"
          />
        </svg>
      ),
    },
    {
      title: "Land & Building Ownership",
      value: "A",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="11.6799"
            width="19.24"
            height="17.32"
            rx="2.6"
            stroke="#60C1F8"
            strokeWidth="2"
          />
          <rect
            x="24"
            y="24"
            width="3"
            height="3"
            rx="0.6"
            stroke="#F8C301"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <rect
            x="13.8"
            y="9"
            width="1.8"
            height="4.56"
            rx="0.9"
            fill="#F8C301"
          />
          <rect
            x="9"
            y="20"
            width="3"
            height="21"
            rx="1.5"
            transform="rotate(-90 9 20)"
            fill="#60C1F8"
          />
          <rect
            x="23.64"
            y="9"
            width="1.8"
            height="4.56"
            rx="0.9"
            fill="#F8C301"
          />
        </svg>
      ),
    },
    {
      title: "Building & Facilities",
      value: "-",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="11.6799"
            width="19.24"
            height="17.32"
            rx="2.6"
            stroke="#60C1F8"
            strokeWidth="2"
          />
          <path
            d="M17 16.8149L18.0185 19.0556L22.5 14.7778"
            stroke="#F8C301"
            strokeWidth="1.22222"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="13"
            y="23"
            width="1"
            height="13"
            rx="0.5"
            transform="rotate(-90 13 23)"
            fill="#F8C301"
          />
          <rect
            x="13"
            y="26"
            width="1"
            height="13"
            rx="0.5"
            transform="rotate(-90 13 26)"
            fill="#F8C301"
          />
        </svg>
      ),
    },
    {
      title: "Total Building Area",
      value: "5 Acre",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.75585"
            y="19.593"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="8.65723"
            y="21.3916"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="8.65723"
            y="28.1919"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <mask id="path-4-inside-1_156_827" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            fill="white"
          />
          <path
            d="M19.6092 9.80731L20.2028 10.3642V10.3642L19.6092 9.80731ZM20.3385 9.80731L19.7449 10.3642V10.3642L20.3385 9.80731ZM12.4869 17.3988L11.8933 16.8419H11.8933L12.4869 17.3988ZM14.2761 18.2409H15.0901V17.4269H14.2761V18.2409ZM14.2761 33.8374H13.4622V34.6513H14.2761V33.8374ZM25.6715 33.8374V34.6513H26.4855V33.8374H25.6715ZM25.6715 18.2409V17.4269H24.8576V18.2409H25.6715ZM27.4607 17.3988L26.8671 17.9557L26.8671 17.9557L27.4607 17.3988ZM20.2028 10.3642C20.0788 10.4964 19.8689 10.4964 19.7449 10.3642L20.9321 9.25039C20.413 8.69715 19.5346 8.69715 19.0156 9.25039L20.2028 10.3642ZM13.0805 17.9557L20.2028 10.3642L19.0156 9.25039L11.8933 16.8419L13.0805 17.9557ZM12.8516 17.4269C13.1265 17.4269 13.2686 17.7552 13.0805 17.9557L11.8933 16.8419C11.1061 17.6809 11.7011 19.0548 12.8516 19.0548V17.4269ZM14.2761 17.4269H12.8516V19.0548H14.2761V17.4269ZM15.0901 33.8374V18.2409H13.4622V33.8374H15.0901ZM25.6715 33.0234H14.2761V34.6513H25.6715V33.0234ZM24.8576 18.2409V33.8374H26.4855V18.2409H24.8576ZM27.0961 17.4269H25.6715V19.0548H27.0961V17.4269ZM26.8671 17.9557C26.6791 17.7552 26.8212 17.4269 27.0961 17.4269V19.0548C28.2466 19.0548 28.8415 17.6809 28.0543 16.8419L26.8671 17.9557ZM19.7449 10.3642L26.8671 17.9557L28.0543 16.8419L20.9321 9.25039L19.7449 10.3642Z"
            fill="#F8C301"
            mask="url(#path-4-inside-1_156_827)"
          />
          <circle
            cx="20.0001"
            cy="17.5581"
            r="2.03488"
            stroke="#60C1F8"
            strokeWidth="0.813954"
          />
          <rect
            x="25.2908"
            y="19.5405"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="28.1921"
            y="21.3391"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="28.1921"
            y="28.1396"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="17.2443"
            y="24.5698"
            width="5.51163"
            height="7.95349"
            stroke="#60C1F8"
          />
          <rect
            x="17.1512"
            y="22.0349"
            width="5.69767"
            height="0.813953"
            stroke="#60C1F8"
            strokeWidth="0.813953"
          />
          <path
            d="M21.9956 6.80613L20.0657 7.36323V6.24903L21.9956 6.80613Z"
            fill="#FFBF00"
          />
          <rect
            x="19.79"
            y="6.16284"
            width="0.367593"
            height="3.49213"
            rx="0.183796"
            fill="#0C101A"
          />
        </svg>
      ),
    },
    {
      title: "Infrastructure & Facilities",
      value: "-",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.75585"
            y="19.593"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="8.65723"
            y="21.3916"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="8.65723"
            y="28.1919"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <mask id="path-4-inside-1_156_827" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3385 9.80731C20.141 9.59678 19.8067 9.59678 19.6092 9.80731L12.4869 17.3988C12.1874 17.7181 12.4138 18.2409 12.8516 18.2409H14.2761V33.8374H25.6715V18.2409H27.0961C27.5339 18.2409 27.7603 17.7181 27.4607 17.3988L20.3385 9.80731Z"
            fill="white"
          />
          <path
            d="M19.6092 9.80731L20.2028 10.3642V10.3642L19.6092 9.80731ZM20.3385 9.80731L19.7449 10.3642V10.3642L20.3385 9.80731ZM12.4869 17.3988L11.8933 16.8419H11.8933L12.4869 17.3988ZM14.2761 18.2409H15.0901V17.4269H14.2761V18.2409ZM14.2761 33.8374H13.4622V34.6513H14.2761V33.8374ZM25.6715 33.8374V34.6513H26.4855V33.8374H25.6715ZM25.6715 18.2409V17.4269H24.8576V18.2409H25.6715ZM27.4607 17.3988L26.8671 17.9557L26.8671 17.9557L27.4607 17.3988ZM20.2028 10.3642C20.0788 10.4964 19.8689 10.4964 19.7449 10.3642L20.9321 9.25039C20.413 8.69715 19.5346 8.69715 19.0156 9.25039L20.2028 10.3642ZM13.0805 17.9557L20.2028 10.3642L19.0156 9.25039L11.8933 16.8419L13.0805 17.9557ZM12.8516 17.4269C13.1265 17.4269 13.2686 17.7552 13.0805 17.9557L11.8933 16.8419C11.1061 17.6809 11.7011 19.0548 12.8516 19.0548V17.4269ZM14.2761 17.4269H12.8516V19.0548H14.2761V17.4269ZM15.0901 33.8374V18.2409H13.4622V33.8374H15.0901ZM25.6715 33.0234H14.2761V34.6513H25.6715V33.0234ZM24.8576 18.2409V33.8374H26.4855V18.2409H24.8576ZM27.0961 17.4269H25.6715V19.0548H27.0961V17.4269ZM26.8671 17.9557C26.6791 17.7552 26.8212 17.4269 27.0961 17.4269V19.0548C28.2466 19.0548 28.8415 17.6809 28.0543 16.8419L26.8671 17.9557ZM19.7449 10.3642L26.8671 17.9557L28.0543 16.8419L20.9321 9.25039L19.7449 10.3642Z"
            fill="#F8C301"
            mask="url(#path-4-inside-1_156_827)"
          />
          <circle
            cx="20.0001"
            cy="17.5581"
            r="2.03488"
            stroke="#60C1F8"
            strokeWidth="0.813954"
          />
          <rect
            x="25.2908"
            y="19.5405"
            width="9.11105"
            height="13.8898"
            stroke="#F8C301"
            strokeWidth="0.813954"
          />
          <rect
            x="28.1921"
            y="21.3391"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="28.1921"
            y="28.1396"
            width="3.30834"
            height="3.30834"
            fill="#60C1F8"
          />
          <rect
            x="17.2443"
            y="24.5698"
            width="5.51163"
            height="7.95349"
            stroke="#60C1F8"
          />
          <rect
            x="17.1512"
            y="22.0349"
            width="5.69767"
            height="0.813953"
            stroke="#60C1F8"
            strokeWidth="0.813953"
          />
          <path
            d="M21.9956 6.80613L20.0657 7.36323V6.24903L21.9956 6.80613Z"
            fill="#FFBF00"
          />
          <rect
            x="19.79"
            y="6.16284"
            width="0.367593"
            height="3.49213"
            rx="0.183796"
            fill="#0C101A"
          />
        </svg>
      ),
    },
  ];

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 my-5 gap-y-10 gap-5 w-full md:w-2/3">
      {info.map((item, index) => (
        <InfoCard key={index} {...item} isVisible={isVisible} index={index} />
      ))}
    </div>
  );
};

export default InfoGrid;
