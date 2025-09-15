import Image from "next/image";
import { Flame, Gem, Smile, Star } from "lucide-react";

export default function AboutPage() {
    const valeurs = [
    {
      icon: <Star className="w-8 h-8 text-[#FBD96D]" />,
      title: "Qualité Supérieure",
      desc: "Chez Powstruct, nous ne faisons aucun compromis sur la qualité. Chacune de nos cheminées, inserts et poêles est fabriquée avec soin, en mettant l’accent sur les détails, l’esthétique et la durabilité. Vous pouvez être assuré que nos produits dureront dans le temps.",
    },
    {
      icon: <Gem className="w-8 h-8 text-[#FBD96D]" />,
      title: "Design Authentique",
      desc: "Nous croyons en la beauté de l’artisanat marocain. Chacune de nos créations est une fusion de design moderne et de tradition, créant ainsi des pièces uniques qui ajoutent une touche de classe à votre intérieur.",
    },
    {
      icon: <Flame className="w-8 h-8 text-[#FBD96D]" />,
      title: "Confort et Chaleur",
      desc: "Nos cheminées et poêles sont conçus pour vous offrir une chaleur réconfortante tout en créant une atmosphère chaleureuse dans votre maison. Vous pouvez profiter des soirées agréables et des moments mémorables auprès du feu.",
    },
    {
      icon: <Smile className="w-8 h-8 text-[#FBD96D]" />,
      title: "Satisfaction du Client",
      desc: "La satisfaction de nos clients est au cœur de notre démarche. Nous travaillons étroitement avec vous pour comprendre vos besoins, personnaliser nos produits en conséquence et garantir votre entière satisfaction.",
    },
  ];

  const produits = [
    {
      title: "Cheminées",
      desc: "Des cheminées classiques aux modèles plus contemporains, nos cheminées sont des œuvres d’art fonctionnelles qui deviendront le point central de votre maison.",
      img: "/product1_img.jpg",
    },
    {
      title: "Inserts",
      desc: "Nos inserts modernes ajoutent de l’élégance à n’importe quelle pièce tout en maximisant l’efficacité énergétique.",
      img: "/product2_img.jpg",
    },
    {
      title: "Poêles",
      desc: "Nos poêles à bois et à granulés sont à la fois beaux et pratiques, fournissant une chaleur constante tout en réduisant votre empreinte carbone.",
      img: "/product3_img.jpg",
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_img.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4">
          <h1 className="text-7xl mb-4 font-bold">Powstruct</h1>
          <h2 className="text-5xl font-bold">
            Votre Expert en Cheminées, Inserts et Poêles au Maroc
          </h2>
          <p className="mt-6 mx-auto text-lg max-w-2xl">
            Chez Powstruct, nous sommes fiers d&apos;être les leaders de l&apos;industrie au Maroc en matière de fabrication et de conception de cheminées, d&apos;inserts et de poêles de qualité supérieure...
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        {/* Left Side (Text, takes 2 parts) */}
        <div className="md:col-span-2">
          {/* Qui Sommes-Nous */}
          <h2 className="text-3xl font-bold mb-4">Qui Sommes-Nous ?</h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Chez Powstruct, nous sommes fiers d&apos;être les pionniers dans l&apos;art de créer des espaces chaleureux et accueillants au Maroc. 
            Notre expertise dans la fabrication et la conception de cheminées, d&apos;inserts et de poêles de qualité supérieure est au cœur 
            de notre identité. Découvrez qui nous sommes, notre histoire et notre engagement envers la satisfaction de nos clients.
          </p>

          {/* Pourquoi Nous Choisir */}
          <h2 className="text-3xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold">Qualité Exceptionnelle :</span> Powstruct ne fait aucun compromis sur la qualité. 
              Chacune de nos créations est un chef-d&apos;œuvre d&apos;artisanat marocain, conçue pour durer dans le temps et vous offrir une expérience exceptionnelle.
            </p>
            <p>
              <span className="font-bold">Design Unique :</span> Notre approche marie l&apos;esthétique moderne à la tradition, créant des pièces uniques qui ajoutent une touche de classe à votre intérieur.
            </p>
            <p>
              <span className="font-bold">Chaleur et Confort :</span> Nos cheminées, inserts et poêles vous offrent une chaleur réconfortante tout en créant une atmosphère chaleureuse.
            </p>
            <p>
              <span className="font-bold">Service Client Exceptionnel :</span> La satisfaction de nos clients est notre priorité. 
              Nous travaillons main dans la main avec vous pour répondre à vos besoins et assurer votre entière satisfaction.
            </p>
          </div>
        </div>

        {/* Right Side (Image with Yellow Border, takes 3 parts) */}
        <div className="relative md:col-span-3 rounded-3xl overflow-hidden w-[700px] aspect-square mx-auto">
          <Image
            src="/about_img.jpg"
            alt="Cheminée Powstruct"
            fill
            className="object-cover object-center rounded-3xl"
          />
          {/* Yellow Border Overlay */}
          <div className="absolute inset-0 m-12 rounded-3xl border-2 border-[#FBD96D] pointer-events-none"></div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6 md:px-12 text-center">
      <h2 className="text-5xl font-bold mb-12">Nos Valeurs Fondamentales</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {valeurs.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-4">
              {item.icon}
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Image with border overlay */}
      <div className="relative mt-16 rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]">
        <Image
          src="/about_img.jpg"
          alt="Cheminée Powstruct"
          fill
          className="object-cover object-center rounded-3xl"
        />
        <div className="absolute inset-0 rounded-3xl m-12 border-2 border-[#FBD96D] pointer-events-none"></div>
      </div>
    </section>

     <section className="container mx-auto py-16 px-6 md:px-12">
      <h2 className="text-5xl font-bold text-center mb-12">Nos Produits</h2>

      <div className="space-y-16">
        {produits.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Texte (1/3 width) */}
            <div className={`md:w-1/3  ${
              i % 2 !== 0 && 'text-end'}`}
            >
              <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>

            {/* Image (2/3 width) */}
            <div className="relative md:w-2/3 h-[250px] md:h-[350px] rounded-3xl overflow-hidden">
              {/* Vector corner shape */}
              <div className="absolute top-0 left-0 w-18 h-18 bg-[#FBD96D] rounded-br-3xl z-20"></div>

              {/* Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-3xl"
              />

              {/* Yellow border overlay */}
              <div className="absolute inset-0 rounded-3xl z-40 m-8 border-2 border-[#FBD96D] pointer-events-none"></div>

              {/* Overlay text */}
              <div className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 text-[#FBD96D] font-semibold text-xl text-center">
                <p>Voir Notre Collection</p>
                <div className="w-36 h-[6px] z-05 rounded-2xl bg-[#FBD96D] mt-1 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="max-w-5xl text-2xl font-semibold mx-auto mt-12 p-4 text-center">
        <p className="mb-2">
          Rejoignez la famille Powstruct et transformez votre maison en un espace chaleureux et convivial.
        </p>
        <p className="">
          Avec notre engagement envers la qualité, l&apos;innovation et le service à la clientèle, nous sommes là pour répondre à tous vos besoins en matière de cheminées, d'inserts et de poêles au Maroc.
        </p>
      </div>
    </section>
    </div>
  );
}
