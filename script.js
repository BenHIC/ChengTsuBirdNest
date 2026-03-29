// Language toggle functionality
let currentLang = 'zh';

const translations = {
    zh: {
        brandName: '成祖燕窩',
        navStory: '品牌故事',
        navProducts: '產品展示',
        navReport: '檢驗報告',
        navContact: '聯絡我們',
        storyTitle: '品牌故事',
        storyContent: '燕窩自古以來就被視為珍貴的滋補品，相傳在明成祖朱棣時期，鄭和下西洋時從東南亞地區帶回「貢燕」，開啟了燕窩在中國的傳播。燕窩富含蛋白質、氨基酸、鈣、鐵等多種營養成分，被譽為「東方人蔘」。成祖燕窩秉承傳統工藝，精心挑選優質燕盞，通過現代化處理技術，保留燕窩的天然營養價值，讓您在家就能享受到這份來自大自然的恩賜。',
        productsTitle: '產品展示',
        productTitle: '乾燕盞',
        productDesc: '燕盞是燕窩的精華部位，具有最高的營養價值。富含蛋白質、氨基酸、鈣、鐵、磷等多種營養成分，具有滋陰潤肺、養顏美容、增強免疫力等功效。成祖燕窩精選優質燕盞，通過傳統手工挑揀與現代化處理技術，確保每一盞燕窩都保持最佳品質。',
        reportTitle: '檢驗報告',
        reportDesc: '本公司產品通過 SGS 嚴格檢驗，品質有保障。',
        contactTitle: '聯絡我們',
        contactContent: '歡迎聯絡我們了解更多產品資訊。',
        formNameLabel: '姓名',
        formNamePlaceholder: '請輸入您的姓名',
        formEmailLabel: '電子郵件',
        formEmailPlaceholder: '請輸入您的電子郵件',
        formMessageLabel: '留言內容',
        formMessagePlaceholder: '請輸入留言內容',
        formSubmit: '送出',
        footerText: '© 2024 成祖燕窩. All rights reserved.',
        langToggle: 'EN'
    },
    en: {
        brandName: 'Cheng Tsu Bird\'s Nest',
        navStory: 'Brand Story',
        navProducts: 'Products',
        navReport: 'SGS Report',
        navContact: 'Contact Us',
        storyTitle: 'Brand Story',
        storyContent: 'Bird\'s nest has long been regarded as a precious tonic. Legend has it that during the reign of Emperor Yongle of the Ming Dynasty, Zheng He brought back "tribute bird\'s nests" from Southeast Asia during his voyages, introducing bird\'s nest to China. Rich in protein, amino acids, calcium, iron and other nutrients, bird\'s nest is known as the "Eastern Ginseng". Cheng Tsu Bird\'s Nest upholds traditional craftsmanship, carefully selecting premium bird\'s nest cups, using modern processing technology to preserve the natural nutritional value, allowing you to enjoy this gift from nature at home.',
        productsTitle: 'Products',
        productTitle: 'Dried Bird\'s Nest Cup',
        productDesc: 'The bird\'s nest cup is the essence of bird\'s nest with the highest nutritional value. Rich in protein, amino acids, calcium, iron, phosphorus and other nutrients, it has effects such as nourishing yin and moistening lungs, beauty care, and enhancing immunity. Cheng Tsu Bird\'s Nest selects premium bird\'s nest cups through traditional hand-picking and modern processing technology to ensure each cup maintains the best quality.',
        reportTitle: 'SGS Report',
        reportDesc: 'Our products are SGS inspected for quality and safety assurance.',
        contactTitle: 'Contact Us',
        contactContent: 'Welcome to contact us for more product information.',
        formNameLabel: 'Name',
        formNamePlaceholder: 'Enter your name',
        formEmailLabel: 'Email',
        formEmailPlaceholder: 'Enter your email',
        formMessageLabel: 'Message',
        formMessagePlaceholder: 'Enter your message',
        formSubmit: 'Send',
        footerText: '© 2024 Cheng Tsu Bird\'s Nest. All rights reserved.',
        langToggle: '中'
    }
};

function updateLanguage() {
    const lang = translations[currentLang];

    // Explicit ID-based updates for critical blocks
    const elementsById = {
        'brand-name': lang.brandName,
        'nav-story': lang.navStory,
        'nav-products': lang.navProducts,
        'nav-report': lang.navReport,
        'nav-contact': lang.navContact,
        'story-title': lang.storyTitle,
        'story-content': lang.storyContent,
        'products-title': lang.productsTitle,
        'product-title': lang.productTitle,
        'product-desc': lang.productDesc,
        'contact-title': lang.contactTitle,
        'contact-content': lang.contactContent,
        'report-title': lang.reportTitle,
        'report-desc': lang.reportDesc,
        'footer-text': lang.footerText,
        'lang-toggle': lang.langToggle
    };

    Object.entries(elementsById).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    });

    // Fallback: data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(node => {
        const key = node.getAttribute('data-i18n');
        if (key && lang[key]) {
            node.textContent = lang[key];
        }
    });

    // Placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
        const key = node.getAttribute('data-i18n-placeholder');
        if (key && lang[key]) {
            node.placeholder = lang[key];
        }
    });

    document.documentElement.lang = currentLang;

    // Dynamic footer year
    const yearEl = document.getElementById('year-text');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
});

// Contact form submit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-mail').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        const subject = encodeURIComponent('成祖燕窩網站聯絡詢問');
        const body = encodeURIComponent(`姓名: ${name}` + '\n' +
            `電子郵件: ${email}` + '\n' +
            '留言內容:' + '\n' +
            message);

        window.location.href = `mailto:ctbirdsnest@gmail.com?subject=${subject}&body=${body}`;
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
updateLanguage();