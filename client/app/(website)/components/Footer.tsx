import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/footer_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 max-md:bg-black"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={120}
              height={80}
              className="rounded-2xl shadow-lg object-cover mx-auto md:mx-0"
            />
          </div>

          {/* Contact Title + Subtitle */}
          <div className="text-center">
            <h2 className="text-5xl font-bold uppercase">CONTACT</h2>
            <p className="text-gray-300">Restons connectés avec nous</p>
          </div>

          {/* Placeholder for spacing */}
          <div className="w-[120px]"></div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 - NOS CORDONNÉES */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 uppercase">Nos coordonnées</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 underline justify-center md:justify-start">
                <MapPin size={50} />
                <span>Show Room Rue 180 n165 Bd oued Sebou Quartier Oulfa Casablanca.</span>
              </li>
              <li className="flex items-center gap-2 underline justify-center md:justify-start">
                <Mail size={24} />
                <span>contact@cheminees-maroc.com</span>
              </li>
              <li className="flex items-center gap-2 underline justify-center md:justify-start">
                <Phone size={24} fill="white" />
                <span>+212 5 22 916 609</span>
              </li>
              <li className="flex items-center gap-2 underline justify-center md:justify-start">
                <Phone size={24} fill="white" />
                <span>+212 6 44 105 637</span>
              </li>
              <li className="flex items-center gap-2 underline justify-center md:justify-start">
                <Phone size={24} fill="white" />
                <span>+212 6 60 860 738</span>
              </li>
            </ul>
          </div>

          {/* Column 2 - INFORMATIONS */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 uppercase">Informations</h3>
            <ul className="space-y-2">
              {[
                "Credit Application",
                "MBH Közvetítői előzetes tájékoztatás",
                "Virtual walk in our showroom",
                "Our showrooms",
                "Fireplace Blog",
                "Manufacturer's warranty",
                "Our satisfied customers said",
                "Blog",
                "Payment information",
                "Service",
                "Contact",
                "Impressum",
                "Privacy Statement",
                "General terms and conditions of use",
                "Consumer protection information",
                "Information on the use of cookies",
                "Disclaimer",
                "Downloadable documents",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-yellow-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - MARQUE */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 uppercase">Marque</h3>
            <ul className="space-y-2">
              {["Invicta France", "Uniflam", "A Caminetti"].map((brand, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-yellow-400">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom small line */}
        {/* <div className="mt-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Powstruct. Tous droits réservés.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
