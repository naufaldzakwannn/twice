import { members } from "@/data/members";
import Image from "next/image";

export default function MemberDetail({ params }: any) {
  const member = members.find((m) => m.slug === params.slug);

  if (!member) return <p>Member not found</p>;

  return (
    <div className="p-10 text-center">
      <Image src={member.image} alt={member.name} width={300} height={300} className="mx-auto rounded-xl" />
      <h1 className="mt-6 text-4xl font-bold">{member.name}</h1>
      <p className="text-gray-500 mt-2">{member.position}</p>
    </div>
  );
}
