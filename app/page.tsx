import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center py-20 px-6">
      <Image src="/twice1.jpg" alt="TWICE" width={800} height={450} className="mx-auto rounded-xl shadow" />
      <h2 className="mt-8 text-4xl font-extrabold text-pink-600">One in a Million, TWICE!</h2>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">Website fansite yang menampilkan profil member, album, dan galeri TWICE.</p>
      <Link href="/members" className="inline-block mt-6 bg-pink-500 text-white px-6 py-3 rounded-full">
        Lihat Members
      </Link>
    </section>
  );
}
