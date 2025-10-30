// ═══════════════════════════════════════════════════════════
// 🌌 STORY ENGINE - NARRATIVE GENERATION
// ═══════════════════════════════════════════════════════════

export const StoryEngine = {
    
    // ─────────────────────────────────────────────────────────
    // 1. ZODIAC DATA (مكتمل للغتين)
    // ─────────────────────────────────────────────────────────
    zodiacData: {
        ar: {
            'الحمل': {
                description: 'أنت قائد بالفطرة، روحك مشتعلة بالشغف والجرأة. تمتلك قوة داخلية نادرة تدفعك لتحقيق المستحيل.',
                traits: ['شجاع 🦁', 'قيادي 👑', 'متحمس 🔥', 'مندفع ⚡', 'صريح 💬'],
                celebrities: [
                    { name: 'ليوناردو دافنشي', title: 'عبقري عصر النهضة', avatar: '🎨', match: 95 },
                    { name: 'ليدي غاغا', title: 'مغنية وفنانة', avatar: '🎤', match: 92 },
                    { name: 'روبرت داوني جونيور', title: 'ممثل عالمي', avatar: '🎬', match: 90 }
                ]
            },
            'الثور': {
                description: 'أنت الصخرة الصلبة التي لا تهتز. تمتلك صبراً أسطورياً وإرادة من حديد. حواسك مرهفة وتقدّر الجمال في كل شيء.',
                traits: ['صبور 🧘', 'عملي 💼', 'مخلص ❤️', 'فني 🎨', 'عنيد 🐂'],
                celebrities: [
                    { name: 'ويليام شكسبير', title: 'أعظم كاتب مسرحي', avatar: '📜', match: 96 },
                    { name: 'أديل', title: 'مغنية سوبرانو', avatar: '🎵', match: 93 },
                    { name: 'مارك زوكربيرغ', title: 'مؤسس فيسبوك', avatar: '💻', match: 88 }
                ]
            },
            'الجوزاء': {
                description: 'أنت العقل المتوقد الذي لا يتوقف عن الفضول. تمتلك قدرة عجيبة على التواصل والتكيف مع أي موقف.',
                traits: ['ذكي 🧠', 'اجتماعي 🗣️', 'فضولي 🔍', 'متعدد المواهب 🎭', 'مرن 🤸'],
                celebrities: [
                    { name: 'مارلين مونرو', title: 'أيقونة هوليوود', avatar: '💋', match: 94 },
                    { name: 'جوني ديب', title: 'ممثل كاريزمي', avatar: '🎩', match: 91 },
                    { name: 'إيلون ماسك', title: 'رائد أعمال مستقبلي', avatar: '🚀', match: 89 }
                ]
            },
            'السرطان': {
                description: 'أنت المحيط العميق المليء بالمشاعر. قلبك الكبير يحتضن الجميع، وحدسك لا يخطئ أبداً.',
                traits: ['عاطفي 💖', 'حدسي 🔮', 'حنون 🤗', 'وفي 🏡', 'حساس 🌊'],
                celebrities: [
                    { name: 'الأميرة ديانا', title: 'أميرة القلوب', avatar: '👑', match: 97 },
                    { name: 'إيلا فيتزجيرالد', title: 'ملكة الجاز', avatar: '🎺', match: 92 },
                    { name: 'توم هانكس', title: 'ممثل محبوب', avatar: '🎬', match: 90 }
                ]
            },
            'الأسد': {
                description: 'أنت الشمس التي تضيء كل من حولك. كاريزما طبيعية ونبل فطري يجعلان منك ملكاً حقيقياً.',
                traits: ['واثق 👑', 'كريم 💎', 'مبدع 🎨', 'درامي 🎭', 'قيادي 🦁'],
                celebrities: [
                    { name: 'باراك أوباما', title: 'رئيس أمريكا الـ44', avatar: '🇺🇸', match: 95 },
                    { name: 'مادونا', title: 'ملكة البوب', avatar: '👸', match: 93 },
                    { name: 'كوكو شانيل', title: 'مصممة أزياء أسطورية', avatar: '👗', match: 91 }
                ]
            },
            'العذراء': {
                description: 'أنت الكمال المتجسد. عقلك التحليلي الدقيق ورغبتك في الإتقان تجعلانك لا تقبل إلا بالأفضل.',
                traits: ['دقيق 🎯', 'تحليلي 🔬', 'منظم 📋', 'متواضع 🙏', 'عملي ⚙️'],
                celebrities: [
                    { name: 'مايكل جاكسون', title: 'ملك البوب', avatar: '🕺', match: 96 },
                    { name: 'الأم تيريزا', title: 'رمز الإنسانية', avatar: '🕊️', match: 94 },
                    { name: 'وارن بافيت', title: 'أسطورة الاستثمار', avatar: '💰', match: 89 }
                ]
            },
            'الميزان': {
                description: 'أنت الجمال والتوازن. روحك تسعى دائماً للانسجام والعدالة، وذوقك الراقي يميزك عن الآخرين.',
                traits: ['دبلوماسي ⚖️', 'ساحر ✨', 'عادل 👨‍⚖️', 'اجتماعي 🎭', 'متردد 🤔'],
                celebrities: [
                    { name: 'غاندي', title: 'رمز السلام', avatar: '🕊️', match: 97 },
                    { name: 'جون لينون', title: 'موسيقي وفيلسوف', avatar: '🎸', match: 93 },
                    { name: 'كيم كارداشيان', title: 'رائدة أعمال', avatar: '💄', match: 88 }
                ]
            },
            'العقرب': {
                description: 'أنت الغموض بعينه. شخصيتك المكثفة وقدرتك على الغوص في الأعماق تجعلانك أقوى مما تتخيل.',
                traits: ['غامض 🕵️', 'شغوف 🔥', 'مثابر 💪', 'حدسي 🔮', 'مخلص 🖤'],
                celebrities: [
                    { name: 'بابلو بيكاسو', title: 'عبقري الفن التكعيبي', avatar: '🎨', match: 96 },
                    { name: 'هيلاري كلينتون', title: 'سياسية قوية', avatar: '💼', match: 92 },
                    { name: 'ليوناردو ديكابريو', title: 'ممثل أوسكاري', avatar: '🏆', match: 90 }
                ]
            },
            'القوس': {
                description: 'أنت الرحالة الفيلسوف. روحك الحرة تبحث دائماً عن الحقيقة والمعنى في كل مكان.',
                traits: ['متفائل 🌟', 'مغامر 🏹', 'فيلسوف 📚', 'صريح 💬', 'حر 🦅'],
                celebrities: [
                    { name: 'والت ديزني', title: 'صانع الأحلام', avatar: '🏰', match: 95 },
                    { name: 'بروس لي', title: 'أسطورة الكونغ فو', avatar: '🥋', match: 93 },
                    { name: 'تايلور سويفت', title: 'نجمة البوب', avatar: '🎤', match: 89 }
                ]
            },
            'الجدي': {
                description: 'أنت الجبل الشامخ. انضباطك الذاتي وطموحك اللامحدود يدفعانك للوصول إلى القمة دائماً.',
                traits: ['طموح 🏔️', 'منضبط 📊', 'مسؤول 👨‍💼', 'صبور ⏳', 'واقعي 🎯'],
                celebrities: [
                    { name: 'مارتن لوثر كينج', title: 'قائد حقوق مدنية', avatar: '✊', match: 97 },
                    { name: 'ديفيد بوي', title: 'أيقونة موسيقية', avatar: '⚡', match: 91 },
                    { name: 'ميشيل أوباما', title: 'سيدة أمريكا الأولى', avatar: '📖', match: 94 }
                ]
            },
            'الدلو': {
                description: 'أنت المستقبل الحي. عقلك الثوري وإنسانيتك العميقة تجعلانك تغيّر العالم بأفكارك.',
                traits: ['مبتكر 💡', 'مستقل 🦄', 'إنساني 🌍', 'غريب الأطوار 🎨', 'حر 🌊'],
                celebrities: [
                    { name: 'توماس إديسون', title: 'مخترع المصباح', avatar: '💡', match: 96 },
                    { name: 'أوبرا وينفري', title: 'ملكة الميديا', avatar: '👑', match: 94 },
                    { name: 'بوب مارلي', title: 'أسطورة الريغي', avatar: '🎵', match: 90 }
                ]
            },
            'الحوت': {
                description: 'أنت الروح العميقة. خيالك الواسع وحسّك الفني يجعلانك تعيش بين عالمين: الواقع والحلم.',
                traits: ['حالم 🌙', 'فني 🎨', 'متعاطف 💞', 'حدسي 🔮', 'روحاني 🕊️'],
                celebrities: [
                    { name: 'ألبرت أينشتاين', title: 'عبقري الفيزياء', avatar: '🧬', match: 97 },
                    { name: 'ستيف جوبز', title: 'مؤسس أبل', avatar: '🍎', match: 95 },
                    { name: 'ريهانا', title: 'نجمة عالمية', avatar: '💎', match: 91 }
                ]
            }
        },
        en: {
            'Aries': {
                description: 'You are a natural-born leader with a soul ablaze with passion and courage. You possess a rare inner strength that drives you to achieve the impossible.',
                traits: ['Brave 🦁', 'Leader 👑', 'Energetic 🔥', 'Impulsive ⚡', 'Direct 💬'],
                celebrities: [
                    { name: 'Leonardo da Vinci', title: 'Renaissance Genius', avatar: '🎨', match: 95 },
                    { name: 'Lady Gaga', title: 'Singer & Artist', avatar: '🎤', match: 92 },
                    { name: 'Robert Downey Jr.', title: 'Global Actor', avatar: '🎬', match: 90 }
                ]
            },
            'Taurus': {
                description: 'You are the unshakable rock. You possess legendary patience and an iron will. Your senses are refined, and you appreciate beauty in everything.',
                traits: ['Patient 🧘', 'Practical 💼', 'Loyal ❤️', 'Artistic 🎨', 'Stubborn 🐂'],
                celebrities: [
                    { name: 'William Shakespeare', title: 'Greatest Playwright', avatar: '📜', match: 96 },
                    { name: 'Adele', title: 'Soprano Singer', avatar: '🎵', match: 93 },
                    { name: 'Mark Zuckerberg', title: 'Facebook Founder', avatar: '💻', match: 88 }
                ]
            },
            'Gemini': {
                description: 'You are the ever-curious mind that never stops wondering. You have an amazing ability to communicate and adapt to any situation.',
                traits: ['Intelligent 🧠', 'Social 🗣️', 'Curious 🔍', 'Versatile 🎭', 'Flexible 🤸'],
                celebrities: [
                    { name: 'Marilyn Monroe', title: 'Hollywood Icon', avatar: '💋', match: 94 },
                    { name: 'Johnny Depp', title: 'Charismatic Actor', avatar: '🎩', match: 91 },
                    { name: 'Elon Musk', title: 'Visionary Entrepreneur', avatar: '🚀', match: 89 }
                ]
            },
            'Cancer': {
                description: 'You are the deep ocean full of emotions. Your big heart embraces everyone, and your intuition is never wrong.',
                traits: ['Emotional 💖', 'Intuitive 🔮', 'Caring 🤗', 'Loyal 🏡', 'Sensitive 🌊'],
                celebrities: [
                    { name: 'Princess Diana', title: 'People\'s Princess', avatar: '👑', match: 97 },
                    { name: 'Ella Fitzgerald', title: 'Queen of Jazz', avatar: '🎺', match: 92 },
                    { name: 'Tom Hanks', title: 'Beloved Actor', avatar: '🎬', match: 90 }
                ]
            },
            'Leo': {
                description: 'You are the sun that lights up everyone around you. Natural charisma and innate nobility make you a true king.',
                traits: ['Confident 👑', 'Generous 💎', 'Creative 🎨', 'Dramatic 🎭', 'Leader 🦁'],
                celebrities: [
                    { name: 'Barack Obama', title: '44th US President', avatar: '🇺🇸', match: 95 },
                    { name: 'Madonna', title: 'Queen of Pop', avatar: '👸', match: 93 },
                    { name: 'Coco Chanel', title: 'Fashion Legend', avatar: '👗', match: 91 }
                ]
            },
            'Virgo': {
                description: 'You are perfection incarnate. Your precise analytical mind and desire for excellence make you accept nothing but the best.',
                traits: ['Precise 🎯', 'Analytical 🔬', 'Organized 📋', 'Humble 🙏', 'Practical ⚙️'],
                celebrities: [
                    { name: 'Michael Jackson', title: 'King of Pop', avatar: '🕺', match: 96 },
                    { name: 'Mother Teresa', title: 'Humanitarian Icon', avatar: '🕊️', match: 94 },
                    { name: 'Warren Buffett', title: 'Investment Legend', avatar: '💰', match: 89 }
                ]
            },
            'Libra': {
                description: 'You are beauty and balance. Your soul always seeks harmony and justice, and your refined taste sets you apart.',
                traits: ['Diplomatic ⚖️', 'Charming ✨', 'Fair 👨‍⚖️', 'Social 🎭', 'Indecisive 🤔'],
                celebrities: [
                    { name: 'Gandhi', title: 'Peace Icon', avatar: '🕊️', match: 97 },
                    { name: 'John Lennon', title: 'Musician & Philosopher', avatar: '🎸', match: 93 },
                    { name: 'Kim Kardashian', title: 'Business Mogul', avatar: '💄', match: 88 }
                ]
            },
            'Scorpio': {
                description: 'You are mystery itself. Your intense personality and ability to dive into depths make you stronger than you imagine.',
                traits: ['Mysterious 🕵️', 'Passionate 🔥', 'Persistent 💪', 'Intuitive 🔮', 'Loyal 🖤'],
                celebrities: [
                    { name: 'Pablo Picasso', title: 'Cubism Genius', avatar: '🎨', match: 96 },
                    { name: 'Hillary Clinton', title: 'Powerful Politician', avatar: '💼', match: 92 },
                    { name: 'Leonardo DiCaprio', title: 'Oscar-Winning Actor', avatar: '🏆', match: 90 }
                ]
            },
            'Sagittarius': {
                description: 'You are the philosophical traveler. Your free soul always seeks truth and meaning everywhere.',
                traits: ['Optimistic 🌟', 'Adventurous 🏹', 'Philosophical 📚', 'Honest 💬', 'Free 🦅'],
                celebrities: [
                    { name: 'Walt Disney', title: 'Dream Maker', avatar: '🏰', match: 95 },
                    { name: 'Bruce Lee', title: 'Kung Fu Legend', avatar: '🥋', match: 93 },
                    { name: 'Taylor Swift', title: 'Pop Superstar', avatar: '🎤', match: 89 }
                ]
            },
            'Capricorn': {
                description: 'You are the towering mountain. Your self-discipline and limitless ambition always drive you to the peak.',
                traits: ['Ambitious 🏔️', 'Disciplined 📊', 'Responsible 👨‍💼', 'Patient ⏳', 'Realistic 🎯'],
                celebrities: [
                    { name: 'Martin Luther King Jr.', title: 'Civil Rights Leader', avatar: '✊', match: 97 },
                    { name: 'David Bowie', title: 'Music Icon', avatar: '⚡', match: 91 },
                    { name: 'Michelle Obama', title: 'Former First Lady', avatar: '📖', match: 94 }
                ]
            },
            'Aquarius': {
                description: 'You are the living future. Your revolutionary mind and deep humanity allow you to change the world with your ideas.',
                traits: ['Innovative 💡', 'Independent 🦄', 'Humanitarian 🌍', 'Eccentric 🎨', 'Free 🌊'],
                celebrities: [
                    { name: 'Thomas Edison', title: 'Light Bulb Inventor', avatar: '💡', match: 96 },
                    { name: 'Oprah Winfrey', title: 'Media Queen', avatar: '👑', match: 94 },
                    { name: 'Bob Marley', title: 'Reggae Legend', avatar: '🎵', match: 90 }
                ]
            },
            'Pisces': {
                description: 'You are the deep soul. Your vast imagination and artistic sense make you live between two worlds: reality and dreams.',
                traits: ['Dreamy 🌙', 'Artistic 🎨', 'Empathetic 💞', 'Intuitive 🔮', 'Spiritual 🕊️'],
                celebrities: [
                    { name: 'Albert Einstein', title: 'Physics Genius', avatar: '🧬', match: 97 },
                    { name: 'Steve Jobs', title: 'Apple Founder', avatar: '🍎', match: 95 },
                    { name: 'Rihanna', title: 'Global Superstar', avatar: '💎', match: 91 }
                ]
            }
        }
    },

    // ─────────────────────────────────────────────────────────
    // 2. COLOR DATA (مكتمل)
    // ─────────────────────────────────────────────────────────
    colorData: {
        ar: {
            red: {
                name: 'الأحمر الناري',
                gradient: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
                meaning: 'لون روحك يكشف عن شخصية قوية ومندفعة. أنت قائد بالفطرة، تمتلك طاقة هائلة وشغف لا ينطفئ. الناس ينجذبون إليك بشكل طبيعي بسبب كاريزماك المشتعلة.'
            },
            blue: {
                name: 'الأزرق الروحي',
                gradient: 'linear-gradient(135deg, #00d9ff, #667eea)',
                meaning: 'لون روحك يعكس عمق تفكيرك وحكمتك. أنت شخص تحليلي يبحث دائماً عن الحقيقة. تمتلك قدرة فريدة على فهم الآخرين وتقديم النصائح الثمينة.'
            },
            yellow: {
                name: 'الأصفر المشرق',
                gradient: 'linear-gradient(135deg, #fbbf24, #fcd34d)',
                meaning: 'لون روحك يشع بهجة وتفاؤل. أنت روح طفولية مرحة تنشر السعادة أينما ذهبت. إبداعك وحماسك يجعلان الحياة أكثر إشراقاً للجميع.'
            },
            green: {
                name: 'الأخضر الهادئ',
                gradient: 'linear-gradient(135deg, #10b981, #34d399)',
                meaning: 'لون روحك يمثل التوازن والسلام الداخلي. أنت شخص متزن يسعى دائماً للانسجام. تمتلك قدرة طبيعية على شفاء الآخرين بحضورك المريح.'
            }
        },
        en: {
            red: {
                name: 'Fiery Red',
                gradient: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
                meaning: 'Your soul color reveals a strong and impulsive personality. You are a natural leader with immense energy and unquenchable passion. People are naturally drawn to you because of your blazing charisma.'
            },
            blue: {
                name: 'Spiritual Blue',
                gradient: 'linear-gradient(135deg, #00d9ff, #667eea)',
                meaning: 'Your soul color reflects the depth of your thinking and wisdom. You are an analytical person always searching for truth. You possess a unique ability to understand others and provide valuable advice.'
            },
            yellow: {
                name: 'Bright Yellow',
                gradient: 'linear-gradient(135deg, #fbbf24, #fcd34d)',
                meaning: 'Your soul color radiates joy and optimism. You are a playful, childlike spirit spreading happiness wherever you go. Your creativity and enthusiasm make life brighter for everyone.'
            },
            green: {
                name: 'Calm Green',
                gradient: 'linear-gradient(135deg, #10b981, #34d399)',
                meaning: 'Your soul color represents balance and inner peace. You are a balanced person always seeking harmony. You possess a natural ability to heal others with your comforting presence.'
            }
        }
    },

    // ─────────────────────────────────────────────────────────
    // 3. BIG FIVE DESCRIPTIONS (مكتمل)
    // ─────────────────────────────────────────────────────────
    dimensionDescriptions: {
        ar: {
            openness: {
                high: 'أنت شخص منفتح على التجارب الجديدة بشكل استثنائي. خيالك واسع وتحب استكشاف الأفكار غير التقليدية.',
                medium: 'لديك توازن جيد بين الانفتاح والواقعية. تقدّر الإبداع لكنك تحافظ على الاستقرار.',
                low: 'تفضل ما هو مألوف ومجرّب. تميل إلى الأساليب التقليدية وتقدّر الروتين.'
            },
            conscientiousness: {
                high: 'أنت شخص منظم ومنضبط بشكل رائع. تخطط لكل شيء بدقة وتحترم المواعيد دائماً.',
                medium: 'لديك مستوى جيد من التنظيم مع مرونة كافية. تعرف متى تكون جاداً ومتى تسترخي.',
                low: 'تفضل العفوية على التخطيط. تحب أن تتدفق مع الحياة بدون قيود صارمة.'
            },
            extraversion: {
                high: 'أنت روح اجتماعية تحب التواجد مع الناس. طاقتك تزداد في التجمعات الكبيرة.',
                medium: 'تستمتع بالعلاقات الاجتماعية لكنك تحتاج أيضاً إلى وقت خاص بك.',
                low: 'تفضل العزلة والهدوء. تستمد طاقتك من الوقت الذي تقضيه مع نفسك.'
            },
            agreeableness: {
                high: 'أنت شخص طيب ومتعاطف بشكل طبيعي. تضع احتياجات الآخرين قبل احتياجاتك.',
                medium: 'لديك توازن صحي بين اللطف وحماية حدودك الشخصية.',
                low: 'تميل إلى وضع مصلحتك أولاً. تقدّر الصراحة أكثر من المجاملة.'
            },
            neuroticism: {
                high: 'تشعر بالعواطف بعمق وتتأثر بالضغوط بسرعة. حساسيتك هي قوة وضعف في آن.',
                medium: 'لديك استقرار عاطفي جيد مع قدرة على التعامل مع الضغوط.',
                low: 'أنت هادئ ومتزن عاطفياً. نادراً ما تشعر بالقلق أو التوتر.'
            }
        },
        en: {
            openness: {
                high: 'You are exceptionally open to new experiences. Your imagination is vast and you love exploring unconventional ideas.',
                medium: 'You have a good balance between openness and realism. You appreciate creativity but maintain stability.',
                low: 'You prefer what is familiar and tested. You tend toward traditional methods and value routine.'
            },
            conscientiousness: {
                high: 'You are remarkably organized and disciplined. You plan everything meticulously and always respect deadlines.',
                medium: 'You have a good level of organization with enough flexibility. You know when to be serious and when to relax.',
                low: 'You prefer spontaneity over planning. You love to flow with life without strict constraints.'
            },
            extraversion: {
                high: 'You are a social soul who loves being around people. Your energy increases in large gatherings.',
                medium: 'You enjoy social relationships but also need personal time.',
                low: 'You prefer solitude and quiet. You draw your energy from time spent alone.'
            },
            agreeableness: {
                high: 'You are naturally kind and empathetic. You put others’ needs before your own.',
                medium: 'You have a healthy balance between kindness and protecting your personal boundaries.',
                low: 'You tend to prioritize your own interests. You value honesty over flattery.'
            },
            neuroticism: {
                high: 'You feel emotions deeply and are quickly affected by stress. Your sensitivity is both a strength and a vulnerability.',
                medium: 'You have good emotional stability with the ability to handle pressure.',
                low: 'You are calm and emotionally balanced. You rarely feel anxious or stressed.'
            }
        }
    },

    // ─────────────────────────────────────────────────────────
    // 4. HELPER METHODS (مع تحسين الأمان)
    // ─────────────────────────────────────────────────────────
    
    getZodiacDescription(zodiacName, lang) {
        if (!this.zodiacData[lang] || !this.zodiacData[lang][zodiacName]) {
            return lang === 'ar' ? 'غير معروف' : 'Unknown';
        }
        return this.zodiacData[lang][zodiacName].description;
    },

    getZodiacTraits(zodiacName, lang) {
        if (!this.zodiacData[lang] || !this.zodiacData[lang][zodiacName]) {
            return [];
        }
        return this.zodiacData[lang][zodiacName].traits;
    },

    getColorData(colorKey, lang) {
        const fallback = lang === 'ar' ? 'blue' : 'blue';
        if (!this.colorData[lang] || !this.colorData[lang][colorKey]) {
            return this.colorData[lang]?.[fallback] || { name: 'Unknown', meaning: '' };
        }
        return this.colorData[lang][colorKey];
    },

    getDimensionDescription(dimension, score, lang) {
        if (!this.dimensionDescriptions[lang] || !this.dimensionDescriptions[lang][dimension]) {
            return lang === 'ar' ? 'غير متوفر' : 'Not available';
        }
        const level = score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low';
        return this.dimensionDescriptions[lang][dimension][level] || '';
    },

    getSimilarPersonalities(zodiacName, lang) {
        if (!this.zodiacData[lang] || !this.zodiacData[lang][zodiacName]) {
            return [];
        }
        return this.zodiacData[lang][zodiacName].celebrities || [];
    },

    // ─────────────────────────────────────────────────────────
    // 5. STORY GENERATION
    // ─────────────────────────────────────────────────────────
    
    generateStory(results, lang) {
        const age = results.age || 0;
        const zodiac = results.zodiac?.name || (lang === 'ar' ? 'غير معروف' : 'Unknown');
        const color = this.getColorData(results.soulColor || 'blue', lang);
        
        if (lang === 'ar') {
            return `
                <p><strong>🌙 في ليلة هادئة...</strong></p>
                <p>فُتح باب غرفة الأسرار أمامك، وكشف عن حقيقة مذهلة: أنت لست مجرد إنسان عادي.</p>
                
                <p><strong>🎂 عمرك ${age} سنة</strong> من الخبرات والدروس، كل يوم منها نقش حرفاً في كتاب روحك.</p>
                
                <p><strong>⭐ برجك ${zodiac}</strong> يكشف أن ${this.getZodiacDescription(zodiac, lang)}</p>
                
                <p><strong>🎨 لون روحك "${color.name}"</strong> يروي قصة مختلفة: ${color.meaning}</p>
                
                <p><strong>🧬 أبعاد شخصيتك</strong> تشكل لوحة معقدة من الضوء والظل:</p>
                <p>• <strong>الانفتاح (${results.bigFive?.openness || 0}%)</strong>: ${this.getDimensionDescription('openness', results.bigFive?.openness || 0, lang)}</p>
                <p>• <strong>الضمير (${results.bigFive?.conscientiousness || 0}%)</strong>: ${this.getDimensionDescription('conscientiousness', results.bigFive?.conscientiousness || 0, lang)}</p>
                <p>• <strong>الانبساطية (${results.bigFive?.extraversion || 0}%)</strong>: ${this.getDimensionDescription('extraversion', results.bigFive?.extraversion || 0, lang)}</p>
                <p>• <strong>الطيبة (${results.bigFive?.agreeableness || 0}%)</strong>: ${this.getDimensionDescription('agreeableness', results.bigFive?.agreeableness || 0, lang)}</p>
                <p>• <strong>العصابية (${results.bigFive?.neuroticism || 0}%)</strong>: ${this.getDimensionDescription('neuroticism', results.bigFive?.neuroticism || 0, lang)}</p>
                
                <p><strong>✨ سرّك الأعمق:</strong></p>
                <p>أنت كائن فريد لم يأت العالم بمثله من قبل ولن يأتي بعده. الكون نفسه توقف لحظة لخلقك بهذا التعقيد الجميل.</p>
                
                <p><strong>🚪 والآن...</strong> بعد أن عرفت الحقيقة، ماذا ستفعل بهذا السر؟</p>
            `;
        } else {
            return `
                <p><strong>🌙 On a quiet night...</strong></p>
                <p>The door to the Hidden Chamber opened before you, revealing an amazing truth: you are not just an ordinary human.</p>
                
                <p><strong>🎂 Your ${age} years</strong> of experiences and lessons, each day carved a letter in your soul's book.</p>
                
                <p><strong>⭐ Your zodiac ${zodiac}</strong> reveals that ${this.getZodiacDescription(zodiac, lang)}</p>
                
                <p><strong>🎨 Your soul color "${color.name}"</strong> tells a different story: ${color.meaning}</p>
                
                <p><strong>🧬 Your personality dimensions</strong> form a complex canvas of light and shadow:</p>
                <p>• <strong>Openness (${results.bigFive?.openness || 0}%)</strong>: ${this.getDimensionDescription('openness', results.bigFive?.openness || 0, lang)}</p>
                <p>• <strong>Conscientiousness (${results.bigFive?.conscientiousness || 0}%)</strong>: ${this.getDimensionDescription('conscientiousness', results.bigFive?.conscientiousness || 0, lang)}</p>
                <p>• <strong>Extraversion (${results.bigFive?.extraversion || 0}%)</strong>: ${this.getDimensionDescription('extraversion', results.bigFive?.extraversion || 0, lang)}</p>
                <p>• <strong>Agreeableness (${results.bigFive?.agreeableness || 0}%)</strong>: ${this.getDimensionDescription('agreeableness', results.bigFive?.agreeableness || 0, lang)}</p>
                <p>• <strong>Neuroticism (${results.bigFive?.neuroticism || 0}%)</strong>: ${this.getDimensionDescription('neuroticism', results.bigFive?.neuroticism || 0, lang)}</p>
                
                <p><strong>✨ Your deepest secret:</strong></p>
                <p>You are a unique being the world has never seen before and will never see again. The universe itself paused for a moment to create you with this beautiful complexity.</p>
                
                <p><strong>🚪 And now...</strong> after knowing the truth, what will you do with this secret?</p>
            `;
        }
    }
};