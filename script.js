/* =========================================================
   Stevanus Gerald Marconus — Portfolio script
   ========================================================= */

const CONTACT_EMAIL = "stevanus.marconus@gmail.com";

/* ---------- Translations ----------
   English text also lives in index.html (shown if JS fails).
   Keep both in sync when you edit copy. */
const i18n = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skill": "Skills",
    "nav.experience": "Experience",
    "nav.project": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Resume",

    "hero.contact": "Get in touch",
    "hero.title": "Turning raw data into <span>decisions</span>",
    "hero.cta": "Show my Work",
    "hero.gpa": "GPA / 4.00",
    "hero.repos": "GitHub repositories",
    "hero.comps": "data &amp; math competitions",
    "hero.journal": "published journal",

    "about.heading": "About Me",
    "about.p1":
      "I'm a Data Science student (B.Sc. Computer Science) at BINUS University with hands-on experience in research, data competitions and large-scale data processing. I build predictive models, analytics pipelines and visualizations with Python, R, SQL and big-data tools.",
    "about.p2":
      "Alongside my studies I worked as a Data Analyst, Data Engineer and DBA at PT. Angkasa Intan Makmur, where I designed a database system that replaced manual work and ran customer-segmentation research.",
    "about.p3":
      "I'm most interested in <b>financial analytics</b> and <b>public health</b>, where a good model directly shapes a decision. Outside of data, I design UI/UX and build web apps with Next.js and iOS apps with Swift.",
    "about.f1": "BINUS University · 2024 – 2028",
    "about.f3": "Indonesian · English · Japanese (basic)",
    "about.f4": "Finance &amp; health analytics",

    "skill.heading": "Skills",
    "skill.g1": "Languages &amp; Data",
    "skill.g2": "Machine &amp; Deep Learning",
    "skill.g3": "Analytics &amp; Visualization",
    "skill.g4": "Cloud, Deploy &amp; Tools",
    "skill.c1": "Time Series",
    "skill.c2": "Mathematical Modeling",
    "skill.c3": "Database Design",

    "exp.heading": "Experience",
    "exp.w1":
      "Designed and built the company's database system, replacing manual workflows.",
    "exp.w2": "Managed and organized calibration-lab result data.",
    "exp.w3":
      "Ran in-depth analysis, campaign performance reporting and customer-segmentation research to reach more customers.",
    "exp.d2": "Dec 2025 – Present",
    "exp.d3": "Apr 2025 – Present",
    "exp.o1": "Conducts data research with the club's research team.",
    "exp.o2":
      "Competes in data science and computer science competitions, and shares competition and industry experience with members.",
    "exp.o3":
      "Tutored peers with explanations tailored to their level to help raise their grades.",
    "exp.edu": "Education",
    "exp.degree": "Bachelor of Computer Science · Data Science",
    "exp.period": "Sep 2024 – Aug 2028 (expected)",
    "exp.awards": "Achievements",
    "exp.a1": "<b>Top 10</b> — FIT Competition",
    "exp.a2": "<b>Competitor</b> — Data Analytics Competition, COMPFEST",
    "hl.label": "Highlight · 2025",
    "hl.title": "Master of Data Analysis V — Data Analysis Competition 2025",
    "hl.scope": "Southeast Asia",
    "hl.p1":
      "DAC is an international data analysis competition for undergraduate students across Southeast Asia, held by the Statistics Student Association of Institut Teknologi Sepuluh Nopember (HIMASTA ITS) as part of <i>Pekan Raya Statistika</i>.",
    "hl.p2":
      "Our team made it through the selection rounds, competed in the final in Surabaya, and was awarded the <b>Master of Data Analysis V</b> title.",
    "hl.s0": "Finalist",
    "hl.m": "IDR 2M",
    "hl.s1": "final round in Surabaya",
    "hl.s2": "prize money",
    "hl.s3": "Master of Data Analysis",
    "exp.a4": "<b>Semi-finalist</b> — Mathematical Challenge, Festifa ITB",
    "exp.a5": "<b>Semi-finalist</b> — Data Analyst Competition",
    "exp.a6":
      "<b>Published journal</b> — co-author of a public-perception survey study",
    "exp.a7":
      "<b>Scholarship</b> — BINUS Student Advisory and Support Center mentoring",

    "proj.heading": "Projects",
    "proj.sub":
      "Selected work. Every project is a notebook or pipeline you can read on GitHub.",
    "proj.all": "See all repositories on GitHub",
    "p1.t": "Health Insurance Fraud Risk Scoring",
    "p1.d":
      "Ranks health-insurance claims for audit under a 5% capacity limit. Hybrid LightGBM + CatBoost with 5-fold CV and isotonic calibration, optimized for NormalizedRecall@5%.",
    "p1.m": "160K claims · 51 features",
    "p2.t": "Health Claim Trend &amp; Risk Prediction",
    "p2.d":
      "Analyzes individual health-insurance claims (Jan 2024 – Jul 2025) after a 25.5% claim surge: finds what drives claim frequency and severity, then predicts claim trends with ML and time-series models.",
    "p2.m": "19 months · claims + policy data",
    "p3.t": "Rice Supply Chain Optimization",
    "p3.d":
      "Operations-research study across West Java that combines Data Envelopment Analysis, ML with SHAP and linear programming to find inefficiencies and maximize profit for every actor in the chain.",
    "p3.m": "5 regencies · 5 supply-chain actors",
    "p4.t": "Credit Score Prediction on AWS",
    "p4.d":
      "End-to-end classification pipeline (Random Forest, XGBoost, LightGBM) that predicts customer credit scores, deployed as a Streamlit app on AWS with EC2, S3 and Lambda.",
    "p4.m": "Deployed model · cloud pipeline",
    "p5.t": "Stock Price Forecasting with LSTM",
    "p5.d":
      "Forecasts AAPL and AMD closing prices with a stacked LSTM in TensorFlow/Keras, using windowed inputs, early stopping and learning-rate scheduling. Evaluated with MSE and MAE.",
    "p5.m": "40 years of daily prices",
    "p6.t": "Satellite Image Generation with cGAN",
    "p6.d":
      "Conditional GAN in PyTorch that generates 28×28 satellite images of two classes, storage tanks and parking lots, trained for 100 epochs.",
    "p6.m": "16,016 images · 2 classes",

    "contact.heading": "Contact",
    "contact.sub":
      "Have a data problem, an internship or a competition team in mind? Let's talk.",
    "contact.cv": "Resume",
    "contact.cvb": "Download PDF",
    "contact.name": "Name...",
    "contact.email": "Email...",
    "contact.subject": "Subject...",
    "contact.message": "Message...",
    "contact.send": "Send Message",
    "contact.err": "Please fill in your name, a valid email and a message.",
    "contact.ok": "Opening your email app…",
    "contact.defaultSubject": "Hello from your portfolio",

    "footer.about":
      "Data Science student at BINUS University, building models for finance and health decisions.",
    "footer.focus": "Focus",
    "footer.stack": "Stack",
    "footer.nav": "Navigation",

    roles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "model.fit(data) → insight",
    ],
  },

  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.skill": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.project": "Proyek",
    "nav.contact": "Kontak",
    "nav.cv": "CV",

    "hero.contact": "Hubungi saya",
    "hero.title": "Mengubah data mentah menjadi <span>keputusan</span>",
    "hero.cta": "Lihat Karya Saya",
    "hero.gpa": "IPK / 4.00",
    "hero.repos": "repositori GitHub",
    "hero.comps": "kompetisi data &amp; matematika",
    "hero.journal": "jurnal terbit",

    "about.heading": "Tentang Saya",
    "about.p1":
      "Saya mahasiswa Data Science (S1 Ilmu Komputer) di BINUS University dengan pengalaman langsung di riset, kompetisi data, dan pengolahan data skala besar. Saya membangun model prediktif, pipeline analitik, dan visualisasi data dengan Python, R, SQL, dan tools big data.",
    "about.p2":
      "Di samping kuliah, saya bekerja sebagai Data Analyst, Data Engineer, dan DBA di PT. Angkasa Intan Makmur. Di sana saya merancang sistem basis data yang menggantikan pekerjaan manual dan melakukan riset segmentasi pelanggan.",
    "about.p3":
      "Saya paling tertarik pada <b>analitik finansial</b> dan <b>kesehatan masyarakat</b>, bidang di mana model yang baik langsung memengaruhi keputusan. Di luar data, saya juga merancang UI/UX serta membangun aplikasi web dengan Next.js dan aplikasi iOS dengan Swift.",
    "about.f1": "BINUS University · 2024 – 2028",
    "about.f3": "Indonesia · Inggris · Jepang (dasar)",
    "about.f4": "Analitik keuangan &amp; kesehatan",

    "skill.heading": "Keahlian",
    "skill.g1": "Bahasa &amp; Data",
    "skill.g2": "Machine &amp; Deep Learning",
    "skill.g3": "Analitik &amp; Visualisasi",
    "skill.g4": "Cloud, Deploy &amp; Tools",
    "skill.c1": "Time Series",
    "skill.c2": "Pemodelan Matematika",
    "skill.c3": "Desain Basis Data",

    "exp.heading": "Pengalaman",
    "exp.w1":
      "Merancang dan membangun sistem basis data perusahaan untuk menggantikan pekerjaan manual.",
    "exp.w2": "Mengelola dan merapikan data hasil kalibrasi laboratorium.",
    "exp.w3":
      "Melakukan analisis mendalam, pelaporan kinerja kampanye, dan riset segmentasi pelanggan untuk menjangkau lebih banyak pelanggan.",
    "exp.d2": "Des 2025 – Sekarang",
    "exp.d3": "Apr 2025 – Sekarang",
    "exp.o1": "Melakukan riset data bersama tim riset klub.",
    "exp.o2":
      "Mengikuti berbagai lomba data science dan computer science, serta berbagi pengalaman lomba dan dunia kerja kepada anggota.",
    "exp.o3":
      "Membimbing rekan mahasiswa dengan penjelasan yang disesuaikan dengan kemampuan mereka untuk membantu meningkatkan nilai.",
    "exp.edu": "Pendidikan",
    "exp.degree": "Sarjana Ilmu Komputer · Data Science",
    "exp.period": "Sep 2024 – Agu 2028 (perkiraan)",
    "exp.awards": "Prestasi",
    "exp.a1": "<b>Top 10</b> — FIT Competition",
    "exp.a2": "<b>Peserta</b> — Lomba Data Analytics, COMPFEST",
    "hl.label": "Sorotan · 2025",
    "hl.title": "Master of Data Analysis V — Data Analysis Competition 2025",
    "hl.scope": "Asia Tenggara",
    "hl.p1":
      "DAC adalah kompetisi analisis data internasional untuk mahasiswa S1 se-Asia Tenggara yang diselenggarakan Himpunan Mahasiswa Statistika Institut Teknologi Sepuluh Nopember (HIMASTA ITS) sebagai bagian dari <i>Pekan Raya Statistika</i>.",
    "hl.p2":
      "Tim kami lolos tahap seleksi, bertanding di babak final di Surabaya, dan meraih gelar <b>Master of Data Analysis V</b>.",
    "hl.s0": "Finalis",
    "hl.m": "Rp2 juta",
    "hl.s1": "babak final di Surabaya",
    "hl.s2": "hadiah uang",
    "hl.s3": "Master of Data Analysis",
    "exp.a4": "<b>Semifinalis</b> — Mathematical Challenge, Festifa ITB",
    "exp.a5": "<b>Semifinalis</b> — Data Analyst Competition",
    "exp.a6":
      "<b>Jurnal terbit</b> — salah satu penulis studi survei persepsi masyarakat",
    "exp.a7":
      "<b>Beasiswa</b> — Mentoring Student Advisory and Support Center BINUS",

    "proj.heading": "Proyek",
    "proj.sub":
      "Karya pilihan. Setiap proyek berupa notebook atau pipeline yang bisa dibaca di GitHub.",
    "proj.all": "Lihat semua repositori di GitHub",
    "p1.t": "Skor Risiko Fraud Klaim Asuransi Kesehatan",
    "p1.d":
      "Memeringkat klaim asuransi kesehatan untuk diaudit dengan batas kapasitas 5%. Model hibrid LightGBM + CatBoost dengan 5-fold CV dan kalibrasi isotonic, dioptimalkan untuk NormalizedRecall@5%.",
    "p1.m": "160 ribu klaim · 51 fitur",
    "p2.t": "Tren &amp; Prediksi Risiko Klaim Kesehatan",
    "p2.d":
      "Menganalisis klaim asuransi kesehatan individu (Jan 2024 – Jul 2025) setelah lonjakan klaim 25,5%: mencari faktor penentu frekuensi dan severitas klaim, lalu memprediksi tren klaim dengan model ML dan time series.",
    "p2.m": "19 bulan · data klaim + polis",
    "p3.t": "Optimasi Rantai Pasok Beras",
    "p3.d":
      "Studi riset operasional di Jawa Barat yang menggabungkan Data Envelopment Analysis, ML dengan SHAP, dan linear programming untuk menemukan inefisiensi dan memaksimalkan laba setiap aktor rantai pasok.",
    "p3.m": "5 kabupaten · 5 aktor rantai pasok",
    "p4.t": "Prediksi Skor Kredit di AWS",
    "p4.d":
      "Pipeline klasifikasi end-to-end (Random Forest, XGBoost, LightGBM) untuk memprediksi skor kredit nasabah, di-deploy sebagai aplikasi Streamlit di AWS dengan EC2, S3, dan Lambda.",
    "p4.m": "Model ter-deploy · pipeline cloud",
    "p5.t": "Peramalan Harga Saham dengan LSTM",
    "p5.d":
      "Meramalkan harga penutupan saham AAPL dan AMD dengan LSTM bertumpuk di TensorFlow/Keras, menggunakan input berjendela, early stopping, dan penjadwalan learning rate. Dievaluasi dengan MSE dan MAE.",
    "p5.m": "40 tahun data harga harian",
    "p6.t": "Generasi Citra Satelit dengan cGAN",
    "p6.d":
      "Conditional GAN berbasis PyTorch yang menghasilkan citra satelit 28×28 untuk dua kelas, tangki penyimpanan dan area parkir, dilatih selama 100 epoch.",
    "p6.m": "16.016 citra · 2 kelas",

    "contact.heading": "Kontak",
    "contact.sub":
      "Punya masalah data, tawaran magang, atau butuh tim lomba? Yuk, ngobrol.",
    "contact.cv": "CV",
    "contact.cvb": "Unduh PDF",
    "contact.name": "Nama...",
    "contact.email": "Email...",
    "contact.subject": "Subjek...",
    "contact.message": "Pesan...",
    "contact.send": "Kirim Pesan",
    "contact.err": "Mohon isi nama, email yang valid, dan pesan.",
    "contact.ok": "Membuka aplikasi email kamu…",
    "contact.defaultSubject": "Halo dari portofolio kamu",

    "footer.about":
      "Mahasiswa Data Science di BINUS University yang membangun model untuk keputusan di bidang keuangan dan kesehatan.",
    "footer.focus": "Fokus",
    "footer.stack": "Teknologi",
    "footer.nav": "Navigasi",

    roles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "model.fit(data) → insight",
    ],
  },
};

