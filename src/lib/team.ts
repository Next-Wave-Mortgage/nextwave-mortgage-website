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

/** Extended profile shown on /our-team/[slug] detail pages. */
export interface TeamMemberDetail {
  bio: string[];
  email: string;
  phone: string;
  licensedStates: string[];
  expertise?: string[];
  applyUrl: string;
  location?: string;
  /** Optional personal section (displayed separately from professional bio). */
  personal?: string[];
  calendlyUrl?: string;
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
    name: "Tyrone Jefferson",
    slug: "tyrone-jefferson",
    title: "Area Manager",
    nmls: "697254",
    image: "/images/tyrone-jefferson.jpg",
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
    image: "/images/Janine-Baeza.PNG",
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
  {
    name: "Lou Casey",
    slug: "lou-casey",
    title: "Mortgage Loan Originator",
    nmls: "",
    image: "/images/lou-casey.jpg",
  },
  {
    name: "Addie Gardiner",
    slug: "addie-gardiner",
    title: "Director of Mortgage Production | Team RFG",
    nmls: "",
    image: "/images/addie-gardiner.jpg",
  },
  {
    name: "Erin Sadlier",
    slug: "erin-sadlier",
    title: "Loan Officer",
    nmls: "36421",
    image: "/images/Erin-Sadlier.jpg",
  },
  {
    name: "Spencer Suderman",
    slug: "spencer-suderman",
    title: "Mortgage Loan Originator",
    nmls: "",
    image: "/images/spencer-suderman.jpg",
  },
];

export const leadership = teamMembers.filter((m) => m.leadership);
export const team = teamMembers.filter((m) => !m.leadership);

