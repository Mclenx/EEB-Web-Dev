export const content = {
  en: {
    leadFlow: {
      title: "Lead flow",
      badge: "Demo system",
      nodes: {
        visitor: { title: "Visitor", subtitle: "Google / Maps" },
        landing: { title: "Landing page", subtitle: "Single page" },
        form: { title: "Form submit", subtitle: "Intent captured" },
        inbox: { title: "Inbox / CRM", subtitle: "Email / Notion" },
      },
      note: "Built to reduce friction: clear offer → fast contact → organized follow-up.",
    },

    servicePanel: {
      header: "SERVICE DETAIL",
      preview: "PREVIEW",
    },
    serviceDetails: {
      websites: {
        title: "Website design & development",
        description:
          "Full websites from wireframe to deployment. Clean layouts, clear structure, and responsive design that works on phone, tablet, and desktop.",
        tag: "Core service",
        visual:
          "Clean homepage layout with clear sections and a strong call-to-action.",
      },
      "service-businesses": {
        title: "Sites for service businesses",
        description:
          "Ideal for repair shops, trades, and local providers. Clear services, pricing, FAQs, and contact flow that helps new clients trust you quickly.",
        tag: "For local pros",
        visual:
          "Services listed with pricing and a simple “Request a quote” button.",
      },
      bilingual: {
        title: "Bilingual websites (EN / FR)",
        description:
          "Content and layout that feel natural in both English and French. Great for Québec and Canadian markets that expect both languages.",
        tag: "Québec-ready",
        visual:
          "Language toggle and EN / FR sections that keep the layout consistent.",
      },
      seo: {
        title: "SEO & performance",
        description:
          "Technical SEO best practices, meta tags, clean HTML structure, and performance tuning so your site is fast and discoverable.",
        tag: "Visibility",
        visual:
          "SEO score, page speed metrics, and clean search result previews.",
      },
      photography: {
        title: "Photography & visuals",
        description:
          "Basic product and detail shots plus light editing to make your work look good on the site. Especially helpful for artisans and repair work.",
        tag: "Visual support",
        visual:
          "Grid of product photos and detail close-ups that highlight your work.",
      },
      automation: {
        title: "Simple automations & workflows",
        description:
          "Forms that send straight to your email, Notion, or tools like n8n. Reduce manual follow-up and keep leads organized automatically.",
        tag: "Workflow",
        visual:
          "Contact form on one side and inbox / Notion cards updating on the other.",
      },
    },

    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Get a website",
    },

    hero: {
      badge: "Montréal • Bilingual • Remote-ready",
      headline:
        "I design and build modern, bilingual websites that help small businesses grow.",
      subtext:
        "From planning to final development, I handle the entire process — so you don’t have to juggle multiple vendors.",
      personal:
        "I’m Eric (EEB Web Dev). I work with jewelers, service providers, and local shops to create fast, modern websites that feel premium, clear, and easy to use.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View recent work",
      stats: [
        { value: "5+ yrs", label: "Web experience" },
        { value: "EN / FR", label: "Bilingual content" },
        { value: "End-to-end", label: "Design → Development" },
      ],
      nextProject: {
        label: "Next project in progress:",
        title: "OTA Watch & Jewelry — website redesign",
        desc: "Family-owned watch & jewelry repair shop. Designing a Swiss-inspired bilingual site to help clients understand the repair process and submit online inquiries.",
        bullets: [
          "Status: Content collection",
          "Pages: Home, About, Watch Repair, Custom Jewelry, Contact",
          "Stack: Next.js, Tailwind, image gallery, EN/FR",
        ],
        note: "*This is an in-progress client project. I keep projects moving even when client content is delayed. I take on a limited number of projects to keep quality and communication high.",
      },
    },

    work: {
      title: "Selected work",
      subtitle:
        "Real client project + concept demos that show how I design for service businesses.",

      ota: {
        badge: "Flagship — in progress",
        note: "Visual prototype begins after new photo session.",
        title: "OTA Watch & Jewelry (in progress)",
        desc: "Bilingual multi-page site for a 64-year-old jewelry & watch repair business in Montréal.",
        meta: "Project planning, service structure, bilingual content, and site architecture.",
        footer: "Design planning in progress • Next.js / Tailwind",
      },

      leadgen: {
        title: "Service Business Lead Capture (Demo)",
        desc: "Conversion-focused single-page site concept for HVAC, electrician, and repair businesses.",
        meta: "Hero, services, testimonials, contact-to-WhatsApp.",
        footer: "React / Tailwind",
      },

      scoring: {
        label: "Concept demo",
        title: "Website Performance Scoring (Concept)",
        desc: "Concept for an automated website evaluation system inspired by real SEO and performance signals used by search engines. Initially explored as a Shopify app, paused during API integration.",
        meta: "Planned with Next.js API routes + PostgreSQL.",
        footer: "SaaS-oriented architecture exploration",
        loopLabel: "Evaluation Index",
        loopCaption:
          "Concept demo exploring automated website evaluation signals.",
      },

      cryoair: {
        title: "Cryo-Air HVAC — Shopify Website",
        desc: "Shopify storefront for an HVAC repair business so clients can order air filters online instead of calling during service hours.",
        meta: "Theme customization, product catalogue setup, services structure.",
        caseTitle: "Cryo-Air HVAC — Project Overview",
        p1: "Cryo-Air is a Montréal HVAC repair service owned by Andrew, a technician I’ve relied on personally for emergency heating issues. He needed a website that allowed customers to buy air filters online so he could reduce manual orders and focus on service calls.",
        p2: "We chose Shopify to keep things simple and low-maintenance. I worked within the constraints of the theme system, customized the layout, created product options, and organized the content. Much of the project timeline was determined by slow content delivery, but I kept the structure moving and ensured the final setup was clean and functional.",
        shotCaption:
          "Product catalog that lets customers order filters online instead of calling during service hours.",
        roleLabel: "Role",
        roleText:
          "Shopify setup, theme customization, layout design, product catalog",
        toolsLabel: "Tools",
        toolsText: "Shopify, Liquid, theme sections",
        resultLabel: "Result",
        resultText:
          "Customers can order filters directly online instead of calling Andrew while he’s on HVAC jobs.",
        statusLabel: "Status",
        statusText: "Live & operational",
        approachTitle: "How I’d approach this project today",
        approachP:
          "Since shipping this Shopify build, my design and UX skills have improved a lot. If I were rebuilding Cryo-Air today, I’d create a more custom layout with clearer service storytelling, stronger visuals, and a faster, more focused booking flow.",
        approachNote:
          "I’m currently sketching a modern concept redesign for this project that reflects my current design standards. Once it’s ready, I’ll link the live demo here.",
        viewOverview: "View project overview",
        hideDetails: "Hide details",
      },
    },

    services: {
      title: "Services",
      hint: "Hover or tap the highlighted terms to see more details.",
      p1a: "I design and build",
      p1b: "that feel clean and modern, tailored for",
      p1c: ", artisans, and local shops. I can structure and adapt your",
      p1d: "in English and French, take care of",
      p1e: ", and even help with",
      p1f: "when needed.",
      p2a: "For owners who want things to “just work”, I also set up simple",
      p2b: "so form submissions go straight to your email, Notion, or other tools you use every day.",
      words: {
        websites: "websites",
        serviceBusinesses: "service businesses",
        bilingual: "bilingual content",
        seo: "SEO & performance",
        photography: "basic photography & visuals",
        automation: "automations",
      },
    },

    about: {
      title: "About",
      text: "I’m Eric, a Montréal-based developer and photographer. I help small businesses modernize their online presence, especially when the content isn’t ready yet. I’m used to working with busy owners — I structure the project, send gentle reminders, and keep momentum as we build the site step by step. I don’t disappear after launch; I stay available to help update, adjust, and grow your site as your business evolves. For many businesses, that starts with a simple, well-structured single-page site — something clean, fast, and professional that can go live quickly and improve credibility right away.",
    },

    contact: {
      title: "Let’s talk about your website",
      subtitle:
        "Tell me a bit about your business and what you’re looking for — I’ll follow up with a rough timeline and pricing.",
      name: "Your name",
      email: "Email",
      message:
        "What kind of site are you thinking about? (new site, redesign, bilingual, SEO…)",
      send: "Get in touch",
      note: "Simple one-page websites are available if you need to get online quickly — no long-term commitment required.",
      availability: "EN / FR available",
      sending: "Sending…",
      sent: "Message sent — I’ll reply personally soon.",
      errorFallback: "Something went wrong — please try again later.",
    },
  },

  fr: {
    leadFlow: {
      title: "Flux de prospects",
      badge: "Système démo",
      nodes: {
        visitor: { title: "Visiteur", subtitle: "Google / Maps" },
        landing: { title: "Page d’atterrissage", subtitle: "Une page" },
        form: { title: "Formulaire", subtitle: "Intention captée" },
        inbox: { title: "Boîte / CRM", subtitle: "Courriel / Notion" },
      },
      note: "Conçu pour réduire la friction : offre claire → contact rapide → suivi organisé.",
    },

    servicePanel: {
      header: "DÉTAIL DU SERVICE",
      preview: "APERÇU",
    },
    serviceDetails: {
      websites: {
        title: "Conception & développement web",
        description:
          "Sites complets du wireframe au déploiement. Mise en page propre, structure claire et design responsive (mobile, tablette, ordinateur).",
        tag: "Service principal",
        visual:
          "Mise en page claire avec sections nettes et appel à l’action fort.",
      },
      "service-businesses": {
        title: "Sites pour entreprises de service",
        description:
          "Idéal pour ateliers, métiers et services locaux. Services clairs, prix, informations utiles et parcours de contact simple pour inspirer confiance.",
        tag: "Pour les pros",
        visual: "Services avec prix et bouton “Demander un devis”.",
      },
      bilingual: {
        title: "Sites bilingues (EN / FR)",
        description:
          "Contenu et mise en page naturels en anglais et en français. Parfait pour le Québec et les marchés canadiens.",
        tag: "Prêt pour le Québec",
        visual: "Basculer EN/FR tout en gardant une mise en page cohérente.",
      },
      seo: {
        title: "SEO & performance",
        description:
          "Bonnes pratiques SEO techniques, balises meta, structure HTML propre et optimisation des performances pour un site rapide et trouvable.",
        tag: "Visibilité",
        visual: "Mesures de vitesse, signaux SEO et aperçus de résultats.",
      },
      photography: {
        title: "Photographie & visuels",
        description:
          "Photos simples (produits/détails) et retouches légères pour mettre votre travail en valeur sur le site.",
        tag: "Support visuel",
        visual: "Grille de photos produits et gros plans de détails.",
      },
      automation: {
        title: "Automatisations simples",
        description:
          "Formulaires qui envoient vers votre courriel, Notion ou n8n. Moins de suivi manuel, leads mieux organisés automatiquement.",
        tag: "Flux de travail",
        visual: "Formulaire → courriel/Notion mis à jour automatiquement.",
      },
    },

    nav: {
      work: "Réalisations",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      cta: "Créer mon site",
    },

    hero: {
      badge: "Montréal • Bilingue • À distance",
      headline:
        "Je conçois et développe des sites web modernes et bilingues qui aident les petites entreprises à grandir.",
      subtext:
        "Du plan initial au développement final, je m’occupe de tout le processus — sans que vous ayez à coordonner plusieurs intervenants.",
      personal:
        "Je m’appelle Eric (EEB Web Dev). J’aide les bijoutiers, entreprises de service et commerces locaux à obtenir un site rapide, moderne, clair et simple à utiliser.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir mes projets",
      stats: [
        { value: "5+ ans", label: "Expérience web" },
        { value: "EN / FR", label: "Contenu bilingue" },
        { value: "De A à Z", label: "Design → Développement" },
      ],
      nextProject: {
        label: "Prochain projet en cours :",
        title: "OTA Watch & Jewelry — refonte du site",
        desc: "Entreprise familiale de réparation de montres et bijoux. Conception d’un site bilingue d’inspiration suisse pour expliquer le processus de réparation et permettre les demandes en ligne.",
        bullets: [
          "Statut : Collecte de contenu",
          "Pages : Accueil, À propos, Réparation de montres, Bijoux sur mesure, Contact",
          "Stack : Next.js, Tailwind, galerie d’images, EN/FR",
        ],
        note: "*Il s’agit d’un projet client en cours. Je fais avancer les projets même lorsque le contenu prend du temps à arriver. Je travaille avec un nombre limité de clients afin d’assurer un suivi et une qualité élevés.",
      },
    },

    work: {
      title: "Projets sélectionnés",
      subtitle:
        "Projet client réel + démos conceptuelles qui montrent ma façon de concevoir pour les entreprises de service.",

      ota: {
        badge: "Projet phare — en cours",
        note: "Le prototype visuel commencera après la prochaine séance photo.",
        title: "OTA Watch & Jewelry (en cours)",
        desc: "Site bilingue multi-pages pour une entreprise de réparation de bijoux et de montres à Montréal, établie depuis 64 ans.",
        meta: "Planification, structure des services, contenu bilingue et architecture du site.",
        footer: "Planification en cours • Next.js / Tailwind",
      },

      leadgen: {
        title: "Capture de prospects (Démo)",
        desc: "Concept de site une page axé conversion pour HVAC, électriciens et entreprises de réparation.",
        meta: "Héros, services, témoignages, contact vers WhatsApp.",
        footer: "React / Tailwind",
      },

      scoring: {
        label: "Démo concept",
        title: "Évaluation de performance (Concept)",
        desc: "Concept d’un système automatisé d’évaluation inspiré de signaux SEO et performance utilisés par les moteurs de recherche. D’abord exploré comme app Shopify, mis en pause lors de l’intégration API.",
        meta: "Prévu avec Next.js (API routes) + PostgreSQL.",
        footer: "Exploration d’architecture SaaS",
        loopLabel: "Indice d’évaluation",
        loopCaption:
          "Démo concept explorant des signaux d’évaluation automatisée de sites.",
      },

      cryoair: {
        title: "Cryo-Air HVAC — Site Shopify",
        desc: "Boutique Shopify pour une entreprise HVAC afin que les clients puissent commander des filtres en ligne au lieu d’appeler pendant les heures de service.",
        meta: "Personnalisation du thème, catalogue produits, structure des services.",
        caseTitle: "Cryo-Air HVAC — Résumé du projet",
        p1: "Cryo-Air est un service HVAC à Montréal, géré par Andrew, un technicien sur qui j’ai déjà compté lors d’urgences de chauffage. Il avait besoin d’un site permettant aux clients d’acheter des filtres en ligne afin de réduire les commandes manuelles et se concentrer sur les appels de service.",
        p2: "Nous avons choisi Shopify pour garder l’entretien simple. J’ai travaillé dans les limites du système de thèmes, ajusté la mise en page, créé des options produits et organisé le contenu. Une partie du délai dépendait du contenu, mais j’ai maintenu l’avancement et livré une configuration propre et fonctionnelle.",
        shotCaption:
          "Catalogue produit permettant de commander en ligne au lieu d’appeler pendant les heures de service.",
        roleLabel: "Rôle",
        roleText:
          "Configuration Shopify, personnalisation du thème, design de mise en page, catalogue produits",
        toolsLabel: "Outils",
        toolsText: "Shopify, Liquid, sections de thème",
        resultLabel: "Résultat",
        resultText:
          "Les clients peuvent commander des filtres en ligne au lieu d’appeler Andrew lorsqu’il est sur un chantier.",
        statusLabel: "Statut",
        statusText: "En ligne et opérationnel",
        approachTitle: "Comment je le referais aujourd’hui",
        approachP:
          "Depuis ce projet, mes compétences en design et UX ont beaucoup progressé. Si je reconstruisais Cryo-Air aujourd’hui, je ferais une mise en page plus sur mesure, avec une histoire de services plus claire, de meilleurs visuels et un parcours de prise de contact plus direct.",
        approachNote:
          "Je prépare actuellement un concept redesign moderne qui reflète mon niveau actuel. Quand il sera prêt, je l’ajouterai ici.",
        viewOverview: "Voir l’aperçu du projet",
        hideDetails: "Masquer les détails",
      },
    },

    services: {
      title: "Services",
      hint: "Survolez ou touchez les termes pour voir plus de détails.",
      p1a: "Je conçois et développe des",
      p1b: "propres et modernes, adaptées aux",
      p1c: ", artisans et commerces locaux. Je peux structurer et adapter votre",
      p1d: "en anglais et en français, m’occuper du",
      p1e: ", et même aider avec",
      p1f: "si nécessaire.",
      p2a: "Pour les propriétaires qui veulent que tout “fonctionne simplement”, je peux aussi mettre en place des",
      p2b: "afin que les formulaires arrivent directement par courriel, dans Notion ou vos outils du quotidien.",
      words: {
        websites: "sites web",
        serviceBusinesses: "entreprises de service",
        bilingual: "contenu bilingue",
        seo: "SEO et performance",
        photography: "photographie et visuels",
        automation: "automatisations",
      },
    },

    about: {
      title: "À propos",
      text: "Je m’appelle Eric, développeur et photographe basé à Montréal. J’aide les petites entreprises à moderniser leur présence en ligne, surtout lorsque le contenu n’est pas prêt. Je suis habitué aux propriétaires occupés — je structure le projet, envoie des rappels légers et garde l’élan pendant qu’on construit le site étape par étape. Après la mise en ligne, je reste disponible pour mettre à jour, ajuster et faire évoluer votre site au rythme de votre entreprise. Souvent, ça commence par un site une page simple et bien structuré — propre, rapide et professionnel — qui peut être en ligne rapidement et améliorer la crédibilité immédiatement.",
    },

    contact: {
      title: "Parlons de votre site web",
      subtitle:
        "Parlez-moi brièvement de votre entreprise et de vos besoins — je vous répondrai avec un délai approximatif et une estimation.",
      name: "Votre nom",
      email: "Courriel",
      message:
        "Quel type de site envisagez-vous? (nouveau site, refonte, bilingue, SEO…)",
      send: "Me contacter",
      note: "Sites une page disponibles pour les entreprises qui veulent être en ligne rapidement.",
      availability: "EN / FR disponible",
      sending: "Envoi en cours…",
      sent: "Message envoyé — je vous répondrai personnellement sous peu.",
      errorFallback: "Un problème est survenu — veuillez réessayer plus tard.",
    },
  },
} as const;
