const translations = {
    en: {
        // Nav
        nav_features: "Features",
        nav_how: "How it Works",
        nav_agents: "Agents",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_start: "Start Free",
        nav_docs: "Docs",

        // Hero
        hero_badge: "Powered by Claude & ChatGPT & Gemini",
        hero_title: "Your personal <br><span class=\"gradient-text\">AI life assistant</span>",
        hero_subtitle: "Manage money, tasks, calendar, email, and clients right in Telegram, WhatsApp, Slack, or SMS. One chat for everything.",
        hero_btn_start: "Start in Telegram",
        hero_btn_how: "See How It Works",
        hero_trust: "No app to install. Works in Telegram, WhatsApp, Slack, SMS.",

        // Chat mockup
        chat_header_title: "Finance AI Bot",
        chat_header_status: "online",
        chat_user_1: "Refueled the truck for $150",
        chat_bot_1: "&#10003; Recorded! Transport / Fuel \u2014 $150.00<br>&#128202; This is 15% of your transport budget",
        chat_user_2: "Show expenses for the month",
        chat_bot_2: "&#128200; February expenses: $2,340<br>&#128313; Transport \u2014 $680<br>&#128313; Materials \u2014 $450<br>&#128313; Food \u2014 $320",
        chat_user_3: "Remind me to call the client tomorrow at 10am",
        chat_bot_3: "&#9989; Done! Reminder set for tomorrow, Feb 24 at 10:00 AM",

        // Stats
        stat_skills: "Skills",
        stat_agents: "AI Agents",
        stat_channels: "Channels",
        stat_price: "per month",

        // Integrations
        integrations_label: "WORKS WITH YOUR FAVORITE TOOLS",

        // Features
        features_badge: "67 SKILLS IN ONE CHAT",
        features_title: "Everything you need. <br>In <span class=\"gradient-text\">one</span> place.",
        features_subtitle: "No more juggling between apps. Just text, speak, or snap a photo.",

        f1_title: "Smart Receipt OCR",
        f1_desc: "Send a photo of any receipt. AI instantly reads the merchant, items, taxes, and sorts everything into the right category.",
        f1_chat_user: "&#128247; [Photo of receipt]",
        f1_chat_bot: "&#10003; Shell Gas \u2014 $150.00<br>Category: Transport / Fuel",

        f_email_title: "Email Orchestrator",
        f_email_desc: "Read inbox, compose replies, send follow-ups. AI writes, reviews, and sends \u2014 all from your chat.",

        f_cal_title: "Calendar & Briefs",
        f_cal_desc: "Google Calendar sync. Get morning briefs, schedule meetings, find free slots \u2014 all through natural language.",

        f4_title: "Analytics & Reports",
        f4_desc: "Ask complex questions about your finances. Get instant charts and reports delivered right to your chat.",

        f_res_title: "Research & Search",
        f_res_desc: "Real-time web search, maps, YouTube analysis, price comparison, and news monitoring \u2014 powered by Google Search.",

        f2_title: "Voice Input",
        f2_desc: "Driving? Just send a voice note. AI transcribes and processes it instantly in any language.",

        f_book_title: "Booking & CRM",
        f_book_desc: "Manage client appointments, contacts, reminders, and send notifications. Built-in CRM for your business.",

        f_life_title: "Life Tracking",
        f_life_desc: "Track mood, meals, water, habits, and daily reflections. Get personalized wellness insights.",

        f_writing_title: "Writing & Creative",
        f_writing_desc: "Draft messages, translate texts, generate images and cards. Your AI content creator.",

        // How It Works
        how_badge: "SIMPLE AS 1-2-3",
        how_title: "How It <span class=\"gradient-text\">Works</span>",
        how_subtitle: "No apps to download. No dashboards to learn. Just your messenger.",
        how_step1_title: "Open Your Messenger",
        how_step1_desc: "Telegram, WhatsApp, Slack, or SMS. Use what you already have.",
        how_step2_title: "Tell the Bot",
        how_step2_desc: "Type, speak, or send a photo. Use natural language \u2014 no commands to memorize.",
        how_step3_title: "Done!",
        how_step3_desc: "11 AI agents automatically route your request and handle everything.",

        // Agents
        agents_badge: "ECOSYSTEM",
        agents_title: "Your team of <span class=\"gradient-text\">11 AI agents</span>",
        agents_subtitle: "Each agent specializes in its domain and shares a unified multi-layer memory.",
        agent_finance_desc: "Expenses, income, budgets, recurring payments",
        agent_analytics_desc: "Reports, charts, complex queries",
        agent_life_desc: "Mood, food, habits, reflections",
        agent_calendar_desc: "Events, scheduling, morning briefs",
        agent_tasks_desc: "To-dos, reminders, shopping lists",
        agent_research_desc: "Web search, maps, YouTube, news",
        agent_writing_desc: "Drafts, translation, image generation",
        agent_email_desc: "Inbox, replies, follow-ups, threads",
        agent_booking_desc: "Client appointments, CRM, notifications",
        agent_browser_desc: "Web automation, price alerts, monitoring",
        agent_onboarding_desc: "Setup, preferences, getting started",

        // Use Cases
        uc_badge: "USE CASES",
        uc_title: "Built for <span class=\"gradient-text\">your</span> life",
        uc_subtitle: "Whether you run a business or manage a household \u2014 we've got you covered.",
        uc1_title: "Freelancers & Small Business",
        uc1_desc: "Track expenses, scan invoices, manage client bookings, and get tax-ready reports. Your accountant in a chat.",
        tag_invoice: "Invoices",
        tag_taxes: "Taxes",
        uc2_title: "Family Budget",
        uc2_desc: "Share one account between family members. Everyone tracks their own spending, the owner sees the full picture.",
        tag_sync: "Sync",
        tag_list: "Shopping Lists",
        uc3_title: "Truckers & Drivers",
        uc3_desc: "Log fuel, repairs, and tolls by voice while driving. Get summaries for IFTA reports without leaving the wheel.",
        tag_voice: "Voice",
        uc4_title: "For Everyone",
        uc4_desc: "Automate daily routines: track meals, set reminders, manage email, research anything, and plan your day with AI.",
        tag_life: "Life Tracking",
        tag_email: "Email",
        tag_tasks: "Tasks",

        // Testimonials
        test_badge: "REVIEWS",
        test_title: "Loved by businesses <span class=\"gradient-text\">and families</span>",
        test1_text: "\"I used to spend 2 hours on bookkeeping. Now I just snap receipts and the bot does everything.\"",
        test1_name: "David M.",
        test1_role: "Plumber, Queens NY",
        test2_text: "\"My husband and I finally see where our money goes. The family budget feature is a lifesaver.\"",
        test2_name: "Maria S.",
        test2_role: "Mom of 3, Brooklyn",
        test3_text: "\"Voice input while driving changed my tracking game. IFTA reports are so much easier now.\"",
        test3_name: "Mike T.",
        test3_role: "OTR Trucker",

        // Pricing
        pricing_title: "Ready to delegate chaos to <span class=\"gradient-text\">AI</span>?",
        pricing_subtitle: "One subscription. All features. All channels.",
        pricing_period: "/month",
        pricing_desc: "Full access to everything. No limits.",
        pricing_feat_1: "67 AI skills across 11 agents",
        pricing_feat_2: "Receipt & document OCR",
        pricing_feat_3: "Voice input in any language",
        pricing_feat_4: "Email read, write & follow-up",
        pricing_feat_5: "Google Calendar sync",
        pricing_feat_6: "Morning & evening briefs",
        pricing_feat_7: "CRM & client booking",
        pricing_feat_8: "Life tracking & habits",
        pricing_feat_9: "Research & web search",
        pricing_feat_10: "Price alerts & news monitoring",
        pricing_feat_11: "Family & team sharing",
        pricing_feat_12: "All 4 channels included",
        pricing_btn: "Start in Telegram",
        pricing_cancel: "Cancel anytime. No contracts.",

        // FAQ
        faq_badge: "FAQ",
        faq_title: "Frequently Asked <span class=\"gradient-text\">Questions</span>",
        faq_q1: "What is Finance AI Bot?",
        faq_a1: "An AI life assistant that works inside your messenger. It manages finances, tasks, calendar, email, CRM, and more using 11 specialized AI agents.",
        faq_q2: "How do I get started?",
        faq_a2: "Open Telegram and search for @financeaibot. Send any message to begin. Setup takes under 2 minutes.",
        faq_q3: "Which messengers are supported?",
        faq_a3: "Telegram (primary), WhatsApp, Slack, and SMS. One account works across all channels.",
        faq_q4: "What languages does it understand?",
        faq_a4: "English, Russian, and Spanish for the interface. Voice input works in 50+ languages.",
        faq_q5: "Is my financial data secure?",
        faq_a5: "Yes. All data is encrypted and stored with row-level security. We never share or sell your data.",
        faq_q6: "Can my family use one account?",
        faq_a6: "Yes! Add family members to a shared account. Each person tracks their own expenses, and the owner sees the full picture.",
        faq_q7: "Does it work for business?",
        faq_a7: "Absolutely. Track business expenses, manage client bookings, send emails, and get tax-ready reports.",
        faq_q8: "Can I cancel anytime?",
        faq_a8: "Yes, cancel anytime with no penalties. Your data stays available for 30 days after cancellation.",

        // Footer
        footer_tagline: "Your AI life assistant in every messenger.",
        footer_prod: "Product",
        footer_res: "Resources",
        footer_comp: "Company",
        footer_about: "About Us",
        footer_priv: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_sup: "Support",
        footer_copy: "\u00a9 2026 Finance AI. All rights reserved."
    },

    ru: {
        // Nav
        nav_features: "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",
        nav_how: "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",
        nav_agents: "\u0410\u0433\u0435\u043d\u0442\u044b",
        nav_pricing: "\u0422\u0430\u0440\u0438\u0444\u044b",
        nav_faq: "\u0412\u043e\u043f\u0440\u043e\u0441\u044b",
        nav_start: "\u041d\u0430\u0447\u0430\u0442\u044c",
        nav_docs: "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",

        // Hero
        hero_badge: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 Claude & ChatGPT & Gemini",
        hero_title: "\u0412\u0430\u0448 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 <br><span class=\"gradient-text\">AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442</span>",
        hero_subtitle: "\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u043c\u0438, \u0437\u0430\u0434\u0430\u0447\u0430\u043c\u0438, \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c, \u043f\u043e\u0447\u0442\u043e\u0439 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u043f\u0440\u044f\u043c\u043e \u0432 Telegram, WhatsApp, Slack \u0438\u043b\u0438 SMS. \u041e\u0434\u0438\u043d \u0447\u0430\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e.",
        hero_btn_start: "\u041d\u0430\u0447\u0430\u0442\u044c \u0432 Telegram",
        hero_btn_how: "\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",
        hero_trust: "\u041d\u0438\u0447\u0435\u0433\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 Telegram, WhatsApp, Slack, SMS.",

        // Chat mockup
        chat_header_title: "Finance AI Bot",
        chat_header_status: "\u043e\u043d\u043b\u0430\u0439\u043d",
        chat_user_1: "\u0417\u0430\u043f\u0440\u0430\u0432\u0438\u043b \u0442\u0440\u0430\u043a \u043d\u0430 $150",
        chat_bot_1: "&#10003; \u0417\u0430\u043f\u0438\u0441\u0430\u043d\u043e! \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 / \u0422\u043e\u043f\u043b\u0438\u0432\u043e \u2014 $150.00<br>&#128202; \u042d\u0442\u043e 15% \u0431\u044e\u0434\u0436\u0435\u0442\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",
        chat_user_2: "\u041f\u043e\u043a\u0430\u0436\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u0437\u0430 \u043c\u0435\u0441\u044f\u0446",
        chat_bot_2: "&#128200; \u0420\u0430\u0441\u0445\u043e\u0434\u044b \u0437\u0430 \u0444\u0435\u0432\u0440\u0430\u043b\u044c: $2,340<br>&#128313; \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u2014 $680<br>&#128313; \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u2014 $450<br>&#128313; \u0415\u0434\u0430 \u2014 $320",
        chat_user_3: "\u041d\u0430\u043f\u043e\u043c\u043d\u0438 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u0437\u0430\u0432\u0442\u0440\u0430 \u0432 10",
        chat_bot_3: "&#9989; \u0413\u043e\u0442\u043e\u0432\u043e! \u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435 \u043d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430, 24 \u0444\u0435\u0432. \u0432 10:00",

        // Stats
        stat_skills: "\u041d\u0430\u0432\u044b\u043a\u043e\u0432",
        stat_agents: "AI-\u0430\u0433\u0435\u043d\u0442\u043e\u0432",
        stat_channels: "\u041a\u0430\u043d\u0430\u043b\u0430",
        stat_price: "\u0432 \u043c\u0435\u0441\u044f\u0446",

        // Integrations
        integrations_label: "\u0420\u0410\u0411\u041e\u0422\u0410\u0415\u0422 \u0421 \u0412\u0410\u0428\u0418\u041c\u0418 \u041b\u042e\u0411\u0418\u041c\u042b\u041c\u0418 \u0418\u041d\u0421\u0422\u0420\u0423\u041c\u0415\u041d\u0422\u0410\u041c\u0418",

        // Features
        features_badge: "67 \u041d\u0410\u0412\u042b\u041a\u041e\u0412 \u0412 \u041e\u0414\u041d\u041e\u041c \u0427\u0410\u0422\u0415",
        features_title: "\u0412\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e. <br>\u0412 <span class=\"gradient-text\">\u043e\u0434\u043d\u043e\u043c</span> \u043c\u0435\u0441\u0442\u0435.",
        features_subtitle: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438. \u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043b\u0438 \u0441\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435.",

        f1_title: "\u0423\u043c\u043d\u044b\u0439 OCR \u0447\u0435\u043a\u043e\u0432",
        f1_desc: "\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e \u043b\u044e\u0431\u043e\u0433\u043e \u0447\u0435\u043a\u0430. AI \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u0442\u043e\u0432\u0430\u0440\u044b, \u043d\u0430\u043b\u043e\u0433\u0438 \u0438 \u0440\u0430\u0437\u043b\u043e\u0436\u0438\u0442 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c.",
        f1_chat_user: "&#128247; [\u0424\u043e\u0442\u043e \u0447\u0435\u043a\u0430]",
        f1_chat_bot: "&#10003; Shell Gas \u2014 $150.00<br>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: \u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 / \u0422\u043e\u043f\u043b\u0438\u0432\u043e",

        f_email_title: "\u041e\u0440\u043a\u0435\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043f\u043e\u0447\u0442\u044b",
        f_email_desc: "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435, \u043f\u0438\u0448\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442\u044b, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0438\u0441\u044c\u043c\u0430. AI \u043d\u0430\u043f\u0438\u0448\u0435\u0442, \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u2014 \u0432\u0441\u0451 \u0438\u0437 \u0447\u0430\u0442\u0430.",

        f_cal_title: "\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u0438 \u0441\u0432\u043e\u0434\u043a\u0438",
        f_cal_desc: "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441 Google Calendar. \u0423\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0441\u0432\u043e\u0434\u043a\u0438, \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447, \u043f\u043e\u0438\u0441\u043a \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0445 \u0441\u043b\u043e\u0442\u043e\u0432 \u2014 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c.",

        f4_title: "\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u0438 \u043e\u0442\u0447\u0451\u0442\u044b",
        f4_desc: "\u0417\u0430\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043e \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u0445. \u041f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0438 \u043e\u0442\u0447\u0451\u0442\u044b \u043f\u0440\u044f\u043c\u043e \u0432 \u0447\u0430\u0442.",

        f_res_title: "\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u0438\u0441\u043a",
        f_res_desc: "\u041f\u043e\u0438\u0441\u043a \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u0430\u0440\u0442\u044b, \u0430\u043d\u0430\u043b\u0438\u0437 YouTube, \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0446\u0435\u043d \u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u2014 \u043d\u0430 \u0431\u0430\u0437\u0435 Google Search.",

        f2_title: "\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u0432\u0432\u043e\u0434",
        f2_desc: "\u0417\u0430 \u0440\u0443\u043b\u0451\u043c? \u041f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435. AI \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0435\u0442 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u044f\u0437\u044b\u043a\u0435.",

        f_book_title: "\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 CRM",
        f_book_desc: "\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c\u0438, \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f. \u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 CRM \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430.",

        f_life_title: "\u0422\u0440\u0435\u043a\u0435\u0440 \u0436\u0438\u0437\u043d\u0438",
        f_life_desc: "\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435, \u043f\u0438\u0442\u0430\u043d\u0438\u0435, \u0432\u043e\u0434\u0443, \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438 \u0438 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0440\u0435\u0444\u043b\u0435\u043a\u0441\u0438\u0438. \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0430\u0439\u0442\u044b \u043e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435.",

        f_writing_title: "\u041f\u0438\u0441\u044c\u043c\u043e \u0438 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e",
        f_writing_desc: "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b, \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043a. \u0412\u0430\u0448 AI-\u043a\u0440\u0435\u0430\u0442\u043e\u0440.",

        // How It Works
        how_badge: "\u041f\u0420\u041e\u0421\u0422\u041e \u041a\u0410\u041a 1-2-3",
        how_title: "\u041a\u0430\u043a \u044d\u0442\u043e <span class=\"gradient-text\">\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442</span>",
        how_subtitle: "\u041d\u0438\u0447\u0435\u0433\u043e \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c. \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0430\u0448\u0431\u043e\u0440\u0434\u043e\u0432. \u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0430\u0448 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440.",
        how_step1_title: "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440",
        how_step1_desc: "Telegram, WhatsApp, Slack \u0438\u043b\u0438 SMS. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0443\u0436\u0435 \u0435\u0441\u0442\u044c.",
        how_step2_title: "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0431\u043e\u0442\u0443",
        how_step2_desc: "\u041f\u0438\u0448\u0438\u0442\u0435, \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u0438\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0444\u043e\u0442\u043e. \u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u2014 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043a\u043e\u043c\u0430\u043d\u0434.",
        how_step3_title: "\u0413\u043e\u0442\u043e\u0432\u043e!",
        how_step3_desc: "11 AI-\u0430\u0433\u0435\u043d\u0442\u043e\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0438\u0440\u0443\u044e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0432\u0441\u0451 \u0441\u0434\u0435\u043b\u0430\u044e\u0442.",

        // Agents
        agents_badge: "\u042d\u041a\u041e\u0421\u0418\u0421\u0422\u0415\u041c\u0410",
        agents_title: "\u0412\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0438\u0437 <span class=\"gradient-text\">11 AI-\u0430\u0433\u0435\u043d\u0442\u043e\u0432</span>",
        agents_subtitle: "\u041a\u0430\u0436\u0434\u044b\u0439 \u0430\u0433\u0435\u043d\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0431\u0449\u0443\u044e \u043c\u043d\u043e\u0433\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u0443\u044e \u043f\u0430\u043c\u044f\u0442\u044c.",
        agent_finance_desc: "\u0420\u0430\u0441\u0445\u043e\u0434\u044b, \u0434\u043e\u0445\u043e\u0434\u044b, \u0431\u044e\u0434\u0436\u0435\u0442\u044b, \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438",
        agent_analytics_desc: "\u041e\u0442\u0447\u0451\u0442\u044b, \u0433\u0440\u0430\u0444\u0438\u043a\u0438, \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b",
        agent_life_desc: "\u041d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435, \u043f\u0438\u0442\u0430\u043d\u0438\u0435, \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438, \u0440\u0435\u0444\u043b\u0435\u043a\u0441\u0438\u0438",
        agent_calendar_desc: "\u0421\u043e\u0431\u044b\u0442\u0438\u044f, \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0441\u0432\u043e\u0434\u043a\u0438",
        agent_tasks_desc: "\u0417\u0430\u0434\u0430\u0447\u0438, \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f, \u0441\u043f\u0438\u0441\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u043e\u043a",
        agent_research_desc: "\u0412\u0435\u0431-\u043f\u043e\u0438\u0441\u043a, \u043a\u0430\u0440\u0442\u044b, YouTube, \u043d\u043e\u0432\u043e\u0441\u0442\u0438",
        agent_writing_desc: "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0438, \u043f\u0435\u0440\u0435\u0432\u043e\u0434, \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",
        agent_email_desc: "\u0412\u0445\u043e\u0434\u044f\u0449\u0438\u0435, \u043e\u0442\u0432\u0435\u0442\u044b, \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435, \u0446\u0435\u043f\u043e\u0447\u043a\u0438",
        agent_booking_desc: "\u0417\u0430\u043f\u0438\u0441\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, CRM, \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",
        agent_browser_desc: "\u0412\u0435\u0431-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0446\u0435\u043d, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433",
        agent_onboarding_desc: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430, \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f, \u043d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",

        // Use Cases
        uc_badge: "\u0421\u0426\u0415\u041d\u0410\u0420\u0418\u0418",
        uc_title: "\u0421\u043e\u0437\u0434\u0430\u043d \u0434\u043b\u044f <span class=\"gradient-text\">\u0432\u0430\u0448\u0435\u0439</span> \u0436\u0438\u0437\u043d\u0438",
        uc_subtitle: "\u0412\u0435\u0434\u0451\u0442\u0435 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438\u043b\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0441\u0435\u043c\u044c\u0451\u0439 \u2014 \u043c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c.",
        uc1_title: "\u0424\u0440\u0438\u043b\u0430\u043d\u0441\u0435\u0440\u044b \u0438 \u043c\u0430\u043b\u044b\u0439 \u0431\u0438\u0437\u043d\u0435\u0441",
        uc1_desc: "\u0422\u0440\u0435\u043a\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0447\u0435\u0442\u0430, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u043e\u0442\u0447\u0451\u0442\u044b \u0434\u043b\u044f \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439. \u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440 \u0432 \u0447\u0430\u0442\u0435.",
        tag_invoice: "\u0421\u0447\u0435\u0442\u0430",
        tag_taxes: "\u041d\u0430\u043b\u043e\u0433\u0438",
        uc2_title: "\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442",
        uc2_desc: "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0441\u0435\u043c\u044c\u044e \u043a \u043e\u0434\u043d\u043e\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443. \u041a\u0430\u0436\u0434\u044b\u0439 \u0432\u043d\u043e\u0441\u0438\u0442 \u0441\u0432\u043e\u0438 \u0442\u0440\u0430\u0442\u044b, \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u0432\u0438\u0434\u0438\u0442 \u043f\u043e\u043b\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u0443.",
        tag_sync: "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f",
        tag_list: "\u0421\u043f\u0438\u0441\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u043e\u043a",
        uc3_title: "\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 \u0438 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438",
        uc3_desc: "\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u043f\u043b\u0438\u0432\u043e, \u0440\u0435\u043c\u043e\u043d\u0442 \u0438 \u0441\u0431\u043e\u0440\u044b \u0433\u043e\u043b\u043e\u0441\u043e\u043c \u043d\u0430 \u0445\u043e\u0434\u0443. \u0421\u0432\u043e\u0434\u043a\u0438 \u0434\u043b\u044f IFTA-\u043e\u0442\u0447\u0451\u0442\u043e\u0432 \u0431\u0435\u0437 \u043e\u0442\u0440\u044b\u0432\u0430 \u043e\u0442 \u0440\u0443\u043b\u044f.",
        tag_voice: "\u0413\u043e\u043b\u043e\u0441",
        uc4_title: "\u0414\u043b\u044f \u0432\u0441\u0435\u0445",
        uc4_desc: "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0443\u0442\u0438\u043d\u0443: \u0442\u0440\u0435\u043a\u0430\u0439\u0442\u0435 \u043f\u0438\u0442\u0430\u043d\u0438\u0435, \u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u0447\u0442\u043e\u0439, \u0438\u0449\u0438\u0442\u0435 \u0438\u043d\u0444\u043e \u0438 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u0435\u043d\u044c.",
        tag_life: "\u0422\u0440\u0435\u043a\u0435\u0440 \u0436\u0438\u0437\u043d\u0438",
        tag_email: "\u041f\u043e\u0447\u0442\u0430",
        tag_tasks: "\u0417\u0430\u0434\u0430\u0447\u0438",

        // Testimonials
        test_badge: "\u041e\u0422\u0417\u042b\u0412\u042b",
        test_title: "\u041b\u044e\u0431\u044f\u0442 \u0431\u0438\u0437\u043d\u0435\u0441 <span class=\"gradient-text\">\u0438 \u0441\u0435\u043c\u044c\u0438</span>",
        test1_text: "\"\u0420\u0430\u043d\u044c\u0448\u0435 \u0442\u0440\u0430\u0442\u0438\u043b 2 \u0447\u0430\u0441\u0430 \u043d\u0430 \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044e. \u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u0444\u043e\u0442\u043a\u0430\u044e \u0447\u0435\u043a\u0438, \u0438 \u0431\u043e\u0442 \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u0451.\"",
        test1_name: "\u0414\u044d\u0432\u0438\u0434 \u041c.",
        test1_role: "\u0421\u0430\u043d\u0442\u0435\u0445\u043d\u0438\u043a, \u041a\u0443\u0438\u043d\u0441 NY",
        test2_text: "\"\u041c\u044b \u0441 \u043c\u0443\u0436\u0435\u043c \u043d\u0430\u043a\u043e\u043d\u0435\u0446 \u0432\u0438\u0434\u0438\u043c, \u043a\u0443\u0434\u0430 \u0443\u0445\u043e\u0434\u044f\u0442 \u0434\u0435\u043d\u044c\u0433\u0438. \u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442 \u2014 \u0441\u043f\u0430\u0441\u0435\u043d\u0438\u0435.\"",
        test2_name: "\u041c\u0430\u0440\u0438\u044f \u0421.",
        test2_role: "\u041c\u0430\u043c\u0430 \u0442\u0440\u043e\u0438\u0445, \u0411\u0440\u0443\u043a\u043b\u0438\u043d",
        test3_text: "\"\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u0432\u0432\u043e\u0434 \u0437\u0430 \u0440\u0443\u043b\u0451\u043c \u0438\u0437\u043c\u0435\u043d\u0438\u043b \u0432\u0441\u0451. IFTA-\u043e\u0442\u0447\u0451\u0442\u044b \u0442\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0449\u0435.\"",
        test3_name: "\u041c\u0430\u0439\u043a \u0422.",
        test3_role: "\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a",

        // Pricing
        pricing_title: "\u0413\u043e\u0442\u043e\u0432\u044b \u0434\u0435\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0445\u0430\u043e\u0441 <span class=\"gradient-text\">\u0418\u0418</span>?",
        pricing_subtitle: "\u041e\u0434\u043d\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430. \u0412\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0412\u0441\u0435 \u043a\u0430\u043d\u0430\u043b\u044b.",
        pricing_period: "/\u043c\u0435\u0441\u044f\u0446",
        pricing_desc: "\u041f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c\u0443. \u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439.",
        pricing_feat_1: "67 AI-\u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u0432 11 \u0430\u0433\u0435\u043d\u0442\u0430\u0445",
        pricing_feat_2: "\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u043a\u043e\u0432 \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432",
        pricing_feat_3: "\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u0432\u0432\u043e\u0434 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u044f\u0437\u044b\u043a\u0435",
        pricing_feat_4: "\u0427\u0442\u0435\u043d\u0438\u0435, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u043e\u0442\u0432\u0435\u0442\u044b \u043d\u0430 \u043f\u043e\u0447\u0442\u0443",
        pricing_feat_5: "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441 Google Calendar",
        pricing_feat_6: "\u0423\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0438 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0435 \u0441\u0432\u043e\u0434\u043a\u0438",
        pricing_feat_7: "CRM \u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",
        pricing_feat_8: "\u0422\u0440\u0435\u043a\u0435\u0440 \u0436\u0438\u0437\u043d\u0438 \u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u0435\u043a",
        pricing_feat_9: "\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0432\u0435\u0431-\u043f\u043e\u0438\u0441\u043a",
        pricing_feat_10: "\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0446\u0435\u043d \u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439",
        pricing_feat_11: "\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f",
        pricing_feat_12: "\u0412\u0441\u0435 4 \u043a\u0430\u043d\u0430\u043b\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b",
        pricing_btn: "\u041d\u0430\u0447\u0430\u0442\u044c \u0432 Telegram",
        pricing_cancel: "\u041e\u0442\u043c\u0435\u043d\u0430 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u0411\u0435\u0437 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043e\u0432.",

        // FAQ
        faq_badge: "\u0412\u041e\u041f\u0420\u041e\u0421\u042b",
        faq_title: "\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 <span class=\"gradient-text\">\u0432\u043e\u043f\u0440\u043e\u0441\u044b</span>",
        faq_q1: "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Finance AI Bot?",
        faq_a1: "AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0432\u0430\u0448\u0435\u043c \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435. \u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u043c\u0438, \u0437\u0430\u0434\u0430\u0447\u0430\u043c\u0438, \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0451\u043c, \u043f\u043e\u0447\u0442\u043e\u0439, CRM \u0438 \u043c\u043d\u043e\u0433\u0438\u043c \u0434\u0440\u0443\u0433\u0438\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e 11 AI-\u0430\u0433\u0435\u043d\u0442\u043e\u0432.",
        faq_q2: "\u041a\u0430\u043a \u043d\u0430\u0447\u0430\u0442\u044c?",
        faq_a2: "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 Telegram \u0438 \u043d\u0430\u0439\u0434\u0438\u0442\u0435 @financeaibot. \u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043b\u044e\u0431\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 2 \u043c\u0438\u043d\u0443\u0442.",
        faq_q3: "\u041a\u0430\u043a\u0438\u0435 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f?",
        faq_a3: "Telegram (\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439), WhatsApp, Slack \u0438 SMS. \u041e\u0434\u0438\u043d \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432\u043e \u0432\u0441\u0435\u0445 \u043a\u0430\u043d\u0430\u043b\u0430\u0445.",
        faq_q4: "\u041a\u0430\u043a\u0438\u0435 \u044f\u0437\u044b\u043a\u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442?",
        faq_a4: "\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439, \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0438 \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u0432\u0432\u043e\u0434 \u043d\u0430 50+ \u044f\u0437\u044b\u043a\u0430\u0445.",
        faq_q5: "\u041c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438?",
        faq_a5: "\u0414\u0430. \u0412\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u044b \u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\u044e. \u041c\u044b \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0440\u0435\u0442\u044c\u0438\u043c \u043b\u0438\u0446\u0430\u043c.",
        faq_q6: "\u041c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0441\u0435\u043c\u044c\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0430\u043a\u043a\u0430\u0443\u043d\u0442?",
        faq_a6: "\u0414\u0430! \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0447\u043b\u0435\u043d\u043e\u0432 \u0441\u0435\u043c\u044c\u0438 \u0432 \u043e\u0431\u0449\u0438\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442. \u041a\u0430\u0436\u0434\u044b\u0439 \u0432\u0435\u0434\u0451\u0442 \u0441\u0432\u043e\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u0432\u0438\u0434\u0438\u0442 \u043f\u043e\u043b\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u0443.",
        faq_q7: "\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430?",
        faq_a7: "\u041a\u043e\u043d\u0435\u0447\u043d\u043e. \u0422\u0440\u0435\u043a\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043f\u043e\u0447\u0442\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0439\u0442\u0435 \u043e\u0442\u0447\u0451\u0442\u044b \u0434\u043b\u044f \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0439.",
        faq_q8: "\u041c\u043e\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f?",
        faq_a8: "\u0414\u0430, \u043e\u0442\u043c\u0435\u043d\u044f\u0439\u0442\u0435 \u043a\u043e\u0433\u0434\u0430 \u0443\u0433\u043e\u0434\u043d\u043e \u0431\u0435\u0437 \u0448\u0442\u0440\u0430\u0444\u043e\u0432. \u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0435\u0449\u0451 30 \u0434\u043d\u0435\u0439 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043c\u0435\u043d\u044b.",

        // Footer
        footer_tagline: "\u0412\u0430\u0448 AI-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043d\u0442 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435.",
        footer_prod: "\u041f\u0440\u043e\u0434\u0443\u043a\u0442",
        footer_res: "\u0420\u0435\u0441\u0443\u0440\u0441\u044b",
        footer_comp: "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",
        footer_about: "\u041e \u043d\u0430\u0441",
        footer_priv: "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
        footer_terms: "\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",
        footer_sup: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",
        footer_copy: "\u00a9 2026 Finance AI. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."
    },

    es: {
        // Nav
        nav_features: "Funciones",
        nav_how: "C\u00f3mo funciona",
        nav_agents: "Agentes",
        nav_pricing: "Precios",
        nav_faq: "Preguntas",
        nav_start: "Empezar",
        nav_docs: "Documentaci\u00f3n",

        // Hero
        hero_badge: "Impulsado por Claude & ChatGPT & Gemini",
        hero_title: "Tu asistente <br><span class=\"gradient-text\">de vida con IA</span> personal",
        hero_subtitle: "Gestiona dinero, tareas, calendario, correo y clientes en Telegram, WhatsApp, Slack o SMS. Un chat para todo.",
        hero_btn_start: "Empezar en Telegram",
        hero_btn_how: "Ver c\u00f3mo funciona",
        hero_trust: "Sin apps. Funciona en Telegram, WhatsApp, Slack, SMS.",

        // Chat mockup
        chat_header_title: "Finance AI Bot",
        chat_header_status: "en l\u00ednea",
        chat_user_1: "Repost\u00e9 el cami\u00f3n por $150",
        chat_bot_1: "&#10003; \u00a1Registrado! Transporte / Combustible \u2014 $150.00<br>&#128202; Es el 15% de tu presupuesto de transporte",
        chat_user_2: "Muestra gastos del mes",
        chat_bot_2: "&#128200; Gastos de febrero: $2,340<br>&#128313; Transporte \u2014 $680<br>&#128313; Materiales \u2014 $450<br>&#128313; Comida \u2014 $320",
        chat_user_3: "Recu\u00e9rdame llamar al cliente ma\u00f1ana a las 10",
        chat_bot_3: "&#9989; \u00a1Listo! Recordatorio para ma\u00f1ana, 24 feb. a las 10:00",

        // Stats
        stat_skills: "Habilidades",
        stat_agents: "Agentes IA",
        stat_channels: "Canales",
        stat_price: "por mes",

        // Integrations
        integrations_label: "FUNCIONA CON TUS HERRAMIENTAS FAVORITAS",

        // Features
        features_badge: "67 HABILIDADES EN UN CHAT",
        features_title: "Todo lo que necesitas. <br>En <span class=\"gradient-text\">un</span> solo lugar.",
        features_subtitle: "Deja de alternar entre apps. Solo escribe, habla o env\u00eda una foto.",

        f1_title: "OCR de Recibos Inteligente",
        f1_desc: "Env\u00eda una foto de cualquier recibo. La IA lee al instante el comercio, art\u00edculos, impuestos y lo categoriza todo.",
        f1_chat_user: "&#128247; [Foto del recibo]",
        f1_chat_bot: "&#10003; Shell Gas \u2014 $150.00<br>Categor\u00eda: Transporte / Combustible",

        f_email_title: "Orquestador de Correo",
        f_email_desc: "Lee bandeja de entrada, escribe respuestas, env\u00eda seguimientos. La IA redacta, revisa y env\u00eda \u2014 todo desde el chat.",

        f_cal_title: "Calendario y Res\u00famenes",
        f_cal_desc: "Sincronizaci\u00f3n con Google Calendar. Res\u00famenes matutinos, agenda reuniones, encuentra horas libres \u2014 en lenguaje natural.",

        f4_title: "An\u00e1lisis e Informes",
        f4_desc: "Haz preguntas complejas sobre tus finanzas. Recibe gr\u00e1ficos e informes al instante en tu chat.",

        f_res_title: "Investigaci\u00f3n y B\u00fasqueda",
        f_res_desc: "B\u00fasqueda web en tiempo real, mapas, an\u00e1lisis de YouTube, comparaci\u00f3n de precios y monitoreo de noticias \u2014 con Google Search.",

        f2_title: "Entrada de Voz",
        f2_desc: "\u00bfConduciendo? Env\u00eda una nota de voz. La IA transcribe y procesa al instante en cualquier idioma.",

        f_book_title: "Reservas y CRM",
        f_book_desc: "Gestiona citas, contactos, recordatorios y env\u00eda notificaciones. CRM integrado para tu negocio.",

        f_life_title: "Seguimiento de Vida",
        f_life_desc: "Registra estado de \u00e1nimo, comidas, agua, h\u00e1bitos y reflexiones diarias. Obtiene insights de bienestar personalizados.",

        f_writing_title: "Escritura y Creatividad",
        f_writing_desc: "Borradores de mensajes, traducciones, generaci\u00f3n de im\u00e1genes y tarjetas. Tu creador de contenido con IA.",

        // How It Works
        how_badge: "SIMPLE COMO 1-2-3",
        how_title: "C\u00f3mo <span class=\"gradient-text\">funciona</span>",
        how_subtitle: "Sin apps. Sin dashboards. Solo tu mensajero.",
        how_step1_title: "Abre tu mensajero",
        how_step1_desc: "Telegram, WhatsApp, Slack o SMS. Usa lo que ya tienes.",
        how_step2_title: "Escr\u00edbele al bot",
        how_step2_desc: "Escribe, habla o env\u00eda una foto. Lenguaje natural \u2014 sin comandos.",
        how_step3_title: "\u00a1Listo!",
        how_step3_desc: "11 agentes IA enrutan tu solicitud autom\u00e1ticamente y lo resuelven todo.",

        // Agents
        agents_badge: "ECOSISTEMA",
        agents_title: "Tu equipo de <span class=\"gradient-text\">11 agentes IA</span>",
        agents_subtitle: "Cada agente se especializa en su \u00e1rea y comparte una memoria multinivel unificada.",
        agent_finance_desc: "Gastos, ingresos, presupuestos, pagos recurrentes",
        agent_analytics_desc: "Informes, gr\u00e1ficos, consultas complejas",
        agent_life_desc: "Estado de \u00e1nimo, comida, h\u00e1bitos, reflexiones",
        agent_calendar_desc: "Eventos, planificaci\u00f3n, res\u00famenes matutinos",
        agent_tasks_desc: "Tareas, recordatorios, listas de compras",
        agent_research_desc: "B\u00fasqueda web, mapas, YouTube, noticias",
        agent_writing_desc: "Borradores, traducci\u00f3n, generaci\u00f3n de im\u00e1genes",
        agent_email_desc: "Bandeja de entrada, respuestas, seguimientos, hilos",
        agent_booking_desc: "Citas de clientes, CRM, notificaciones",
        agent_browser_desc: "Automatizaci\u00f3n web, alertas de precios, monitoreo",
        agent_onboarding_desc: "Configuraci\u00f3n, preferencias, inicio",

        // Use Cases
        uc_badge: "CASOS DE USO",
        uc_title: "Creado para <span class=\"gradient-text\">tu</span> vida",
        uc_subtitle: "Ya sea que tengas un negocio o gestiones un hogar \u2014 te cubrimos.",
        uc1_title: "Aut\u00f3nomos y Peque\u00f1as Empresas",
        uc1_desc: "Registra gastos, escanea facturas, gestiona reservas de clientes y obt\u00e9n informes fiscales. Tu contador en un chat.",
        tag_invoice: "Facturas",
        tag_taxes: "Impuestos",
        uc2_title: "Presupuesto Familiar",
        uc2_desc: "Comparte una cuenta entre familiares. Cada uno registra sus gastos, el propietario ve todo el panorama.",
        tag_sync: "Sincronizaci\u00f3n",
        tag_list: "Listas de compras",
        uc3_title: "Camioneros y Conductores",
        uc3_desc: "Registra combustible, reparaciones y peajes por voz al conducir. Res\u00famenes para informes IFTA sin soltar el volante.",
        tag_voice: "Voz",
        uc4_title: "Para Todos",
        uc4_desc: "Automatiza tu rutina: registra comidas, pon recordatorios, gestiona correo, busca info y planifica tu d\u00eda con IA.",
        tag_life: "Seguimiento de Vida",
        tag_email: "Correo",
        tag_tasks: "Tareas",

        // Testimonials
        test_badge: "RESE\u00d1AS",
        test_title: "Amado por negocios <span class=\"gradient-text\">y familias</span>",
        test1_text: "\"Sol\u00eda pasar 2 horas en contabilidad. Ahora solo foto a los recibos y el bot hace todo.\"",
        test1_name: "David M.",
        test1_role: "Plomero, Queens NY",
        test2_text: "\"Mi esposo y yo por fin vemos a d\u00f3nde va nuestro dinero. El presupuesto familiar es un salvavidas.\"",
        test2_name: "Mar\u00eda S.",
        test2_role: "Mam\u00e1 de 3, Brooklyn",
        test3_text: "\"La entrada de voz al conducir cambi\u00f3 todo. Los informes IFTA son mucho m\u00e1s f\u00e1ciles ahora.\"",
        test3_name: "Mike T.",
        test3_role: "Camionero OTR",

        // Pricing
        pricing_title: "\u00bfListo para delegar el caos a <span class=\"gradient-text\">la IA</span>?",
        pricing_subtitle: "Una suscripci\u00f3n. Todas las funciones. Todos los canales.",
        pricing_period: "/mes",
        pricing_desc: "Acceso completo a todo. Sin l\u00edmites.",
        pricing_feat_1: "67 habilidades IA en 11 agentes",
        pricing_feat_2: "OCR de recibos y documentos",
        pricing_feat_3: "Entrada de voz en cualquier idioma",
        pricing_feat_4: "Leer, escribir y responder correos",
        pricing_feat_5: "Sincronizaci\u00f3n con Google Calendar",
        pricing_feat_6: "Res\u00famenes matutinos y vespertinos",
        pricing_feat_7: "CRM y reservas de clientes",
        pricing_feat_8: "Seguimiento de vida y h\u00e1bitos",
        pricing_feat_9: "Investigaci\u00f3n y b\u00fasqueda web",
        pricing_feat_10: "Alertas de precios y monitoreo de noticias",
        pricing_feat_11: "Acceso familiar y de equipo",
        pricing_feat_12: "Los 4 canales incluidos",
        pricing_btn: "Empezar en Telegram",
        pricing_cancel: "Cancela cuando quieras. Sin contratos.",

        // FAQ
        faq_badge: "PREGUNTAS",
        faq_title: "Preguntas <span class=\"gradient-text\">frecuentes</span>",
        faq_q1: "\u00bfQu\u00e9 es Finance AI Bot?",
        faq_a1: "Un asistente de vida con IA que funciona en tu mensajero. Gestiona finanzas, tareas, calendario, correo, CRM y m\u00e1s con 11 agentes IA especializados.",
        faq_q2: "\u00bfC\u00f3mo empiezo?",
        faq_a2: "Abre Telegram y busca @financeaibot. Env\u00eda cualquier mensaje para comenzar. La configuraci\u00f3n tarda menos de 2 minutos.",
        faq_q3: "\u00bfQu\u00e9 mensajeros soporta?",
        faq_a3: "Telegram (principal), WhatsApp, Slack y SMS. Una cuenta funciona en todos los canales.",
        faq_q4: "\u00bfQu\u00e9 idiomas entiende?",
        faq_a4: "Ingl\u00e9s, ruso y espa\u00f1ol para la interfaz. La entrada de voz funciona en m\u00e1s de 50 idiomas.",
        faq_q5: "\u00bfMis datos financieros est\u00e1n seguros?",
        faq_a5: "S\u00ed. Todos los datos est\u00e1n cifrados y protegidos con seguridad a nivel de filas. Nunca compartimos ni vendemos tus datos.",
        faq_q6: "\u00bfMi familia puede usar una cuenta?",
        faq_a6: "\u00a1S\u00ed! A\u00f1ade familiares a una cuenta compartida. Cada persona registra sus gastos y el propietario ve todo el panorama.",
        faq_q7: "\u00bfFunciona para negocios?",
        faq_a7: "Por supuesto. Registra gastos empresariales, gestiona reservas de clientes, env\u00eda correos y obt\u00e9n informes fiscales.",
        faq_q8: "\u00bfPuedo cancelar en cualquier momento?",
        faq_a8: "S\u00ed, cancela cuando quieras sin penalizaciones. Tus datos estar\u00e1n disponibles 30 d\u00edas despu\u00e9s de la cancelaci\u00f3n.",

        // Footer
        footer_tagline: "Tu asistente de vida con IA en cada mensajero.",
        footer_prod: "Producto",
        footer_res: "Recursos",
        footer_comp: "Compa\u00f1\u00eda",
        footer_about: "Sobre nosotros",
        footer_priv: "Pol\u00edtica de Privacidad",
        footer_terms: "T\u00e9rminos de Servicio",
        footer_sup: "Soporte",
        footer_copy: "\u00a9 2026 Finance AI. Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // Enable reveal animations only after JS is ready
    document.documentElement.classList.add('js-ready');

    /* ═══════════ Language System ═══════════ */
    const languageSelect = document.getElementById('language-select');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        // Persist to localStorage
        try { localStorage.setItem('financeai-lang', lang); } catch (e) {}
    }

    if (languageSelect) {
        // Restore saved language or default to 'en'
        let savedLang = 'en';
        try { savedLang = localStorage.getItem('financeai-lang') || 'en'; } catch (e) {}
        if (!translations[savedLang]) savedLang = 'en';

        languageSelect.value = savedLang;
        setLanguage(savedLang);

        languageSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    /* ═══════════ Navbar Scroll Effect ═══════════ */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }
    });

    /* ═══════════ Scroll Progress Bar ═══════════ */
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        if (scrollProgress) {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = progress + '%';
        }
    });

    /* ═══════════ Smooth Scroll for Anchor Links ═══════════ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburger = document.getElementById('hamburger');
                if (mobileMenu) mobileMenu.classList.remove('open');
                if (hamburger) hamburger.classList.remove('open');
            }
        });
    });

    /* ═══════════ Hamburger Menu ═══════════ */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
    }

    /* ═══════════ Scroll Reveal Animations ═══════════ */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Trigger for elements already in viewport
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    }, 100);

    /* ═══════════ Mouse Hover Glow on Cards ═══════════ */
    const glowCards = document.querySelectorAll('.hover-glow');
    document.addEventListener('mousemove', e => {
        for (const card of glowCards) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);

            const glowColor = card.getAttribute('data-glow-color');
            if (glowColor) card.style.setProperty('--mouse-color', glowColor);
        }
    });

    /* ═══════════ Chat Mockup Animation ═══════════ */
    function runChatDemo() {
        const chatBody = document.getElementById('chat-body');
        if (!chatBody) return;

        const messages = chatBody.querySelectorAll('.chat-msg');
        const typing = document.getElementById('typing-indicator');

        // Hide all messages initially
        messages.forEach(msg => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(12px)';
        });
        if (typing) typing.style.display = 'none';

        let delay = 600;
        messages.forEach((msg, i) => {
            const isBot = msg.classList.contains('msg-bot');

            if (isBot && typing) {
                // Show typing before bot message
                setTimeout(() => {
                    typing.style.display = 'flex';
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, delay);
                delay += 800;
            }

            setTimeout(() => {
                if (typing) typing.style.display = 'none';
                msg.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                msg.style.opacity = '1';
                msg.style.transform = 'translateY(0)';
                chatBody.scrollTop = chatBody.scrollHeight;
            }, delay);

            delay += isBot ? 1200 : 800;
        });

        // Show typing at the end as idle indicator
        setTimeout(() => {
            if (typing) typing.style.display = 'flex';
            chatBody.scrollTop = chatBody.scrollHeight;
        }, delay);
    }

    // Start chat demo when hero becomes visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runChatDemo();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        heroObserver.observe(heroSection);
    }

    /* ═══════════ Infinite Marquee ═══════════ */
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent && !marqueeContent.classList.contains('cloned')) {
        const clone = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clone + clone;
        marqueeContent.classList.add('cloned');

        const scrollWidth = marqueeContent.scrollWidth / 3;
        marqueeContent.animate([
            { transform: 'translateX(0)' },
            { transform: `translateX(-${scrollWidth}px)` }
        ], {
            duration: 20000,
            iterations: Infinity,
            easing: 'linear'
        });
    }

    /* ═══════════ Animated Counters ═══════════ */
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = +target.getAttribute('data-target');
                const increment = targetValue / 50;
                let current = 0;

                const updateCount = () => {
                    current += increment;
                    if (current < targetValue) {
                        target.innerText = Math.ceil(current);
                        setTimeout(updateCount, 20);
                    } else {
                        target.innerText = targetValue;
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    /* ═══════════ FAQ Accordion ═══════════ */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                // Close all FAQ items
                faqItems.forEach(other => other.classList.remove('open'));

                // Toggle current
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        }
    });

});
