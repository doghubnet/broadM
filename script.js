const destinations = [
  { key: "usa", name: "USA", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The USA offers globally ranked universities, high research funding, and broad career paths across STEM, business, and creative fields.", scholarships: "Merit scholarships, assistantships, athletics, Fulbright, and departmental fellowships.", work: "Part-time work during studies, with post-study routes such as OPT and CPT in many programs.", stability: "Stable institutions, a deep innovation economy, and strong long-term education investment.", life: "Higher living costs in major cities, with active campus culture and wide student communities.", unis: [["Harvard University", "Ivy League leader in law, business, and policy."], ["Stanford University", "Innovation powerhouse in Silicon Valley."], ["MIT", "Top engineering and technology institution."], ["NYU", "Global urban campus in New York City."]] },
  { key: "italy", name: "Italy", flag: "🇮🇹", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80", pulse: "96%", why: "Italy combines historic universities, strong design and architecture fields, and access to wider European opportunities.", scholarships: "DSU regional grants, merit awards, tuition waivers, and Erasmus mobility support.", work: "Part-time work during studies, with growing opportunities in design, engineering, and tourism.", stability: "EU framework, stable academic systems, and continued international education growth.", life: "Moderate costs outside Milan and Rome, plus a rich culture and strong student life.", unis: [["University of Bologna", "Historic institution with broad academic strength."], ["Politecnico di Milano", "Top engineering and design university."], ["Sapienza University of Rome", "Large research university with international programs."], ["University of Padua", "Strong science and medicine legacy."]] },
  { key: "austria", name: "Austria", flag: "🇦🇹", image: "https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2020/05/Innsbruck-Austria.jpg?resize=840%2C577&ssl=1", pulse: "95%", why: "Austria offers quality of life, respected public universities, and a central European location for mobility and networking.", scholarships: "OeAD grants, mobility scholarships, tuition support, and university merit options.", work: "Student part-time options and strong graduate prospects in engineering, research, and health.", stability: "Politically stable EU country with a resilient economy and strong social systems.", life: "Balanced living costs, clean cities, and excellent transport infrastructure.", unis: [["University of Vienna", "Historic institution across humanities and sciences."], ["TU Wien", "Leading technology and engineering university."], ["Medical University of Vienna", "Respected medical training and research."], ["WU Vienna", "Strong business-focused university."]] },
  { key: "china", name: "China", flag: "🇨🇳", image: "https://daoinsights.com/wp-content/uploads/2021/09/1505870953_oMHAlr-1870x1052.jpeg", pulse: "93%", why: "China blends top-ranked universities, advanced technology ecosystems, and growing scholarship channels for international students.", scholarships: "CSC scholarships, provincial grants, university awards, and bilateral programs.", work: "Rules vary by city and institution, with stronger opportunities in tech and manufacturing hubs.", stability: "Large diversified economy with strong infrastructure and long-term education investment.", life: "Affordable to premium cost ranges by city, with a fast-paced student experience.", unis: [["Tsinghua University", "Elite engineering and policy institution."], ["Peking University", "Comprehensive top-ranked academic leader."], ["Fudan University", "Strong in business, medicine, and social sciences."], ["Shanghai Jiao Tong", "High-impact engineering and innovation programs."]] },
  { key: "france", name: "France", flag: "🇫🇷", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80", pulse: "95%", why: "France delivers respected degrees, research strength, and prestigious institutions across arts, sciences, and engineering.", scholarships: "Eiffel scholarships, CROUS support, campus grants, and merit-based tuition discounts.", work: "Students can work part-time, and post-study permits support career transition in many sectors.", stability: "Stable democratic institutions and a diversified economy.", life: "Paris is premium cost, while other cities offer moderate costs and a rich student culture.", unis: [["Sorbonne University", "Strong research in sciences and humanities."], ["École Polytechnique", "Elite STEM grande école with global profile."], ["Sciences Po", "Top social sciences and policy school."], ["Université PSL", "Research-intensive federation of elite schools."]] },
  { key: "germany", name: "Germany", flag: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80", pulse: "97%", why: "Germany is known for engineering, applied research, and strong paths from study to employment in Europe’s largest economy.", scholarships: "DAAD scholarships, foundations, industry grants, and university fellowships.", work: "Strong student part-time rights and practical post-study residence options.", stability: "High economic resilience, strong institutions, and industrial leadership.", life: "Moderate living costs in many cities, excellent transit, and safe student settings.", unis: [["Technical University of Munich", "Global technical leader."], ["Heidelberg University", "Germany’s oldest research university."], ["LMU Munich", "Strong cross-disciplinary research profile."], ["RWTH Aachen", "Top engineering and applied science institution."]] },
  { key: "uk", name: "UK", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The UK offers globally known degrees, shorter master programs, and strong employer recognition worldwide.", scholarships: "Chevening, Commonwealth, GREAT scholarships, and university merit awards.", work: "Part-time work during studies and Graduate Route post-study options are widely used.", stability: "Stable institutions, a sophisticated economy, and strong global business links.", life: "Higher costs in London, with active campus life and broad multicultural communities.", unis: [["University of Oxford", "Historic global academic leader."], ["University of Cambridge", "World-class research and tutorial model."], ["Imperial College London", "STEM-focused excellence in central London."], ["UCL", "Major multidisciplinary research university."]] },
  { key: "romania", name: "Romania", flag: "🇷🇴", image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=80", pulse: "92%", why: "Romania provides affordable European education, growing English-taught programs, and strong value for money.", scholarships: "Romanian Government scholarships, university merit awards, and bilateral funding routes.", work: "Part-time student opportunities and growing entry-level jobs in IT, services, and engineering.", stability: "EU member with steady growth and improving international academic reach.", life: "Lower living costs than many EU capitals, with welcoming student cities like Cluj and Bucharest.", unis: [["University of Bucharest", "Historic comprehensive university in the capital."], ["Babeș-Bolyai University", "Top multicultural university in Cluj-Napoca."], ["Politehnica University of Bucharest", "Leading engineering institution."], ["Alexandru Ioan Cuza University", "Respected public research university."]] }
];

const testimonials = [
  { img: "https://static.vecteezy.com/system/resources/previews/039/334/804/large_2x/ai-generated-indian-female-student-free-photo.jpg", name: "Liya M.", country: "Italy", q: "Broad Mobility gave me clear, step-by-step support from consultation to approval." },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAwGwNGnsOePzcAHZmLgTBVglmNJdxdjC8Q&s", name: "Abel T.", country: "Germany", q: "Exceptional interview coaching and document quality improved my confidence." },
  { img: "https://images.generated.photos/E1HM3sJC877Av9GBetIjxFC1T2iQeGLh8HNznemmZ4Y/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjQwOTYyLmpwZw.jpg", name: "Sara K.", country: "United Kingdom", q: "Professional communication and fast response throughout the entire process." },
  { img: "/images/testimonials/nahom.webp", name: "Nahom B.", country: "France", q: "Their strategy helped me choose the right destination and timeline." },
  { img: "https://static.vecteezy.com/system/resources/thumbnails/028/633/357/small/cute-ethiopian-woman-generate-ai-photo.jpeg", name: "Bethel R.", country: "Austria", q: "Premium guidance with practical scholarship and visa preparation advice." },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzv11DlwTVx5MxQDumc57Q_DnBQSA05l0Zg&s", name: "Yosef G.", country: "United States", q: "The visa pathway became simple and structured with clear milestones." },
  { img: "https://i.imgur.com/vKCNhuK.png", name: "Selam A.", country: "Romania", q: "Transparent communication made every stage easier to understand." },
  { img: "https://img.freepik.com/premium-photo/illustration-man-abstract-art-ai-generated_57312-1264.jpg", name: "Mikiyas D.", country: "China", q: "Their country strategy and interview preparation helped me move with confidence." }
];

const siteMap = [
  { title: "Home", href: "#home", group: "Page" }, { title: "About Us", href: "#about-us", group: "Page" }, { title: "Services", href: "#services", group: "Page" }, { title: "Destinations", href: "#destinations", group: "Page" }, { title: "Success Stories", href: "#impact", group: "Page" }, { title: "Process", href: "#how-it-works", group: "Page" }, { title: "Testimonials", href: "#testimonials", group: "Page" }, { title: "Newsroom", href: "#newsroom", group: "Page" }, { title: "Contact", href: "#contact", group: "Page" },
  { title: "Student Visa Consultancy", href: "#services", group: "Service" }, { title: "Tourist Visa Consultancy", href: "#services", group: "Service" }, { title: "Document Preparation and Interview Coaching", href: "#services", group: "Service" }, { title: "Work Visa Consultancy", href: "#services", group: "Service" },
  ...destinations.map((d) => ({ title: d.name, href: "#destinations", group: "Destination" })), { title: "FAQ", href: "#faq", group: "Section" }
];

const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobilePanel = document.getElementById("mobilePanel");
const consultModal = document.getElementById("consultModal");
const countryModal = document.getElementById("countryModal");
const moreCountriesModal = document.getElementById("moreCountriesModal");
const legalModal = document.getElementById("legalModal");
const searchModal = document.getElementById("searchModal");
const destinationGrid = document.getElementById("destinationGrid");
const testimonialRowA = document.getElementById("testimonialRowA");
const testimonialRowB = document.getElementById("testimonialRowB");
const impactCount = document.getElementById("impactCount");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const dynamicUploads = document.getElementById("dynamicUploads");
const moreCountriesList = document.getElementById("moreCountriesList");
const countryBackToList = document.getElementById("countryBackToList");
const destinationTemplate = document.getElementById("destinationTemplate");
const testimonialTemplate = document.getElementById("testimonialTemplate");
const impactCarousel = document.getElementById("impactCarousel");

const featuredDestinationNames = new Set(destinations.map((country) => country.name.toLowerCase()));
const extraCountryProfiles = window.extraCountryProfiles || [];
const extraCountries = extraCountryProfiles.filter((country) => !featuredDestinationNames.has(country.name.toLowerCase()));
const allCountriesMap = new Map([...destinations, ...extraCountries].map((country) => [country.key, country]));

const fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#dfe7f1"/>
  <rect x="70" y="70" width="1060" height="660" rx="36" fill="#f8f9fa" stroke="#cfd8e3"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#001f3f">Broad Mobility</text>
  <text x="600" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5f6b7a">Destination image unavailable</text>
</svg>
`);

function syncBodyLock() {
  const hasOpenModal = document.querySelector(".modal.open");
  const hasOpenMenu = mobilePanel.classList.contains("open");
  body.style.overflow = hasOpenModal || hasOpenMenu ? "hidden" : "";
}
function openModal(modal) { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); syncBodyLock(); }
function closeModal(modal) { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); syncBodyLock(); }
function setHeaderState() { siteHeader.classList.toggle("scrolled", window.scrollY > 16); }
function setActiveNav() {
  const sections = ["home", "about-us", "services", "destinations", "impact", "how-it-works", "testimonials", "newsroom", "contact"];
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
  let current = "home";
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= 180) current = id;
  }
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
function openMenu() { mobilePanel.classList.add("open"); mobilePanel.setAttribute("aria-hidden", "false"); menuOpen.setAttribute("aria-expanded", "true"); syncBodyLock(); }
function closeMenu() { mobilePanel.classList.remove("open"); mobilePanel.setAttribute("aria-hidden", "true"); menuOpen.setAttribute("aria-expanded", "false"); syncBodyLock(); }

function openCountry(data, options = {}) {
  const countryHero = document.getElementById("countryHero");
  countryHero.src = data.image;
  countryHero.alt = `${data.name} destination image`;
  countryHero.classList.toggle("country-flag-hero", data.image.includes("flagcdn.com"));
  document.getElementById("countryTitleLabel").textContent = `${data.name} ${data.flag || ""}`.trim();
  document.getElementById("countryWhy").textContent = data.why;
  document.getElementById("countryScholarships").textContent = data.scholarships;
  document.getElementById("countryWork").textContent = data.work;
  document.getElementById("countryStability").textContent = data.stability;
  document.getElementById("countryLife").textContent = data.life;
  const process = data.process || ["Gather documents", "Submit application online", "Book interview and biometrics", "Attend interview", "Receive passport decision"];
  document.getElementById("embassyProcess").innerHTML = process.map((step) => `<li>${step}</li>`).join("");
  const universityGrid = document.getElementById("universityGrid");
  universityGrid.innerHTML = data.unis.map(([name, desc]) => `<article class="card country-university-card"><h5>${name}</h5><p>${desc}</p></article>`).join("");
  countryBackToList.classList.toggle("hidden", !options.fromExtraList);
  openModal(countryModal);
  countryModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
  if (window.gsap) gsap.fromTo("#countryModal .modal-shell", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.36, ease: "power2.out" });
}
function openLegal(title, bodyHtml) { document.getElementById("legalTitle").textContent = title; document.getElementById("legalBody").innerHTML = bodyHtml; openModal(legalModal); }
function openSearch() { openModal(searchModal); renderSearchResults(""); setTimeout(() => searchInput.focus(), 50); }
function attachFallback(img) {
  if (img.matches(".site-logo-img,[data-logo-img]")) return;
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "1") return;
    img.dataset.fallbackApplied = "1";
    img.src = fallbackSvg;
  });
}
function setupLogoFallbacks() {
  const logoImages = document.querySelectorAll(".site-logo-img, [data-logo-img]");
  logoImages.forEach((img) => {
    img.addEventListener("error", () => {
      const wrapper = img.closest(".site-logo");
      if (!wrapper || img.dataset.logoFallbackApplied === "1") return;
      img.dataset.logoFallbackApplied = "1";
      img.style.display = "none";
      wrapper.classList.add("logo-failed");
      const fallback = wrapper.querySelector(".logo-fallback");
      if (fallback) fallback.setAttribute("aria-hidden", "false");
    });
  });
}
function renderDestinations() {
  destinationGrid.innerHTML = "";
  destinations.forEach((d, index) => {
    const node = destinationTemplate.content.cloneNode(true);
    const article = node.querySelector(".destination");
    const img = node.querySelector("img");
    article.dataset.country = d.key;
    if (index === 0 || index === 3) article.classList.add("span-2");
    img.src = d.image;
    img.alt = d.key === "austria" ? "Innsbruck, Austria mountain city view" : d.key === "china" ? "China city skyline and landmark view" : `${d.name} destination`;
    attachFallback(img);
    node.querySelector("h3").textContent = `${d.name} ${d.flag}`;
    node.querySelector("p").textContent = `Success pulse: ${d.pulse}`;
    article.addEventListener("click", () => openCountry(d));
    article.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCountry(d);
      }
    });
    destinationGrid.appendChild(node);
  });
}
function renderMoreCountries() {
  moreCountriesList.classList.add("more-countries-list");
  moreCountriesList.innerHTML = extraCountries.map((country) => `<button class="country-list-btn" type="button" data-country="${country.key}"><span>${country.flag} ${country.name}</span><small>${country.region}</small></button>`).join("");
}
function startImpactCarousel() {
  if (!impactCarousel) return;
  const slides = impactCarousel.querySelectorAll(".impact-slide");
  if (!slides.length) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 6000);
}
function renderTestimonials() {
  const uniqueCards = testimonials.map((t) => {
    const node = testimonialTemplate.content.cloneNode(true);
    const article = node.querySelector(".testimonial");
    const img = node.querySelector("img");
    img.src = t.img;
    img.alt = `${t.name} portrait`;
    attachFallback(img);
    node.querySelector("strong").textContent = t.name;
    node.querySelector(".muted").textContent = t.country;
    node.querySelector("p").textContent = t.q;
    return article.outerHTML;
  }).join("");
  const cards = uniqueCards + uniqueCards;
  testimonialRowA.innerHTML = cards;
  testimonialRowB.innerHTML = cards;
}
function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const results = siteMap.filter((entry) => entry.title.toLowerCase().includes(q));
  if (!q) {
    searchResults.innerHTML = '<button class="search-result" type="button" data-jump="#services">Search starts here<small>Type a page name, service, or destination.</small></button>';
    return;
  }
  if (!results.length) {
    searchResults.innerHTML = '<div class="search-result">No results found<small>Try a shorter word or a page name.</small></div>';
    return;
  }
  searchResults.innerHTML = results.map((r) => `<button class="search-result" type="button" data-jump="${r.href}">${r.title}<small>${r.group}</small></button>`).join("");
}
function animateCounters() {
  const stat = document.querySelector('[data-count="51"]');
  const target = 51;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / 1800, 1);
    stat.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toString();
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  const impactStart = performance.now();
  function tickImpact(now) {
    const p = Math.min((now - impactStart) / 2000, 1);
    impactCount.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toString();
    if (p < 1) requestAnimationFrame(tickImpact);
  }
  requestAnimationFrame(tickImpact);
}
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in"); });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
function bindFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggleIcon = btn.querySelector("span");
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".faq-item").forEach((other) => {
        const otherBtn = other.querySelector(".faq-question");
        otherBtn.setAttribute("aria-expanded", "false");
        other.querySelector(".faq-answer").style.maxHeight = null;
        otherBtn.querySelector("span").textContent = "+";
      });
      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        toggleIcon.textContent = "−";
      }
    });
  });
}
function bindEvents() {
  document.getElementById("consultOpenTop").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenHero").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenAbout").addEventListener("click", () => openModal(consultModal));
  document.getElementById("consultOpenMobile").addEventListener("click", () => { closeMenu(); openModal(consultModal); });
  document.getElementById("consultOpenFooter").addEventListener("click", () => openModal(consultModal));
  document.getElementById("confidenceOpen").addEventListener("click", () => openModal(consultModal));
  document.getElementById("exploreDestinations").addEventListener("click", () => document.getElementById("destinations").scrollIntoView({ behavior: "smooth", block: "start" }));
  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  document.getElementById("searchOpen").addEventListener("click", openSearch);
  document.getElementById("searchOpenMobile").addEventListener("click", () => { closeMenu(); openSearch(); });
  document.getElementById("moreCountriesOpen").addEventListener("click", () => { moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" }); openModal(moreCountriesModal); });
  countryBackToList.addEventListener("click", () => { closeModal(countryModal); openModal(moreCountriesModal); moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" }); });
  document.querySelectorAll(".mobile-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => closeModal(document.getElementById(btn.dataset.close))));
  document.getElementById("termsOpen").addEventListener("click", () => openLegal("Terms of Service", `<section><h3>Terms of Service</h3><p>These Terms explain how Broad Mobility delivers visa, education, and travel support services. By using this website or booking support, you agree to these terms.</p></section><section><h4>1) Scope of Services</h4><p>Broad Mobility provides advisory support including consultations, document preparation guidance, interview coaching, travel planning assistance, and general destination information.</p></section><section><h4>2) Eligibility</h4><p>Clients must be legally permitted to apply for their selected program, visa, or travel category and must provide truthful personal and supporting information.</p></section><section><h4>3) Client Responsibilities</h4><p>Clients are responsible for attending meetings, submitting requested records on time, and reviewing all documents before submission to any embassy, school, or third party.</p></section><section><h4>4) Accuracy of Information</h4><p>All outcomes depend on accurate information. Inconsistent, altered, or incomplete records can delay processing or lead to refusal by authorities.</p></section><section><h4>5) Consultation and Advisory Nature</h4><p>Broad Mobility is an advisory consultancy. We prepare and guide, but we do not guarantee approvals because final decisions are made by independent institutions.</p></section><section><h4>6) Fees and Payments</h4><p>Published service plans describe support level and scope. Where fees apply, clients are informed before onboarding. Government or embassy fees are separate unless clearly stated.</p></section><section><h4>7) Third-Party Decisions</h4><p>Embassies, universities, scholarship boards, and border authorities make independent decisions. Broad Mobility cannot override, influence, or reverse those decisions.</p></section><section><h4>8) Timelines and Expectations</h4><p>Processing timelines vary by country, intake, season, and document readiness. Shared timelines are planning estimates, not guaranteed processing dates.</p></section><section><h4>9) Refund, Cancellation, and Rescheduling</h4><p>Consultation slots may be rescheduled with notice. Service fees already used for delivered work or reviews may be non-refundable based on completed scope.</p></section><section><h4>10) Intellectual Property</h4><p>All website content, guidance templates, and branded materials remain the property of Broad Mobility unless otherwise stated.</p></section><section><h4>11) Acceptable Use</h4><p>You agree not to misuse forms, upload harmful files, impersonate others, or use our materials for unlawful activities.</p></section><section><h4>12) Limitation of Liability</h4><p>Broad Mobility is not liable for indirect losses caused by third-party decisions, policy changes, client delays, or inaccurate client-provided information.</p></section><section><h4>13) Indemnification</h4><p>Clients agree to indemnify Broad Mobility against claims arising from falsified records, unauthorized use, or misuse of advisory materials.</p></section><section><h4>14) Privacy Reference</h4><p>Personal information is handled under our Privacy Policy. Please review it for details on data collection, processing, and retention.</p></section><section><h4>15) Service and Term Updates</h4><p>Broad Mobility may update services, terms, and published offers to reflect operational or legal changes. Updated terms apply once posted.</p></section><section><h4>16) Support and Customer Contact</h4><p>For service clarifications, plan scope, or complaint resolution, contact our support team and include your full name and service reference.</p></section><section><h4>17) Contact Information</h4><p>Legal and support inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("privacyOpen").addEventListener("click", () => openLegal("Privacy Policy", `<section><h3>Privacy Policy</h3><p>This Policy explains how Broad Mobility collects, uses, stores, and protects personal information shared through this website and our consultation services.</p></section><section><h4>1) Introduction</h4><p>We are committed to responsible data handling and only collect information necessary for service delivery, communication, and compliance.</p></section><section><h4>2) Information We Collect</h4><p>We may collect contact details, education/work background, destination interests, uploaded records, and consultation notes.</p></section><section><h4>3) How We Use Information</h4><p>Data is used to assess eligibility pathways, deliver advisory guidance, prepare documentation checklists, and communicate updates.</p></section><section><h4>4) Consultation and Service Delivery Data</h4><p>Consultation records may include action plans, timeline recommendations, and document feedback to improve delivery quality and continuity.</p></section><section><h4>5) Cookies and Technical Data</h4><p>We may use basic technical logs or analytics signals (such as browser type and page interactions) to improve site usability and reliability.</p></section><section><h4>6) Document Handling</h4><p>Uploaded files are used only for advisory and preparation support. Clients should avoid sharing unrelated sensitive records not required for service scope.</p></section><section><h4>7) Sharing with Trusted Partners</h4><p>Where necessary, information may be shared with trusted service partners or official channels strictly for client-requested processing steps.</p></section><section><h4>8) Data Retention</h4><p>Information is retained only for active services, recordkeeping, legal obligations, or quality control, then securely deleted or archived.</p></section><section><h4>9) Security Measures</h4><p>Broad Mobility applies reasonable technical and operational safeguards to reduce unauthorized access, disclosure, or misuse risks.</p></section><section><h4>10) User Rights</h4><p>You may request access, correction, or deletion of eligible personal data by contacting us. Some records may be retained where required by law.</p></section><section><h4>11) International Users</h4><p>Clients using our services across borders acknowledge that processing may involve data handling relevant to destination-country procedures.</p></section><section><h4>12) Third-Party Links</h4><p>Our site may link to third-party platforms. We are not responsible for external privacy practices and recommend reviewing those policies directly.</p></section><section><h4>13) Updates to This Policy</h4><p>We may revise this Policy as services evolve. Updated versions apply from the date of publication on our website.</p></section><section><h4>14) Contact Information</h4><p>Privacy inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("appLevel").addEventListener("change", (e) => {
    const v = e.target.value;
    if (v === "Bachelor") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Grade 10 and 12 National Exams<input type="file" name="bachelorDocs" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else if (v === "Masters") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Degree Certificate<input type="file" name="mastersDegree" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label><label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Transcript or Student Copy<input type="file" name="mastersTranscript" multiple style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else dynamicUploads.innerHTML = "";
  });
  document.getElementById("consultForm").addEventListener("submit", (e) => { e.preventDefault(); alert("Form ready for your backend integration."); });
  document.addEventListener("click", (e) => {
    if (e.target === consultModal) closeModal(consultModal);
    if (e.target === countryModal) closeModal(countryModal);
    if (e.target === moreCountriesModal) closeModal(moreCountriesModal);
    if (e.target === legalModal) closeModal(legalModal);
    if (e.target === searchModal) closeModal(searchModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeModal(consultModal);
      closeModal(countryModal);
      closeModal(moreCountriesModal);
      closeModal(legalModal);
      closeModal(searchModal);
    }
  });
  searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));
  searchResults.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-jump]");
    if (!btn) return;
    const target = document.querySelector(btn.dataset.jump);
    closeModal(searchModal);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("searchClear").addEventListener("click", () => { searchInput.value = ""; renderSearchResults(""); searchInput.focus(); });
  moreCountriesList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    const country = allCountriesMap.get(btn.dataset.country);
    if (!country) return;
    closeModal(moreCountriesModal);
    openCountry(country, { fromExtraList: true });
  });

  const tabPersonal = document.getElementById("tabPersonal");
  const tabGroup = document.getElementById("tabGroup");
  const panelPersonal = document.getElementById("panelPersonal");
  const panelGroup = document.getElementById("panelGroup");
  if (tabPersonal && tabGroup && panelPersonal && panelGroup) {
    const activateTab = (key) => {
      const personal = key === "personal";
      tabPersonal.classList.toggle("active", personal);
      tabGroup.classList.toggle("active", !personal);
      tabPersonal.setAttribute("aria-selected", personal ? "true" : "false");
      tabGroup.setAttribute("aria-selected", personal ? "false" : "true");
      panelPersonal.classList.toggle("hidden", !personal);
      panelGroup.classList.toggle("hidden", personal);
    };
    tabPersonal.addEventListener("click", () => activateTab("personal"));
    tabGroup.addEventListener("click", () => activateTab("group"));
  }
}



function animateHeroIntro() {
  const heroItems = document.querySelectorAll(".hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-ticker, .hero-stat-card");
  if (!heroItems.length || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.from(heroItems, {
    opacity: 0,
    y: 24,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.08
  });
  gsap.from(".hero-title", { letterSpacing: "0.01em", duration: 0.85, ease: "power3.out" });
}

function startProcessNumberCycle() {
  const processNumbers = document.querySelectorAll(".process-number, .step-circle");
  if (!processNumbers.length) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeProcessIndex = 0;
  const activateProcessNumber = () => {
    processNumbers.forEach((item) => item.classList.remove("is-active"));
    const activeItem = processNumbers[activeProcessIndex];
    if (activeItem) activeItem.classList.add("is-active");
    activeProcessIndex = (activeProcessIndex + 1) % processNumbers.length;
  };
  activateProcessNumber();
  if (!prefersReducedMotion) window.setInterval(activateProcessNumber, 1300);
}

function syncMenuScroll() { setHeaderState(); setActiveNav(); }
function init() {
  setupLogoFallbacks();
  animateHeroIntro();
  renderDestinations();
  renderMoreCountries();
  renderTestimonials();
  startImpactCarousel();
  startProcessNumberCycle();
  bindFaq();
  bindEvents();
  revealOnScroll();
  animateCounters();
  renderSearchResults("");
  syncMenuScroll();
  document.querySelectorAll("img").forEach(attachFallback);
}
window.addEventListener("scroll", syncMenuScroll, { passive: true });
window.addEventListener("resize", setActiveNav, { passive: true });
init();
