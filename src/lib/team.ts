/** Team member data — single source of truth for the Our Team page. */

export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  nmls: string;
  image: string | null;
  /** Whether this person is part of the leadership team (featured section). */
  leadership?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Phil Ganz",
    slug: "phil-ganz",
    title: "President",
    nmls: "37833",
    image: "/images/phil-ganz.jpg",
    leadership: true,
  },
  {
    name: "Ryan Skerritt",
    slug: "ryan-skerritt",
    title: "Founder",
    nmls: "1170025",
    image: "/images/ryan-skerritt.jpg",
    leadership: true,
  },
  {
    name: "Christopher Donovan",
    slug: "christopher-donovan",
    title: "Chief Operating Officer",
    nmls: "1080551",
    image: "/images/christopher-donovan.jpg",
  },
  {
    name: "Janine Baeza",
    slug: "janine-baeza",
    title: "Senior Loan Officer",
    nmls: "17287",
    image: "/images/janine-baeza.jpg",
  },
  {
    name: "Philip Carcel Munce",
    slug: "philip-carcel-munce",
    title: "Director of Southeast Originations",
    nmls: "2067892",
    image: "/images/philip-carcel-munce.jpg",
  },
  {
    name: "Kevin G. Flannery",
    slug: "kevin-flannery",
    title: "Director Northeast Originations",
    nmls: "21393",
    image: "/images/kevin-flannery.jpg",
  },
  {
    name: "Tyrone Jefferson",
    slug: "tyrone-jefferson",
    title: "Area Manager",
    nmls: "697254",
    image: "/images/tyrone-jefferson.jpg",
  },
  {
    name: "Shane Jordan",
    slug: "shane-jordan",
    title: "Loan Advisor",
    nmls: "2661766",
    image: "/images/shane-jordan.jpg",
  },
  {
    name: "Linnet Pardo",
    slug: "linnet-pardo",
    title: "Loan Originator",
    nmls: "2128468",
    image: "/images/linnet-pardo.jpg",
  },
  {
    name: "Stephanie Carman",
    slug: "stephanie-carman",
    title: "Loan Advisor",
    nmls: "2560482",
    image: "/images/stephanie-carman.jpg",
  },
  {
    name: "Dale Driggers",
    slug: "dale-driggers",
    title: "Licensed Mortgage Loan Officer",
    nmls: "2786111",
    image: "/images/dale-driggers.jpg",
  },
  {
    name: "Ron Gardiner",
    slug: "ron-gardiner",
    title: "Loan Officer",
    nmls: "12565",
    image: "/images/ron-gardiner.jpg",
  },
  {
    name: "Chris Scott",
    slug: "chris-scott",
    title: "Loan Originator",
    nmls: "2184879",
    image: null,
  },
];

export const leadership = teamMembers.filter((m) => m.leadership);
export const team = teamMembers.filter((m) => !m.leadership);
