// Language toggle functionality
let currentLang = 'zh';

const translations = {
    zh: {
        brandName: '成祖燕窩',
        navStory: '品牌故事',
        navProducts: '產品展示',
        navContact: '聯絡我們',
        storyTitle: '品牌故事',
        storyContent: '結合明成祖朱元璋與名醫賈銘的養生對話，以及明成祖朱棣時期鄭和下西洋發現「貢燕」的傳說。',
        productsTitle: '產品展示',
        product1Title: '燕窩產品 1',
        product1Desc: '高品質燕窩，精心挑選。',
        product2Title: '燕窩產品 2',
        product2Desc: '純天然燕窩，健康養生。',
        contactTitle: '聯絡我們',
        contactContent: '歡迎聯絡我們了解更多產品資訊。',
        footerText: '© 2024 成祖燕窩. All rights reserved.',
        langToggle: 'EN'
    },
    en: {
        brandName: 'Chengzu Bird\'s Nest',
        navStory: 'Brand Story',
        navProducts: 'Products',
        navContact: 'Contact Us',
        storyTitle: 'Brand Story',
        storyContent: 'Introduction to the origins related to Emperor Yongle and the Ming Dynasty\'s focus on health preservation.',
        productsTitle: 'Products',
        product1Title: 'Bird\'s Nest Product 1',
        product1Desc: 'High-quality bird\'s nest, carefully selected.',
        product2Title: 'Bird\'s Nest Product 2',
        product2Desc: 'Pure natural bird\'s nest, healthy nourishment.',
        contactTitle: 'Contact Us',
        contactContent: 'Welcome to contact us for more product information.',
        footerText: '© 2024 Chengzu Bird\'s Nest. All rights reserved.',
        langToggle: '中'
    }
};

function updateLanguage() {
    const lang = translations[currentLang];
    document.getElementById('brand-name').textContent = lang.brandName;
    document.getElementById('nav-story').textContent = lang.navStory;
    document.getElementById('nav-products').textContent = lang.navProducts;
    document.getElementById('nav-contact').textContent = lang.navContact;
    document.getElementById('story-title').textContent = lang.storyTitle;
    document.getElementById('story-content').textContent = lang.storyContent;
    document.getElementById('products-title').textContent = lang.productsTitle;
    document.getElementById('product1-title').textContent = lang.product1Title;
    document.getElementById('product1-desc').textContent = lang.product1Desc;
    document.getElementById('product2-title').textContent = lang.product2Title;
    document.getElementById('product2-desc').textContent = lang.product2Desc;
    document.getElementById('contact-title').textContent = lang.contactTitle;
    document.getElementById('contact-content').textContent = lang.contactContent;
    document.getElementById('footer-text').textContent = lang.footerText;
    document.getElementById('lang-toggle').textContent = lang.langToggle;
    document.documentElement.lang = currentLang;
}

document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
});

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