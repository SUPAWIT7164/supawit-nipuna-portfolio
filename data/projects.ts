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
    id: "rmuti-korat-building-control",
    organizationId: "rmuti-korat",
    title: "ระบบควบคุมอาคารอัจฉริยะ",
    tagline: "RMUTI Innovation Management System",
    description:
      "ระบบควบคุมอาคารอัจฉริยะบนผังพื้นที่จริงของอาคาร Innovation Ecosystem เลือกตึก โซน และห้อง แล้วเปิด–ปิดแอร์ ERV พัดลมระบายอากาศ และไฟได้จากแปลน พร้อมดูสถานะ จำนวนคน กล้อง CCTV และค่าเซ็นเซอร์แบบ Real-time",
    image: "/images/projects/rmuti-korat-control-air.png",
    screens: [
      {
        label: "ระบบปรับอากาศ",
        image: "/images/projects/rmuti-korat-control-air.png",
      },
      {
        label: "ระบบแลกเปลี่ยนอากาศ (ERV)",
        image: "/images/projects/rmuti-korat-control-erv.png",
      },
      {
        label: "ระบบแสงสว่าง",
        image: "/images/projects/rmuti-korat-control-lighting.png",
      },
      {
        label: "ห้องประชุม และ CCTV",
        image: "/images/projects/rmuti-korat-control-meeting.png",
      },
    ],
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Node.js",
      "Express",
      "Home Assistant",
      "Hikvision / NVR",
      "IoT",
      "REST API",
    ],
    responsibilities: [
      "พัฒนาหน้าผังควบคุมอาคาร เลือกตึก โซน ห้อง และควบคุมอุปกรณ์บนแปลน",
      "แยกโซนควบคุมตามระบบ: แอร์ ERV พัดลมระบายอากาศ ไฟ และห้องประชุม",
      "ทำปุ่มเปิด/ปิดทั้งหมด และสรุปจำนวนอุปกรณ์ที่ใช้งานอยู่",
      "แสดงตำแหน่งกล้อง CCTV และค่าเซ็นเซอร์ของพื้นที่บนผังเดียวกัน",
    ],
    challenges: [
      "วางไอคอนอุปกรณ์จำนวนมากให้ตรงตำแหน่งบนแปลนโดยไม่บังการใช้งาน",
      "ควบคุมอุปกรณ์หลายประเภทผ่าน Home Assistant ให้ตอบสนองแบบ Real-time",
      "สรุปสถานะเปิด–ปิดของอุปกรณ์หลายสิบจุดให้อ่านได้ทันที",
    ],
    results: [
      "ผู้ดูแลเปิด–ปิดแอร์ ERV และไฟจากผังอาคารได้จริง",
      "เห็นสถานะอุปกรณ์ จำนวนคน กล้อง และคุณภาพอากาศบนหน้าจอเดียว",
      "ลดการเดินตรวจสอบและสั่งงานอุปกรณ์ทีละจุดในอาคาร",
    ],
    featured: true,
  },
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
    id: "rmuti-surin-building-control",
    organizationId: "rmuti-surin",
    title: "ระบบควบคุมอาคารอัจฉริยะ",
    tagline: "ผังควบคุมไฟ แอร์ และ ERV แบบ Real-time",
    description:
      "ระบบควบคุมอาคารอัจฉริยะบนผังพื้นที่จริงของ Co-Working Space ชั้น 1 เปิด–ปิดไฟ แอร์ และ ERV ได้จากแปลน ดูจำนวนคนเข้าพื้นที่ และค่าเซ็นเซอร์อุณหภูมิ ความชื้น CO₂ PM2.5 ความดันอากาศแบบ Real-time",
    image: "/images/projects/rmuti-surin-building-control.png",
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Node.js",
      "Express",
      "Home Assistant",
      "IoT",
      "REST API",
    ],
    responsibilities: [
      "พัฒนาหน้าผังควบคุมอาคารให้เลือกตึก โซน และห้อง แล้วควบคุมอุปกรณ์บนแปลน",
      "เชื่อมสถานะไฟ แอร์ ERV และพัดลมระบายอากาศแบบ Real-time",
      "แสดงจำนวนคนเข้าพื้นที่และค่าเซ็นเซอร์สภาพแวดล้อมบนผังเดียวกัน",
    ],
    challenges: [
      "วางไอคอนอุปกรณ์ให้ตรงตำแหน่งบนแปลนโดยไม่บังการใช้งาน",
      "สรุปสถานะเปิด–ปิดของอุปกรณ์หลายชนิดให้อ่านได้ทันที",
      "อัปเดตเซ็นเซอร์และจำนวนคนโดยไม่ทำให้หน้าผังกระตุก",
    ],
    results: [
      "ผู้ดูแลเปิด–ปิดไฟ แอร์ และ ERV จากผังอาคารได้จริง",
      "เห็นจำนวนคนและคุณภาพอากาศของพื้นที่บนหน้าจอเดียว",
      "ลดการเดินตรวจสอบอุปกรณ์ทีละจุดในอาคาร",
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
    id: "psru-building-control",
    organizationId: "psru",
    title: "ระบบควบคุมอาคารอัจฉริยะ",
    tagline: "PSRU Room Management — ผังควบคุมอุปกรณ์",
    description:
      "ระบบควบคุมอาคารอัจฉริยะของมหาวิทยาลัยราชภัฏพิบูลสงคราม เลือกตึก โซน และห้อง แล้วเปิด–ปิดไฟและพัดลมระบายอากาศจากผัง 3D ของอาคารศูนย์อาหารทะเลแก้วนิเวศ ดูสถานะอุปกรณ์แบบ Real-time",
    image: "/images/projects/psru-building-control.png",
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Node.js",
      "Express",
      "Home Assistant",
      "IoT",
      "Microsoft SQL Server",
    ],
    responsibilities: [
      "พัฒนาหน้าผังควบคุมอาคาร เลือกตึก โซน ห้อง และควบคุมอุปกรณ์บนแปลน 3D",
      "แสดงไอคอนไฟและพัดลมบนผังตามสถานะเปิด–ปิดจริงของอุปกรณ์",
      "เชื่อมการควบคุมอุปกรณ์ผ่าน Home Assistant และ API ของระบบ",
    ],
    challenges: [
      "วางไอคอนอุปกรณ์ให้ตรงตำแหน่งบนผังโดยไม่บังรายละเอียดอาคาร",
      "สะท้อนสถานะเปิด–ปิดของอุปกรณ์หลายจุดได้ทันที",
    ],
    results: [
      "ผู้ดูแลเปิด–ปิดไฟและพัดลมจากผังอาคารได้จริง",
      "เห็นสถานะอุปกรณ์ของแต่ละชั้นและโซนในหน้าจอเดียว",
    ],
  },
  {
    id: "psru-shop-invoice",
    organizationId: "psru",
    title: "ระบบออกใบเสร็จให้ร้านค้า",
    tagline: "ใบแจ้งหนี้ค่าเช่า ค่าน้ำ ค่าไฟ จากมิเตอร์",
    description:
      "ระบบออกใบแจ้งหนี้ให้ร้านค้าในศูนย์อาหารทะเลแก้วนิเวศ คำนวณค่าเช่าพื้นที่ ค่าน้ำ และค่าไฟจากมิเตอร์จริง แสดงเลขอ่านก่อนหน้า/ปัจจุบัน หน่วยที่ใช้ อัตราต่อหน่วย ยอดรวมพร้อมตัวอักษรภาษาไทย และข้อมูลการโอนเงิน พิมพ์หรือดาวน์โหลดเป็น PDF ได้",
    image: "/images/projects/psru-shop-invoice.png",
    technologies: [
      "Vue.js 3",
      "Vuetify",
      "Node.js",
      "Express",
      "Microsoft SQL Server",
      "PDF",
      "REST API",
    ],
    responsibilities: [
      "พัฒนาหน้าใบแจ้งหนี้ของแต่ละร้านค้า พร้อมปุ่มพิมพ์และดาวน์โหลด PDF",
      "ดึงเลขมิเตอร์น้ำและไฟฟ้าจากระบบ คำนวณหน่วยที่ใช้และยอดเงินตามอัตราต่อหน่วย",
      "แสดงยอดรวมเป็นตัวเลขและตัวอักษรภาษาไทย พร้อมข้อมูลบัญชีสำหรับโอนเงิน",
    ],
    challenges: [
      "คำนวณค่าน้ำค่าไฟจากเลขมิเตอร์ก่อนหน้าและปัจจุบันให้ถูกต้องทุกร้าน",
      "จัดหน้าใบแจ้งหนี้ให้พิมพ์และส่งออกเป็น PDF ได้ตรงรูปแบบ",
    ],
    results: [
      "ออกใบแจ้งหนี้ให้ร้านค้าได้จากระบบ ไม่ต้องคำนวณเอง",
      "ลดความผิดพลาดจากการจดมิเตอร์และคิดเงินด้วยมือ",
    ],
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
