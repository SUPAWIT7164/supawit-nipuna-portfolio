import type { ContactLink, Education, NavItem, Profile } from "@/types";

export const profile: Profile = {
  name: "Supawit Nipuna",
  firstName: "Supawit",
  thaiName: "ศุภวิชญ์ นิปุณะ",
  nickname: "เฟิร์ส",
  title: "Developer",
  headline:
    "สวัสดีครับ ผมชื่อ ศุภวิชญ์ นิปุณะ (เฟิร์ส) — Developer ที่พัฒนาซอฟต์แวร์และระบบอาคารอัจฉริยะ",
  introduction:
    "มีประสบการณ์ 2 ปีในการพัฒนาซอฟต์แวร์และเว็บแอปพลิเคชันด้วย PHP, Vue.js, JavaScript, Laravel และ Node.js พร้อมทักษะการจัดการฐานข้อมูล Microsoft SQL Server และ MySQL เชี่ยวชาญทั้ง Front-end และ Back-end โดยมุ่งเน้นการสร้างระบบที่มีประสิทธิภาพ ขยายตัวได้ดี และพร้อมใช้งานจริง",
  email: "supawitn7164@gmail.com",
  phone: "064-845-8618",
  phoneHref: "tel:+66648458618",
  location: "เชียงใหม่, ประเทศไทย",
  address: "บ้านเลขที่ 39 หมู่ที่ 13 ตำบลหางดง อำเภอฮอด จังหวัดเชียงใหม่ 50240",
  github: "SUPAWIT7164",
  githubUrl: "https://github.com/SUPAWIT7164",
  linkedin: "supawit-nipuna-a66b7031b",
  linkedinUrl: "https://www.linkedin.com/in/supawit-nipuna-a66b7031b/",
  resumeUrl: "/resume.pdf",
  photoUrl: "/images/profile.png",
  availability: "Open to opportunities",
};

export const education: Education[] = [
  {
    id: "maejo",
    school: "มหาวิทยาลัยแม่โจ้",
    degree: "วิทยาศาสตรบัณฑิต",
    field: "วิทยาการคอมพิวเตอร์",
    startDate: "2020",
    endDate: "2024",
  },
];

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: "phone",
  },
  {
    id: "github",
    label: "GitHub",
    value: `@${profile.github}`,
    href: profile.githubUrl,
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: "linkedin",
  },
  {
    id: "location",
    label: "Location",
    value: profile.location,
    href: "#contact",
    icon: "map-pin",
  },
];

export const aboutSummary = [
  `สวัสดีครับ ผมชื่อ ${profile.thaiName} (${profile.nickname}) มีประสบการณ์ 2 ปีในการพัฒนาซอฟต์แวร์และเว็บแอปพลิเคชันด้วย PHP, Vue.js, JavaScript, Laravel และ Node.js พร้อมทักษะการจัดการฐานข้อมูล Microsoft SQL Server และ MySQL อย่างแข็งแกร่ง`,
  "มีความเชี่ยวชาญทั้ง Front-end และ Back-end โดยมุ่งเน้นการสร้างระบบที่มีประสิทธิภาพและขยายตัวได้ดี รวมถึงสามารถทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ",
  "ปัจจุบันทำงานที่บริษัท เอลซี คอร์ปอเรชัน จำกัด ในตำแหน่ง Developer ดูแลระบบจองห้องประชุม ระบบบริหารอาคารอัจฉริยะ การเชื่อมต่อ IoT, Face Recognition, SSO และการ Deploy ระบบ Production",
];