/** Detail profiles keyed by slug. Only members with pages get entries. */
export const teamDetails: Record<string, TeamMemberDetail> = {
  "phil-ganz": {
    bio: [
      "With over 26 years of experience in the mortgage industry, Phil Ganz has helped thousands of families achieve the dream of homeownership with clarity, confidence, and care. As President of Next Wave Mortgage, he leads a dedicated team committed to fast turn times, transparent guidance, and highly personalized service\u2014available 24/7/365.",
      "Phil is a nationally ranked top 1% originator and a Certified Mortgage Planning Specialist. He is passionate about building people-first businesses that empower clients, partners, and teammates alike. Whether structuring creative financing for self-employed borrowers, mentoring new loan officers, or developing innovative lead-generation systems, Phil focuses on one goal: creating better outcomes.",
      "He specializes in guiding first-time homebuyers through low-friction processes, unlocking challenging files with strategic income and asset structuring, building scalable brokerage systems, and coaching high-potential talent seeking more than just a paycheck.",
    ],
    email: "phil@nextwavemortgage.com",
    phone: "617-529-9317",
    licensedStates: ["MA", "FL", "NH", "RI", "TX", "CO"],
    expertise: [
      "FHA, VA, Conventional, Jumbo Loans",
      "Bank Statement & Non-QM Programs",
      "Down Payment Assistance Programs",
      "Reverse Mortgages & Home Equity Loans",
    ],
    applyUrl: "https://nextwave.my1003app.com/37833/register",
    location: "Fort Lauderdale, Florida",
    calendlyUrl: "https://calendly.com/lowrate/15min",
  },
  "ryan-skerritt": {
    bio: [
      "Ryan Skerritt is the founder of Next Wave Mortgage, a company grounded in the belief that the mortgage experience should be smarter, simpler, and truly people-focused. With more than 12 years of industry expertise, Ryan brings a comprehensive understanding of mortgage lending, strategic leadership, and forward-thinking innovation to every aspect of his work.",
      "At the core of Ryan\u2019s vision is a commitment to building an exceptional team and culture\u2014one that prioritizes transparency, accountability, and a relentless focus on client success. He is passionate about fostering an environment where top-tier professionals can thrive, collaborate, and consistently deliver an outstanding mortgage experience for every homebuyer.",
      "Whether guiding first-time buyers or seasoned homeowners, Ryan is driven by a singular mission: to simplify the mortgage process and empower clients with clarity and confidence at every step.",
    ],
    email: "ryan@nextwavemortgage.com",
    phone: "978-852-6145",
    licensedStates: ["MA", "FL", "NH"],
    applyUrl: "https://nextwave.my1003app.com/1170025/register",
    personal: [
      "Outside of work, Ryan finds his greatest fulfillment in time spent with his wife, Tara, and their two sons, Carter and Cameron. From weekends at the baseball field to quiet evenings at home, family remains the foundation of his personal values and professional drive.",
      "When Ryan steps into the kitchen, it\u2019s nothing short of a masterpiece in motion. Whether he\u2019s grilling, frying, or baking, it doesn\u2019t matter\u2014the man cooks like a culinary Picasso. His dishes don\u2019t just taste amazing, they change lives.",
    ],
  },
  "christopher-donovan": {
    bio: [
      "Chris Donovan joined Next Wave Mortgage as Chief Operating Officer, bringing leadership experience and a strong track record of operational success. He has worked in the mortgage industry since 2012 and focuses on improving systems, ensuring compliance, and supporting loan originators so they can focus on helping their clients.",
      "Chris stays closely involved in the day-to-day. He reviews files, solves issues and works alongside the team to make sure each loan is handled with care and precision. He also partners with the company\u2019s co-founders to build a supportive, high-performance culture based on trust and transparency.",
      "As a licensed loan originator, Chris continues to work directly with clients. His active role in the field helps him stay connected to what borrowers and partners are experiencing and allows him to lead with perspective and purpose.",
      "Chris values strong relationships with clients, his team, and the many wholesale partners he regularly contacts. His focus is always on helping people succeed and making sure they feel confident and informed throughout the process.",
    ],
    email: "chris@nextwavemortgage.com",
    phone: "978-854-2558",
    licensedStates: ["MA", "RI", "NH"],
    applyUrl: "https://nextwave.my1003app.com/1080551/register",
    personal: [
      "Outside of work, Chris is a husband and proud girl dad. He enjoys spending time with his family, whether it\u2019s a trip to the beach, time at the park, or just being together at home. His family is his motivation, and that drives the way he shows up in both business and life.",
    ],
  },
  "janine-baeza": {
    bio: [
      "With over two decades in mortgage lending, Janine Baeza combines deep industry expertise with a heartfelt commitment to helping families achieve their homeownership dreams. Since 2003, she has guided clients through the lending process with clarity, compassion, and confidence.",
      "Janine is dedicated to finding the right loan solutions for every situation, staying ahead of industry changes and proactively navigating potential hurdles. Her exceptional communication and accessibility ensure clients feel supported\u2014not just through closing, but for years to come.",
      "Believing in building lifelong relationships, she takes pride in being a \u201cLoan Officer For Life,\u201d continuing to monitor loans and alerting clients when opportunities to refinance and save arise.",
      "By removing stress and uncertainty from the mortgage experience, Janine helps clients move forward with peace of mind\u2014and a clear path home.",
    ],
    email: "janine@nextwavemortgage.com",
    phone: "781-267-2039",
    licensedStates: ["MA", "FL", "TX", "RI"],
    applyUrl: "https://nextwave.my1003app.com/17287/register",
    personal: [
      "Outside the office, Janine is a proud spouse of a Retired Marine and devoted mom and stepmom to five children.",
    ],
  },
  "philip-carcel-munce": {
    bio: [
      "Philip Carcel Munce is a dedicated mortgage professional with a passion for helping clients navigate the complexities of home financing. He brings a thoughtful, client-centered approach, particularly attuned to the needs of younger generations facing unique financial challenges in today\u2019s housing market.",
      "Philip is committed to making homeownership more accessible by delivering personalized, strategic guidance at every stage of the journey. He offers tailored financing solutions informed by up-to-date insights on interest rates, loan programs, and economic shifts.",
      "His clear, approachable communication style helps demystify the mortgage process, empowering clients to make informed decisions with confidence. From the first conversation to closing day, Philip is focused on building lasting relationships and supporting his clients\u2019 long-term financial goals.",
    ],
    email: "philip.cm@nextwavemortgage.com",
    phone: "305-803-0016",
    licensedStates: ["FL"],
    applyUrl: "https://nextwave.my1003app.com/2067892/register",
    personal: [
      "Outside work, Philip is active in the Jacksonville and Northeast Florida community. He serves on several nonprofit boards and participates in planning events and fundraising.",
      "In his free time, Philip enjoys weightlifting, traveling with his husband, playing fetch with their dog, participating in intramural sports leagues, and exploring new restaurants.",
    ],
  },
  "kevin-flannery": {
    bio: [
      "Kevin Flannery brings over two decades of experience in the mortgage and real estate industry, lending coast to coast and helping individuals achieve their homeownership and investment goals. With a deep understanding of buying, selling, and investing in properties across the United States, Kevin delivers personalized solutions that align with each client\u2019s unique financial vision.",
      "Recognized nationally as one of the top loan officers by Scotsman Guide and consistently rated highest on Angie\u2019s List, Kevin\u2019s reputation is built on trust, transparency, and results. His business thrives almost entirely on referrals from satisfied clients, proof of the lasting relationships he builds and the value he delivers.",
      "Kevin\u2019s client-first philosophy, combined with his extensive industry knowledge, makes him a trusted guide through the often-complex world of real estate financing.",
    ],
    email: "kevin@nextwavemortgage.com",
    phone: "617-281-3058",
    licensedStates: ["MA", "FL"],
    applyUrl: "https://nextwave.my1003app.com/21393/register",
    personal: [
      "Outside of his professional life, Kevin is a devoted parent and an active contributor to his community. He serves on a youth sports board, is a member of the U.S. Sailing Association (USSA), and officiates with U.S. Ski & Snowboard. An avid cyclist, Kevin finds balance and inspiration in the outdoors and in the communities he supports.",
    ],
  },
  "tyrone-jefferson": {
    bio: [
      "Tyrone Jefferson brings over 20 years of experience in the mortgage industry and is a highly respected lending professional known for his comprehensive expertise across a broad range of loan products\u2014including Conventional, FHA, VA, Jumbo, Reverse Mortgages, Renovation Loans, Non-QM options, and specialized programs for first-time homebuyers.",
      "He takes pride in providing clear, strategic guidance from pre-approval through closing, ensuring a smooth and stress-free experience\u2014even in the most complex transactions. Holding a degree in Accounting from Stonehill College, Tyrone leverages his strong financial background to craft smart, personalized loan solutions that align closely with each client\u2019s unique goals.",
    ],
    email: "tyrone@nextwavemortgage.com",
    phone: "781-351-9482",
    licensedStates: ["MA", "FL", "NH"],
    expertise: [
      "Conventional & FHA Loans",
      "VA & Jumbo Loans",
      "Reverse Mortgages & Renovation Loans",
      "Non-QM & First-Time Homebuyer Programs",
    ],
    applyUrl: "https://nextwave.my1003app.com/697254/register",
  },
  "shane-jordan": {
    bio: [
      "Born and raised in North Florida, Shane Jordan has developed deep roots and cultivated strong community connections over the years. With two decades of experience as an Operations Manager, he refined leadership skills and successfully guided teams toward achieving their goals.",
      "Seeking a more direct and meaningful way to impact people\u2019s lives, Shane transitioned into the mortgage industry, inspired by the passion and dedication of colleagues in the field. Now a Loan Advisor, Shane is committed to leveraging his expertise to help clients navigate their financial journeys with confidence and clarity.",
      "He is passionate about empowering clients to make informed decisions that promote long-term financial success. As Shane continues to grow in this new career, he looks forward to providing personalized guidance and meaningful support to clients every step of the way.",
    ],
    email: "shane@nextwavemortgage.com",
    phone: "904-382-5973",
    licensedStates: ["FL"],
    applyUrl: "https://nextwave.my1003app.com/2661766/register",
    personal: [
      "Outside of work, Shane treasures time with his wife and two children, cherishing the moments that create lasting memories. As a proud ally and active member of the national PFLAG organization, Shane advocates for inclusion and supports the LGBTQ+ community.",
      "When not working, he enjoys music, theater, movies, concerts, and maintains a lifelong passion for video games.",
    ],
  },
  "linnet-pardo": {
    bio: [
      "Linnet Pardo is a Mortgage Broker with Next Wave Mortgage who is passionate about helping clients achieve their real estate goals, whether buying a first home, upgrading to a dream home, investing in property, or exploring new opportunities.",
      "She works with clients from diverse backgrounds and believes that personalized service is key to a successful mortgage experience. Linnet takes the time to understand each client\u2019s unique needs, guiding them through every step of the mortgage process with clarity, care, and professionalism.",
      "Fluent in both English and Spanish, she is dedicated to ensuring that all clients feel comfortable, informed, and supported from start to finish. Whether the journey is straightforward or complex, Linnet is committed to providing a smooth and successful experience for every client.",
    ],
    email: "linnet@nextwavemortgage.com",
    phone: "775-848-1550",
    licensedStates: ["MA", "FL"],
    applyUrl: "https://nextwave.my1003app.com/2128468/register",
  },
  "stephanie-carman": {
    bio: [
      "Stephanie Carman specializes in helping first-time and primary home buyers navigate the mortgage process with confidence. She is passionate about making lending feel approachable by breaking down complex concepts into clear, understandable guidance.",
      "Clients appreciate Stephanie\u2019s commitment to education, consistent communication, and availability throughout the transaction. She believes her role is not just to secure financing, but to ensure buyers feel informed and supported every step of the way.",
      "Stephanie\u2019s thoughtful approach and genuine care help create a home-buying experience that feels steady, transparent, and personal.",
    ],
    email: "stephanie@nextwavemortgage.com",
    phone: "617-529-9317",
    licensedStates: [],
    applyUrl: "https://nextwave.my1003app.com/2560482/register",
    personal: [
      "When she is not guiding clients through the home-buying process, Stephanie can often be found traveling abroad and exploring new places. She values experiencing different cultures and believes curiosity and adventure play an important role in both life and work.",
      "She is also a dedicated dachshund mom and enjoys the balance that home life brings between travels. Stephanie\u2019s adventurous spirit and warm approach carry through in how she connects with people, both personally and professionally.",
    ],
  },
  "dale-driggers": {
    bio: [
      "Dale Driggers brings a unique, hands-on perspective to the mortgage process through years of experience in the construction industry. Having worked directly on homes\u2014not just paperwork\u2014Dale understands how houses are built, how they age, and what really matters when it comes to condition, repairs, and long-term value.",
      "That background has shaped a work ethic rooted in showing up early, rolling up the sleeves, doing the job right the first time, and coming up with real-world solutions to complex problems. In construction, details matter, pride in your work matters, deadlines matter\u2014and Dale carries that same mindset into every loan he originates.",
      "As a mortgage loan officer with Next Wave Mortgage, Dale uses his firsthand knowledge of homes to help buyers and homeowners make smarter financing decisions. He\u2019s especially valuable to clients navigating inspections, repairs, appraisals, and non-perfect scenarios because he understands both the financial and physical sides of a property.",
      "Dale has made a commitment to doing everything in his capacity to make homeownership a reality and provide access to the best possible outcome for every creditworthy American utilizing Next Wave Mortgage\u2019s ever-expanding variety of lender options. Dale is known for clear communication, strong follow-through, and being exceptionally accessible.",
    ],
    email: "dale@nextwavemortgage.com",
    phone: "904-583-3171",
    licensedStates: [],
    applyUrl: "https://nextwave.my1003app.com/2786111/register",
    personal: [
      "Outside of work, Dale is a father, husband, and strong advocate for persons with disabilities\u2014devoting considerable time and effort to making their voices heard at public hearings and IEP meetings, fighting for children with disabilities to receive fair and equal access to public education, and volunteering at local events to make real-world differences in his community.",
      "Dale is also a musician, skateboarder, and lover of the arts and nature.",
    ],
  },
  "ron-gardiner": {
    bio: [
      "Mortgage Loan Officer with over 30 years of experience, serving homebuyers and homeowners since 1991. Proven expertise across purchase and refinance transactions, with a focus on clear communication, strategic guidance, and reliable closings.",
    ],
    email: "ron@nextwavemortgage.com",
    phone: "617-594-5405",
    licensedStates: [],
    applyUrl: "https://nextwave.my1003app.com/12565/register",
  },
  "lou-casey": {
    bio: [
      "Lou Casey is a licensed Mortgage Loan Originator dedicated to helping clients achieve homeownership and make informed financial decisions. A graduate of Bridgewater State University, he brings a strong foundation in professionalism, financial discipline, and client service to every interaction.",
      "Lou specializes in guiding borrowers through every step of the mortgage process, from pre-approval to closing, while providing transparent communication and tailored loan solutions. His goal is to ensure a smooth, efficient, and confident financing experience for every client.",
    ],
    email: "lou@nextwavemortgage.com",
    phone: "781-927-4059",
    licensedStates: [],
    applyUrl: "/apply",
  },
  "addie-gardiner": {
    bio: [
      "Addie is the Director of Mortgage Production for Team RFG at Next Wave Mortgage. A recent graduate of the Isenberg School of Business at UMass Amherst, she focuses on client communication, loan coordination, and creating an organized, efficient mortgage experience from application to closing.",
    ],
    email: "addie@nextwavemortgage.com",
    phone: "617-484-3462",
    licensedStates: [],
    applyUrl: "https://nextwave.my1003app.com/12565/register",
  },
  "erin-sadlier": {
    bio: [
      "With a career in mortgage lending that began in 2003, Erin Sadlier brings over two decades of industry expertise to every transaction. Having navigated the housing market through various economic cycles, Erin possesses the analytical skills and deep product knowledge necessary to structure the perfect loan for her clients.",
      "Erin believes that the cornerstone of a successful mortgage experience is education and communication. She understands that a mortgage is likely the largest financial commitment a person will make, and she is dedicated to demystifying the process. By breaking down complex financial concepts into clear, understandable terms, she empowers her borrowers to make confident decisions.",
      "While she works with a wide variety of clients, Erin has a particular passion for working with first-time homebuyers. She loves the excitement of helping someone purchase their very first property and takes extra care to guide them through every step of the journey.",
      "Above all, Erin is known for her diligence and reliability. She works tirelessly behind the scenes to manage strict deadlines, ensuring a smooth process and an on-time closing. When you work with Erin, you aren\u2019t just getting a loan; you are gaining a dedicated partner committed to getting you home.",
    ],
    email: "erin@nextwavemortgage.com",
    phone: "978-996-7657",
    licensedStates: [],
    applyUrl: "https://nextwave.my1003app.com/36421/register",
    personal: [
      "Outside of the office, Erin is a proud and devoted wife and mother. She loves spending weekends at the park or cheering on her daughter at dance and gymnastics.",
    ],
  },
  "spencer-suderman": {
    bio: [
      "With a career built on technical precision and strategic leadership, Spencer brings a detail-oriented perspective to the mortgage industry. After years of leading corporate IT transformations with a keen eye on financing and ensuring positive investment outcomes, he understands that the key to a successful journey—especially in home financing—is a clear plan and constant communication.",
      "Spencer's professional journey has always been centered on service, from managing high-stakes IT projects to navigating complex organizational challenges. This diverse experience has taught him the importance of reliability, integrity, and putting people first.",
      "As a Mortgage Loan Originator at Next Wave Mortgage, Spencer leverages his background in complex problem-solving to help clients navigate the lending process with ease. His goal is to simplify the intricacies of mortgage products, ensuring that every homebuyer feels confident and empowered from application to closing.",
    ],
    email: "",
    phone: "",
    licensedStates: [],
    applyUrl: "/apply",
    location: "St. Augustine, Florida",
    personal: [
      "Originally a transplant from Los Angeles, California, Spencer and his wife now call St. Augustine, Florida home. Together, they embrace the coastal lifestyle—though they are still on a perpetual quest to find local tacos that capture that authentic Los Angeles vibe. Above all, they take immense pride in their two sons and daughter as they build their own professional careers and grow into successful, contributing citizens.",
      "When he isn't analyzing interest rates or stock market trends, Spencer is often in the air. As an instrument-rated commercial instructor pilot with ratings for land, sea, and multi-engine aircraft, he has a deep appreciation for the discipline and focus required to navigate complex systems—technical skills that translate directly into finding the best financial paths for his clients.",
      "Whether he is at the controls of an airplane, appreciating taco construction, or perfecting a long-fermented pizza dough in his kitchen, Spencer believes that meticulous attention to detail is the defining factor that turns a good result into a great one.",
    ],
  },
  "chris-scott": {
    bio: [
      "Chris Scott is a Mortgage Broker with Next Wave Mortgage who brings valuable firsthand experience in buying and selling real estate. This background has given him a thorough understanding of the process and its significant impact on clients\u2019 lives.",
      "Chris is passionate about helping individuals and families take the next step, whether purchasing a first home, relocating, or making a long-term investment. He is dedicated to making the mortgage process clear, seamless, and stress-free from start to finish.",
      "Committed to turning your goals into reality, Chris looks forward to partnering with you every step of the way.",
    ],
    email: "chris.scott@nextwavemortgage.com",
    phone: "978-549-3615",
    licensedStates: ["NH"],
    applyUrl: "https://nextwave.my1003app.com/2184879/register",
  },
};

export function getTeamMember(slug: string) {
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return null;
  const detail = teamDetails[slug] ?? null;
  return { member, detail };
}

/** Slugs that have detail pages (for generateStaticParams). */
export function getDetailSlugs() {
  return Object.keys(teamDetails);
}
