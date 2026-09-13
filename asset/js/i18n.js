(function () {
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
      },
      hero: {
        greeting: "Hello, I'm",
        role: "Full-Stack Developer",
        description:
          "Specializing in Node.js, TypeScript, React, Next.js, and Python. I architect and implement scalable, high-performance web applications and Server-Driven UI systems, seamlessly bridging the gap between complex backend services and beautiful user interfaces.",
      },
      section: {
        about: "About Me",
        skills: "Technical Expertise",
        projects: "Featured Projects",
        experience: "Experience",
        contact: "Get In Touch",
      },
      about: {
        name: "Khoffan Leemanan",
        degree: "Computer Engineering, Prince of Songkla University",
        p1: "I am a Computer Engineering graduate from Prince of Songkla University with a passion for building robust software solutions. As a Full-stack Developer, I specialize in modern JavaScript and TypeScript web development with Next.js, React, and Node.js, designing system architectures that are functional, maintainable, and scalable.",
        p2: "I actively use AI both to accelerate my development workflow and to build smarter products, from a RAG chatbot powered by a local LLM (Ollama) to NLP and OCR features in real applications. I also have a solid background in Server-Driven UI (SDUI), backend development with Go and MongoDB, and cross-platform apps with Flutter.",
        skillsHeader: "Skills & Tools",
      },
      skills: {
        frontendTitle: "Frontend & Mobile",
        backendTitle: "Backend & Database",
        toolsTitle: "Tools & Others",
        frontend: {
          items: {
            1: "Flutter (Expert)",
            2: "ReactJS / VueJS",
            3: "Server-Driven UI",
            4: "State Management (Bloc/Riverpod)",
          },
        },
        backend: {
          items: {
            1: "Go (Golang) / Python",
            2: "Node.js / NestJS / ExpressJS",
            3: "MongoDB / Firebase",
            4: "RESTful API Design",
          },
        },
        tools: {
          items: {
            1: "Git / GitHub",
            2: "Docker / Kubernetes",
            3: "TypeScript / JavaScript (ES6+)",
            4: "JS Tools (Vite / Webpack / NPM)",
            5: "Agile / Scrum",
          },
        },
      },
      projects: {
        ragChatbot: {
          title: "Local AI RAG Chatbot for Government Website",
          role: "Full-stack Developer",
          desc: "Built an AI chatbot for a government organization's website, powered by a local LLM via Ollama with Retrieval-Augmented Generation (RAG) to answer questions from the organization's own data without sending it to external AI services. Backend built with Node.js and Express, with data stored in MySQL.",
          tech: {
            1: "Node.js",
            2: "Express",
            3: "Ollama",
            4: "Local LLM",
            5: "RAG",
            6: "MySQL",
          },
        },
        tourismCms: {
          title: "Tourism Promotion CMS",
          role: "Full-stack Developer",
          desc: "Developed a content management system with Next.js for creating and publishing content that promotes local tourist attractions, with MySQL as the data store.",
          tech: {
            1: "Next.js",
            2: "MySQL",
            3: "CMS",
          },
        },
        carDetection: {
          title: "Car Detection Script (Lab)",
          role: "Python Developer",
          desc: "An experimental Python script that detects cars and records detection results in a SQLite database for further analysis.",
          tech: {
            1: "Python",
            2: "SQLite",
            3: "Computer Vision",
          },
        },
        cms: {
          title: "Custom CMS with Server-Driven UI",
          role: "Lead Front-end Developer",
          desc: "Designed an innovative CMS architecture using Flutter Web, Go, and MongoDB. Implemented a Server-Driven UI Protocol (JSON-to-Widget) that allows administrators to modify layouts and logic in real-time, effectively reducing the deployment cycle.",
          tech: {
            1: "Flutter Web",
            2: "Go",
            3: "MongoDB",
            4: "SDUI",
          },
        },
        blog: {
          title: "Interactive Web Blog Platform",
          role: "Full-stack JavaScript Developer",
          desc: "Built a complete content management ecosystem using Node.js and React/Vue with real-time updates, responsive reading experience, and a scalable backend.",
          tech: {
            1: "Node.js",
            2: "ReactJS/VueJS",
            3: "MongoDB",
            4: "Express/Nest",
          },
        },
        autoh: {
          title: "AutoH – Workspace Automation Engine",
          role: "Python Developer",
          desc: "Engineered an advanced Windows automation tool for customizing work environments via Global Hotkeys. Features Multi-Mode workspace switching, subprocess isolation, debounce logic, mutex UI lock, and a custom task queue for safe shutdowns.",
          tech: {
            1: "Python",
            2: "Flet",
            3: "Event-Driven",
            4: "Subprocess",
            5: "psutil",
            6: "System Hooks",
          },
        },
        pos: {
          title: "High-Performance POS System",
          role: "Full-stack Developer",
          desc: "Engineered a robust transaction system capable of handling high-concurrency requests using Go goroutines and optimized MongoDB schemas to ensure sub-200ms response times.",
          tech: {
            1: "Go",
            2: "MongoDB",
            3: "Flutter",
            4: "WebSocket",
          },
        },
        health: {
          title: "Health Care Management Platform",
          role: "Front-end Developer",
          desc: "Architected a precision-critical UI and responsive interfaces ensuring data integrity for personal health records, with tight API contracts and type-safe models.",
          tech: {
            1: "Flutter",
            2: "API Design",
            3: "Data Visualization",
          },
        },
        molldini: {
          title: "Multi-Merchant E-Commerce Platform",
          role: "Full-stack Developer",
          desc: "Built a full-stack multi-merchant solution with RBAC, CSV bulk import, merchant dashboard, and atomic transactions using Prisma + PostgreSQL.",
          tech: {
            1: "React (Vite)",
            2: "Node.js",
            3: "TypeScript",
            4: "PostgreSQL",
            5: "Prisma",
            6: "Redux Toolkit",
          },
        },
        jodnid: {
          title: "JODNID – LINE Expense Chat Bot",
          role: "Full-stack Developer",
          desc: "JodNid is a LINE-based personal finance assistant that records income and expenses via chat. Leveraging NLP and OCR, it extracts data from messages and receipts and provides a compact LIFF dashboard for quick insights.",
          tech: {
            1: "LINE LIFF",
            2: "NLP",
            3: "OCR",
            4: "Python/Node.js",
            5: "LIFF Dashboard",
          },
        },
      },
      purchase: {
        title: "Purchase Assistant",
        desc: "A mobile application for managing purchase requests within dormitories, allowing users to act as buyers or couriers. Built with Flutter and Firebase.",
      },
      portfolio: {
        title: "Portfolio",
        desc: "Personal portfolio website showcasing developer information, projects, and experience. Built using HTML and CSS.",
      },
      skilllevel: {
        excellent: "Excellent",
        intermediate: "Intermediate",
        good: "Good",
        beginner: "Beginner",
      },
      experience: {
        bullets: {
          b1: "Health Care Project: Developed UI and designed data schema for assigned features.",
          b2: "POS System: Designed APIs and MongoDB schemas; backend in Go and frontend in Flutter Web.",
          b3: "Custom CMS: Designed UI/UX and server-driven UI system to render JSON into Flutter Web pages.",
        },
        roleDate: "Front-end Developer (Jan 2025 - Present)",
        p1: "Core Responsibilities: Leading frontend development, designing business logic and schemas, and building web applications with Flutter.",
        satunPao: {
          date: "July 2026 - Present",
          title: "Assistant Computer Technical Officer",
          company: "Satun Provincial Administrative Organization",
          p1: "Developing AI and web solutions for the organization, including a RAG chatbot powered by a local LLM (Ollama) on the organization's website, a Next.js CMS for promoting local tourist attractions, and an experimental Python script for car detection.",
        },
        tcc: {
          date: "April 2026 - June 2026",
          title: "Full-stack Developer",
          company: "TCC TEchnology and digital",
          p1: "Architected and implemented end-to-end solutions, simultaneously developing both backend and frontend systems while designing feature-specific architectures and comprehensive system workflows.",
        },
        nicetynine: {
          date: "Jan 2025 - March 2026",
          title: "Front-end Developer (Flutter Specialist)",
          company: "Nicetynine",
          p1: "Leading the frontend development of enterprise-scale applications using Flutter. Architecting Server-Driven UI systems and collaborating with cross-functional teams to deliver high-quality software solutions.",
        },
      },
      contact: {
        mailSubject: "Job inquiry",
        placeholder: { name: "Your Name", email: "Your Email", message: "Your Message" },
      },
      contactSection: {
        title: "Let's Talk",
        description:
          "Open for opportunities in Senior Full-stack Development or Flutter Specialist roles.",
      },
      alerts: { formSuccess: "Saved successfully!", formError: "An error occurred!" },
      status: { sending: "Sending..." },
      footer: { copyright: "© 2025 Khoffan Leemanan. All Rights Reserved." },
      social: { github: "GitHub", facebook: "Facebook" },
      meta: {
        title: "Khoffan Leemanan | Full-stack Developer · Next.js & AI",
      },
      btn: {
        viewWork: "View My Work",
        contact: "Contact Me",
        sendMessage: "Send Message",
        resume: "Download Resume",
      },
      pages: { projectsTitle: "Projects", experiencesTitle: "Experiences" },
    },
    th: {
      nav: {
        home: "หน้าแรก",
        about: "เกี่ยวกับ",
        skills: "ทักษะ",
        projects: "โปรเจค",
        experience: "ประสบการณ์",
        contact: "ติดต่อ",
      },
      hero: {
        greeting: "สวัสดีครับ, ผมคือ",
        role: "Full-Stack Developer",
        description:
          "เชี่ยวชาญการพัฒนาด้วย Node.js, TypeScript, React, Next.js และ Python มีความเชี่ยวชาญในการออกแบบและพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพสูง ตลอดจนสถาปัตยกรรม Server-Driven UI เพื่อเชื่อมต่อระบบบริการหลังบ้านที่ซับซ้อนเข้ากับหน้าจอผู้ใช้งานที่สวยงามได้อย่างไร้รอยต่อ",
      },
      btn: {
        viewWork: "ดูผลงาน",
        contact: "ติดต่อผม",
        sendMessage: "ส่งข้อความ",
        resume: "ดาวน์โหลดเรซูเม่",
      },
      section: {
        about: "เกี่ยวกับฉัน",
        skills: "ความเชี่ยวชาญทางเทคนิค",
        projects: "โปรเจคเด่น",
        experience: "ประสบการณ์",
        contact: "ติดต่อ",
      },
      about: {
        name: "Khoffan Leemanan",
        degree: "สาขาวิศวกรรมคอมพิวเตอร์, มหาวิทยาลัยสงขลานครินทร์",
        p1: "ผมจบวิศวกรรมคอมพิวเตอร์จากมหาวิทยาลัยสงขลานครินทร์ มีความหลงใหลในการสร้างซอฟต์แวร์ที่แข็งแรง ในฐานะ Full-stack Developer ผมเชี่ยวชาญการพัฒนาเว็บด้วย JavaScript และ TypeScript โดยเฉพาะ Next.js, React และ Node.js พร้อมออกแบบสถาปัตยกรรมระบบที่ใช้งานได้จริง ดูแลรักษาง่าย และรองรับการขยายตัว",
        p2: "ผมนำ AI มาใช้ทั้งเพื่อเร่งกระบวนการพัฒนาและสร้างผลิตภัณฑ์ที่ชาญฉลาดขึ้น ตั้งแต่แชทบอท RAG ที่ทำงานด้วย Local LLM (Ollama) ไปจนถึงฟีเจอร์ NLP และ OCR ในแอปพลิเคชันจริง นอกจากนี้ยังมีพื้นฐานด้าน Server-Driven UI (SDUI), การพัฒนา backend ด้วย Go และ MongoDB รวมถึงการพัฒนาแอปข้ามแพลตฟอร์มด้วย Flutter",
        skillsHeader: "ทักษะ และ เครื่องมือ",
      },
      projects: {
        ragChatbot: {
          title: "แชทบอท AI (Local LLM + RAG) สำหรับเว็บไซต์หน่วยงาน",
          desc: "พัฒนาแชทบอท AI บนเว็บไซต์ของหน่วยงานราชการ ทำงานด้วย Local LLM ผ่าน Ollama ร่วมกับเทคนิค RAG (Retrieval-Augmented Generation) เพื่อตอบคำถามจากข้อมูลของหน่วยงานเอง โดยไม่ต้องส่งข้อมูลออกไปยังบริการ AI ภายนอก พัฒนา backend ด้วย Node.js และ Express พร้อมจัดเก็บข้อมูลใน MySQL",
        },
        tourismCms: {
          title: "ระบบ CMS ประชาสัมพันธ์สถานที่ท่องเที่ยว",
          desc: "พัฒนาระบบจัดการเนื้อหา (CMS) ด้วย Next.js สำหรับสร้างและเผยแพร่คอนเทนต์ประชาสัมพันธ์สถานที่ท่องเที่ยว โดยใช้ MySQL เป็นฐานข้อมูล",
        },
        carDetection: {
          title: "สคริปต์ตรวจจับรถยนต์ (Lab)",
          desc: "สคริปต์ Python เชิงทดลองสำหรับตรวจจับรถยนต์ และบันทึกผลการตรวจจับลงฐานข้อมูล SQLite เพื่อนำไปวิเคราะห์ต่อ",
        },
        cms: {
          title: "Custom CMS with Server-Driven UI",
          desc: "ออกแบบสถาปัตยกรรม CMS โดยใช้ Flutter Web, Go และ MongoDB พร้อมพัฒนาโปรโตคอล Server-Driven UI (JSON-to-Widget) ให้ผู้ดูแลระบบแก้ไขหน้าและตรรกะได้แบบเรียลไทม์",
        },
        blog: {
          title: "Interactive Web Blog Platform",
          desc: "พัฒนาแพลตฟอร์มบล็อกที่ครบวงจร โดยใช้ Node.js และ React/Vue มีการอัปเดตแบบเรียลไทม์และประสบการณ์อ่านที่ตอบสนองได้ดี",
        },
        autoh: {
          title: "AutoH – Workspace Automation Engine",
          desc: "พัฒนาเครื่องมืออัตโนมัติบน Windows สำหรับปรับแต่งสภาพแวดล้อมการทำงานด้วย Global Hotkeys รองรับการสลับโหมด ทรัพยากรแยก subprocess และกลไก debounce",
        },
        pos: {
          title: "High-Performance POS System",
          desc: "ออกแบบระบบธุรกรรมที่รองรับการร้องขอความพร้อมกันสูง โดยใช้ Go goroutines และปรับโครงสร้าง MongoDB ให้ตอบสนองรวดเร็ว",
        },
        health: {
          title: "Health Care Management Platform",
          desc: "ออกแบบ UI และระบบจัดการข้อมูลสุขภาพที่เน้นความถูกต้องของข้อมูลและการปฏิบัติตามมาตรฐานการออกแบบ",
        },
        molldini: {
          title: "Multi-Merchant E-Commerce Platform",
          desc: "พัฒนาแพลตฟอร์มอีคอมเมิร์ซหลายร้านค้า พร้อมระบบ RBAC, การนำเข้าข้อมูลแบบ CSV และแดชบอร์ดสำหรับผู้ขาย",
        },
        jodnid: {
          title: "JODNID – แชทบอทจดรายรับ-รายจ่ายบน LINE",
          desc: "JodNid เป็นผู้ช่วยด้านการเงินส่วนบุคคลผ่าน LINE ที่ช่วยบันทึกรายรับและรายจ่ายโดยการแชท ผสานเทคโนโลยี NLP และ OCR ในการสกัดข้อมูลจากข้อความและสลิป พร้อมแสดงภาพรวมแบบย่อผ่าน LIFF Dashboard",
        },
      },
      purchase: {
        title: "Purchase Assistant",
        desc: "แอปมือถือสำหรับจัดการคำขอฝากซื้อภายในหอพัก ผู้ใช้สามารถเป็นผู้ซื้อหรือผู้รับฝากได้ พัฒนาด้วย Flutter และ Firebase",
      },
      portfolio: {
        title: "Portfolio",
        desc: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว แสดงข้อมูลโปรเจคและประสบการณ์ พัฒนาด้วย HTML/CSS",
      },
      skilllevel: {
        excellent: "ยอดเยี่ยม",
        intermediate: "ปานกลาง",
        good: "ดี",
        beginner: "เริ่มต้น",
      },
      experience: {
        bullets: {
          b1: "โครงการ Health Care: พัฒนาส่วนติดต่อผู้ใช้และออกแบบ Data Schema สำหรับฟีเจอร์ที่รับผิดชอบ",
          b2: "ระบบ POS: ออกแบบ API และ schema บน MongoDB พัฒนา backend ด้วย Go และ frontend ด้วย Flutter Web",
          b3: "Custom CMS: ออกแบบ UI/UX และระบบ Server-driven UI แปลง JSON เป็นหน้าเว็บด้วย Flutter Web",
        },
        roleDate: "นักพัฒนา Front-end (ม.ค. 2025 - ปัจจุบัน)",
        p1: "ความรับผิดชอบหลัก: นำการพัฒนาส่วนหน้า ออกแบบ Business Logic และ Schema และพัฒนา Web Application ด้วย Flutter",
        satunPao: {
          date: "July 2026 - Present",
          title: "ผู้ช่วยนักวิชาการคอมพิวเตอร์",
          company: "องค์การบริหารส่วนจังหวัดสตูล (อบจ.สตูล)",
          p1: "พัฒนาโซลูชัน AI และเว็บแอปพลิเคชันให้กับหน่วยงาน ได้แก่ แชทบอท RAG ที่ทำงานด้วย Local LLM (Ollama) บนเว็บไซต์ของหน่วยงาน ระบบ CMS ด้วย Next.js สำหรับประชาสัมพันธ์สถานที่ท่องเที่ยว และสคริปต์ Python เชิงทดลองสำหรับตรวจจับรถยนต์",
        },
        tcc: {
          date: "April 2026 - June 2026",
          title: "Full-stack Developer",
          company: "TCC TEchnology and digital",
          p1: "ออกแบบสถาปัตยกรรมและพัฒนาโครงสร้างระบบแบบครบวงจร (End-to-End) โดยรับหน้าที่ควบคุมทั้งระบบหลังบ้าน (Backend) และหน้าบ้าน (Frontend) ควบคู่ไปกับการวางระบบโครงสร้าง (Architecture) ของแต่ละฟีเจอร์ ตลอดจนการออกแบบผังการทำงาน (Workflow) ทั้งหมดของระบบ",
        },
        nicetynine: {
          date: "Jan 2025 - March 2026",
          title: "Front-end Developer (Flutter Specialist)",
          company: "Nicetynine",
          p1: "เป็นผู้นำในการพัฒนาฝั่งหน้าบ้าน (Frontend) ของแอปพลิเคชันระดับองค์กร (Enterprise-scale) ด้วย Flutter ออกแบบสถาปัตยกรรมระบบ Server-Driven UI และร่วมมือกับทีมบริการจัดการข้ามสายงาน (Cross-functional) เพื่อส่งมอบโซลูชันซอฟต์แวร์ที่มีคุณภาพสูง",
        },
      },
      contact: Object.assign({}, { mailSubject: "ติดต่อเรื่องงาน" }),
      contact: {
        placeholder: { name: "ชื่อของคุณ", email: "อีเมลของคุณ", message: "ข้อความของคุณ" },
      },
      contactSection: {
        title: "ทักทาย",
        description: "เปิดรับโอกาสในตำแหน่ง Senior Full-stack Developer หรือ Flutter Specialist",
      },
      alerts: { formSuccess: "บันทึกข้อมูลเรียบร้อยแล้ว!", formError: "เกิดข้อผิดพลาด!" },
      status: { sending: "กำลังส่ง..." },
      footer: { copyright: "© 2025 Khoffan Leemanan. สงวนลิขสิทธิ์." },
      social: { github: "GitHub", facebook: "Facebook" },
      meta: {
        title: "Khoffan Leemanan | นักพัฒนา Full-stack · Next.js & AI",
      },
      pages: { projectsTitle: "โปรเจค", experiencesTitle: "ประสบการณ์" },
    },
  };

  const defaultLocale = "en";

  function detectLocale() {
    const saved = localStorage.getItem("locale");
    if (saved && translations[saved]) return saved;
    try {
      const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
      if (navLang.startsWith("th")) return "th";
    } catch (e) {}
    return defaultLocale;
  }

  let locale = detectLocale();

  function _get(obj, path, fallback) {
    if (!obj) return fallback;
    return (
      path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj) ??
      fallback
    );
  }

  function t(key) {
    return _get(translations[locale], key, _get(translations[defaultLocale], key, key));
  }

  function applyTranslations() {
    document.documentElement.lang = locale;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.placeholder = t(key);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key) el.alt = t(key);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.title = t(key);
    });

    // href replacement
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      if (key) el.href = t(key);
    });

    // mail subject helper for mail links (build Gmail compose URL)
    document.querySelectorAll("[data-i18n-mail-subject]").forEach((el) => {
      const key = el.getAttribute("data-i18n-mail-subject");
      if (key) {
        try {
          const subject = encodeURIComponent(t(key));
          const to =
            el.getAttribute("data-mail-to") || el.href.split("&to=")[1] || "khoffan222@gmail.com";
          // fallback to a Gmail compose URL
          el.href = `https://mail.google.com/mail/?view=cm&fs=1&to=khoffan222@gmail.com&su=${subject}`;
        } catch (e) {}
      }
    });

    // update language select if present
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      try {
        langSelect.value = locale;
      } catch (e) {}
    }
    const titleKey = `meta.title`;
    const newTitle = t(titleKey);
    if (newTitle) document.title = newTitle;
  }

  function setLocale(l) {
    if (!translations[l]) return;
    locale = l;
    localStorage.setItem("locale", l);
    applyTranslations();
  }

  window.i18n = {
    t,
    setLocale,
    get locale() {
      return locale;
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => setLocale(e.target.value));
    }
  });
})();
