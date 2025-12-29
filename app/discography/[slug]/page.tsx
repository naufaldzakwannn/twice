import { discography } from "@/data/discography";
import Image from "next/image";

export default function AlbumDetail({ params }: any) {
  const allAlbums = discography.flatMap((d) => d.albums);
  const album = allAlbums.find((a) => a.slug === params.slug);

  if (!album) return <p>Album not found</p>;

  return (
    <div className="p-10 text-center">
      <Image src={album.image} alt={album.title} width={300} height={300} className="mx-auto rounded-xl shadow" />
      <h1 className="mt-6 text-4xl font-bold">{album.title}</h1>
      <p className="text-gray-500 mt-2">
        {album.type} • {album.year}
      </p>
    </div>
  );
}
