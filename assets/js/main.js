// ═══════════════════════════════════════════════════════════
// MAIN ENGINE - The Hidden Chamber
// ═══════════════════════════════════════════════════════════

import { StoryEngine } from './story-engine.js';

class HiddenChamber {
    constructor() {
        this.currentLang = 'ar';
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.birthdate = null;
        this.zodiacData = null;
        this.soulColor = 'blue';
        this.bigFive = {
            openness: 0,
            conscientiousness: 0,
            extraversion: 0,
            agreeableness: 0,
            neuroticism: 0
        };
        this.questions = [];
        this.translations = {};
        this.init();
    }

    // ─────────────────────────────────────────────────────────
    // Initialization
    // ─────────────────────────────────────────────────────────
    async init() {
        this.loadLanguageFromStorage();
        await this.loadTranslations();
        this.bindEvents();
        this.updateUIForLanguage();
        this.incrementVisitor();
        
        // Handle result page if URL contains data
        if (window.location.pathname.includes('result.html')) {
            this.handleResultPage();
        }
    }

    // ─────────────────────────────────────────────────────────
    // Language Management
    // ─────────────────────────────────────────────────────────
    loadLanguageFromStorage() {
        const savedLang = localStorage.getItem('hidden_chamber_lang');
        this.currentLang = savedLang || 'ar';
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    }

