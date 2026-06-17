/**
 * SITE CONTENT — single source of truth for everything that isn't a photo or a
 * video. Edit here to change the name, bio, contact details, social links and
 * navigation. Nothing is hardcoded in components.
 *
 * "migrated" = taken from the existing Webnode site. "editable placeholder" =
 * written to make the site feel complete; replace with your own words.
 */

export const site = {
  // ── Identity (migrated) ────────────────────────────────────────────────
  name: "Alexander Fedchin",
  firstName: "Alex",
  monogram: "AF",
  role: "Photographer & Videographer",
  location: "Helsinki, Finland",
  email: "alexanderfedchin@gmail.com",

  // ── Hero copy (editable placeholder) ───────────────────────────────────
  heroLines: ["Alexander Fedchin", "Portfolio"],
  tagline: "Photographer and videographer based in Helsinki, Finland.",

  // Verbatim welcome from the existing site (migrated).
  intro:
    "Hey, my name is Alex. I'm a photographer and videographer living in Helsinki, Finland. I make short films, music videos, commercials, promo videos — and I'd love to hear about your project.",

  // ── Primary navigation ─────────────────────────────────────────────────
  nav: [
    { label: "Home", to: "/" },
    { label: "Photography", to: "/photography" },
    { label: "Videos", to: "/videos" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],

  // ── Social links (migrated). `icon` maps to components/ui/icons.jsx ─────
  socials: [
    {
      name: "Instagram",
      handle: "@alex_fdchn",
      url: "https://instagram.com/alex_fdchn",
      icon: "instagram",
    },
    {
      name: "YouTube",
      handle: "@TSLIVE",
      url: "https://www.youtube.com/@TSLIVE",
      icon: "youtube",
    },
    {
      name: "Email",
      handle: "alexanderfedchin@gmail.com",
      url: "mailto:alexanderfedchin@gmail.com",
      icon: "mail",
    },
  ],

  // ── About page (editable placeholder, opening line migrated) ───────────
  about: {
    // Drop a real portrait into src/assets/photos/ with this filename to use it.
    portraitImage: "about-portrait.jpg",
    bio: [
      "Hey, my name is Alex — a photographer and videographer based in Helsinki, Finland. I work across stills and motion, drawn to the moments between moments: the held breath, the turn of light, the quiet just before something happens.",
      "My approach is cinematic and unhurried. Whether it's a portrait, a short film or a music video, I care about mood and story first — building images that feel like a single frame lifted from something larger.",
      "When I am not shooting I am usually scouting locations around the Finnish lakes, chasing weather, or in the edit room obsessing over a colour grade until it feels exactly right.",
    ],
    equipment: [
      {
        group: "Cameras & Gimbals",
        items: [
          "Blackmagic Pocket Cinema Camera",
          "Canon EOS 600D",
          "DJI RSC 2 Gimbal",
        ],
      },
      {
        group: "Audio",
        items: ["RØDE Videomic Pro", "RØDE Lavalier", "DJI Wireless Mic"],
      },
      {
        group: "Editing Software",
        items: [
          "Adobe Premiere Pro",
          "Adobe After Effects",
          "DaVinci Resolve Studio",
        ],
      },
    ],
    experience: [
      {
        year: "2025",
        title: "Promo Video for artisits",
        description:
          "Made a promo video for a new track popular artists in Finland: Yonas Dilemma, Arttu Lindeman and Lavaredo. It was a fun project, we shot in different locations around Helsinki and had a great time creating something that matched the vibe of the music.",
      },
      {
        year: "2024",
        title: "Promo Video for businesses and artists",
        description:
          "Started offering promo video services for businesses, like bars and cafes, and artists. It was something new for me, but I learned a lot of new things while doing this.",
      },
      {
        year: "2022",
        title: "Short Film H.A.S.I. Release",
        description:
          "Released my third short film, which was a huge success. Recognition by multiple film festivals around the world, including awards for best director, best soundtrack, best sci-fi and best closing credits.",
      },
      {
        year: "2020",
        title: "Commercial Music Video Project",
        description:
          "Took on the first commercial project to shoot a music video for aspiring artists.",
      },
      {
        year: "2019",
        title: "First job as content creator",
        description:
          "Worked in a web store shooting products reviews. Continued journey as a filmmaker, releasing a second short film.",
      },
      {
        year: "2018",
        title: "First Real Short Film",
        description:
          "After months of planning, shooting with friends and editing, our first relatively good short film was born. It was a huge learning experience and the moment we knew we wanted to pursue this seriously.",
      },
      {
        year: "2016",
        title: "Interest in Filmmaking",
        description:
          "We became interested in more cinematic and professional content. First attempts to make a movie, first music video.",
      },
      {
        year: "2015",
        title: "Started YouTube Channel",
        description:
          "I started making fun YouTube videos with my brother. Challenges, sketches, everything that was popular at that time.",
      },
    ],
  },

  // ── Contact page copy (editable placeholder) ───────────────────────────
  contact: {
    headline: "Let’s make something",
    intro:
      "Have a project in mind — a portrait session, a film, a music video? Tell me about it. I reply to every message personally.",
    responseTime: "Typically replies within 1–2 days",
  },
};

/** Convenience: the current year for footers/copyright. */
export const currentYear = new Date().getFullYear();
