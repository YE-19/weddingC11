import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';

export const invitationConfig = {
  // Primary Couple details (Ahmed & Tasneem)
  couple: {
    groom: "Ahmed",
    groomTitle: "GROOM",
    bride: "Tasneem",
    brideTitle: "BRIDE",
    coverGroom: "TASNEEM",
    coverBride: "Ahmed",
    primary: "Ahmed & Tasneem",
    initials: "A & T",
    monogram: "AT",
    ceremonyHeader: "CEREMONY INFO",
    announcementLine1: "WE JOYFULLY ANNOUNCE",
    announcementLine2: "THE ENGAGEMENT OF",
    quote: "Together with our families, we invite you to share our joy as we celebrate our engagement.",
  },

  // Date & Time
  eventDate: {
    display: "December 3, 2026",
    dayOfWeek: "THURSDAY",
    dayNumber: "03",
    monthName: "DECEMBER",
    year: "2026",
    time: "7:00 PM — 12:00 AM",
    targetIso: "2026-12-03T19:00:00",
    monthIndex: 11, // 0-based: December = 11
    highlightDay: 3,
  },

  // Venue details (RB Hall - Zagazig)
  venue: {
    name: "RB Hall",
    subtitle: "الزقازيق",
    address: "RB Hall, Zagazig",
    city: "Zagazig",
    googleMapsLink: "https://www.google.com/maps?q=30.53529167175293,31.685649871826172&z=17&hl=en",
    mapEmbedUrl: "https://maps.google.com/maps?q=30.53529167175293,31.685649871826172&hl=ar&z=15&output=embed",
  },

  // Photos (2 side-by-side as shown in the screenshot)
  gallery: [
    {
      id: 1,
      role: "Groom",
      src: p1,
      title: "Ahmed",
    },
    {
      id: 2,
      role: "Bride",
      src: p2,
      title: "Tasneem",
    },
  ],

  // Dress Code (White, Navy, Burgundy)
  dressCode: {
    theme: "White • Navy • Burgundy",
    palettes: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Burgundy", hex: "#7B112E" },
    ],
  },

  // Schedule / Timeline
  timeline: [
    { time: "19:00", title: "Welcome" },
    { time: "19:30", title: "Reception" },
    { time: "20:00", title: "Ring Exchange" },
    { time: "21:00", title: "Dinner & Music" },
    { time: "22:30", title: "Cake & Photos" },
    { time: "23:30", title: "Party Celebration" },
  ],

  // Initial guestbook wishes
  initialWishes: [
    {
      id: "w-1",
      name: "Family & Friends",
      wishes: "Alf Mabrouk! Wishing you both a lifetime of happiness, peace, and love!",
      timestamp: "Today",
      likes: 14,
    },
    {
      id: "w-2",
      name: "The Squad",
      wishes: "Congratulations Ahmed & Tasneem! Can't wait to celebrate your special night!",
      timestamp: "Today",
      likes: 9,
    },
  ],
};
