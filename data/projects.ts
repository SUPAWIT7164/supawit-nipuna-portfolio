import type { Project, ProjectOrganization } from "@/types";

export const projectOrganizations: ProjectOrganization[] = [
  {
    id: "rmuti-korat",
    name: "มหาวิทยาลัยราชมงคลอีสาน นครราชสีมา",
    shortName: "RMUTI นครราชสีมา",
    theme: "orange",
  },
  {
    id: "rmuti-surin",
    name: "มหาวิทยาลัยราชมงคลอีสาน วิทยาเขตสุรินทร์",
    shortName: "RMUTI สุรินทร์",
    theme: "blue",
  },
  {
    id: "psru",
    name: "มหาวิทยาลัยราชภัฏพิบูลสงคราม",
    shortName: "PSRU",
    theme: "green",
  },
];

export const projects: Project[] = [
  {
    id: "rmuti-korat-digital-twin",
    organizationId: "rmuti-korat",
    title: "Digital Twin & Smart Building Kiosk",
    tagline: "แดชบอร์ด Digital Twin และจอ Kiosk",
    description:
      "แดชบอร์ด Digital Twin และจอ Kiosk สำหรับอาคารอัจฉริยะ แสดงแปลน เซ็นเซอร์ พลังงาน/โซลาร์ และสภาพแวดล้อมแบบ Real-time ควบคุมไฟ แอร์ ERV ผ่าน Home Assistant พร้อมดู snapshot CCTV จาก NVR บนจอสาธารณะ",
    image: "/images/projects/rmuti-korat-digital-twin.png",
    technologies: [
      "Vue.js 3",
      "Node.js",
      "Home Assistant",
      "Hikvision / NVR",
      "Kiosk",
      "Digital Twin",
      "IoT",
    ],
    responsibilities: [
      "พัฒนาแดชบอร์ด Digital Twin และจอ Kiosk สำหรับอาคารอัจฉริยะ",
      "เชื่อมเซ็นเซอร์ พลังงาน โซลาร์ และสภาพแวดล้อมแบบ Real-time",
      "ควบคุมไฟ แอร์ ERV ผ่าน Home Assistant และดึง snapshot CCTV จาก NVR",
    ],
    challenges: [
      "รวมแปลน เซ็นเซอร์ พลังงาน และกล้องให้อ่านง่ายบนจอสาธารณะ",
      "ควบคุมอุปกรณ์ผ่าน Home Assistant ให้เสถียรแบบ Real-time",
      "แสดง snapshot จาก NVR โดยไม่กระทบประสิทธิภาพของจอ Kiosk",
    ],
    results: [
      "มีจอสรุปสถานะอาคาร พลังงาน และสภาพแวดล้อมแบบเรียลไทม์",
      "ควบคุมอุปกรณ์ในอาคารผ่านเว็บและจอ Kiosk ได้จริง",
      "ผู้ดูแลดูภาพรวมอาคารและกล้องได้จากที่เดียว",
    ],
    featured: true,
  },
  {
    id: "rmuti-surin-room-booking",
    organizationId: "rmuti-surin",
    title: "Room Booking System",
    tagline: "ระบบจองห้องประชุมและการอนุมัติ",
    description:
      "ระบบจองห้องประชุมสำหรับการจอง การอนุมัติ รายงาน และการจัดการห้อง/สิทธิ์ รองรับการใช้งานจริงในองค์กร",
    image: "/images/projects/rmuti-surin-room-booking.png",
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Pinia",
      "Node.js",
      "Express",
      "MySQL",
      "FullCalendar",
      "JWT",
    ],
    responsibilities: [
      "พัฒนา Frontend และร่วมพัฒนา Backend สำหรับการจองห้อง การอนุมัติ และรายงาน",
      "ทำปฏิทินจอง ตรวจชนเวลา Auto-approve / Auto-cancel",
      "จัดการอาคาร พื้นที่ ห้อง สิทธิ์ผู้ใช้ และโควต้าการใช้งาน",
      "เชื่อมรายงานการเข้าใช้บริการและการใช้งานห้อง",
    ],
    challenges: [
      "ออกแบบ flow จอง–อนุมัติ–รายงานให้ง่ายต่อผู้ใช้จริง",
      "ป้องกันการจองซ้อนและจัดการสิทธิ์หลายระดับ (Super Admin / Admin / User)",
      "ให้ข้อมูลปฏิทินและรายงานสอดคล้องกันระหว่าง Frontend กับ API",
    ],
    results: [
      "ได้ระบบจองห้องใช้งานจริงในองค์กร",
      "ผู้ดูแลติดตามประวัติ จองซ้อน และรายงานการใช้งานได้จากที่เดียว",
      "ลดงานอนุมัติด้วย Auto-approve สำหรับห้องที่กำหนด",
    ],
  },
  {
    id: "rmuti-surin-digital-twin",
    organizationId: "rmuti-surin",
    title: "Smart Campus Digital Twin (Kiosk)",
    tagline: "จอ Digital Twin เต็มจอสำหรับคิออสก์",
    description:
      "จอ Digital Twin แบบเต็มจอสำหรับคิออสก์ในอาคาร แสดงพลังงาน โซลาร์ น้ำ การเข้าใช้พื้นที่ และแนวโน้มรายวัน/รายเดือน โดยดึงข้อมูลจริงจาก API และฐานข้อมูล",
    image: "/images/projects/rmuti-surin-digital-twin.png",
    technologies: [
      "Vue.js 3",
      "Pinia",
      "Vuetify",
      "ApexCharts",
      "Node.js",
      "Express",
      "SQL Server",
      "MySQL",
    ],
    responsibilities: [
      "ออกแบบและพัฒนาจอ /kiosk/digital-twin สำหรับแสดงผลสาธารณะ",
      "เชื่อม KPI พลังงาน น้ำ โซลาร์ ค่าใช้จ่าย และจำนวนคนจากมิเตอร์/Stored Procedure จริง",
      "ทำกราฟย้อนหลัง พร้อม % เทียบวันก่อนและเดือนก่อน",
      "ทำ polling อัตโนมัติ และแสดงสถานะออฟไลน์/ข้อมูลไม่ครบอย่างชัดเจน",
    ],
    challenges: [
      "รวมหลายแหล่งข้อมูลบนจอเดียวให้อ่านง่ายบนจอใหญ่",
      "จัด layout และกราฟให้เสถียร ไม่ตัดป้ายแกน ไม่พังเมื่อความสูงจอเปลี่ยน",
      "แสดงเฉพาะค่าที่มีจริง — ถ้าไม่มีข้อมูลต้องเป็น -- ไม่แต่ง KPI",
    ],
    results: [
      "ได้จอ Smart Campus สำหรับโชว์ในอาคารแบบเรียลไทม์",
      "ผู้ดูแลและผู้มาเยือนเห็นภาพรวมพลังงาน น้ำ และการเข้าใช้พื้นที่ได้ทันที",
      "ลดการเปิดหลายรายงาน — รวมข้อมูลสำคัญไว้บนจอเดียว",
    ],
    featured: true,
  },
  {
    id: "psru-smart-campus-kiosk",
    organizationId: "psru",
    title: "PSRU Smart Campus Kiosk",
    tagline: "จออาคารอัจฉริยะสำหรับทีวี 1920×1080",
    description:
      "จอแสดงผลอาคารอัจฉริยะสำหรับมหาวิทยาลัยราชภัฏพิบูลสงคราม ออกแบบสำหรับทีวี 1920×1080 ดึงข้อมูลจริงจากมิเตอร์ไฟฟ้า มิเตอร์น้ำ เซนเซอร์คุณภาพอากาศ กล้องนับคน และบันทึกขยะ แล้วสรุปเป็นแดชบอร์ดสาธารณะที่อัปเดตเองโดยไม่ต้องล็อกอิน",
    image: "/images/projects/psru-kiosk-dashboardreport.png",
    screens: [
      {
        label: "Dashboard Report",
        route: "/kiosk/dashboardreport",
        image: "/images/projects/psru-kiosk-dashboardreport.png",
      },
      {
        label: "Digital Twin",
        route: "/kiosk/digitaltwin",
        image: "/images/projects/psru-kiosk-digitaltwin.png",
      },
      {
        label: "Co-Working 1",
        route: "/kiosk/coworking1",
        image: "/images/projects/psru-kiosk-coworking-1.png",
      },
      {
        label: "Co-Working 2",
        route: "/kiosk/coworking2",
        image: "/images/projects/psru-kiosk-coworking-2.png",
      },
      {
        label: "Building",
        route: "/kiosk/building",
        image: "/images/projects/psru-kiosk-building.png",
      },
      {
        label: "Air Quality",
        route: "/kiosk/airquality",
        image: "/images/projects/psru-kiosk-airquality.png",
      },
      {
        label: "Energy",
        route: "/kiosk/energy",
        image: "/images/projects/psru-kiosk-energy.png",
      },
      {
        label: "Waste",
        route: "/kiosk/waste",
        image: "/images/projects/psru-kiosk-waste.png",
      },
    ],
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Node.js",
      "Express",
      "Microsoft SQL Server",
      "REST API",
      "IIS / iisnode",
      "Home Assistant",
      "Hikvision",
      "IQAir",
    ],
    responsibilities: [
      "ออกแบบและพัฒนาจอ kiosk ทั้งชุดให้เป็นแดชบอร์ดเต็มจอสำหรับทีวี",
      "เชื่อมข้อมูลมิเตอร์ พลังงาน น้ำ คุณภาพอากาศ จำนวนคน และบันทึกขยะเข้ากับ API สาธารณะ",
      "จัดรูปแบบกราฟ ตัวเลข และสีเปรียบเทียบให้อ่านได้จากระยะจอทีวี",
      "ปรับคิวรีและวิธีโหลดกราฟให้แต่ละการ์ดแสดงผลได้ภายในไม่กี่วินาที",
    ],
    challenges: [
      "วางเลย์เอาต์คงที่สำหรับจอทีวี ไม่พึ่งความสูงแบบเปอร์เซ็นต์ที่เรนเดอร์พังบนป้ายดิจิทัล",
      "แยกคำขอกราฟเป็นส่วน ๆ และสรุปค่าจากฐานข้อมูลเป็นช่วงเวลาเพื่อให้จอขึ้นเร็ว",
      "ถ้าเดือนปัจจุบันยังไม่มีข้อมูลขยะ ระบบต้องใช้เดือนล่าสุดที่มีบันทึกแทนการโชว์ศูนย์",
    ],
    results: [
      "อาคารมีจอสรุปพลังงาน ขยะ คุณภาพอากาศ และการใช้งานพื้นที่โดยไม่ต้องเปิดระบบหลังบ้าน",
      "ผู้ชมเห็นทั้งค่าปัจจุบันและทิศทางเทียบช่วงก่อน เป็นคำว่าเพิ่มขึ้นหรือลดลง",
      "หน้าจอชุดเดียวกันใช้ซ้ำได้หลายจุด โดยเปลี่ยนเฉพาะชุดข้อมูลของแต่ละห้องหรือแต่ละเรื่อง",
    ],
    featured: true,
  },
];
