const destinations = [
  { key: "usa", name: "USA", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The USA offers globally ranked universities, high research funding, and broad career paths across STEM, business, and creative fields.", scholarships: "Merit scholarships, assistantships, athletics, Fulbright, and departmental fellowships.", work: "Part-time work during studies, with post-study routes such as OPT and CPT in many programs.", stability: "Stable institutions, a deep innovation economy, and strong long-term education investment.", life: "Higher living costs in major cities, with active campus culture and wide student communities.", unis: [["Harvard University", "Ivy League leader in law, business, and policy."], ["Stanford University", "Innovation powerhouse in Silicon Valley."], ["MIT", "Top engineering and technology institution."], ["NYU", "Global urban campus in New York City."]] },
  { key: "italy", name: "Italy", flag: "🇮🇹", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80", pulse: "96%", why: "Italy combines historic universities, strong design and architecture fields, and access to wider European opportunities.", scholarships: "DSU regional grants, merit awards, tuition waivers, and Erasmus mobility support.", work: "Part-time work during studies, with growing opportunities in design, engineering, and tourism.", stability: "EU framework, stable academic systems, and continued international education growth.", life: "Moderate costs outside Milan and Rome, plus a rich culture and strong student life.", unis: [["University of Bologna", "Historic institution with broad academic strength."], ["Politecnico di Milano", "Top engineering and design university."], ["Sapienza University of Rome", "Large research university with international programs."], ["University of Padua", "Strong science and medicine legacy."]] },
  { key: "austria", name: "Austria", flag: "🇦🇹", image: "https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2020/05/Innsbruck-Austria.jpg?resize=840%2C577&ssl=1", pulse: "95%", why: "Austria offers quality of life, respected public universities, and a central European location for mobility and networking.", scholarships: "OeAD grants, mobility scholarships, tuition support, and university merit options.", work: "Student part-time options and strong graduate prospects in engineering, research, and health.", stability: "Politically stable EU country with a resilient economy and strong social systems.", life: "Balanced living costs, clean cities, and excellent transport infrastructure.", unis: [["University of Vienna", "Historic institution across humanities and sciences."], ["TU Wien", "Leading technology and engineering university."], ["Medical University of Vienna", "Respected medical training and research."], ["WU Vienna", "Strong business-focused university."]] },
  { key: "china", name: "China", flag: "🇨🇳", image: "https://images.unsplash.com/photo-1532298488760-970ff6decf61?auto=format&fit=crop&w=1400&q=80", pulse: "93%", why: "China blends top-ranked universities, advanced technology ecosystems, and growing scholarship channels for international students.", scholarships: "CSC scholarships, provincial grants, university awards, and bilateral programs.", work: "Rules vary by city and institution, with stronger opportunities in tech and manufacturing hubs.", stability: "Large diversified economy with strong infrastructure and long-term education investment.", life: "Affordable to premium cost ranges by city, with a fast-paced student experience.", unis: [["Tsinghua University", "Elite engineering and policy institution."], ["Peking University", "Comprehensive top-ranked academic leader."], ["Fudan University", "Strong in business, medicine, and social sciences."], ["Shanghai Jiao Tong", "High-impact engineering and innovation programs."]] },
  { key: "france", name: "France", flag: "🇫🇷", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80", pulse: "95%", why: "France delivers respected degrees, research strength, and prestigious institutions across arts, sciences, and engineering.", scholarships: "Eiffel scholarships, CROUS support, campus grants, and merit-based tuition discounts.", work: "Students can work part-time, and post-study permits support career transition in many sectors.", stability: "Stable democratic institutions and a diversified economy.", life: "Paris is premium cost, while other cities offer moderate costs and a rich student culture.", unis: [["Sorbonne University", "Strong research in sciences and humanities."], ["École Polytechnique", "Elite STEM grande école with global profile."], ["Sciences Po", "Top social sciences and policy school."], ["Université PSL", "Research-intensive federation of elite schools."]] },
  { key: "germany", name: "Germany", flag: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80", pulse: "97%", why: "Germany is known for engineering, applied research, and strong paths from study to employment in Europe’s largest economy.", scholarships: "DAAD scholarships, foundations, industry grants, and university fellowships.", work: "Strong student part-time rights and practical post-study residence options.", stability: "High economic resilience, strong institutions, and industrial leadership.", life: "Moderate living costs in many cities, excellent transit, and safe student settings.", unis: [["Technical University of Munich", "Global technical leader."], ["Heidelberg University", "Germany’s oldest research university."], ["LMU Munich", "Strong cross-disciplinary research profile."], ["RWTH Aachen", "Top engineering and applied science institution."]] },
  { key: "uk", name: "UK", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The UK offers globally known degrees, shorter master programs, and strong employer recognition worldwide.", scholarships: "Chevening, Commonwealth, GREAT scholarships, and university merit awards.", work: "Part-time work during studies and Graduate Route post-study options are widely used.", stability: "Stable institutions, a sophisticated economy, and strong global business links.", life: "Higher costs in London, with active campus life and broad multicultural communities.", unis: [["University of Oxford", "Historic global academic leader."], ["University of Cambridge", "World-class research and tutorial model."], ["Imperial College London", "STEM-focused excellence in central London."], ["UCL", "Major multidisciplinary research university."]] },
  { key: "romania", name: "Romania", flag: "🇷🇴", image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=80", pulse: "92%", why: "Romania provides affordable European education, growing English-taught programs, and strong value for money.", scholarships: "Romanian Government scholarships, university merit awards, and bilateral funding routes.", work: "Part-time student opportunities and growing entry-level jobs in IT, services, and engineering.", stability: "EU member with steady growth and improving international academic reach.", life: "Lower living costs than many EU capitals, with welcoming student cities like Cluj and Bucharest.", unis: [["University of Bucharest", "Historic comprehensive university in the capital."], ["Babeș-Bolyai University", "Top multicultural university in Cluj-Napoca."], ["Politehnica University of Bucharest", "Leading engineering institution."], ["Alexandru Ioan Cuza University", "Respected public research university."]] }
];

const testimonials = [
  { img: "/images/testimonials/liya.webp", name: "Liya M.", country: "Italy", q: "Broad Mobility gave me clear, step-by-step support from consultation to approval." },
  { img: "/images/testimonials/abel.webp", name: "Abel T.", country: "Germany", q: "Exceptional interview coaching and document quality improved my confidence." },
  { img: "/images/testimonials/sara.webp", name: "Sara K.", country: "United Kingdom", q: "Professional communication and fast response throughout the entire process." },
  { img: "/images/testimonials/nahom.webp", name: "Nahom B.", country: "France", q: "Their strategy helped me choose the right destination and timeline." },
  { img: "/images/testimonials/bethel.webp", name: "Bethel R.", country: "Austria", q: "Premium guidance with practical scholarship and visa preparation advice." },
  { img: "/images/testimonials/yosef.webp", name: "Yosef G.", country: "United States", q: "The visa pathway became simple and structured with clear milestones." },
  { img: "/images/testimonials/selam.webp", name: "Selam A.", country: "Romania", q: "Transparent communication made every stage easier to understand." },
  { img: "/images/testimonials/mikias.webp", name: "Mikias D.", country: "China", q: "Their country strategy and interview preparation helped me move with confidence." }
];

const siteMap = [
  { title: "Home", href: "#home", group: "Page" }, { title: "About Us", href: "#about-us", group: "Page" }, { title: "Services", href: "#services", group: "Page" }, { title: "Destinations", href: "#destinations", group: "Page" }, { title: "Success Stories", href: "#impact", group: "Page" }, { title: "Process", href: "#how-it-works", group: "Page" }, { title: "Testimonials", href: "#testimonials", group: "Page" }, { title: "Contact", href: "#contact", group: "Page" },
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
const destinationTemplate = document.getElementById("destinationTemplate");
const testimonialTemplate = document.getElementById("testimonialTemplate");
const impactCarousel = document.getElementById("impactCarousel");

const extraCountries = ["🇺🇸 USA", "🇩🇪 Germany", "🇨🇦 Canada", "🇦🇺 Australia", "🇬🇧 UK", "🇳🇱 Netherlands", "🇸🇪 Sweden", "🇯🇵 Japan", "🇰🇷 South Korea", "🇳🇴 Norway", "🇳🇿 New Zealand", "🇫🇷 France", "🇨🇭 Switzerland", "🇩🇰 Denmark", "🇫🇮 Finland", "🇧🇪 Belgium", "🇦🇹 Austria", "🇮🇹 Italy", "🇪🇸 Spain", "🇨🇳 China", "🇮🇪 Ireland", "🇵🇱 Poland", "🇭🇺 Hungary", "🇨🇿 Czech Republic", "🇵🇹 Portugal", "🇬🇷 Greece", "🇷🇴 Romania", "🇹🇷 Türkiye", "🇲🇾 Malaysia", "🇸🇬 Singapore", "🇲🇹 Malta", "🇱🇹 Lithuania", "🇱🇻 Latvia", "🇪🇪 Estonia", "🇧🇬 Bulgaria", "🇭🇷 Croatia", "🇸🇮 Slovenia", "🇸🇰 Slovakia", "🇦🇪 UAE", "🇶🇦 Qatar", "🇸🇦 Saudi Arabia", "🇪🇬 Egypt", "🇿🇦 South Africa", "🇧🇷 Brazil", "🇦🇷 Argentina", "🇨🇱 Chile", "🇲🇽 Mexico", "🇮🇳 India", "🇵🇭 Philippines", "🇹🇭 Thailand", "🇻🇳 Vietnam"];

const fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#dfe7f1"/>
  <rect x="70" y="70" width="1060" height="660" rx="36" fill="#f8f9fa" stroke="#cfd8e3"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#001f3f">Broad Mobility</text>
  <text x="600" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5f6b7a">Image placeholder</text>
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
  const sections = ["home", "about-us", "services", "destinations", "impact", "how-it-works", "testimonials", "contact"];
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

function openCountry(data) {
  document.getElementById("countryHero").src = data.image;
  document.getElementById("countryHero").alt = `${data.name} destination image`;
  document.getElementById("countryTitleLabel").textContent = `${data.name} ${data.flag}`;
  document.getElementById("countryWhy").textContent = data.why;
  document.getElementById("countryScholarships").textContent = data.scholarships;
  document.getElementById("countryWork").textContent = data.work;
  document.getElementById("countryStability").textContent = data.stability;
  document.getElementById("countryLife").textContent = data.life;
  const process = data.process || ["Gather documents", "Submit application online", "Book interview and biometrics", "Attend interview", "Receive passport decision"];
  document.getElementById("embassyProcess").innerHTML = process.map((step) => `<li>${step}</li>`).join("");
  const universityGrid = document.getElementById("universityGrid");
  universityGrid.innerHTML = data.unis.map(([name, desc]) => `<article class="card" style="padding:16px;border-radius:18px"><h5 style="margin:0;color:var(--navy)">${name}</h5><p style="margin-top:8px;color:var(--muted)">${desc}</p></article>`).join("");
  openModal(countryModal);
  if (window.gsap) gsap.fromTo("#countryModal .modal-shell", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
}
function openLegal(title, bodyHtml) { document.getElementById("legalTitle").textContent = title; document.getElementById("legalBody").innerHTML = bodyHtml; openModal(legalModal); }
function openSearch() { openModal(searchModal); renderSearchResults(""); setTimeout(() => searchInput.focus(), 50); }
function attachFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "1") return;
    img.dataset.fallbackApplied = "1";
    img.src = fallbackSvg;
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
    img.alt = d.key === "austria" ? "Innsbruck, Austria mountain city view" : d.key === "china" ? "Famous Beijing landmark in China" : `${d.name} destination`;
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
  moreCountriesList.innerHTML = extraCountries.map((c) => `<button class="search-result" type="button" data-country="${c.split(" ").slice(1).join(" ")}">${c}</button>`).join("");
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
  document.getElementById("moreCountriesOpen").addEventListener("click", () => openModal(moreCountriesModal));
  document.querySelectorAll(".mobile-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => closeModal(document.getElementById(btn.dataset.close))));
  document.getElementById("termsOpen").addEventListener("click", () => openLegal("Terms of Service", "<h3>Scope of Services</h3><p>Broad Mobility provides visa guidance, document preparation support, admissions advisory, and travel planning assistance. Embassy outcomes remain under official authority.</p><h3>Rights and Obligations</h3><p>Clients must provide accurate records and follow submission timelines. Broad Mobility commits to professional guidance, clear communication, and reasonable service standards for the selected plan.</p><h3>Disclaimers and Liability</h3><p>Decisions by embassies, universities, or border authorities are independent. Broad Mobility is not liable for losses resulting from incorrect client information, late submissions, or policy changes by authorities.</p><h3>Indemnity and Disputes</h3><p>Clients agree to indemnify Broad Mobility against claims resulting from false submissions. Disputes are first handled through direct resolution before formal legal channels.</p><h3>Contact</h3><p>Legal inquiries: scelta.infinity@gmail.com</p>"));
  document.getElementById("privacyOpen").addEventListener("click", () => openLegal("Privacy Policy", "<h3>Introduction</h3><p>This policy explains how Broad Mobility collects, uses, stores, and protects personal information shared through consultations and service forms.</p><h3>Information Collection and Use</h3><p>We collect contact data, education/work background, and supporting documents only for application preparation, communication, and service delivery.</p><h3>Data Handling and Retention</h3><p>Information is retained only as needed for active services, legal compliance, or recordkeeping, then securely deleted or archived.</p><h3>User Rights</h3><p>You may request access, correction, or deletion of eligible data by contacting our team. Some records may be retained where legally required.</p><h3>Security and Sharing</h3><p>Broad Mobility applies reasonable safeguards and does not sell personal data. Information is shared only with trusted process partners when required for your selected service.</p><h3>Contact</h3><p>Privacy inquiries: scelta.infinity@gmail.com</p>"));
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
    const name = btn.dataset.country;
    const known = destinations.find((d) => d.name.toLowerCase() === name.toLowerCase());
    closeModal(moreCountriesModal);
    if (known) openCountry(known);
    else openCountry({ name, flag: "", image: fallbackSvg, why: `${name} offers international pathways depending on program and intake.`, scholarships: "National, institutional, and merit pathways vary by school and year.", work: "Part-time rights and post-study options depend on current policy.", stability: "Policy stability varies by region and sector.", life: "Cost of living and student lifestyle differ by city.", unis: [["Leading University 1", "Recognized for international student pathways."], ["Leading University 2", "Strong programs across major disciplines."], ["Leading University 3", "Research and career-oriented programs."], ["Leading University 4", "Popular destination for international applicants."]] });
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

function syncMenuScroll() { setHeaderState(); setActiveNav(); }
function init() {
  renderDestinations();
  renderMoreCountries();
  renderTestimonials();
  startImpactCarousel();
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
