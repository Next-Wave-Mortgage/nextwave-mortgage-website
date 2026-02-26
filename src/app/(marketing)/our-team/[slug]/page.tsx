import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamMemberPage from "@/components/team/TeamMemberPage";
import { getTeamMember, getDetailSlugs } from "@/lib/team";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getTeamMember(slug);
  if (!data) return {};
  return {
    title: `${data.member.name} — ${data.member.title} | Next Wave Mortgage`,
    description: data.detail?.bio[0] ?? `Meet ${data.member.name}, ${data.member.title} at Next Wave Mortgage.`,
  };
}

export default async function TeamMemberRoute({ params }: Props) {
  const { slug } = await params;
  const data = getTeamMember(slug);
  if (!data?.detail) notFound();
  return <TeamMemberPage member={data.member} detail={data.detail} />;
}
