export const siteConfig = {
  name: "Bright Path Learning",
  tagline: "Primary • GCSE • A-Level",
  phone: "020 7946 0958",
  email: "hello@bpl.co.uk",
  address: "London, United Kingdom",
  hours: "Mon–Sat, 9:00am – 7:00pm",
};

/** Primary CTA label — use site-wide for assessment buttons */
export const ctaPrimaryLabel = "Book a Free Assessment";

export type NavLink = {
  href: string;
  label: string;
};

/** Primary site navigation — single source of truth for header, footer, and mobile menu */
export const primaryNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/student-support", label: "Student Support" },
  { href: "/programmes", label: "Programmes" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "12+", label: "Subjects Available" },
  { value: "95%", label: "Parent Satisfaction" },
  { value: "1:1", label: "Personalised Support" },
];

export const services = [
  {
    title: "1-to-1 Tutoring",
    description:
      "Personalised support tailored to each student’s ability, learning style, and academic goals.",
    icon: "tutoring",
  },
  {
    title: "GCSE Preparation",
    description:
      "Structured revision and exam support to help students build confidence before GCSE assessments.",
    icon: "gcse",
  },
  {
    title: "A-Level Support",
    description:
      "Subject-focused tuition for students who need deeper support with higher-level study.",
    icon: "alevel",
  },
  {
    title: "Homework Help",
    description:
      "Ongoing support to reinforce classroom learning and help students stay on track.",
    icon: "homework",
  },
  {
    title: "Online Learning",
    description:
      "Flexible remote lessons designed to fit around school, family life, and busy schedules.",
    icon: "online",
  },
  {
    title: "Study Skills",
    description:
      "Helping students improve focus, revision habits, confidence, and independent learning.",
    icon: "study",
  },
];

export const audiences = [
  {
    title: "Primary Students",
    description:
      "Building strong foundations in literacy, numeracy and confidence from an early age.",
    highlights: ["Reading", "Writing", "Mathematics"],
    image: "/images/teaching-2.jpg",
    imageAlt: "Primary school student reading with a tutor",
  },
  {
    title: "Secondary Students",
    description:
      "Supporting students through key stages, coursework and exam preparation.",
    highlights: ["GCSE Support", "Exam Preparation", "Revision Skills"],
    image: "/images/secondary.jpg",
    imageAlt: "Secondary students preparing for exams with tutor support",
  },
  {
    title: "College Students",
    description:
      "Focused subject support and guidance for A-Level and advanced study.",
    highlights: ["A-Level Tuition", "Exam Preparation", "Study Skills"],
    image: "/images/collage.jpg",
    imageAlt: "College student receiving A-Level subject support",
  },
];

export const whyChooseUs = [
  {
    title: "Qualified Tutors",
    description:
      "Experienced educators who understand how students learn and develop confidence.",
  },
  {
    title: "Personalised Learning",
    description:
      "Every lesson is tailored to individual strengths, challenges and goals.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Choose from online or in-person learning to fit around family life.",
  },
  {
    title: "Proven Results",
    description:
      "Helping students improve grades, confidence and independent learning skills.",
  },
];

export const testimonials = [
  {
    quote:
      "My daughter went from a Grade 4 to a Grade 7 in Maths within six months. More importantly, she gained confidence and now enjoys the subject.",
    name: "Sarah Williams",
    role: "Parent of GCSE Student",
    initials: "SW",
  },
  {
    quote:
      "The personalised support made a huge difference. Lessons were engaging, structured and tailored exactly to what my son needed.",
    name: "James Thompson",
    role: "Parent of Year 8 Student",
    initials: "JT",
  },
  {
    quote:
      "Excellent communication, fantastic tutors and real results. We saw a noticeable improvement in both grades and confidence.",
    name: "Emma Richardson",
    role: "Parent of A-Level Student",
    initials: "ER",
  },
];

export const softwareLogos = [
  { name: "Primary", src: "" },
  { name: "KS2 SATs", src: "" },
  { name: "11+ Entrance", src: "" },
  { name: "GCSE", src: "" },
  { name: "A-Level", src: "" },
  { name: "Online Tuition", src: "" },
];

export const contactFaqs = [
  {
    question: "How quickly do you respond?",
    answer: "We aim to respond to all enquiries within one business day.",
  },
  {
    question: "Do you offer online tutoring?",
    answer:
      "Yes. We provide both online and in-person support depending on location and availability.",
  },
  {
    question: "Can I arrange a free assessment?",
    answer:
      "Yes. Every family can book a free introductory assessment before committing to regular sessions.",
  },
  {
    question: "What ages do you support?",
    answer: "We work with students from primary school through to GCSE and A-Level.",
  },
];

export const footerBadges = [
  "Primary Education",
  "GCSE Tuition",
  "A-Level Support",
  "Online Learning",
];

export const programmes = [
  {
    name: "Primary Foundations",
    description: "Support tailored to younger students building confidence in core subjects.",
    supportNote: "Ideal for building strong literacy, numeracy and learning habits.",
    features: [
      "Four 1-to-1 tutoring sessions",
      "Personalised learning plan",
      "Reading, writing & maths support",
      "Progress updates for parents",
      "Online or in-person options",
    ],
    highlighted: false,
  },
  {
    name: "GCSE Success",
    description: "Structured support for students preparing for GCSE examinations.",
    supportNote: "Focused revision, exam technique and confidence-building.",
    features: [
      "Everything in Primary Foundations",
      "GCSE subject tuition",
      "Exam preparation resources",
      "Homework & revision support",
      "Regular progress reviews",
    ],
    highlighted: true,
  },
  {
    name: "A-Level Achievement",
    description: "Advanced tutoring designed to support strong academic outcomes.",
    supportNote: "Subject-focused support for higher-level study and exams.",
    features: [
      "Everything in GCSE Success",
      "A-Level subject tuition",
      "Study skills & revision planning",
      "Exam technique coaching",
      "Flexible session scheduling",
    ],
    highlighted: false,
  },
];

export const team = [
  {
    name: "Sarah Ahmed",
    image: "/images/profile-sarah.png",
    role: "Primary Education Specialist",
    bio: "Supports younger learners with reading, writing, maths and confidence-building through calm, structured lessons.",
    initials: "SA",
  },
  {
    name: "James Thompson",
    image: "/images/james.png",
    role: "GCSE Maths Tutor",
    bio: "Helps secondary students strengthen core maths skills, prepare for exams and build confidence with problem-solving.",
    initials: "JT",
  },
  {
    name: "Rebecca Khan",
    image: "/images/rebecca.png",
    role: "English & Study Skills Tutor",
    bio: "Focuses on English, revision techniques and independent learning skills for GCSE and A-Level students.",
    initials: "RK",
  },
];