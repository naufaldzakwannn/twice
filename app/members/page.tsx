import { members } from "@/data/members";
import MemberCard from "@/components/MemberCard";

export default function MembersPage() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-pink-600">TWICE Members</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.slug} member={member} />
        ))}
      </div>
    </section>
  );
}
