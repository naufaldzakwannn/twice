import { discography } from "@/data/discography";
import AlbumCard from "@/components/AlbumCard";

export default function DiscographyPage() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-12">TWICE Discography</h1>

      {discography.map((section) => (
        <div key={section.era} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-pink-500">{section.era}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.albums.map((album) => (
              <AlbumCard key={album.slug} album={album} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
