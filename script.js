import { supabase } from "./src/lib/supabase.js";

const destinations = [
  { key: "usa", name: "USA", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The USA offers globally ranked universities, high research funding, and broad career paths across STEM, business, and creative fields.", scholarships: "Merit scholarships, assistantships, athletics, Fulbright, and departmental fellowships.", work: "Part-time work during studies, with post-study routes such as OPT and CPT in many programs.", stability: "Stable institutions, a deep innovation economy, and strong long-term education investment.", life: "Higher living costs in major cities, with active campus culture and wide student communities.", unis: [["Harvard University", "Ivy League research university with global academic recognition."], ["Stanford University", "Research university known for technology, entrepreneurship, and innovation."], ["Massachusetts Institute of Technology", "Leading institution for engineering, science, and technology."], ["University of California, Berkeley", "Major public research university with strong global reputation."], ["New York University", "Large private university with strong international and urban programs."]] },
  { key: "italy", name: "Italy", flag: "🇮🇹", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=80", pulse: "96%", why: "Italy combines historic universities, strong design and architecture fields, and access to wider European opportunities.", scholarships: "DSU regional grants, merit awards, tuition waivers, and Erasmus mobility support.", work: "Part-time work during studies, with growing opportunities in design, engineering, and tourism.", stability: "EU framework, stable academic systems, and continued international education growth.", life: "Moderate costs outside Milan and Rome, plus a rich culture and strong student life.", unis: [["University of Bologna", "Historic public university with broad academic strength."], ["Sapienza University of Rome", "Large public research university with many international programs."], ["University of Padua", "Major public university known for research and academic tradition."], ["Politecnico di Milano", "Leading technical university for engineering, architecture, and design."], ["University of Milan", "Large public university with strong research and professional programs."]] },
  { key: "austria", name: "Austria", flag: "🇦🇹", image: "https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2020/05/Innsbruck-Austria.jpg?resize=840%2C577&ssl=1", pulse: "95%", why: "Austria offers quality of life, respected public universities, and a central European location for mobility and networking.", scholarships: "OeAD grants, mobility scholarships, tuition support, and university merit options.", work: "Student part-time options and strong graduate prospects in engineering, research, and health.", stability: "Politically stable EU country with a resilient economy and strong social systems.", life: "Balanced living costs, clean cities, and excellent transport infrastructure.", unis: [["University of Vienna", "Historic public university with broad academic programs."], ["TU Wien", "Leading technical university for engineering and applied sciences."], ["Graz University of Technology", "Public technical university known for engineering and research."], ["University of Innsbruck", "Public university with strong research and international student programs."], ["Vienna University of Economics and Business", "Major business and economics university in Vienna."]] },
  { key: "china", name: "China", flag: "🇨🇳", image: "https://daoinsights.com/wp-content/uploads/2021/09/1505870953_oMHAlr-1870x1052.jpeg", pulse: "93%", why: "China blends top-ranked universities, advanced technology ecosystems, and growing scholarship channels for international students.", scholarships: "CSC scholarships, provincial grants, university awards, and bilateral programs.", work: "Rules vary by city and institution, with stronger opportunities in tech and manufacturing hubs.", stability: "Large diversified economy with strong infrastructure and long-term education investment.", life: "Affordable to premium cost ranges by city, with a fast-paced student experience.", unis: [["Tsinghua University", "Top research university known for engineering, technology, and policy."], ["Peking University", "Comprehensive research university with strong global reputation."], ["Fudan University", "Major research university in Shanghai with broad academic strength."], ["Shanghai Jiao Tong University", "Leading university for engineering, business, and innovation."], ["Zhejiang University", "Large research university with strong science and technology programs."]] },
  { key: "france", name: "France", flag: "🇫🇷", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80", pulse: "95%", why: "France delivers respected degrees, research strength, and prestigious institutions across arts, sciences, and engineering.", scholarships: "Eiffel scholarships, CROUS support, campus grants, and merit-based tuition discounts.", work: "Students can work part-time, and post-study permits support career transition in many sectors.", stability: "Stable democratic institutions and a diversified economy.", life: "Paris is premium cost, while other cities offer moderate costs and a rich student culture.", unis: [["Sorbonne University", "Major research university with strength in humanities, science, and medicine."], ["Université Paris-Saclay", "Research-intensive university known for science and engineering."], ["École Polytechnique", "Highly selective grande école focused on science and engineering."], ["Sciences Po", "Well-known institution for social sciences, politics, and international affairs."], ["Université PSL", "Research university formed from leading French institutions."]] },
  { key: "germany", name: "Germany", flag: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80", pulse: "97%", why: "Germany is known for engineering, applied research, and strong paths from study to employment in Europe’s largest economy.", scholarships: "DAAD scholarships, foundations, industry grants, and university fellowships.", work: "Strong student part-time rights and practical post-study residence options.", stability: "High economic resilience, strong institutions, and industrial leadership.", life: "Moderate living costs in many cities, excellent transit, and safe student settings.", unis: [["Technical University of Munich", "Leading technical university with strong engineering and science programs."], ["Ludwig Maximilian University of Munich", "Major research university with broad academic strength."], ["Heidelberg University", "Historic research university known for academic excellence."], ["RWTH Aachen University", "Leading engineering and applied sciences university."], ["Humboldt University of Berlin", "Research university with strong humanities, sciences, and social sciences."]] },
  { key: "uk", name: "UK", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80", pulse: "94%", why: "The UK offers globally known degrees, shorter master programs, and strong employer recognition worldwide.", scholarships: "Chevening, Commonwealth, GREAT scholarships, and university merit awards.", work: "Part-time work during studies and Graduate Route post-study options are widely used.", stability: "Stable institutions, a sophisticated economy, and strong global business links.", life: "Higher costs in London, with active campus life and broad multicultural communities.", unis: [["University of Oxford", "Historic research university with global academic recognition."], ["University of Cambridge", "World-class research university with a strong tutorial tradition."], ["Imperial College London", "Leading institution for science, engineering, medicine, and business."], ["University College London", "Major multidisciplinary research university in London."], ["University of Edinburgh", "Respected research university with strong international programs."]] },
  { key: "romania", name: "Romania", flag: "🇷🇴", image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=80", pulse: "92%", why: "Romania provides affordable European education, growing English-taught programs, and strong value for money.", scholarships: "Romanian Government scholarships, university merit awards, and bilateral funding routes.", work: "Part-time student opportunities and growing entry-level jobs in IT, services, and engineering.", stability: "EU member with steady growth and improving international academic reach.", life: "Lower living costs than many EU capitals, with welcoming student cities like Cluj and Bucharest.", unis: [["University of Bucharest", "Historic public university with broad academic programs."], ["Babeș-Bolyai University", "Major public university in Cluj-Napoca with multilingual programs."], ["Politehnica University of Bucharest", "Leading technical university for engineering and applied sciences."], ["Alexandru Ioan Cuza University of Iași", "Historic public university with strong research and academic programs."], ["Carol Davila University of Medicine and Pharmacy", "Major medical and pharmacy university in Bucharest."]] }
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


const universalEmbassyProcess = [
  { type: "document", text: "Confirm admission or travel purpose" },
  { type: "folder", text: "Prepare passport and supporting documents" },
  { type: "calendar", text: "Complete visa form and appointment booking" },
  { type: "biometrics", text: "Attend biometrics or interview when required" },
  { type: "passport", text: "Track decision and collect passport" },
  { type: "route", text: "Complete pre-departure planning" }
];

function getEmbassyStepIcon(type) {
  const icons = {
    document: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h4"/></svg>',
    folder: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7V5a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v2"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v4"/><path d="M17 3v4"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16"/><path d="M9 15h3"/><path d="M14 15h1"/></svg>',
    biometrics: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M7 15.5c-1.8.8-3 2.3-3 4.5"/><path d="M17 15.5c1.8.8 3 2.3 3 4.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    passport: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9 17h6"/><path d="M10.5 11l1 1 2-2"/></svg>',
    route: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l18-8-8 18-2-7z"/><path d="M11 14 7 18"/><path d="M13 14l4 4"/></svg>'
  };
  return icons[type] || icons.document;
}

function renderEmbassyProcess() {
  return `<div class="embassy-process-list">${universalEmbassyProcess.map((step) => `
    <div class="embassy-process-step">
      <span class="embassy-process-icon">${getEmbassyStepIcon(step.type)}</span>
      <span class="embassy-process-text">${step.text}</span>
    </div>`).join("")}</div>`;
}

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
const articleModal = document.getElementById("articleModal");
const searchModal = document.getElementById("searchModal");
const destinationGrid = document.getElementById("destinationGrid");
const testimonialRowA = document.getElementById("testimonialRowA");
const testimonialRowB = document.getElementById("testimonialRowB");
const impactCount = document.getElementById("impactCount");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const dynamicUploads = document.getElementById("dynamicUploads");
const moreCountriesList = document.getElementById("moreCountriesList");
const moreCountriesListView = document.getElementById("moreCountriesListView");
const moreCountriesDetail = document.getElementById("moreCountriesDetail");
const moreCountriesTitle = document.getElementById("moreCountriesTitle");
const countrySelectorWrap = document.getElementById("countrySelectorWrap");
const countrySelectorButton = document.getElementById("countrySelectorButton");
const countrySelectorValue = document.getElementById("countrySelectorValue");
const countrySelectorMenu = document.getElementById("countrySelectorMenu");
const countryBackToList = document.getElementById("countryBackToList");
const destinationTemplate = document.getElementById("destinationTemplate");
const testimonialTemplate = document.getElementById("testimonialTemplate");
const impactCarousel = document.getElementById("impactCarousel");
const articleModalImage = document.getElementById("articleModalImage");
const articleModalMeta = document.getElementById("articleModalMeta");
const articleModalTitle = document.getElementById("articleModalTitle");
const articleModalBody = document.getElementById("articleModalBody");
const themeToggle = document.getElementById("themeToggle");
const THEME_STORAGE_KEY = "broadMobilityTheme";

const featuredDestinationNames = new Set([
  ...destinations.map((country) => country.name.toLowerCase()),
  "usa",
  "united states",
  "united states of america",
  "italy",
  "austria",
  "china",
  "france",
  "germany",
  "uk",
  "united kingdom",
  "romania"
]);
const featuredDestinationKeys = new Set(destinations.map((country) => country.key.toLowerCase()));
const requiredAdditionalCountryNames = [
  "Canada", "Australia", "Netherlands", "Japan", "South Korea", "Norway", "New Zealand", "Switzerland", "Denmark", "Finland", "Belgium", "Spain", "Ireland", "Poland", "Hungary", "Czech Republic", "Portugal", "Greece", "Malaysia", "Türkiye", "Singapore", "Malta", "United Arab Emirates", "Qatar", "Mexico", "Brunei", "South Africa"
];

const worldwideSelectorCountries = [
  "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia", "Rwanda", "Saint Kitts & Nevis", "Saint Lucia", "Saint Vincent & Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Türkiye", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const countrySelectorCountries = ["Ethiopia", ...worldwideSelectorCountries];
const COUNTRY_SELECTOR_STORAGE_KEY = "broadMobilitySelectedCountry";

const ethiopiaUniversities = [
  ["Addis Ababa University", "Major public research university and Ethiopia’s oldest higher education institution."],
  ["Addis Ababa Science and Technology University", "Public science and technology university focused on engineering and applied research."],
  ["Adama Science and Technology University", "Public university known for technology, engineering, and applied science programs."],
  ["Bahir Dar University", "Large public university with broad academic programs and research activity."],
  ["University of Gondar", "Public university known for health sciences, research, and professional programs."]
];

const extraCountryProfiles = window.extraCountryProfiles || [];
const extraCountryProfilesByName = new Map(extraCountryProfiles.map((country) => [country.name.toLowerCase(), country]));
const countryImages = {
  "Canada": "https://travelfine.es/wp-content/uploads/2023/04/Canada-Principal.jpg",
  "Australia": "https://www.vistra.com/sites/default/files/2019-03/Sydney.jpg",
  "Netherlands": "https://assets.plaece.nl/thumb/dyAx6mAcjJM7gCKNJEUHcgPglR-PCDQ5HoD8CArp-Vs/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMucGxhZWNlLm5sL2t1bWEtd2FkZGVuL3VwbG9hZHMvbWVkaWEvNWY5ODNjMTJjYzgwNC9wcmluc2VudHVpbi1ncm9uaW5nZW4tZG9uZS1ieS1kZW9uLTIwMTktbWFya2V0aW5nLWdyb25pbmdlbi5qcGVn.jpeg",
  "Japan": "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc1564bc44f66a900/675e1262cbd7d6bc5f15c6b0/japan-725347-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
  "South Korea": "https://res.cloudinary.com/pleasant-holidays/image/upload/v1715187926/Destinations/Asia/South%20Korea/south-korea-seoul-aerial-as.jpg",
  "Norway": "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/03/05172512/bergen.jpeg",
  "New Zealand": "https://cdn.britannica.com/25/180825-050-B4693350/Wellington-Harbour-New-Zealand.jpg",
  "Switzerland": "https://lp-cms-production.imgix.net/2019-06/shutterstock_160155083.jpg",
  "Denmark": "https://explore-live.s3.eu-west-1.amazonaws.com/medialibraries/explore/explore-media/destinations/europe/denmark/denmark-main.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201704280926%201920w",
  "Finland": "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt877152370274e4fa/6835a1d45f33e76dd94db789/iStock-1916715095-header-mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
  "Belgium": "https://media.bookmundi.com/files/uploads/bookmundi/cropped/countryfeatured/belgium-1737366349.jpg?format=auto&quality=60&width=1920",
  "Spain": "https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200",
  "Ireland": "https://www.vacationsbyrail.com/media/41324961/dublin-ireland.jpg",
  "Poland": "https://visiteurope.com/sites/default/files/images/2023-12/Poland-Wroclaw_shutterstock_Triff-scaled.jpg",
  "Hungary": "https://images.goway.com/production/styles/article_featured_image_3xl/s3/featured_images/Chain%20Bridge%20above%20Danube%20River%20in%20Budapest.%20Hungary_shutterstock_562412311.jpg.webp?VersionId=u.gkjZptnpil61Z0NsEm9976cZHLDLrF&h=426f1266&itok=CjByS9XL",
  "Czech Republic": "https://gfmag.com/wp-content/uploads/2024/09/Czech-Republic-diversification.jpg",
  "Portugal": "https://images.winalist.com/blog/wp-content/uploads/2024/03/05114638/AdobeStock_593917660.jpeg",
  "Greece": "https://thetourguy.com/wp-content/uploads/2022/04/best-places-to-visit-in-greece-feature-crop.jpg",
  "Malaysia": "https://s7d1.scene7.com/is/image/wbcollab/kl-malaysia?qlt=90&fmt=webp&resMode=sharp2",
  "Türkiye": "https://primetravelks.com/uploads/0000/6/2025/01/11/turkiye.jpg",
  "Singapore": "https://www.telegraph.co.uk/content/dam/travel/2025/11/05/TELEMMGLPICT000442637458_17623346578150_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=640",
  "Malta": "https://media.gq.com/photos/5bc4b85c6f8daa7dae417db4/16:9/w_2560%2Cc_limit/travel-guide-gq-malta.jpg",
  "United Arab Emirates": "https://cdn.sanity.io/images/nxpteyfv/goguides/bca1356ed689893437973440cd9fa1d0084917b7-1600x1066.jpg",
  "Qatar": "https://media.worldnomads.com/explore/qatar/6-things-qatar-doha-social.jpg",
  "Mexico": "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt2e10559cc9e609a6/67bafee3e1c1431efd96b480/pexels-pxleta-18491242-MOBILE-HEADER.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart",
  "Brunei": "https://www.bizbrunei.com/wp-content/uploads/2024/07/290724-BBF-bedb.jpg",
  "South Africa": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-970157462-647e08df0dd33.jpg?resize=2048:*"
};

const countryCodes = {
  Ethiopia: "ET", Canada: "CA", Australia: "AU", Netherlands: "NL", Japan: "JP", "South Korea": "KR", Norway: "NO", "New Zealand": "NZ", Switzerland: "CH", Denmark: "DK", Finland: "FI", Belgium: "BE", Spain: "ES", Ireland: "IE", Poland: "PL", Hungary: "HU", "Czech Republic": "CZ", Portugal: "PT", Greece: "GR", Malaysia: "MY", "Türkiye": "TR", Singapore: "SG", Malta: "MT", "United Arab Emirates": "AE", Qatar: "QA", Mexico: "MX", Brunei: "BN", "South Africa": "ZA"
};

const newsroomArticles = {
  "uk-student-visa-update": {
    title: "New UK student visa guidelines as of 2026",
    category: "Student Visa",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    body: [
      "UK student visa preparation in 2026 requires careful document consistency, clear financial evidence, and strong interview readiness.",
      "Applicants should confirm that bank records, sponsorship letters, academic records, and enrollment documents match across all submitted files.",
      "A strong preparation plan should begin at least 8 weeks before the intended submission window.",
      "Recommended steps include checking admission details, preparing financial proof, reviewing accommodation plans, organizing academic documents, and practicing interview answers."
    ]
  },
  "daad-deadlines": {
    title: "Germany’s DAAD scholarship deadlines and document plan",
    category: "Scholarship",
    date: "April 28, 2026",
    image: "https://i.imgur.com/m8d5HZz.jpeg",
    body: [
      "DAAD scholarship preparation requires early planning, accurate academic records, and a focused motivation package.",
      "Applicants should map deadlines first, then prepare recommendation letters, language proof, transcripts, and a clear statement of purpose.",
      "A strong DAAD file should connect academic history, career direction, program choice, and long-term contribution.",
      "Applicants should request reference letters early and keep a simple document checklist for every target program."
    ]
  },
  "smart-travel-preparation": {
    title: "Practical travel preparation tips for first-time international movers",
    category: "Travel Preparation",
    date: "April 28, 2026",
    image: "https://i.imgur.com/Vf8zZnh.jpeg",
    body: [
      "First-time international movers should prepare travel documents, arrival plans, emergency contacts, and basic settlement needs before departure.",
      "Important preparation areas include passport validity, visa documents, accommodation proof, airport pickup, budget planning, and local communication setup.",
      "Applicants should keep digital and printed copies of important documents in separate safe places.",
      "A smooth arrival plan reduces stress and helps students or travelers adjust faster during the first weeks abroad."
    ]
  }
};

const majorAdditionalCountryData = {
  "Canada": {
    why: "Canada is a leading destination for international students because of public universities, practical programs, multicultural cities, and post-study work pathways.",
    scholarships: "Canadian funding can include university entrance scholarships, merit awards, graduate assistantships, research funding, provincial scholarships, and external awards. Funding depends on program level, university, intake, and academic profile.",
    work: "International students may have on-campus and off-campus work options under current Canadian rules. Post-study work options depend on program eligibility, institution status, study length, and immigration policy at the time of application.",
    stability: "Canada has a stable education system, recognized institutions, and strong international student services, but visa and work rules must always be checked against current official immigration updates.",
    life: "Major cities such as Toronto and Vancouver are usually more expensive. Cities such as Edmonton, Winnipeg, Ottawa, Halifax, and some regional areas may offer more affordable student living depending on housing and lifestyle.",
    unis: [["University of Toronto", "Globally recognized for research, business, engineering, health sciences, and technology."], ["University of British Columbia", "Strong international reputation with major campuses in Vancouver and Okanagan."], ["McGill University", "Research-focused university in Montréal with strong global recognition."], ["University of Alberta", "Known for engineering, science, energy, health, and research programs."], ["University of Waterloo", "Strong in co-op education, computer science, engineering, and applied innovation."]]
  },
  "Australia": { unis: [["University of Melbourne", "Leading research university with broad professional programs."], ["Australian National University", "Known for research, policy, science, and global affairs."], ["University of Sydney", "Major public university with wide international recognition."], ["University of Queensland", "Strong in science, health, engineering, and research."], ["Monash University", "Large research university with strong international campuses and programs."]] },
  "Netherlands": { unis: [["University of Amsterdam", "Research university with broad English-taught options."], ["Delft University of Technology", "Leading technical university for engineering and design."], ["Utrecht University", "Historic research university with strong academic reputation."], ["Leiden University", "Known for law, humanities, science, and international studies."], ["Erasmus University Rotterdam", "Strong in business, economics, health, and social sciences."]] },
  "Sweden": { unis: [["Karolinska Institute", "Globally respected for medicine and health sciences."], ["Lund University", "Comprehensive research university with strong international programs."], ["Uppsala University", "Historic university with broad academic strength."], ["KTH Royal Institute of Technology", "Leading technical university in engineering and technology."], ["Stockholm University", "Major research university in Sweden’s capital."]] },
  "Japan": { unis: [["University of Tokyo", "Top research university across science, engineering, and policy."], ["Kyoto University", "Major research university known for academic depth."], ["Osaka University", "Strong in engineering, health, and research."], ["Tohoku University", "Research-intensive university with international programs."], ["Tokyo Institute of Technology", "Leading technical institution for science and engineering."]] },
  "South Korea": { unis: [["Seoul National University", "Leading public university with broad research strength."], ["KAIST", "Top institution for science, engineering, and innovation."], ["Yonsei University", "Major private university with strong international programs."], ["Korea University", "Comprehensive university known for business, law, and research."], ["POSTECH", "Research university focused on science and technology."]] },
  "Norway": { unis: [["University of Oslo", "Norway’s major public research university."], ["University of Bergen", "Strong in marine, climate, and social sciences."], ["Norwegian University of Science and Technology", "Leading technical university for engineering and research."], ["UiT The Arctic University of Norway", "Known for Arctic studies, health, and research."], ["Norwegian School of Economics", "Specialized institution for economics and business."]] },
  "New Zealand": { unis: [["University of Auckland", "Largest New Zealand university with broad global recognition."], ["University of Otago", "Historic university known for health sciences and research."], ["Victoria University of Wellington", "Strong in law, policy, humanities, and science."], ["University of Canterbury", "Known for engineering, science, and research."], ["Massey University", "Broad applied programs and flexible study options."]] },
  "Switzerland": { unis: [["ETH Zurich", "World-leading institution for science, engineering, and technology."], ["EPFL", "Top technical university in Lausanne."], ["University of Zurich", "Large research university with broad academic programs."], ["University of Geneva", "Known for international affairs, science, and law."], ["University of Bern", "Research university with strong science and health programs."]] },
  "Denmark": { unis: [["University of Copenhagen", "Major research university with broad programs."], ["Aarhus University", "Strong public research university."], ["Technical University of Denmark", "Leading technical university for engineering."], ["Copenhagen Business School", "Specialized business and management institution."], ["Aalborg University", "Known for problem-based learning and engineering."]] },
  "Finland": { unis: [["University of Helsinki", "Top Finnish research university."], ["Aalto University", "Strong in technology, business, design, and innovation."], ["University of Turku", "Broad research university with international programs."], ["Tampere University", "Known for technology, health, and society programs."], ["University of Oulu", "Research university strong in technology and northern studies."]] },
  "Belgium": { unis: [["KU Leuven", "Highly ranked research university with broad programs."], ["Ghent University", "Major public research university."], ["Université catholique de Louvain", "Comprehensive university with French-language and international options."], ["University of Antwerp", "Strong in business, science, and health."], ["Vrije Universiteit Brussel", "Research university in Brussels."]] },
  "Spain": { unis: [["University of Barcelona", "Major public university with broad research programs."], ["Autonomous University of Barcelona", "Strong research university near Barcelona."], ["Complutense University of Madrid", "Historic public university in Madrid."], ["University of Navarra", "Private university known for business, medicine, and communication."], ["Pompeu Fabra University", "Research university known for social sciences and health."]] },
  "Ireland": { unis: [["Trinity College Dublin", "Historic university with strong global reputation."], ["University College Dublin", "Large research university with broad programs."], ["University of Galway", "Research university in western Ireland."], ["University College Cork", "Strong in science, health, and humanities."], ["Dublin City University", "Known for business, computing, and applied programs."]] },
  "Poland": { unis: [["University of Warsaw", "Leading public research university."], ["Jagiellonian University", "Historic university in Kraków."], ["Warsaw University of Technology", "Major technical university."], ["AGH University of Krakow", "Known for engineering and applied sciences."], ["Wrocław University of Science and Technology", "Strong technical university."]] },
  "Hungary": { unis: [["Eötvös Loránd University", "Major public university in Budapest."], ["University of Szeged", "Research university with broad programs."], ["Semmelweis University", "Leading health sciences university."], ["Budapest University of Technology and Economics", "Strong in engineering and technology."], ["University of Debrecen", "Large public university with international programs."]] },
  "Czech Republic": { unis: [["Charles University", "Historic public research university in Prague."], ["Czech Technical University in Prague", "Leading technical university."], ["Masaryk University", "Major university in Brno."], ["Brno University of Technology", "Strong in engineering and applied sciences."], ["University of Chemistry and Technology Prague", "Specialized science and technology university."]] },
  "Portugal": { unis: [["University of Lisbon", "Large public research university."], ["University of Porto", "Major research university in northern Portugal."], ["University of Coimbra", "Historic university with broad academic programs."], ["NOVA University Lisbon", "Known for business, science, and social sciences."], ["University of Aveiro", "Strong in engineering, science, and design."]] },
  "Greece": { unis: [["National and Kapodistrian University of Athens", "Historic public university with broad programs."], ["Aristotle University of Thessaloniki", "Large public research university."], ["National Technical University of Athens", "Leading engineering institution."], ["University of Crete", "Research university with science and humanities strengths."], ["Athens University of Economics and Business", "Specialized in economics and business."]] },
  "Türkiye": { unis: [["Boğaziçi University", "Highly respected public university in Istanbul."], ["Middle East Technical University", "Strong in engineering, science, and research."], ["Istanbul Technical University", "Historic technical university."], ["Koç University", "Private research university with strong international profile."], ["Sabancı University", "Known for interdisciplinary and research-focused programs."]] },
  "Malaysia": { unis: [["Universiti Malaya", "Malaysia’s leading public research university."], ["Universiti Putra Malaysia", "Strong in agriculture, science, and research."], ["Universiti Kebangsaan Malaysia", "Major public research university."], ["Universiti Sains Malaysia", "Research university with broad programs."], ["Taylor’s University", "Private university known for hospitality, business, and design."]] },
  "Singapore": { unis: [["National University of Singapore", "Top global university with broad research strength."], ["Nanyang Technological University", "Leading university for engineering, science, and business."], ["Singapore Management University", "Specialized in business, law, and social sciences."], ["Singapore University of Technology and Design", "Focused on technology and design innovation."], ["Singapore Institute of Technology", "Applied university with industry-focused programs."]] },
  "Malta": { unis: [["University of Malta", "Main public university with broad programs."], ["Malta College of Arts, Science and Technology", "Applied institution for technical and vocational pathways."], ["Institute of Tourism Studies", "Specialized in tourism and hospitality."], ["Global College Malta", "Private higher education provider."], ["American University of Malta", "Private university with international programs."]] },
  "Lithuania": { unis: [["Vilnius University", "Historic public research university."], ["Kaunas University of Technology", "Strong in engineering and technology."], ["Vytautas Magnus University", "Comprehensive university in Kaunas."], ["Vilnius Gediminas Technical University", "Technical university known for engineering."], ["Lithuanian University of Health Sciences", "Specialized health sciences university."]] },
  "Latvia": { unis: [["University of Latvia", "Major public research university."], ["Riga Technical University", "Leading technical university."], ["Riga Stradiņš University", "Known for medicine and health sciences."], ["Latvia University of Life Sciences and Technologies", "Applied and science programs."], ["BA School of Business and Finance", "Specialized business institution."]] },
  "Estonia": { unis: [["University of Tartu", "Leading research university in Estonia."], ["Tallinn University of Technology", "Strong in engineering, IT, and innovation."], ["Tallinn University", "Known for social sciences and humanities."], ["Estonian University of Life Sciences", "Specialized in agriculture and environmental sciences."], ["Estonian Academy of Arts", "Creative arts and design institution."]] },
  "Bulgaria": { unis: [["Sofia University", "Major public university with broad programs."], ["Technical University of Sofia", "Leading engineering institution."], ["Medical University of Sofia", "Known for medicine and health sciences."], ["University of National and World Economy", "Business and economics university."], ["Plovdiv University", "Public university with broad academic options."]] },
  "Croatia": { unis: [["University of Zagreb", "Largest and oldest Croatian university."], ["University of Split", "Public university with coastal campus options."], ["University of Rijeka", "Research university with broad programs."], ["University of Osijek", "Regional public university."], ["Zagreb School of Economics and Management", "Private business school."]] },
  "Slovenia": { unis: [["University of Ljubljana", "Major public research university."], ["University of Maribor", "Large public university with broad programs."], ["University of Primorska", "Public university with international programs."], ["University of Nova Gorica", "Research-focused university."], ["IEDC-Bled School of Management", "Specialized management school."]] },
  "Slovakia": { unis: [["Comenius University Bratislava", "Leading public university in Slovakia."], ["Slovak University of Technology in Bratislava", "Strong engineering and technology institution."], ["Technical University of Košice", "Major technical university."], ["Pavol Jozef Šafárik University", "Public university with science and medicine."], ["University of Žilina", "Known for transport, engineering, and management."]] },
  "United Arab Emirates": { unis: [["United Arab Emirates University", "National research university with broad programs."], ["Khalifa University", "Strong in engineering, technology, and research."], ["American University of Sharjah", "International-style university with engineering and business."], ["University of Sharjah", "Large university with health, engineering, and humanities."], ["Zayed University", "Public university with applied programs."]] },
  "Qatar": { unis: [["Qatar University", "National university with broad academic programs."], ["Hamad Bin Khalifa University", "Research university within Education City."], ["Texas A&M University at Qatar", "Engineering-focused branch campus."], ["Georgetown University in Qatar", "International affairs branch campus."], ["Carnegie Mellon University in Qatar", "Computing and business branch campus."]] },
  "Saudi Arabia": { unis: [["King Saud University", "Major public university in Riyadh."], ["King Abdulaziz University", "Large research university in Jeddah."], ["King Fahd University of Petroleum and Minerals", "Strong in engineering, science, and energy."], ["KAUST", "Graduate research university for science and technology."], ["Princess Nourah bint Abdulrahman University", "Large public university for women."]] },
  "Egypt": { unis: [["Cairo University", "Major public university with broad programs."], ["American University in Cairo", "International-style university with strong liberal arts and business."], ["Ain Shams University", "Large public university in Cairo."], ["Alexandria University", "Public university with broad academic options."], ["Mansoura University", "Known for medicine, science, and research."]] },
  "South Africa": { unis: [["University of Cape Town", "Leading research university in Africa."], ["University of the Witwatersrand", "Major research university in Johannesburg."], ["Stellenbosch University", "Strong in research, science, and business."], ["University of Pretoria", "Large public university with broad programs."], ["University of Johannesburg", "Applied and comprehensive university."]] },
  "Brazil": { unis: [["University of São Paulo", "Major public research university."], ["University of Campinas", "Strong in science, engineering, and research."], ["Federal University of Rio de Janeiro", "Large public university with broad programs."], ["São Paulo State University", "Public university with multiple campuses."], ["Federal University of Minas Gerais", "Research university with broad academic strength."]] },
  "Argentina": { unis: [["University of Buenos Aires", "Major public university with regional recognition."], ["National University of La Plata", "Public research university."], ["Austral University", "Private university known for business and health."], ["Pontifical Catholic University of Argentina", "Private university with broad programs."], ["National University of Córdoba", "Historic public university."]] },
  "Chile": { unis: [["University of Chile", "Leading public research university."], ["Pontifical Catholic University of Chile", "Highly ranked private university."], ["University of Santiago, Chile", "Public university with engineering and science strengths."], ["University of Concepción", "Major regional research university."], ["Federico Santa María Technical University", "Known for engineering and technology."]] },
  "Mexico": { unis: [["National Autonomous University of Mexico", "Major public research university."], ["Tecnológico de Monterrey", "Private university known for business, engineering, and innovation."], ["IPN", "Public technical institute with engineering strength."], ["Universidad Iberoamericana", "Private university with social sciences and design."], ["University of Guadalajara", "Large public university network."]] },
  "India": { unis: [["Indian Institute of Science", "Leading research institution in science and engineering."], ["Indian Institute of Technology Bombay", "Top technical institution."], ["Indian Institute of Technology Delhi", "Strong in engineering and technology."], ["University of Delhi", "Large public university with broad programs."], ["Jawaharlal Nehru University", "Known for social sciences, languages, and research."]] },
  "Philippines": { unis: [["University of the Philippines", "National university system with broad programs."], ["Ateneo de Manila University", "Private university known for humanities, business, and law."], ["De La Salle University", "Private university with business and engineering."], ["University of Santo Tomas", "Historic university with broad programs."], ["Mapúa University", "Known for engineering and technology."]] },
  "Thailand": { unis: [["Chulalongkorn University", "Leading Thai public research university."], ["Mahidol University", "Strong in medicine, health, and science."], ["Thammasat University", "Known for law, politics, business, and social sciences."], ["Chiang Mai University", "Major regional university."], ["King Mongkut’s University of Technology Thonburi", "Technical university strong in engineering."]] },
  "Vietnam": { unis: [["Vietnam National University, Hanoi", "Major national university system."], ["Vietnam National University, Ho Chi Minh City", "National university system with broad programs."], ["Hanoi University of Science and Technology", "Leading technical university."], ["Foreign Trade University", "Known for business and economics."], ["Ton Duc Thang University", "Research-focused university in Ho Chi Minh City."]] },
  "Ethiopia": {
    why: "Ethiopia can be reviewed for local study pathways, regional mobility preparation, document readiness, and international application planning.",
    scholarships: "Funding may include government-supported local education routes, institutional opportunities, external scholarships, and international scholarship preparation depending on the applicant’s target country.",
    work: "Work and career pathways depend on field, qualification level, local regulations, and international plans. Applicants should align study choices with long-term academic or professional goals.",
    stability: "Applicants should review current admission, document authentication, embassy appointment, and travel conditions before final planning.",
    life: "Costs vary by city. Addis Ababa is usually higher than many regional cities. Student life depends on housing, transport, program location, and family support.",
    unis: ethiopiaUniversities
  }
};

function buildMajorCountryData(name) {
  const data = majorAdditionalCountryData[name];
  if (!data) return null;
  return {
    why: data.why || `${name} offers recognized education and mobility pathways that should be matched to the applicant’s field, budget, language preference, and intake plan.`,
    scholarships: data.scholarships || `Funding in ${name} may include institutional scholarships, merit awards, research support, and external programs. Availability varies by university, intake, and applicant profile.`,
    work: data.work || `Student work and post-study options in ${name} depend on current visa policy, institution rules, study level, and program eligibility. Applicants should check official guidance before applying.`,
    stability: data.stability || `${name} has established education and visa systems, but admission, visa, and work rules should always be checked against current official updates.`,
    life: data.life || `Living costs in ${name} vary by city, housing choice, transport, and lifestyle. Applicants should compare major cities with regional areas before final selection.`,
    unis: data.unis
  };
}


function createFallbackCountryProfile(name) {
  const key = name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return {
    key,
    code: key.slice(0, 3).toUpperCase(),
    name,
    flag: "",
    region: "Worldwide",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23dfe7f1'/%3E%3C/svg%3E",
    why: `${name} can be reviewed as part of a tailored Broad Mobility destination plan based on the applicant’s profile, timeline, and travel purpose.`,
    scholarships: "Scholarship, funding, and fee options should be confirmed against current institutional and government sources before application.",
    work: "Work and post-arrival options depend on the visa category, institution, destination rules, and current immigration guidance.",
    stability: "Policy, admission, and visa conditions should be reviewed for the applicant’s intended intake or travel season.",
    life: "Living costs and city choices should be checked against the applicant’s budget, field, language preference, and support needs.",
    unis: []
  };
}

function normalizeCountryName(name) {
  return String(name || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

function buildAdditionalCountries() {
  const featuredNames = new Set(destinations.map((country) => normalizeCountryName(country.name)));
  const featuredKeys = new Set(destinations.map((country) => country.key.toLowerCase()));
  const seenNames = new Set();

  return requiredAdditionalCountryNames.reduce((countries, name) => {
    const normalizedName = normalizeCountryName(name);
    const profile = extraCountryProfilesByName.get(name.toLowerCase()) || createFallbackCountryProfile(name);
    const key = String(profile.key || normalizedName).toLowerCase();

    if (featuredNames.has(normalizedName) || featuredKeys.has(key) || seenNames.has(normalizedName)) return countries;

    seenNames.add(normalizedName);
    const majorData = buildMajorCountryData(name);

    countries.push({
      ...profile,
      ...(majorData || {}),
      name,
      key,
      code: countryCodes[name] || profile.code || key.slice(0, 3).toUpperCase(),
      image: countryImages[name] || profile.image,
      unis: normalizedName === "ethiopia" ? ethiopiaUniversities : (majorData?.unis || profile.unis || [])
    });
    return countries;
  }, []);
}

const extraCountries = buildAdditionalCountries();
const allCountriesMap = new Map([...destinations, ...extraCountries].map((country) => [country.key, country]));

const fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#dfe7f1"/>
  <rect x="70" y="70" width="1060" height="660" rx="36" fill="#f8f9fa" stroke="#cfd8e3"/>
  <text x="600" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" fill="#001f3f">Broad Mobility</text>
  <text x="600" y="445" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#5f6b7a">Destination image unavailable</text>
</svg>
`);


function getStoredThemePreference() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_error) {
    return null;
  }
}

function storeThemePreference(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (_error) {}
}

function applyThemePreference(theme, { persist = true } = {}) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-theme", isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  }

  if (persist) storeThemePreference(isDark ? "dark" : "light");
}

function initThemeToggle() {
  const storedTheme = getStoredThemePreference();
  applyThemePreference(storedTheme === "dark" ? "dark" : "light", { persist: false });
}

function syncBodyLock() {
  const hasOpenModal = document.querySelector(".modal.open");
  const hasOpenMenu = mobilePanel.classList.contains("open");
  body.style.overflow = hasOpenModal || hasOpenMenu ? "hidden" : "";
}
function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  const shell = modal.querySelector(".motion-modal");
  if (shell) requestAnimationFrame(() => shell.classList.add("is-open"));
  syncBodyLock();
}
function closeModal(modal) {
  const shell = modal.querySelector(".motion-modal");
  if (shell) shell.classList.remove("is-open");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  syncBodyLock();
}
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

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

function getUniversityEntries(country) {
  if (normalizeCountryName(country.name) === "ethiopia") return ethiopiaUniversities;

  const universities = Array.isArray(country.unis) ? country.unis : [];
  const hasGeneratedPlaceholder = universities.some(([name, desc]) => {
    const text = `${name || ""} ${desc || ""}`.toLowerCase();
    return text.includes("recognized university with established academic")
      || text.includes("university of ethiopia");
  });

  if (!universities.length || hasGeneratedPlaceholder) {
    return [[
      "Verified institution selection required",
      "Program and university options should be confirmed based on the applicant’s field, intake, language, budget, and current admission rules."
    ]];
  }

  return universities;
}

function openCountry(data, options = {}) {
  const countryHero = document.getElementById("countryHero");
  const imageUrl = countryImages[data.name] || data.image || "";
  const hasValidImage = typeof imageUrl === "string" && imageUrl.trim() && !imageUrl.startsWith("data:image/svg+xml");
  countryHero.hidden = !hasValidImage;
  countryHero.classList.toggle("is-hidden", !hasValidImage);
  if (hasValidImage) {
    countryHero.src = imageUrl;
    countryHero.alt = `${data.name} destination image`;
    countryHero.classList.toggle("country-flag-hero", imageUrl.includes("flagcdn.com"));
  } else {
    countryHero.removeAttribute("src");
    countryHero.alt = "";
    countryHero.classList.remove("country-flag-hero");
  }
  document.getElementById("countryTitleLabel").textContent = `${data.name} ${data.flag || ""}`.trim();
  document.getElementById("countryWhy").textContent = data.why;
  document.getElementById("countryScholarships").textContent = data.scholarships;
  document.getElementById("countryWork").textContent = data.work;
  document.getElementById("countryStability").textContent = data.stability;
  document.getElementById("countryLife").textContent = data.life;
  document.getElementById("embassyProcess").innerHTML = renderEmbassyProcess();
  const universityGrid = document.getElementById("universityGrid");
  universityGrid.innerHTML = getUniversityEntries(data).map(([name, desc]) => `<article class="card country-university-card"><h5>${escapeHtml(name)}</h5><p>${escapeHtml(desc)}</p></article>`).join("");
  countryBackToList.classList.toggle("hidden", !options.fromExtraList);
  const detailCards = countryModal.querySelectorAll(".destination-detail-card");
  detailCards.forEach((card, index) => card.style.setProperty("--detail-stagger", `${80 + index * 90}ms`));
  openModal(countryModal);
  countryModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
  if (window.gsap) {
    gsap.fromTo("#countryModal .destination-modal-content", { opacity: 0, y: 18, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "expo.out" });
    gsap.fromTo("#countryModal .modal-hero, #countryModal .destination-detail-card", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.65, ease: "expo.out", stagger: 0.09, delay: 0.08 });
  }
}
function openLegal(title, bodyHtml) { document.getElementById("legalTitle").textContent = title; document.getElementById("legalBody").innerHTML = bodyHtml; openModal(legalModal); }
function openArticle(articleId) {
  const article = newsroomArticles[articleId];
  if (!article || !articleModal) return;

  if (article.image) {
    articleModalImage.hidden = false;
    articleModalImage.src = article.image;
    articleModalImage.alt = `${article.title} image`;
  } else {
    articleModalImage.hidden = true;
    articleModalImage.removeAttribute("src");
    articleModalImage.alt = "";
  }

  articleModalMeta.innerHTML = `<span>${escapeHtml(article.date)}</span><span>${escapeHtml(article.category)}</span>`;
  articleModalTitle.textContent = article.title;
  articleModalBody.innerHTML = article.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  openModal(articleModal);
  articleModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
}

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
    article.classList.add("motion-card", "scroll-reveal");
    const img = node.querySelector("img");
    article.dataset.country = d.key;
    if (index === 0 || index === 3) article.classList.add("span-2");
    img.src = d.image;
    img.alt = d.key === "austria" ? "Innsbruck, Austria mountain city view" : d.key === "china" ? "China city skyline and landmark view" : `${d.name} destination`;
    attachFallback(img);
    node.querySelector("h3").innerHTML = `<span class="destination-name">${escapeHtml(d.name)} <span class="destination-flag" aria-hidden="true">${escapeHtml(d.flag || "")}</span></span>`;
    node.querySelector("p").textContent = `Success pulse: ${d.pulse}`;
    const learnMore = node.querySelector(".destination-learn-more");
    learnMore.textContent = "Learn more";
    learnMore.setAttribute("aria-label", `Learn more about ${d.name}`);
    learnMore.addEventListener("click", (event) => {
      event.stopPropagation();
      openCountry(d);
    });
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
function hideBrokenAdditionalImages(root = document) {
  root.querySelectorAll(".additional-country-img").forEach((img) => {
    img.addEventListener("error", () => {
      img.hidden = true;
      img.removeAttribute("src");
    }, { once: true });
  });
}

function renderMoreCountries() {
  moreCountriesTitle.textContent = "More supported countries worldwide";
  moreCountriesListView.hidden = false;
  moreCountriesDetail.hidden = true;
  moreCountriesList.classList.add("more-countries-list");
  moreCountriesList.innerHTML = extraCountries.map((country) => `
    <button class="country-list-btn additional-country-card motion-card" type="button" data-country="${country.key}">
      <img class="additional-country-img" src="${escapeHtml(country.image)}" alt="${escapeHtml(country.name)} destination" loading="lazy" decoding="async" referrerpolicy="no-referrer">
      <span class="additional-country-card-body">
        <span class="additional-country-name">${escapeHtml(country.name)}</span>
        <small>${escapeHtml(country.code || country.region || "")}</small>
      </span>
    </button>`).join("");
  hideBrokenAdditionalImages(moreCountriesList);
}

function renderAdditionalCountryDetail(country) {
  const universityCards = getUniversityEntries(country).map(([name, desc]) => `<article class="card country-university-card"><h5>${escapeHtml(name)}</h5><p>${escapeHtml(desc)}</p></article>`).join("");
  moreCountriesTitle.textContent = country.name;
  moreCountriesListView.hidden = true;
  moreCountriesDetail.hidden = false;
  moreCountriesDetail.innerHTML = `
    <button class="country-back-btn additional-country-back" type="button" data-country-back>← Back to countries</button>
    <img class="country-detail-hero additional-country-img" src="${escapeHtml(country.image)}" alt="${escapeHtml(country.name)} destination image" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <div class="country-detail-heading">
      <span class="country-code-pill">${escapeHtml(country.code || "")}</span>
      <h3>${escapeHtml(country.name)}</h3>
      <p>${escapeHtml(country.why)}</p>
    </div>
    <div class="modal-grid country-detail-grid">
      <div class="modal-box destination-detail-card">
        <h4>Top Prestigious Universities</h4>
        <div class="grid country-university-grid">${universityCards}</div>
      </div>
      <div class="modal-box destination-detail-card">
        <h4>Scholarships and Funding</h4>
        <p>${escapeHtml(country.scholarships)}</p>
      </div>
      <div class="modal-box destination-detail-card">
        <h4>Work Opportunities</h4>
        <p>${escapeHtml(country.work)}</p>
      </div>
      <div class="modal-box destination-detail-card">
        <h4>Political and Economic Stability</h4>
        <p>${escapeHtml(country.stability)}</p>
      </div>
      <div class="modal-box destination-detail-card" style="grid-column:1/-1">
        <h4>Living Cost and Student Life</h4>
        <p>${escapeHtml(country.life)}</p>
      </div>
      <div class="modal-box destination-detail-card" style="grid-column:1/-1">
        <h4>Typical Embassy Process</h4>
        ${renderEmbassyProcess()}
      </div>
    </div>`;
  hideBrokenAdditionalImages(moreCountriesDetail);
  moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
}

function openMoreCountriesList() {
  renderMoreCountries();
  moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
  openModal(moreCountriesModal);
}

function setCountrySelectorValue(countryName, { persist = true } = {}) {
  const selected = countrySelectorCountries.includes(countryName) ? countryName : "Ethiopia";
  countrySelectorValue.textContent = selected;
  countrySelectorMenu.querySelectorAll(".country-option-divider").forEach((divider) => divider.remove());
  let selectedOption = null;
  countrySelectorMenu.querySelectorAll(".country-selector-option").forEach((option) => {
    const isSelected = option.dataset.countryName === selected;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", isSelected ? "true" : "false");
    if (isSelected) selectedOption = option;
  });
  if (selectedOption) {
    selectedOption.insertAdjacentHTML("afterend", '<div class="country-option-divider" aria-hidden="true"></div>');
  }
  if (persist) {
    try { localStorage.setItem(COUNTRY_SELECTOR_STORAGE_KEY, selected); } catch (_error) {}
  }
}

function closeCountrySelector() {
  countrySelectorMenu.classList.remove("is-open");
  countrySelectorButton.setAttribute("aria-expanded", "false");
}

function toggleCountrySelector() {
  const isOpen = countrySelectorMenu.classList.toggle("is-open");
  countrySelectorButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function initializeCountrySelector() {
  if (!countrySelectorWrap || !countrySelectorButton || !countrySelectorMenu) return;
  countrySelectorMenu.innerHTML = countrySelectorCountries.map((country) => `
    <button class="country-selector-option" type="button" role="option" data-country-name="${escapeHtml(country)}">
      <span>${escapeHtml(country)}</span><span class="country-check" aria-hidden="true">✓</span>
    </button>`).join("");

  let initialCountry = "Ethiopia";
  try {
    const stored = localStorage.getItem(COUNTRY_SELECTOR_STORAGE_KEY);
    if (countrySelectorCountries.includes(stored)) initialCountry = stored;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!stored && timeZone === "Africa/Addis_Ababa") initialCountry = "Ethiopia";
  } catch (_error) {}
  setCountrySelectorValue(initialCountry, { persist: false });

  countrySelectorButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleCountrySelector();
  });
  countrySelectorMenu.addEventListener("click", (event) => {
    const option = event.target.closest(".country-selector-option");
    if (!option) return;
    setCountrySelectorValue(option.dataset.countryName);
    closeCountrySelector();
  });
  document.addEventListener("click", (event) => {
    if (!countrySelectorWrap.contains(event.target)) closeCountrySelector();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCountrySelector();
  });
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
    article.classList.add("motion-card");
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
function applyMotionClasses() {
  document.querySelectorAll(".section-title").forEach((el) => {
    el.classList.add("scroll-reveal");
    el.parentElement?.classList.add("motion-mask");
  });
  document.querySelectorAll(".about-copy, .guarantee").forEach((el) => el.classList.add("scroll-reveal"));
  document.querySelectorAll(".service, .more-services, .step, .faq-item, .pricing-card, .group-offer-card, .blog-card").forEach((el) => el.classList.add("motion-card", "scroll-reveal"));
  document.querySelectorAll(".impact-slide").forEach((el) => el.classList.add("motion-card"));
  document.querySelectorAll(".testimonial").forEach((el) => el.classList.add("motion-card"));
  document.querySelectorAll(".about-founder-card").forEach((el) => el.classList.add("motion-card", "scroll-reveal"));
  document.querySelectorAll(".btn:not(.icon-btn), .article-back-btn, .group-cta-button").forEach((el) => el.classList.add("motion-button"));
  document.querySelectorAll(".modal-shell").forEach((el) => el.classList.add("motion-modal"));
}
function revealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal, .scroll-reveal");
  if (!revealItems.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in", "is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });
  revealItems.forEach((el) => observer.observe(el));
}

const APPLICATION_DOCUMENTS_BUCKET = "application-documents";
const MAX_APPLICATION_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_APPLICATION_MIME_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const ALLOWED_APPLICATION_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png"]);
const APPLICATION_DOCUMENT_FIELDS = {
  gradeExams: {
    label: "Grade 10 and 12 National Exams",
    column: "grade_10_12_exam_path",
    folder: "grade-exams"
  },
  highSchoolTranscript: {
    label: "High School Transcript",
    column: "high_school_transcript_path",
    folder: "high-school-transcripts"
  },
  passport: {
    label: "Passport",
    column: "passport_path",
    folder: "passports"
  },
  bachelorDegreeCertificate: {
    label: "Bachelor Degree Certificate",
    column: "bachelor_degree_certificate_path",
    folder: "bachelor-certificates"
  },
  bachelorTranscript: {
    label: "Bachelor Transcript or Student Copy",
    column: "bachelor_transcript_path",
    folder: "bachelor-transcripts"
  }
};

function setApplicationFormMessage(type, message) {
  const messageEl = document.getElementById("applicationFormMessage");
  if (!messageEl) return;
  messageEl.textContent = message || "";
  messageEl.classList.remove("is-success", "is-error");
  if (type && message) messageEl.classList.add(type === "success" ? "is-success" : "is-error");
}

function getFieldValue(form, name) {
  return String(form.elements[name]?.value || "").trim();
}

function getApplicationRequiredDocuments(level) {
  const baseDocuments = ["highSchoolTranscript", "passport"];
  if (level === "Bachelor") return ["gradeExams", ...baseDocuments];
  if (level === "Masters") return ["bachelorDegreeCertificate", "bachelorTranscript", ...baseDocuments];
  return baseDocuments;
}

function getFileExtension(file) {
  return file.name.split(".").pop()?.toLowerCase() || "";
}

function validateApplicationFileInput(input, documentConfig) {
  if (!input || !input.files || input.files.length === 0) {
    return { error: `${documentConfig.label} is required.` };
  }

  if (input.files.length > 1) {
    return { error: "Please upload one combined PDF or one image per document field." };
  }

  const file = input.files[0];
  const extension = getFileExtension(file);
  if (!ALLOWED_APPLICATION_MIME_TYPES.has(file.type) || !ALLOWED_APPLICATION_EXTENSIONS.has(extension)) {
    return { error: `${documentConfig.label} must be a PDF, JPG, JPEG, or PNG file.` };
  }

  return { file, extension };
}

function validateApplicationForm(form) {
  const fullName = getFieldValue(form, "fullName");
  const email = getFieldValue(form, "email");
  const phone = getFieldValue(form, "phone");
  const secondaryPhone = getFieldValue(form, "secondaryPhone");
  const applicationLevel = getFieldValue(form, "level");
  const applicationArea = getFieldValue(form, "field");
  const countriesInterested = getFieldValue(form, "countries");
  const heardAboutUs = getFieldValue(form, "source");
  const emailInput = form.elements.email;
  const phonePattern = /^[0-9+\-()\s]+$/;
  const simpleEmailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!fullName || !email || !phone || !applicationLevel || !applicationArea || !countriesInterested || !heardAboutUs) {
    return { error: "Please complete all required fields before submitting." };
  }

  if (!emailInput.validity.valid || !simpleEmailPattern.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!phonePattern.test(phone) || (secondaryPhone && !phonePattern.test(secondaryPhone))) {
    return { error: "Please enter a valid phone number using digits, spaces, +, -, or parentheses." };
  }

  const requiredDocumentNames = getApplicationRequiredDocuments(applicationLevel);
  const fileUploads = [];
  let totalSize = 0;

  for (const documentName of requiredDocumentNames) {
    const documentConfig = APPLICATION_DOCUMENT_FIELDS[documentName];
    const input = form.querySelector(`[name="${documentName}"]`);
    const result = validateApplicationFileInput(input, documentConfig);
    if (result.error) return { error: result.error };
    totalSize += result.file.size;
    fileUploads.push({ ...documentConfig, file: result.file, extension: result.extension });
  }

  if (totalSize > MAX_APPLICATION_FILE_BYTES) {
    return { error: "Maximum combined file size should stay below 10MB." };
  }

  return {
    payload: {
      full_name: fullName,
      email,
      phone,
      secondary_phone: secondaryPhone || null,
      application_level: applicationLevel,
      application_area: applicationArea,
      countries_interested: countriesInterested,
      heard_about_us: heardAboutUs,
      status: "new"
    },
    fileUploads
  };
}

function buildApplicationStoragePath(folder, extension) {
  return `${folder}/${crypto.randomUUID()}.${extension}`;
}

async function uploadApplicationDocument({ file, folder, extension }) {
  const path = buildApplicationStoragePath(folder, extension);
  const { data, error } = await supabase.storage
    .from(APPLICATION_DOCUMENTS_BUCKET)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type
    });

  if (error) throw error;
  return data.path;
}

async function handleConsultFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  setApplicationFormMessage("", "");

  const validation = validateApplicationForm(form);
  if (validation.error) {
    setApplicationFormMessage("error", validation.error);
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const payload = { ...validation.payload };
    for (const upload of validation.fileUploads) {
      payload[upload.column] = await uploadApplicationDocument(upload);
    }

    const { error } = await supabase
      .from("applications")
      .insert([payload]);

    if (error) throw error;

    form.reset();
    dynamicUploads.innerHTML = "";
    setApplicationFormMessage("success", "Application submitted successfully. Our team will contact you soon.");
  } catch (error) {
    console.error(error);
    setApplicationFormMessage("error", "Submission failed. Please check your connection and try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
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
  if (themeToggle) themeToggle.addEventListener("click", () => applyThemePreference(body.classList.contains("dark-theme") ? "light" : "dark"));
  document.getElementById("searchOpenMobile").addEventListener("click", () => { closeMenu(); openSearch(); });
  document.querySelectorAll("[data-article-id]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openArticle(link.dataset.articleId);
    });
  });
  document.getElementById("moreCountriesOpen").addEventListener("click", openMoreCountriesList);
  countryBackToList.addEventListener("click", () => { closeModal(countryModal); openModal(moreCountriesModal); moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" }); });
  document.querySelectorAll(".mobile-link").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => closeModal(document.getElementById(btn.dataset.close))));
  document.getElementById("termsOpen").addEventListener("click", () => openLegal("Terms of Service", `<section><h3>Terms of Service</h3><p>These Terms explain how Broad Mobility delivers visa, education, and travel support services. By using this website or booking support, you agree to these terms.</p></section><section><h4>1) Scope of Services</h4><p>Broad Mobility provides advisory support including consultations, document preparation guidance, interview coaching, travel planning assistance, and general destination information.</p></section><section><h4>2) Eligibility</h4><p>Clients must be legally permitted to apply for their selected program, visa, or travel category and must provide truthful personal and supporting information.</p></section><section><h4>3) Client Responsibilities</h4><p>Clients are responsible for attending meetings, submitting requested records on time, and reviewing all documents before submission to any embassy, school, or third party.</p></section><section><h4>4) Accuracy of Information</h4><p>All outcomes depend on accurate information. Inconsistent, altered, or incomplete records can delay processing or lead to refusal by authorities.</p></section><section><h4>5) Consultation and Advisory Nature</h4><p>Broad Mobility is an advisory consultancy. We prepare and guide, but we do not guarantee approvals because final decisions are made by independent institutions.</p></section><section><h4>6) Fees and Payments</h4><p>Published service plans describe support level and scope. Where fees apply, clients are informed before onboarding. Government or embassy fees are separate unless clearly stated.</p></section><section><h4>7) Third-Party Decisions</h4><p>Embassies, universities, scholarship boards, and border authorities make independent decisions. Broad Mobility cannot override, influence, or reverse those decisions.</p></section><section><h4>8) Timelines and Expectations</h4><p>Processing timelines vary by country, intake, season, and document readiness. Shared timelines are planning estimates, not guaranteed processing dates.</p></section><section><h4>9) Refund, Cancellation, and Rescheduling</h4><p>Consultation slots may be rescheduled with notice. Service fees already used for delivered work or reviews may be non-refundable based on completed scope.</p></section><section><h4>10) Intellectual Property</h4><p>All website content, guidance templates, and branded materials remain the property of Broad Mobility unless otherwise stated.</p></section><section><h4>11) Acceptable Use</h4><p>You agree not to misuse forms, upload harmful files, impersonate others, or use our materials for unlawful activities.</p></section><section><h4>12) Limitation of Liability</h4><p>Broad Mobility is not liable for indirect losses caused by third-party decisions, policy changes, client delays, or inaccurate client-provided information.</p></section><section><h4>13) Indemnification</h4><p>Clients agree to indemnify Broad Mobility against claims arising from falsified records, unauthorized use, or misuse of advisory materials.</p></section><section><h4>14) Privacy Reference</h4><p>Personal information is handled under our Privacy Policy. Please review it for details on data collection, processing, and retention.</p></section><section><h4>15) Service and Term Updates</h4><p>Broad Mobility may update services, terms, and published offers to reflect operational or legal changes. Updated terms apply once posted.</p></section><section><h4>16) Support and Customer Contact</h4><p>For service clarifications, plan scope, or complaint resolution, contact our support team and include your full name and service reference.</p></section><section><h4>17) Contact Information</h4><p>Legal and support inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("privacyOpen").addEventListener("click", () => openLegal("Privacy Policy", `<section><h3>Privacy Policy</h3><p>This Policy explains how Broad Mobility collects, uses, stores, and protects personal information shared through this website and our consultation services.</p></section><section><h4>1) Introduction</h4><p>We are committed to responsible data handling and only collect information necessary for service delivery, communication, and compliance.</p></section><section><h4>2) Information We Collect</h4><p>We may collect contact details, education/work background, destination interests, uploaded records, and consultation notes.</p></section><section><h4>3) How We Use Information</h4><p>Data is used to assess eligibility pathways, deliver advisory guidance, prepare documentation checklists, and communicate updates.</p></section><section><h4>4) Consultation and Service Delivery Data</h4><p>Consultation records may include action plans, timeline recommendations, and document feedback to improve delivery quality and continuity.</p></section><section><h4>5) Cookies and Technical Data</h4><p>We may use basic technical logs or analytics signals (such as browser type and page interactions) to improve site usability and reliability.</p></section><section><h4>6) Document Handling</h4><p>Uploaded files are used only for advisory and preparation support. Clients should avoid sharing unrelated sensitive records not required for service scope.</p></section><section><h4>7) Sharing with Trusted Partners</h4><p>Where necessary, information may be shared with trusted service partners or official channels strictly for client-requested processing steps.</p></section><section><h4>8) Data Retention</h4><p>Information is retained only for active services, recordkeeping, legal obligations, or quality control, then securely deleted or archived.</p></section><section><h4>9) Security Measures</h4><p>Broad Mobility applies reasonable technical and operational safeguards to reduce unauthorized access, disclosure, or misuse risks.</p></section><section><h4>10) User Rights</h4><p>You may request access, correction, or deletion of eligible personal data by contacting us. Some records may be retained where required by law.</p></section><section><h4>11) International Users</h4><p>Clients using our services across borders acknowledge that processing may involve data handling relevant to destination-country procedures.</p></section><section><h4>12) Third-Party Links</h4><p>Our site may link to third-party platforms. We are not responsible for external privacy practices and recommend reviewing those policies directly.</p></section><section><h4>13) Updates to This Policy</h4><p>We may revise this Policy as services evolve. Updated versions apply from the date of publication on our website.</p></section><section><h4>14) Contact Information</h4><p>Privacy inquiries: scelta.infinity@gmail.com.</p></section>`));
  document.getElementById("appLevel").addEventListener("change", (e) => {
    const v = e.target.value;
    if (v === "Bachelor") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Grade 10 and 12 National Exams<input type="file" name="gradeExams" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else if (v === "Masters") dynamicUploads.innerHTML = '<label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Degree Certificate<input type="file" name="bachelorDegreeCertificate" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label><label style="padding:16px;border-radius:18px;border:1px dashed rgba(255,255,255,.20);background:rgba(255,255,255,.04)">Bachelor Transcript or Student Copy<input type="file" name="bachelorTranscript" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" style="display:block;margin-top:10px;width:100%;color:#fff"></label>';
    else dynamicUploads.innerHTML = "";
  });
  document.getElementById("consultForm").addEventListener("submit", handleConsultFormSubmit);
  document.addEventListener("click", (e) => {
    if (e.target === consultModal) closeModal(consultModal);
    if (e.target === countryModal) closeModal(countryModal);
    if (e.target === moreCountriesModal) closeModal(moreCountriesModal);
    if (e.target === legalModal) closeModal(legalModal);
    if (e.target === articleModal) closeModal(articleModal);
    if (e.target === searchModal) closeModal(searchModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeModal(consultModal);
      closeModal(countryModal);
      closeModal(moreCountriesModal);
      closeModal(legalModal);
      closeModal(articleModal);
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
  moreCountriesModal.addEventListener("click", (e) => {
    const contact = e.target.closest("[data-country-contact]");
    if (contact) {
      closeModal(moreCountriesModal);
      openModal(consultModal);
      return;
    }
    const back = e.target.closest("[data-country-back]");
    if (back) {
      renderMoreCountries();
      moreCountriesModal.querySelector(".modal-shell").scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const btn = e.target.closest("[data-country]");
    if (!btn) return;
    const country = allCountriesMap.get(btn.dataset.country);
    if (!country) return;
    renderAdditionalCountryDetail(country);
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
  if (document.querySelector(".hero-title-motion")) return;
  const heroItems = document.querySelectorAll(".hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-ticker, .hero-stat-card");
  if (!heroItems.length || heroItems[0].classList.contains("motion-reveal") || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.from(".hero-title", { opacity: 0, y: 24, duration: 1.2, ease: "expo.out" });
  gsap.from(".hero-subtitle", { opacity: 0, y: 22, duration: 1.1, ease: "expo.out", delay: 0.12 });
  gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 1.0, ease: "expo.out", delay: 0.22 });
  gsap.from(".hero-stat-card, .stat", { opacity: 0, y: 22, duration: 1.15, ease: "expo.out", stagger: 0.09, delay: 0.28 });
  gsap.from(".hero-badge, .hero-ticker", { opacity: 0, y: 18, duration: 1.0, ease: "expo.out", stagger: 0.08, delay: 0.08 });
  gsap.from(".hero-title", { letterSpacing: "0.01em", duration: 1.2, ease: "expo.out" });
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
  if (!prefersReducedMotion) window.setInterval(activateProcessNumber, 1800);
}

function syncMenuScroll() { setHeaderState(); setActiveNav(); }
function init() {
  initThemeToggle();
  setupLogoFallbacks();
  animateHeroIntro();
  renderDestinations();
  renderMoreCountries();
  initializeCountrySelector();
  renderTestimonials();
  applyMotionClasses();
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
