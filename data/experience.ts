import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "lc-corporation",
    company: "บริษัท เอลซี คอร์ปอเรชัน จำกัด",
    role: "Developer",
    location: "ประเทศไทย",
    startDate: "กรกฎาคม 2024",
    endDate: "ปัจจุบัน",
    summary:
      "ออกแบบ พัฒนา และติดตั้งระบบจองห้องประชุมและระบบบริหารอาคารอัจฉริยะ รวมถึงเชื่อมต่อ IoT, CCTV, SSO และดูแลระบบ Production",
    achievements: [
      "ออกแบบ พัฒนา และติดตั้งระบบจองห้องประชุมและระบบบริหารอาคารอัจฉริยะ ด้วย Vue.js 3, Node.js/Express และ REST API",
      "พัฒนา Frontend และร่วมพัฒนา Backend Service สำหรับการจองห้อง การอนุมัติ รายงาน และการควบคุมอุปกรณ์แบบ Real-time",
      "เชื่อมต่อ Home Assistant API เพื่อควบคุมระบบไฟฟ้า เครื่องปรับอากาศ และ ERV ผ่าน Web Application",
      "พัฒนาและเชื่อมต่อ Hikvision ISAPI สำหรับ Snapshot จากกล้องวงจรปิด ควบคุมประตู และ People Counting",
      "พัฒนาระบบ Face Recognition และ Image Processing สำหรับลงทะเบียนและตรวจสอบสิทธิ์การเข้าใช้งานพื้นที่",
      "เชื่อมต่อระบบยืนยันตัวตนกับ LDAP/Active Directory และ Microsoft OAuth (Azure AD) เพื่อรองรับ Single Sign-On (SSO)",
      "Deploy และดูแลระบบ Production บน Windows Server, IIS และ iisnode รวมถึงตั้งค่า Application Pool, URL Rewrite และ SSL",
      "จัดการ Environment Configuration, Database (MySQL และ SQL Server) และเครือข่ายของระบบ",
      "พัฒนา PowerShell Script สำหรับช่วย Deploy ตรวจสอบสถานะ และงานดูแลรักษาระบบอัตโนมัติ",
      "จัดการ Virtual Machine บน Hyper-V เพื่อแยก Web Application, Database, Home Assistant และ Hik-Central",
      "วิเคราะห์ แก้ไข และตรวจสอบปัญหาด้าน Application, Server, Network และอุปกรณ์ IoT ภายในองค์กร",
    ],
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Express",
      "REST API",
      "MySQL",
      "SQL Server",
      "Home Assistant",
      "Hikvision ISAPI",
      "Azure AD",
      "IIS",
      "Hyper-V",
    ],
  },
];
