import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-pink-500">TWICE</h1>
        <p className="mt-4 text-lg text-gray-600">One in a Million 💖</p>
      </div>

      {/* HERO IMAGE */}
      <div className="mt-10 flex justify-center">
        <Image src="/about2.jpg" alt="TWICE Group" width={900} height={500} className="rounded-3xl shadow-lg" />
      </div>

      {/* ABOUT TWICE */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-pink-500">Who is TWICE?</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          TWICE adalah girl group Korea Selatan yang dibentuk oleh JYP Entertainment pada tahun 2015 melalui program survival <b>SIXTEEN</b>. Dengan 9 member, TWICE dikenal lewat musik ceria, konsep ikonik, dan hubungan kuat dengan
          penggemarnya, <b>ONCE</b>.
        </p>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-pink-50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-pink-500">Debut</h3>
          <p className="mt-2 text-gray-600">2015 • The Story Begins</p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-pink-500">Members</h3>
          <p className="mt-2 text-gray-600">9 Members • One Team</p>
        </div>

        <div className="bg-pink-50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-pink-500">Fandom</h3>
          <p className="mt-2 text-gray-600">ONCE 💕</p>
        </div>
      </div>

      {/* ABOUT WEBSITE */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-pink-500 text-center">About This Website</h2>

        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Website ini adalah <b>fansite TWICE tidak resmi</b> yang dibuat untuk menampilkan discography lengkap TWICE dalam satu tempat—mulai dari album Korea, Jepang, hingga integrasi Spotify dan YouTube.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          Selain sebagai bentuk apresiasi kepada TWICE, website ini juga dikembangkan sebagai <b>project pembelajaran & portfolio</b> menggunakan Next.js dan Tailwind CSS.
        </p>
      </div>

      {/* DISCLAIMER */}
      <div className="mt-16 text-center text-sm text-gray-400">All images, music, and videos belong to JYP Entertainment and their respective owners. This website is created for non-commercial and educational purposes.</div>
    </section>
  );
}
