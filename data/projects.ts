import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "agnos-patient-portal",
    title: "AGNOS Patient Portal",
    tagline: "พอร์ทัลผู้ป่วยแบบเรียลไทม์",
    description:
      "ระบบ Patient Portal สำหรับแบบฟอร์มผู้ป่วยและมุมมองของเจ้าหน้าที่ รองรับการทำงานแบบ Real-time ด้วย Web Application",
    image: "/images/projects/agnos-patient-portal.png",
    technologies: ["Next.js", "TypeScript", "Socket.IO", "JavaScript"],
    responsibilities: [
      "พัฒนาหน้าจอสำหรับผู้ป่วยและเจ้าหน้าที่",
      "เชื่อมต่อการอัปเดตข้อมูลแบบ Real-time",
      "ปรับปรุงประสบการณ์ใช้งานให้ชัดเจนและพร้อมใช้งานจริง",
    ],
    challenges: [
      "จัดการสถานะข้อมูลแบบ Real-time ให้เสถียร",
      "ออกแบบ UI ให้ใช้งานง่ายสำหรับผู้ใช้หลากหลายกลุ่ม",
    ],
    results: [
      "ส่งมอบพอร์ทัลที่รองรับการใช้งานจริง",
      "เพิ่มความรวดเร็วในการดูและอัปเดตข้อมูลผู้ป่วย",
    ],
    featured: true,
    githubUrl: "https://github.com/SUPAWIT7164/agnos-patient-portal",
  },
  {
    id: "smart-room-management",
    title: "Smart Room Management Portal",
    tagline: "ระบบบริหารห้องและอาคารอัจฉริยะ",
    description:
      "พอร์ทัลสำหรับบริหารห้องและอาคารอัจฉริยะ เชื่อมต่ออุปกรณ์ IoT ผ่าน Home Assistant เพื่อควบคุมไฟ แอร์ และ ERV แบบ Real-time",
    image: "/images/projects/smart-room-management.png",
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Express",
      "Home Assistant",
      "REST API",
      "MySQL",
    ],
    responsibilities: [
      "ออกแบบและพัฒนาระบบบริหารอาคารอัจฉริยะ",
      "เชื่อมต่อ Home Assistant API เพื่อควบคุมอุปกรณ์ภายในอาคาร",
      "พัฒนา Automation สำหรับติดตามสถานะอุปกรณ์แบบ Real-time",
    ],
    challenges: [
      "เชื่อมต่อหลายระบบและอุปกรณ์ให้ทำงานร่วมกันอย่างเสถียร",
      "แสดงสถานะอุปกรณ์แบบ Real-time โดยไม่ทำให้ UI รก",
    ],
    results: [
      "ควบคุมไฟ แอร์ และ ERV ผ่าน Web Application ได้จริง",
      "ช่วยทีมปฏิบัติการติดตามสถานะอาคารได้ชัดเจนขึ้น",
    ],
  },
  {
    id: "room-booking-system",
    title: "Room Booking System",
    tagline: "ระบบจองห้องประชุมครบวงจร",
    description:
      "ระบบจองห้องประชุมสำหรับการจอง การอนุมัติ รายงาน และการเชื่อมต่ออุปกรณ์ รองรับการใช้งานจริงในองค์กร",
    image: "/images/projects/room-booking-system.png",
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Express",
      "REST API",
      "MySQL",
      "SQL Server",
    ],
    responsibilities: [
      "พัฒนา Frontend และร่วมพัฒนา Backend สำหรับการจองห้องและการอนุมัติ",
      "ออกแบบ flow การจอง รายงาน และการจัดการข้อมูลภายในระบบ",
      "Deploy และดูแลระบบบน Windows Server / IIS",
    ],
    challenges: [
      "รองรับการจองพร้อมกันหลายรายการอย่างถูกต้อง",
      "เชื่อมต่อ Frontend, Backend และฐานข้อมูลให้เสถียรบน Production",
    ],
    results: [
      "ส่งมอบระบบจองห้องที่ใช้งานจริงในองค์กร",
      "ลดความซับซ้อนของกระบวนการจองและอนุมัติ",
    ],
  },
  {
    id: "building-management-dashboard",
    title: "Building Management Dashboard",
    tagline: "แดชบอร์ดบริหารอาคารและอุปกรณ์",
    description:
      "แดชบอร์ดรวมข้อมูลอาคาร กล้องวงจรปิด การควบคุมประตู และ People Counting ผ่านการเชื่อมต่อ Hikvision ISAPI และ Hik-Central",
    image: "/images/projects/building-management-dashboard.png",
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Hikvision ISAPI",
      "Hik-Central",
      "CCTV / NVR",
      "REST API",
    ],
    responsibilities: [
      "เชื่อมต่อ CCTV, NVR, Hik-Central และระบบควบคุมประตู",
      "ดึง Snapshot จากกล้องและแสดงข้อมูล People Counting",
      "จัดการ VM บน Hyper-V สำหรับแยกบริการของระบบ",
    ],
    challenges: [
      "รวมหลายระบบความปลอดภัยเข้ากับแพลตฟอร์มเดียว",
      "ดูแลความเสถียรของอุปกรณ์และเครือข่ายร่วมกับแอปพลิเคชัน",
    ],
    results: [
      "ทำให้ทีมบริหารอาคารมองเห็นสถานะและเหตุการณ์สำคัญได้ในที่เดียว",
      "รองรับการควบคุมประตูและการเฝ้าระวังผ่านระบบกลาง",
    ],
  },
  {
    id: "iot-dashboard",
    title: "IoT & Access Control Platform",
    tagline: "IoT, Face Recognition และ SSO",
    description:
      "แพลตฟอร์มเชื่อมต่อ IoT, Face Recognition, Image Processing และการยืนยันตัวตนด้วย LDAP/Active Directory และ Microsoft OAuth (Azure AD) สำหรับ SSO",
    image: "/images/projects/iot-dashboard.png",
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Face Recognition",
      "Image Processing",
      "Azure AD",
      "LDAP",
      "IoT",
    ],
    responsibilities: [
      "พัฒนาระบบ Face Recognition สำหรับลงทะเบียนและตรวจสอบสิทธิ์เข้าใช้งาน",
      "เชื่อมต่อ SSO ด้วย LDAP/AD และ Microsoft OAuth",
      "วิเคราะห์และแก้ไขปัญหา Application, Server, Network และ IoT",
    ],
    challenges: [
      "รักษาความถูกต้องของการยืนยันตัวตนและความปลอดภัยของระบบ",
      "เชื่อมต่อหลายบริการภายนอกให้ทำงานร่วมกันอย่างน่าเชื่อถือ",
    ],
    results: [
      "รองรับการเข้าถึงพื้นที่ด้วย Face Recognition",
      "เปิดใช้ Single Sign-On สำหรับผู้ใช้งานในองค์กร",
    ],
  },
];