let currentLang = "en";

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage blocked — ignore */
  }
}

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || "";
}

function setLanguage(lang) {
  if (!i18n[lang]) lang = "en";
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const value = t(el.dataset.i18nPh);
    if (value) el.placeholder = value;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  safeSet("lang", lang);
  restartTyping();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

/* ---------- Typing effect in hero ---------- */
const typedEl = document.getElementById("typed");
let typingTimer = null;

function restartTyping() {
  clearTimeout(typingTimer);
  const roles = i18n[currentLang].roles;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    typedEl.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typedEl.textContent = word.slice(0, charIndex);

    let delay = deleting ? 40 : 85;
    if (!deleting && charIndex === word.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }
    typingTimer = setTimeout(tick, delay);
  }

  typedEl.textContent = "";
  tick();
}

/* ---------- Mobile menu ---------- */
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");

menu.addEventListener("click", () => {
  nav.classList.add("show");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  nav.classList.remove("show");
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* ---------- Header background + active nav link ---------- */
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("main section[id]");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 20);

  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Contact form → opens the visitor's email app ---------- */
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fields = form.elements;
  const name = fields["name"].value.trim();
  const email = fields["email"].value.trim();
  const subject = fields["subject"].value.trim();
  const message = fields["message"].value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  fields["name"].classList.toggle("invalid", !name);
  fields["email"].classList.toggle("invalid", !emailOk);
  fields["message"].classList.toggle("invalid", !message);

  if (!name || !emailOk || !message) {
    note.textContent = t("contact.err");
    note.classList.add("error");
    return;
  }

  note.textContent = t("contact.ok");
  note.classList.remove("error");

  const body = `${message}\n\n— ${name}\n${email}`;
  const href =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject || t("contact.defaultSubject"))}` +
    `&body=${encodeURIComponent(body)}`;
  window.location.href = href;
});

/* ---------- cGAN card: a small grid of "generated" pixels ---------- */
function buildPixels() {
  const group = document.getElementById("px");
  if (!group) return;

  const size = 8;
  const cols = 22;
  const rows = 10;
  const ns = "http://www.w3.org/2000/svg";
  const shades = ["#111", "#222", "#333", "#555", "#888", "#2dd4bf"];
  const cells = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rect = document.createElementNS(ns, "rect");
      rect.setAttribute("x", 12 + c * size);
      rect.setAttribute("y", 10 + r * size);
      rect.setAttribute("width", size - 1);
      rect.setAttribute("height", size - 1);
      group.appendChild(rect);
      cells.push(rect);
    }
  }

  function paint() {
    cells.forEach((rect) => {
      const i = Math.random() < 0.06 ? 5 : Math.floor(Math.random() * 5);
      rect.setAttribute("fill", shades[i]);
    });
  }

  paint();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(paint, 1600);
  }
}

/* ---------- Hero photo: show the "detection box" once, then on hover ---------- */
const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto) {
  setTimeout(() => heroPhoto.classList.add("scanned"), 1400);
  setTimeout(() => heroPhoto.classList.remove("scanned"), 4200);
}

/* ---------- Init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
buildPixels();

const savedLang = safeGet("lang");
const browserLang = (navigator.language || "en").toLowerCase();
setLanguage(savedLang || (browserLang.startsWith("id") ? "id" : "en"));

onScroll();

if (window.AOS) {
  AOS.init({ once: true, duration: 700, offset: 60 });
}
