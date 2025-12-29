import Image from "next/image";
import Link from "next/link";

export default function AlbumCard({ album }: any) {
  return (
    <Link href={`/discography/${album.slug}`}>
      <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4 text-center">
        <Image src={album.image} alt={album.title} width={220} height={220} className="mx-auto rounded-lg" />
        <h3 className="mt-3 font-bold text-sm">{album.title}</h3>
        <p className="text-xs text-gray-500">
          {album.type} • {album.year}
        </p>
      </div>
    </Link>
  );
}
