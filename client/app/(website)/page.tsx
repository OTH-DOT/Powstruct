import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_img.jpg')" }}
      >
        <Header />
        {/* Sticky Header (only for Hero) */}

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
      <section className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          This is a short description about your app. You can replace this with real content.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-gray-600">Here you can list your main features or offerings.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto text-center py-16">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-2 text-gray-600">Contact us for more information or collaboration.</p>
      </section>
    </div>
  );
}