    async loadTranslations() {
        try {
            const response = await fetch(`/lang/${this.currentLang}.json`);
            this.translations = await response.json();
            this.translatePage();
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }

    translatePage() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (this.translations[key]) {
                el.textContent = this.translations[key];
            }
        });

        // Handle placeholder translations
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (this.translations[key]) {
                el.placeholder = this.translations[key];
            }
        });
    }

    switchLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('hidden_chamber_lang', this.currentLang);
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        this.loadTranslations();
        this.updateUIForLanguage();
    }

    updateUIForLanguage() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.querySelector('.lang-text').textContent = 
                this.currentLang === 'ar' ? 'English' : 'العربية';
        }
    }

    // ─────────────────────────────────────────────────────────
    // Event Binding
    // ─────────────────────────────────────────────────────────
    bindEvents() {
        // Language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.switchLanguage());
        }

        // Birthdate input
        const birthdateInput = document.getElementById('birthdateInput');
        if (birthdateInput) {
            birthdateInput.addEventListener('change', (e) => {
                this.handleBirthdateChange(e.target.value);
            });
        }

        // Start journey button
        const startBtn = document.getElementById('startJourneyBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startJourney());
        }

        // Quiz navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.prevQuestion());
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }

        // Coffee reading modal
        const coffeeBtn = document.getElementById('coffeeReadingBtn');
        const modal = document.getElementById('coffeeModal');
        const modalClose = document.getElementById('modalClose');
        const coffeeForm = document.getElementById('coffeeForm');
        
        if (coffeeBtn) {
            coffeeBtn.addEventListener('click', () => {
                if (modal) modal.style.display = 'flex';
            });
        }
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                if (modal) modal.style.display = 'none';
            });
        }
        
        if (coffeeForm) {
            coffeeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // In a real implementation, you'd send this to a webhook
                // For now, just show success message
                alert(this.translations.coffee_modal_success || 'تم استلام طلبك! سنتواصل معك قريباً.');
                if (modal) modal.style.display = 'none';
                coffeeForm.reset();
            });
        }

        // Retake button (result page)
        const retakeBtn = document.getElementById('retakeBtn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Enable notifications
        const enableNotificationsBtn = document.getElementById('enableNotifications');
        if (enableNotificationsBtn) {
            enableNotificationsBtn.addEventListener('click', () => {
                this.enableNotifications();
                document.getElementById('notificationPrompt').style.display = 'none';
            });
        }

        const declineNotificationsBtn = document.getElementById('declineNotifications');
        if (declineNotificationsBtn) {
            declineNotificationsBtn.addEventListener('click', () => {
                document.getElementById('notificationPrompt').style.display = 'none';
            });
        }

        // Share buttons
        this.bindShareButtons();
    }

    bindShareButtons() {
        const shareButtons = document.querySelectorAll('[data-share]');
        const shareText = this.translations.share_text || 'اكتشف أسرار شخصيتك المخفية!';

        shareButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.getAttribute('data-share');
                const url = window.location.href;
                const text = encodeURIComponent(shareText);
                
                switch (platform) {
                    case 'twitter':
                        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
                        break;
                    case 'facebook':
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                        break;
                    case 'whatsapp':
                        window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
                        break;
                    case 'telegram':
                        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`, '_blank');
                        break;
                    case 'native':
                        if (navigator.share) {
                            navigator.share({
                                title: 'غرفة الأسرار',
                                text: shareText,
                                url: url
                            });
                        } else {
                            // Fallback: copy to clipboard
                            navigator.clipboard.writeText(url).then(() => {
                                alert('تم نسخ الرابط إلى الحافظة!');
                            });
                        }
                        break;
                }
            });
        });
    }

    // ─────────────────────────────────────────────────────────
    // Birthdate Handling
    // ─────────────────────────────────────────────────────────
    handleBirthdateChange(value) {
        if (value) {
            this.birthdate = new Date(value);
            const startBtn = document.getElementById('startJourneyBtn');
            if (startBtn) startBtn.disabled = false;
        } else {
            this.birthdate = null;
            const startBtn = document.getElementById('startJourneyBtn');
            if (startBtn) startBtn.disabled = true;
        }
    }

    calculateZodiac(birthDate) {
        const month = birthDate.getMonth() + 1; // 1-12
        const day = birthDate.getDate(); // 1-31
        
        // Handle edge cases for zodiac boundaries
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'الحمل';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'الثور';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'الجوزاء';
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'السرطان';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'الأسد';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'العذراء';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'الميزان';
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'العقرب';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'القوس';
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'الجدي';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'الدلو';
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'الحوت';
        
        return 'الحوت'; // fallback
    }

    // ─────────────────────────────────────────────────────────
    // Journey Flow
    // ─────────────────────────────────────────────────────────
    async startJourney() {
        if (!this.birthdate) return;
        
        // Load questions
        this.questions = this.translations.questions || [];
        
        // Show quiz section
        document.getElementById('welcomeSection').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        
        // Initialize first question
        this.currentQuestionIndex = 0;
        this.showQuestion(this.currentQuestionIndex);
        this.updateProgressBar();
    }

    showQuestion(index) {
        const question = this.questions[index];
        if (!question) return;
        
        document.getElementById('questionText').textContent = question.text;
        document.getElementById('questionCategory').textContent = question.category;
        document.getElementById('questionNumber').textContent = `${index + 1}/40`;
        
        // Clear previous answers
        const answersGrid = document.getElementById('answersGrid');
        answersGrid.innerHTML = '';
        
        // Create answer options
        question.options.forEach((option, optionIndex) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-option';
            answerBtn.textContent = option.text;
            answerBtn.addEventListener('click', () => {
                this.selectAnswer(index, option.value, question.dimension, question.reverse);
                this.updateNavigation();
            });
            
            // Highlight selected answer
            if (this.answers[index] && this.answers[index].value === option.value) {
                answerBtn.classList.add('selected');
            }
            
            answersGrid.appendChild(answerBtn);
        });
    }

    selectAnswer(questionIndex, value, dimension, isReverse = false) {
        // Handle reverse scoring for Big Five
        let finalValue = value;
        if (isReverse && dimension !== 'color') {
            finalValue = 6 - value; // Reverse 1-5 to 5-1
        }
        
        this.answers[questionIndex] = { value: value, finalValue, dimension };
        
        // Update Big Five or Color scores
        if (dimension.startsWith('color_')) {
            // Handle color questions
            const colorType = dimension.replace('color_', '');
            if (!this.answers.color) this.answers.color = {};
            this.answers.color[colorType] = (this.answers.color[colorType] || 0) + finalValue;
        } else if (dimension !== 'color') {
            // Handle Big Five dimensions
            this.bigFive[dimension] = (this.bigFive[dimension] || 0) + finalValue;
        }
        
        // Re-render answers to show selection
        this.showQuestion(questionIndex);
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) prevBtn.disabled = this.currentQuestionIndex === 0;
        
        const currentAnswer = this.answers[this.currentQuestionIndex];
        if (nextBtn) {
            nextBtn.disabled = !currentAnswer;
        }
    }

    updateProgressBar() {
        const progress = ((this.currentQuestionIndex) / 40) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < 39) {
            this.currentQuestionIndex++;
            this.showQuestion(this.currentQuestionIndex);
            this.updateProgressBar();
            this.updateNavigation();
        } else {
            this.finishJourney();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion(this.currentQuestionIndex);
            this.updateProgressBar();
            this.updateNavigation();
        }
    }

    // ─────────────────────────────────────────────────────────
    // Journey Completion
    // ─────────────────────────────────────────────────────────
    async finishJourney() {
        // Show loading screen
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('loadingSection').style.display = 'block';
        
        // Simulate processing time with real messages
        const messages = this.translations.loading_messages || [
            "Processing your secrets...",
            "Analyzing patterns...",
            "Generating your story..."
        ];
        
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            document.getElementById('loadingText').textContent = messages[messageIndex % messages.length];
            messageIndex++;
        }, 2000);
        
        // Simulate progress bar
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
            }
            document.getElementById('loadingBar').style.width = `${progress}%`;
        }, 100);
        
        // Calculate final results
        await this.calculateResults();
        
        // Clear intervals
        clearInterval(messageInterval);
        clearInterval(progressInterval);
        
        // Redirect to result page with data
        this.redirectToResults();
    }

    calculateResults() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Calculate Big Five averages (5 questions per dimension)
                Object.keys(this.bigFive).forEach(dim => {
                    this.bigFive[dim] = Math.round((this.bigFive[dim] / 5) * 20); // Convert to 0-100 scale
                });
                
                // Determine soul color (highest score among color dimensions)
                if (this.answers.color) {
                    let maxColor = 'blue';
                    let maxValue = 0;
                    Object.keys(this.answers.color).forEach(color => {
                        if (this.answers.color[color] > maxValue) {
                            maxValue = this.answers.color[color];
                            maxColor = color;
                        }
                    });
                    this.soulColor = maxColor;
                }
                
                // Calculate zodiac
                this.zodiacData = {
                    name: this.calculateZodiac(this.birthdate),
                    dates: this.getZodiacDates(this.calculateZodiac(this.birthdate))
                };
                
                resolve();
            }, 3000); // Simulate processing time
        });
    }

    getZodiacDates(zodiacName) {
        const dates = {
            'الحمل': 'مارس 21 - أبريل 19',
            'الثور': 'أبريل 20 - مايو 20',
            'الجوزاء': 'مايو 21 - يونيو 20',
            'السرطان': 'يونيو 21 - يوليو 22',
            'الأسد': 'يوليو 23 - أغسطس 22',
            'العذراء': 'أغسطس 23 - سبتمبر 22',
            'الميزان': 'سبتمبر 23 - أكتوبر 22',
            'العقرب': 'أكتوبر 23 - نوفمبر 21',
            'القوس': 'نوفمبر 22 - ديسمبر 21',
            'الجدي': 'ديسمبر 22 - يناير 19',
            'الدلو': 'يناير 20 - فبراير 18',
            'الحوت': 'فبراير 19 - مارس 20'
        };
        return dates[zodiacName] || '';
    }

    redirectToResults() {
        // In a real implementation, you'd use sessionStorage or URL params
        // For simplicity, we'll use sessionStorage
        const results = {
            age: this.calculateAge(this.birthdate),
            zodiac: this.zodiacData,
            soulColor: this.soulColor,
            bigFive: this.bigFive
        };
        
        sessionStorage.setItem('hidden_chamber_results', JSON.stringify(results));
        window.location.href = 'result.html';
    }

    calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // ─────────────────────────────────────────────────────────
    // Result Page Handling
    // ─────────────────────────────────────────────────────────
    async handleResultPage() {
        const results = JSON.parse(sessionStorage.getItem('hidden_chamber_results'));
        if (!results) {
            window.location.href = 'index.html';
            return;
        }
        
        // Display user info
        document.getElementById('userAge').textContent = results.age;
        document.getElementById('userZodiac').textContent = results.zodiac.name;
        document.getElementById('zodiacDates').textContent = results.zodiac.dates;
        document.getElementById('zodiacIcon').textContent = this.getZodiacSymbol(results.zodiac.name);
        
        // Display zodiac card
        const zodiacDesc = StoryEngine.getZodiacDescription(results.zodiac.name, this.currentLang);
        const zodiacTraits = StoryEngine.getZodiacTraits(results.zodiac.name, this.currentLang);
        
        document.getElementById('zodiacDescription').textContent = zodiacDesc;
        document.getElementById('zodiacSymbol').textContent = this.getZodiacSymbol(results.zodiac.name);
        document.getElementById('zodiacName').textContent = results.zodiac.name;
        document.getElementById('zodiacElement').textContent = this.getZodiacElement(results.zodiac.name);
        
        // Display traits
        const traitsGrid = document.getElementById('traitsGrid');
        traitsGrid.innerHTML = '';
        zodiacTraits.forEach(trait => {
            const traitEl = document.createElement('span');
            traitEl.className = 'trait-item';
            traitEl.textContent = trait;
            traitsGrid.appendChild(traitEl);
        });
        
        // Display soul color
        const colorData = StoryEngine.getColorData(results.soulColor, this.currentLang);
        document.getElementById('colorName').textContent = colorData.name;
        document.getElementById('colorMeaning').textContent = colorData.meaning;
        document.querySelector('.color-orb').style.background = colorData.gradient || 'var(--neon-blue)';
        
        // Display Big Five
        const dimensionsGrid = document.getElementById('dimensionsGrid');
        dimensionsGrid.innerHTML = '';
        
        const dimensionNames = {
            openness: this.translations.dimension_openness || 'الانفتاح',
            conscientiousness: this.translations.dimension_conscientiousness || 'الضمير',
            extraversion: this.translations.dimension_extraversion || 'الانبساطية',
            agreeableness: this.translations.dimension_agreeableness || 'الطيبة',
            neuroticism: this.translations.dimension_neuroticism || 'العصابية'
        };
        
        Object.keys(results.bigFive).forEach(dim => {
            const card = document.createElement('div');
            card.className = 'dimension-card';
            card.innerHTML = `
                <h4>${dimensionNames[dim]}</h4>
                <div class="dimension-score">${results.bigFive[dim]}%</div>
                <p>${StoryEngine.getDimensionDescription(dim, results.bigFive[dim], this.currentLang)}</p>
            `;
            dimensionsGrid.appendChild(card);
        });
        
        // Generate and display story
        const story = StoryEngine.generateStory(results, this.currentLang);
        document.getElementById('storyContent').innerHTML = story;
        
        // Display similar personalities
        const personalities = StoryEngine.getSimilarPersonalities(results.zodiac.name, this.currentLang);
        const personalitiesGrid = document.getElementById('personalitiesGrid');
        personalitiesGrid.innerHTML = '';
        
        personalities.forEach(person => {
            const card = document.createElement('div');
            card.className = 'personality-card';
            card.innerHTML = `
                <div class="personality-avatar">${person.avatar}</div>
                <h4>${person.name}</h4>
                <p>${person.title}</p>
                <div class="match-score">تطابق: ${person.match}%</div>
            `;
            personalitiesGrid.appendChild(card);
        });
        
        // Show notification prompt after delay
        setTimeout(() => {
            const prompt = document.getElementById('notificationPrompt');
            if (prompt) prompt.style.display = 'block';
        }, 5000);
        
        // Increment completed counter
        this.incrementCompleted();
    }

    getZodiacSymbol(zodiacName) {
        const symbols = {
            'الحمل': '♈',
            'الثور': '♉',
            'الجوزاء': '♊',
            'السرطان': '♋',
            'الأسد': '♌',
            'العذراء': '♍',
            'الميزان': '♎',
            'العقرب': '♏',
            'القوس': '♐',
            'الجدي': '♑',
            'الدلو': '♒',
            'الحوت': '♓'
        };
        return symbols[zodiacName] || '⭐';
    }

    getZodiacElement(zodiacName) {
        const elements = {
            'الحمل': '🔥 ناري',
            'الثور': '🌿 ترابي',
            'الجوزاء': '💨 هوائي',
            'السرطان': '🌊 مائي',
            'الأسد': '🔥 ناري',
            'العذراء': '🌿 ترابي',
            'الميزان': '💨 هوائي',
            'العقرب': '🌊 مائي',
            'القوس': '🔥 ناري',
            'الجدي': '🌿 ترابي',
            'الدلو': '💨 هوائي',
            'الحوت': '🌊 مائي'
        };
        return elements[zodiacName] || '🌌 غامض';
    }

    // ─────────────────────────────────────────────────────────
    // API Integration
    // ─────────────────────────────────────────────────────────
    async incrementVisitor() {
        try {
            await fetch('/api/increment-visitor', { method: 'POST' });
        } catch (error) {
            console.warn('Failed to increment visitor count:', error);
        }
    }

    async incrementCompleted() {
        try {
            await fetch('/api/increment-completed', { method: 'POST' });
        } catch (error) {
            console.warn('Failed to increment completed count:', error);
        }
    }

    // ─────────────────────────────────────────────────────────
    // Notifications
    // ─────────────────────────────────────────────────────────
    enableNotifications() {
        // Load OneSignal dynamically only when needed
        if (window.OneSignal) {
            this.initOneSignal();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
            script.defer = true;
            script.onload = () => this.initOneSignal();
            document.head.appendChild(script);
        }
    }

    initOneSignal() {
        window.OneSignal = window.OneSignal || [];
        window.OneSignal.push(() => {
            OneSignal.init({
                appId: "2d323442-8f3b-469b-b5ea-c4d4a7f47b2c",
            });
            OneSignal.showSlidedownPrompt();
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HiddenChamber();
});
// في نهاية ملف main.js، أضف:

class ReviewsManager {
    static init() {
        this.bindReviewForm();
        this.loadReviews();
    }

    static bindReviewForm() {
        const form = document.getElementById('reviewForm');
        if (!form) return;

        // تقييم النجوم
        const stars = form.querySelectorAll('#ratingStars span');
        let selectedRating = 5;
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.getAttribute('data-value'));
                document.getElementById('ratingValue').value = selectedRating;
                stars.forEach((s, i) => {
                    s.style.color = i < selectedRating ? '#fbbf24' : '#6b7280';
                });
            });
        });

        // إرسال النموذج
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const alias = form.querySelector('input[type="text"]').value;
            const rating = document.getElementById('ratingValue').value;
            const comment = form.querySelector('textarea').value;

            try {
                const res = await fetch('/api/submit-review', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ alias, rating, comment })
                });

                if (res.ok) {
                    form.reset();
                    document.getElementById('ratingValue').value = 5;
                    stars.forEach(s => s.style.color = '#fbbf24'); // إعادة تعيين النجوم
                    this.loadReviews(); // تحديث القائمة
                } else {
                    const data = await res.json();
                    alert(data.error || 'حدث خطأ');
                }
            } catch (error) {
                alert('فشل الاتصال بالخادم');
            }
        });
    }

    static async loadReviews() {
        try {
            const res = await fetch('/api/get-reviews');
            const reviews = await res.json();
            this.renderReviews(reviews);
        } catch (error) {
            console.warn('Failed to load reviews');
        }
    }

    static renderReviews(reviews) {
        const container = document.getElementById('reviewsList');
        if (!container) return;

        container.innerHTML = reviews.map(r => `
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-alias">${this.escapeHtml(r.alias)}</span>
                    <div class="review-rating">
                        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                    </div>
                </div>
                <p class="review-comment">${this.escapeHtml(r.comment)}</p>
                <time class="review-time">${this.formatTime(r.timestamp)}</time>
            </div>
        `).join('');

        // أضف CSS مخصصًا للتعليقات في style.css
    }

    static escapeHtml(text) {
        return text.replace(/[&<>"']/g, m => ({
            '&': '&amp;',
            '<': '<',
            '>': '>',
            '"': '&quot;',
            "'": '&#039;'
        }[m]));
    }

    static formatTime(isoString) {
        const date = new Date(isoString);
        const now = new Date();
        const diffHours = (now - date) / (1000 * 60 * 60);
        if (diffHours < 1) return 'الآن';
        if (diffHours < 24) return `منذ ${Math.floor(diffHours)} ساعات`;
        return date.toLocaleDateString('ar-EG');
    }
}

// في نهاية ملف main.js، بعد تحميل النتائج:
if (window.location.pathname.includes('result.html')) {
    // ... باقي الكود
    ReviewsManager.init(); // ← أضف هذا السطر
}