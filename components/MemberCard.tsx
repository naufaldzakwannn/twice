import Link from "next/link";
import Image from "next/image";

export default function MemberCard({ member }: any) {
  return (
    <Link href={`/members/${member.slug}`}>
      <div className="bg-white rounded-xl shadow hover:scale-105 transition p-4 text-center">
        <Image src={member.image} alt={member.name} width={200} height={200} className="mx-auto rounded-lg" />
        <h2 className="mt-3 font-bold">{member.name}</h2>
        <p className="text-sm text-gray-500">{member.position}</p>
      </div>
    </Link>
  );
}
