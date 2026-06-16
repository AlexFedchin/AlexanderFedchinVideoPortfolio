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
  heroLines: ["Visual stories", "in light & motion."],
  tagline: "Photographer and filmmaker based in Helsinki, Finland.",

  // Verbatim welcome from the existing site (migrated).
  intro:
    "Hey, my name is Alex. I'm a photographer and videographer living in Helsinki, Finland. I make portraits, short films and music videos — and I'd love to hear about your project.",

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
        group: "Cameras",
        items: ["Sony A7 IV", "Sony A7S III", "DJI Pocket 3"],
      },
      {
        group: "Lenses",
        items: [
          "Sony 24–70mm f/2.8 GM II",
          "Sony 35mm f/1.4 GM",
          "Sony 85mm f/1.4 GM",
          "Sigma 16–28mm f/2.8",
        ],
      },
      {
        group: "Motion & Audio",
        items: ["DJI RS 3 Pro gimbal", "DJI Air 3 drone", "RØDE Wireless Pro"],
      },
      {
        group: "Light & Grade",
        items: ["Aputure 600x", "Amaran softboxes", "DaVinci Resolve Studio"],
      },
    ],
    experience: [
      {
        year: "2025",
        title: "Independent Photographer & Filmmaker",
        description:
          "Commissioned portrait, short-film and music-video work for clients across Finland and beyond.",
      },
      {
        year: "2023",
        title: "Music Video Director",
        description:
          "Directed and shot a run of music videos for emerging Nordic artists, end to end.",
      },
      {
        year: "2021",
        title: "Landscape & Travel Photography",
        description:
          "Built a body of landscape work around the lakes and forests of the Helsinki region.",
      },
      {
        year: "2019",
        title: "First steps behind the lens",
        description:
          "Picked up a camera, fell for the craft, and never really put it down.",
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
