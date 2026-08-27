
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

  accessibility: {
    backToTop: "Back to top",
    toggleMenu: "Toggle menu",
    toggleTheme: "Toggle theme",
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
    headline: "Websites built for clarity, trust, and better lead flow.",
    intro:
      "I design and build websites for service businesses that need more than a good-looking layout. Each project is structured to guide visitors clearly, present the business with confidence, and make it easier to turn traffic into real inquiries.",
    hint: "Hover or tap a service to preview how it can take shape on a real project.",
    items: {
      webDesign: {
        title: "Web design & development",
        description:
          "Clean, responsive websites built around structure, usability, and presentation.",
        tag: "Core service",
        showcaseTitle: "Web design & development",
        showcaseText:
          "Clear layout, strong visual hierarchy, and responsive structure built to guide visitors toward action.",
      },
      bilingual: {
        title: "Bilingual content integration",
        description:
          "English and French content adapted for a clear, consistent experience.",
        tag: "Language-ready",
        showcaseTitle: "Bilingual content integration",
        showcaseText:
          "English and French content planned to feel natural, consistent, and easy to navigate across the full site.",
      },
      seoPerformance: {
        title: "SEO & performance foundations",
        description:
          "Fast-loading pages and strong technical basics that support visibility online.",
        tag: "Foundations",
        showcaseTitle: "SEO & performance foundations",
        showcaseText:
          "Fast pages, clean structure, and technical essentials that support visibility and usability.",
      },
      automation: {
        title: "Automation & lead flow",
        description:
          "Forms and workflows connected to the tools you already use every day.",
        tag: "Workflow",
        showcaseTitle: "Automation & lead flow",
        showcaseText:
          "Form submissions routed cleanly into email, Notion, or other tools so inquiries are easier to manage.",
      },
      visualDirection: {
        title: "Visual direction",
        description:
          "Photography, layout, and presentation choices that strengthen trust.",
        tag: "Presentation",
        showcaseTitle: "Visual direction",
        showcaseText:
          "Photography, layout, and supporting visuals shaped to make the business feel more polished and trustworthy.",
      },
    },
    labels: {
      preview: "Preview",
      activeView: "Active view",
      focus: "Focus",
      structure: "Structure",
      outcome: "Outcome",
    },
    details: {
      structure:
        "Clear hierarchy, cleaner flow, and stronger presentation.",
      outcome:
        "A site that feels more intentional and easier to act on.",
    },
  },

  about: {
    eyebrow: "ABOUT",
    title: "EEB Web Dev",
    headline:
      "A practical web partner for businesses that need clarity—not unnecessary complexity.",
    intro: [
      "EEB Web Dev helps small businesses and service-based companies build a clearer, more credible presence online. Each project is shaped around the business itself: its priorities, customers, budget, and the way work actually gets done.",
      "That might mean a focused website, a bilingual experience, stronger visual presentation, or simple systems that make inquiries easier to manage. The goal isn’t to add complexity. It’s to create something useful, understandable, and ready to grow with the business.",
    ],
    principles: [
      {
        title: "Practical recommendations",
        text: "Every feature should earn its place. Decisions are guided by what will genuinely help the business, rather than adding technology for its own sake.",
      },
      {
        title: "Direct collaboration",
        text: "You work directly with the person planning, designing, and building the project. Communication stays clear, personal, and easy to follow.",
      },
      {
        title: "Support beyond launch",
        text: "A website’s needs can change as the business evolves. EEB Web Dev remains available for adjustments, continued improvements, and future growth.",
      },
    ],
    founder:
      "EEB Web Dev is independently run by Eric Boisvert, a Montréal-based developer and photographer. The work combines technical development, visual judgment, and a practical understanding of the realities small businesses face.",
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

  accessibility: {
    backToTop: "Retour en haut",
    toggleMenu: "Ouvrir ou fermer le menu",
    toggleTheme: "Changer le thème",
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
    headline:
      "Des sites conçus pour inspirer confiance, guider clairement, et générer plus de demandes.",
    intro:
      "Je conçois des sites web pour les entreprises de service qui ont besoin de plus qu’une belle apparence. Chaque projet est structuré pour guider les visiteurs clairement, bien présenter l’entreprise, et faciliter le passage entre la visite et la prise de contact.",
    hint: "Survolez ou touchez un service pour voir un aperçu plus concret.",
    items: {
      webDesign: {
        title: "Conception & développement web",
        description:
          "Des sites propres, responsive et pensés autour de la structure, de la clarté et de la présentation.",
        tag: "Service principal",
        showcaseTitle: "Conception & développement web",
        showcaseText:
          "Une mise en page claire, une hiérarchie visuelle solide, et une structure responsive pensée pour guider vers l’action.",
      },
      bilingual: {
        title: "Intégration de contenu bilingue",
        description:
          "Un contenu anglais et français adapté pour une expérience claire, cohérente et naturelle.",
        tag: "Bilingue",
        showcaseTitle: "Intégration de contenu bilingue",
        showcaseText:
          "Un contenu anglais et français organisé pour rester naturel, cohérent et simple à parcourir.",
      },
      seoPerformance: {
        title: "Bases SEO & performance",
        description:
          "Des pages rapides et des fondations techniques solides pour mieux soutenir la visibilité en ligne.",
        tag: "Fondations",
        showcaseTitle: "Bases SEO & performance",
        showcaseText:
          "Des pages rapides, une structure propre et les essentiels techniques pour soutenir la visibilité et l’expérience.",
      },
      automation: {
        title: "Automatisation & gestion des demandes",
        description:
          "Des formulaires et systèmes connectés à vos outils du quotidien.",
        tag: "Flux de travail",
        showcaseTitle: "Automatisation & gestion des demandes",
        showcaseText:
          "Des formulaires reliés proprement à votre courriel, Notion ou vos outils pour mieux gérer les demandes entrantes.",
      },
      visualDirection: {
        title: "Direction visuelle",
        description:
          "Photographie, mise en page et présentation pensées pour renforcer la confiance.",
        tag: "Présentation",
        showcaseTitle: "Direction visuelle",
        showcaseText:
          "Photographie, mise en page et visuels pensés pour rendre l’entreprise plus soignée et plus crédible.",
      },
    },
    labels: {
      preview: "Aperçu",
      activeView: "Vue active",
      focus: "Focus",
      structure: "Structure",
      outcome: "Résultat",
    },
    details: {
      structure:
        "Clear hierarchy, cleaner flow, and stronger presentation.",
      outcome:
        "A site that feels more intentional and easier to act on.",
    },
  },

  about: {
    eyebrow: "À PROPOS",
    title: "EEB Web Dev",
    headline:
      "Un partenaire web pragmatique pour les entreprises qui recherchent de la clarté, sans complexité inutile.",
    intro: [
      "EEB Web Dev aide les petites entreprises et les entreprises de services à bâtir une présence en ligne plus claire, plus crédible et mieux adaptée à leur réalité. Chaque projet est conçu en fonction de l’entreprise elle-même : ses priorités, sa clientèle, son budget et sa façon de travailler.",
      "Il peut s’agir d’un site web ciblé, d’une expérience bilingue, d’une présentation visuelle plus soignée ou de systèmes simples qui facilitent la gestion des demandes. L’objectif n’est pas d’ajouter de la complexité, mais de créer quelque chose d’utile, de compréhensible et capable d’évoluer avec l’entreprise.",
    ],
    principles: [
      {
        title: "Des recommandations concrètes",
        text: "Chaque élément doit avoir une raison d’être. Les décisions sont guidées par ce qui peut réellement aider l’entreprise, plutôt que par l’ajout de technologies superflues.",
      },
      {
        title: "Une collaboration directe",
        text: "Vous travaillez directement avec la personne qui planifie, conçoit et réalise votre projet. La communication demeure claire, humaine et facile à suivre.",
      },
      {
        title: "Un soutien qui se poursuit",
        text: "Les besoins d’un site web peuvent changer avec l’évolution de l’entreprise. EEB Web Dev demeure disponible pour les ajustements, les améliorations continues et les projets futurs.",
      },
    ],
    founder:
      "EEB Web Dev est une entreprise indépendante dirigée par Eric Boisvert, développeur et photographe établi à Montréal. Son approche combine le développement technique, le jugement visuel et une compréhension concrète des réalités auxquelles font face les petites entreprises.",
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
