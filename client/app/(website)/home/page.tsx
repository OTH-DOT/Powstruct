"use client";

import Image from "next/image";
import { Flame, Gem, Smile, Star, ChevronLeft, ChevronRight, Triangle } from "lucide-react";
import { useState, useRef } from "react";

export default function HomePage() {
  // Products data
  const products = [
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product_img.jpg",
    },
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product2_img.jpg",
    },
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product3_img.jpg",
    },
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product_img.jpg",
    },
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product_img.jpg",
    },
    {
      title: "Cheminées à Foyer Ouvert",
      img: "/product_img.jpg",
    },
  ];

  // Services data
  const services = [
    {
      title: "Service 1",
      desc: "Description du service 1",
      img: "/service_img.jpg",
    },
    {
      title: "Service 2",
      desc: "Description du service 2",
      img: "/service_img.jpg",
    },
    {
      title: "Service 3",
      desc: "Description du service 3",
      img: "/service_img.jpg",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Nom",
      surname: "Prenom",
      occupation: "Occupation",
      text: "Chez Powstruct, nous ne faisons aucun compromis sur la qualité. Chacune de nos cheminées, inserts et poêles est fabriquée avec soin, en mettant l'accent sur les détails, l'esthétique et la durabilité. Vous pouvez être assuré que nos produits dureront dans le temps",
      stars: 5,
      img: "/avatar_review.jpg",
    },
    {
      name: "Nom",
      surname: "Prenom",
      occupation: "Occupation",
      text: "Chez Powstruct, nous ne faisons aucun compromis sur la qualité. Chacune de nos cheminées, inserts et poêles est fabriquée avec soin, en mettant l'accent sur les détails, l'esthétique et la durabilité. Vous pouvez être assuré que nos produits dureront dans le temps",
      stars: 5,
      img: "/avatar_review.jpg",
    },
    {
      name: "Nom",
      surname: "Prenom",
      occupation: "Occupation",
      text: "Chez Powstruct, nous ne faisons aucun compromis sur la qualité. Chacune de nos cheminées, inserts et poêles est fabriquée avec soin, en mettant l'accent sur les détails, l'esthétique et la durabilité. Vous pouvez être assuré que nos produits dureront dans le temps",
      stars: 5,
      img: "/avatar_review.jpg",
    },
  ];

  // Advice data
  const adviceItems = [
    "Comment fonctionne un poêle à bois ?",
    "Comment bien allumer sa cheminée ?",
    "Comment fonctionne un poêle à granulés ?",
    "Poêle à bois ou à granulés ?",
    "Quel emplacement pour votre cheminée ?",
    "Comment faire des économies de chauffage ?",
  ];

  // Refs for sliders
  const productRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const adviceRef = useRef<HTMLDivElement>(null);

  // Scroll functions for each slider
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.querySelector('.slider-card')?.clientWidth || 0;
      const gap = 32; // gap-8 = 32px
      ref.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.querySelector('.slider-card')?.clientWidth || 0;
      const gap = 32; // gap-8 = 32px
      ref.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/home_hero_img.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 flex flex-col items-center justify-center h-full">
          <div className="mb-8">
            <h1 className="text-3xl md:text-6xl leading-16 lg:text-5xl mb-4 font-bold">
              Bienvenue chez Powstruct <br />
              Votre Expert <br />
              en Cheminées, Inserts et Poêles au Maroc
            </h1>
          </div>
          
          {/* Button positioned 120px from bottom */}
          <div className="absolute -bottom-50">
            <button className="text-xl px-8 py-4 border-2 border-yellow-400 text-yellow-400 bg-transparent font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
              Prenez rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Products Section with Slider */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-bold text-center mb-4">PRODUIT</h2>
        <p className="text-center text-gray-600 mb-12">sous titre</p>

        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="relative aspect-square rounded-4xl rounded-tl-none overflow-hidden group">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#FBD96D] rounded-br-3xl z-20"></div>
                <div className="absolute text-xl w-full top-18 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center">
                  <p>{product.title}</p>
                </div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#FBD96D] font-semibold text-center">
                  <p>Voir Notre Collection</p>
                  <div className="w-36 h-[8px] rounded-2xl bg-[#FBD96D] mt-1 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div 
              ref={productRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {products.map((product, i) => (
                <div key={i} className="flex-shrink-0 w-4/5 snap-center slider-card">
                  <div className="relative aspect-square rounded-4xl rounded-tl-none overflow-hidden group mx-auto">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 bg-[#FBD96D] rounded-br-3xl z-20"></div>
                    <div className="absolute text-xl max-sm:text-sm w-full top-12 max-sm:top-16 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center">
                      <p>{product.title}</p>
                    </div>
                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#FBD96D] font-semibold text-center">
                      <p>Voir Notre Collection</p>
                      <div className="w-36 h-[8px] rounded-2xl bg-[#FBD96D] mt-1 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scrollLeft(productRef)}
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(-90deg)" }} />
            </button>
            <button 
              onClick={() => scrollRight(productRef)}
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(90deg)" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Slider */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold text-center mb-4">Nos Services</h2>
        <p className="text-center text-gray-600 mb-12">sous titre</p>
        
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="relative h-[530px] rounded-3xl overflow-hidden group">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute text-xl w-full top-12 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center">
                  <p>{service.title}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                <div className="absolute bottom-12 text-2xl left-1/2 transform -translate-x-1/2 text-[#FBD96D] font-semibold text-center">
                  <p>Savoir Plus</p>
                  <div className="w-42 h-[8px] rounded-2xl bg-[#FBD96D] mt-1 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div 
              ref={serviceRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {services.map((service, i) => (
                <div key={i} className="flex-shrink-0 w-full snap-center slider-card">
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group mx-auto">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute text-xl w-full top-12 left-1/2 transform -translate-x-1/2 text-white font-semibold text-center">
                      <p>{service.title}</p>
                    </div>
                    <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                    <div className="absolute bottom-12 text-2xl left-1/2 transform -translate-x-1/2 text-[#FBD96D] font-semibold text-center">
                      <p>Savoir Plus</p>
                      <div className="w-42 h-[8px] rounded-2xl bg-[#FBD96D] mt-1 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scrollLeft(serviceRef)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(-90deg)" }} />
            </button>
            <button 
              onClick={() => scrollRight(serviceRef)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(90deg)" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold text-center mb-4">TESTIMONIAL</h2>
        <p className="text-center text-gray-600 mb-12">sous titre</p>
        
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="relative bg-[#FFF8E2] rounded-3xl p-12 flex flex-col h-full">
                <div className="absolute inset-0 rounded-3xl m-6 border-2 border-[#FBD96D] pointer-events-none"></div>
                <div className="flex flex-grow mb-4">
                  <div className="w-1/3 pr-3 text-center flex flex-col justify-between items-center">
                    <div className="rounded-3xl m-3 overflow-hidden w-20 h-20 relative">
                      <Image
                        src={testimonial.img}
                        alt={`${testimonial.name} ${testimonial.surname}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="font-semibold text-lg">
                      {testimonial.name} <br /> {testimonial.surname}
                    </p>
                    <p className="text-sm mt-1">Occupation</p>
                  </div>
                  <div className="w-2/3 pl-3 flex flex-col gap-4 ">
                    <p className="italic text-gray-800 text-sm">&quot;{testimonial.text}&quot;</p>
                    <div className="flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          className="w-8 h-8 mx-0.5" 
                          fill={starIndex < testimonial.stars ? "#FFC716" : "#D1D5DB"} 
                          color={starIndex < testimonial.stars ? "#FFC716" : "#D1D5DB"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div 
              ref={testimonialRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-shrink-0 w-full snap-center slider-card">
                  <div className="relative bg-[#FFF8E2] rounded-3xl p-8 flex flex-col h-full mx-auto">
                    <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                    <div className="flex flex-grow mb-4">
                      <div className="w-1/3 pr-3 text-center flex flex-col justify-between items-center">
                        <div className="rounded-3xl m-3 overflow-hidden w-16 h-16 relative">
                          <Image
                            src={testimonial.img}
                            alt={`${testimonial.name} ${testimonial.surname}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="font-semibold text-md">
                          {testimonial.name} <br /> {testimonial.surname}
                        </p>
                        <p className="text-xs mt-1">Occupation</p>
                      </div>
                      <div className="w-2/3 pl-3 flex flex-col gap-2 ">
                        <p className="italic text-gray-800 text-xs">&quot;{testimonial.text}&quot;</p>
                        <div className="flex">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star 
                              key={starIndex} 
                              className="w-5 h-5 mx-0.5" 
                              fill={starIndex < testimonial.stars ? "#FFC716" : "#D1D5DB"} 
                              color={starIndex < testimonial.stars ? "#FFC716" : "#D1D5DB"} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scrollLeft(testimonialRef)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(-90deg)" }} />
            </button>
            <button 
              onClick={() => scrollRight(testimonialRef)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(90deg)" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Advice Section with Slider */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold text-center mb-4">CONSEIL</h2>
        <p className="text-center text-gray-600 mb-12">sous titre</p>
        
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adviceItems.map((item, i) => (
              <div key={i} className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src={`/product_img.jpg`}
                  alt={item}
                  fill
                  className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1/2 bg-white p-6 transition-all duration-300 group-hover:bg-[#FBD96D] group-hover:text-black"
                  style={{ clipPath: "polygon(65% 0%, 100% 40%, 100% 100%, 0 100%, 0 0%)" }}
                >
                  <h3 className="font-semibold text-2xl max-w-[70%] text-start">{item}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider - Show 2 cards at a time */}
          <div className="md:hidden relative">
            <div 
              ref={adviceRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {adviceItems.map((item, i) => (
                <div key={i} className="flex-shrink-0 w-2/3 snap-center slider-card">
                  <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer mx-auto">
                    <Image
                      src={`/product_img.jpg`}
                      alt={item}
                      fill
                      className="object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-3xl m-4 border-2 border-[#FBD96D] pointer-events-none"></div>
                    <div
                      className="absolute -bottom-1 left-0 right-0 h-1/2 max-sm:h-3/5 bg-white p-4 transition-all duration-300 group-hover:bg-[#FBD96D] group-hover:text-black"
                      style={{ clipPath: "polygon(65% 0%, 100% 40%, 100% 100%, 0 100%, 0 0%)" }}
                    >
                      <h3 className="font-semibold text-lg max-w-[70%] text-start">{item}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scrollLeft(adviceRef)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(-90deg)" }} />
            </button>
            <button 
              onClick={() => scrollRight(adviceRef)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg md:hidden"
            >
              <Triangle className="w-6 h-6" stroke="black" fill="black" style={{ transform: "rotate(90deg)" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="container mx-auto px-6 py-16 overflow-hidden">
        <h2 className="text-4xl lg:hidden font-bold text-center mb-4">NOS PARTENAIRES</h2>
        <p className="text-center lg:hidden text-gray-600 mb-12">sous titre</p>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={`first-${i}`} className="mx-8 w-32 h-32 flex items-center justify-center">
                <Image
                  src={`/c${i+1}.png`}
                  alt={`Sponsor ${i+1}`}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`second-${i}`} className="mx-8 w-32 h-32 flex items-center justify-center">
                <Image
                  src={`/c${i+1}.png`}
                  alt={`Sponsor ${i+1}`}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    </div>
  );
}