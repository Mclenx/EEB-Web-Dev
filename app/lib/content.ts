
const en = {
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
    products: "Products",
    themeToggle: {
      light: "Light",
      dark: "Dark",
    },
  },

  hero: {
    badge: "For local service businesses",
    headline:
      "I help local service businesses turn missed online opportunities into real clients.",
    subtext:
      "Using custom tools and proven systems, I identify where your website is missing opportunities — and turn that into visibility, trust, and consistent leads.\n\nBuilt for service businesses that want to grow without guessing what’s holding them back.",
    ctaPrimary: "Let’s take a look at your site",
    ctaSecondary: "View recent work",
    terminalLines: [
      "scanning website...",
      "checking visibility...",
      "identifying missed opportunities...",
      "optimizing for conversions...",
      "generating leads...",
      "done.",
    ],
    stats: [
      { value: "Custom", label: "Built around real business needs" },
      { value: "Clear", label: "Focused on trust and conversion" },
      { value: "Practical", label: "Simple systems that support growth" },
    ],
  },

  work: {
    title: "Selected work",
    subtitle:
      "A mix of client work, systems, and tools built to improve visibility, trust, and lead generation for service businesses.",

    expandLabel: "View details",
    collapseLabel: "Hide details",

    cryoair: {
      title: "Cryo-Air",
      desc: "A service-business website focused on clarity, trust, and lead generation for a local HVAC company.",
      meta: "Client project",
      footer: "Shopify / Liquid",
      details: {
        problem:
          "The business needed a clearer online presence that better communicated its services and felt more trustworthy to potential customers.",
        solution:
          "I designed and built a more structured experience focused on clarity, cleaner messaging, and stronger presentation of the company’s services.",
        context:
          "This project reflects my approach to service-business websites: reduce friction, improve trust, and make it easier for visitors to become leads.",
      },
      caseTitle: "Cryo-Air case study",
      p1: "Cryo-Air was built to give a local HVAC business a more credible and conversion-focused online presence. The goal was to improve clarity, simplify navigation, and better communicate the company’s services.",
      p2: "The work focused on creating a cleaner structure, stronger trust signals, and a more polished visual presentation so potential clients could quickly understand the offer and feel confident reaching out.",
      shotCaption: "Service and product presentation designed to feel clearer and more structured.",
      roleLabel: "Role",
      roleText: "Strategy, design, development",
      toolsLabel: "Tools",
      toolsText: "Shopify, Liquid, frontend customization",
      resultLabel: "Focus",
      resultText: "Clarity, trust, and stronger lead potential",
      statusLabel: "Status",
      statusText: "Completed client project",
      approachTitle: "Approach",
      approachP:
        "The project was approached as more than a visual redesign. The structure, hierarchy, and messaging were shaped to help visitors understand the business quickly and move toward contact with less friction.",
      approachNote:
        "The goal was not complexity — it was clarity that supports trust and action.",
      close: "Close case study",
    },

    systemkit: {
      title: "Website System Kit",
      desc: "A reusable website framework built to launch fast, SEO-ready service business websites with strong foundations for conversion and clarity.",
      meta: "Internal system",
      footer: "Next.js / reusable architecture",
      details: {
        problem:
          "Building every local business website from scratch slows delivery and makes consistency harder to maintain.",
        solution:
          "I created a reusable framework with strong defaults for structure, content flow, SEO foundations, and conversion-focused layout.",
        context:
          "It helps me launch faster while keeping quality high — especially for service businesses that need clarity and trust more than unnecessary complexity.",
      },
    },

    leadgen: {
      title: "LeadGenEngine",
      desc: "A custom outreach intelligence tool that identifies high-potential business opportunities by analyzing site weaknesses and missed conversion opportunities.",
      meta: "Custom internal tool",
      footer: "Prospecting / scoring / opportunity analysis",
      details: {
        problem:
          "Finding strong outreach targets manually is slow and often inconsistent.",
        solution:
          "This tool helps surface businesses with meaningful website weaknesses and missed conversion opportunities, making outreach more focused and valuable.",
        context:
          "It supports a more strategic prospecting process by prioritizing businesses where improvements are likely to have a real business impact.",
      },
    },

    seoAuditor: {
      title: "SEO Auditor",
      desc: "A lightweight audit tool that evaluates technical SEO fundamentals and highlights actionable improvements.",
      meta: "Custom internal tool",
      footer: "SEO / auditing / actionable insights",
      details: {
        problem:
          "Many small business sites underperform because technical fundamentals are weak, but the issues are often hidden or ignored.",
        solution:
          "I built a simple auditing tool to review core technical SEO elements and surface practical improvements worth addressing.",
        context:
          "It’s designed to make technical issues easier to understand and more useful in real business conversations.",
      },
    },

    detailLabels: {
      problem: "Problem",
      solution: "Solution",
      context: "Context",
    },
  },

  products: {
    title: "Products",
    subtitle:
      "Digital kits and tools I’m building to help small businesses launch faster.",
    back: "Back",


    kitV1: {
      badge: "Website kit",
      title: "Website System Kit v1",
      desc: "A clean, modern starter kit for service businesses — built to launch fast and expand later.",
      meta: "Kit • Next.js / Tailwind",
      cta: "View",
      pageTitle: "Website System Kit v1",
      pageDesc:
        "A clean, modern website starter kit built to launch fast — with room to expand.",
      demoCta: "Preview demo",
      buyCta: "Buy on Gumroad",
      microNote: "Full details, license, and download are on Gumroad.",

      links: {
        demo: "https://website-system-v1.pages.dev",
        gumroad: "https://boisvert28.gumroad.com/l/zznun",
      },
    },

    mvp1: {
      badge: "Tool (soon)",
      title: "MVP1 — SEO Scoring",
      desc: "An upcoming tool that evaluates websites using real SEO and performance signals.",
      meta: "Coming soon",
      cta: "Coming soon",
      previewNote: "Preview coming soon",
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
};

export type TContent = typeof en;

const fr: TContent = {
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
    products: "Produits",
    themeToggle: {
      light: "Clair",
      dark: "Sombre",
    },
  },

  hero: {
    badge: "Pour les entreprises locales de services",
    headline:
      "J’aide les entreprises locales de services à transformer les opportunités manquées en vrais clients.",
    subtext:
      "Grâce à des outils sur mesure et des systèmes éprouvés, j’identifie où votre site manque des opportunités — et je les transforme en visibilité, crédibilité et nouveaux clients.\n\nConçu pour les entreprises de services qui veulent croître sans deviner ce qui les freine.",
    ctaPrimary: "Jetons un coup d’œil à votre site",
    ctaSecondary: "Voir les projets",
    terminalLines: [
      "scanning website...",
      "checking visibility...",
      "identifying missed opportunities...",
      "optimizing for conversions...",
      "generating leads...",
      "done.",
    ],
    stats: [
      { value: "Sur mesure", label: "Pensé selon de vrais besoins d’affaires" },
      { value: "Clair", label: "Axé sur la crédibilité et la conversion" },
      { value: "Concret", label: "Des systèmes simples pour soutenir la croissance" },
    ],
  },


  work: {
    title: "Projets sélectionnés",
    subtitle:
      "Un mélange de projets clients, de systèmes et d’outils conçus pour améliorer la visibilité, la crédibilité et la génération de clients pour les entreprises de services.",

    expandLabel: "Voir les détails",
    collapseLabel: "Masquer les détails",

    cryoair: {
      title: "Cryo-Air",
      desc: "Un site web pour une entreprise de services HVAC, axé sur la clarté, la crédibilité et la génération de clients.",
      meta: "Projet client",
      footer: "Shopify / Liquid",
      details: {
        problem:
          "L’entreprise avait besoin d’une présence web plus claire, capable de mieux expliquer ses services et d’inspirer davantage confiance aux clients potentiels.",
        solution:
          "J’ai conçu et développé une expérience plus structurée, avec un message plus clair et une meilleure mise en valeur des services.",
        context:
          "Ce projet reflète mon approche pour les sites d’entreprises de services : réduire la friction, renforcer la crédibilité et faciliter la prise de contact.",
      },
      caseTitle: "Étude de cas Cryo-Air",
      p1: "Cryo-Air a été conçu pour offrir à une entreprise locale en HVAC une présence en ligne plus crédible et mieux orientée vers la conversion. L’objectif était d’améliorer la clarté, de simplifier la navigation et de mieux présenter les services de l’entreprise.",
      p2: "Le travail visait à créer une structure plus propre, à renforcer les signaux de confiance et à offrir une présentation visuelle plus soignée afin que les clients potentiels comprennent rapidement l’offre et se sentent en confiance pour communiquer avec l’entreprise.",
      shotCaption:
        "Présentation des services et produits pensée pour être plus claire et mieux structurée.",
      roleLabel: "Rôle",
      roleText: "Stratégie, design, développement",
      toolsLabel: "Outils",
      toolsText: "Shopify, Liquid, personnalisation frontend",
      resultLabel: "Objectif",
      resultText: "Clarté, crédibilité et meilleur potentiel de conversion",
      statusLabel: "Statut",
      statusText: "Projet client complété",
      approachTitle: "Approche",
      approachP:
        "Le projet a été pensé comme plus qu’une refonte visuelle. La structure, la hiérarchie et le message ont été travaillés pour aider les visiteurs à comprendre rapidement l’entreprise et à passer plus facilement à l’action.",
      approachNote:
        "L’objectif n’était pas la complexité — mais une clarté qui soutient la confiance et l’action.",
      close: "Fermer l’étude de cas",
    },

    systemkit: {
      title: "Website System Kit",
      desc: "Un framework de site web réutilisable conçu pour lancer rapidement des sites de services optimisés SEO, avec des bases solides pour la conversion et la clarté.",
      meta: "Système interne",
      footer: "Next.js / architecture réutilisable",
      details: {
        problem:
          "Créer chaque site d’entreprise locale à partir de zéro ralentit la livraison et rend la constance plus difficile à maintenir.",
        solution:
          "J’ai créé un framework réutilisable avec de bonnes bases pour la structure, le contenu, le SEO et une mise en page pensée pour la conversion.",
        context:
          "Ça me permet de lancer plus vite tout en gardant une bonne qualité — surtout pour les entreprises de services qui ont besoin de clarté et de crédibilité plutôt que de complexité inutile.",
      },
    },

    leadgen: {
      title: "LeadGenEngine",
      desc: "Un outil d’intelligence pour la prospection qui identifie les meilleures opportunités en analysant les faiblesses des sites et les conversions manquées.",
      meta: "Outil interne personnalisé",
      footer: "Prospection / scoring / analyse d’opportunité",
      details: {
        problem:
          "Trouver manuellement de bonnes cibles pour la prospection prend du temps et manque souvent de constance.",
        solution:
          "Cet outil aide à repérer les entreprises dont le site présente de vraies faiblesses et des occasions perdues de conversion, pour rendre la prospection plus ciblée et plus pertinente.",
        context:
          "Il soutient une approche plus stratégique en priorisant les entreprises où des améliorations peuvent réellement avoir un impact d’affaires.",
      },
    },

    seoAuditor: {
      title: "SEO Auditor",
      desc: "Un outil d’audit léger qui évalue les bases du SEO technique et met en lumière des améliorations concrètes.",
      meta: "Outil interne personnalisé",
      footer: "SEO / audit / pistes concrètes",
      details: {
        problem:
          "Beaucoup de sites de petites entreprises performent mal parce que leurs bases techniques sont faibles, sans que ce soit toujours évident.",
        solution:
          "J’ai créé un outil simple pour évaluer les éléments clés du SEO technique et faire ressortir les améliorations les plus utiles.",
        context:
          "Il est conçu pour rendre les problèmes techniques plus faciles à comprendre et plus utiles dans de vraies discussions d’affaires.",
      },
    },
    detailLabels: {
      problem: "Problème",
      solution: "Solution",
      context: "Contexte",
    },
  },



  products: {
    title: "Produits",
    subtitle:
      "Kits et outils numériques que je construis pour aider les petites entreprises à lancer plus vite.",
    back: "Retour",

    kitV1: {
      badge: "Kit web",
      title: "Website System Kit v1",
      desc: "Un kit de départ propre et moderne pour entreprises de service — conçu pour lancer vite et évoluer ensuite.",
      meta: "Kit • Next.js / Tailwind",
      cta: "Voir",
      pageTitle: "Website System Kit v1",
      pageDesc:
        "Un kit de départ propre et moderne, conçu pour lancer vite — avec de la marge pour évoluer.",
      demoCta: "Voir la démo",
      buyCta: "Acheter sur Gumroad",
      microNote:
        "Tous les détails, la licence et le téléchargement sont sur Gumroad.",

      links: {
        demo: "https://website-system-v1.pages.dev",
        gumroad: "https://boisvert28.gumroad.com/l/zznun",
      },
    },

    mvp1: {
      badge: "Outil (bientôt)",
      title: "MVP1 — Score SEO",
      desc: "Un outil à venir pour évaluer des sites selon des signaux SEO et performance.",
      meta: "Bientôt disponible",
      cta: "Bientôt disponible",
      previewNote: "Aperçu bientôt disponible",
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
};


export const content = { en, fr } as const;
