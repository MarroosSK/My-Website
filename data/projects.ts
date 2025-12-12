export interface ProjectLink {
  videoDemo?: string | null;
  github?: string | null;
  playStore?: string | null;
  live?: string | null;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  features?: string[];
  preview?: string;
  link: ProjectLink;
}

export const projectsSectionText = {
  title: "Projects",
  description:
    "A selection of apps I’ve built — mobile and web — focused on simple, helpful experiences.",
};

export const projects: Project[] = [
  {
    id: "my-website",
    title: "My Website",
    description:
      "This portfolio website is built with Next.js, showcasing my React and React Native projects, animations, and web development skills.",
    type: "web",
    stack: ["Next.js", "Tailwind", "Rive"],
    features: [
      "Showcases mobile and web projects",
      "Interactive Rive animations",
      "Responsive design",
    ],
    preview: "/images/portfolio.png",
    link: {
      videoDemo: null,
      github: "https://github.com/MarroosSK/My-Website",
      playStore: null,
      live: null,
    },
  },
  {
    id: "justtip",
    title: "JustTip",
    description:
      "Simple and fun tipping calculator built with Expo and React Native. The app tracks your tips locally and rewards you with badges as you reach milestones.",
    type: "mobile",
    stack: ["React Native", "Expo", "Zustand", "AsyncStorage", "NativeWind"],
    features: [
      "Gamified tipping experience",
      "Offline data storage with AsyncStorage",
      "Lightweight state management using Zustand",
      "Simple and minimalist design",
    ],
    preview: "/images/tip.png",
    link: {
      videoDemo: "/videos/tip.mp4",
      github: "https://github.com/MarroosSK/JustTip-App",
      playStore: null,
      live: null,
    },
  },
  {
    id: "justtea",
    title: "JustTea",
    description:
      "Relaxing tea brewing timer with interactive Rive animations. Choose your tea type, set the brew time, and get notified when it’s ready.",
    type: "mobile",
    stack: ["React Native", "Expo", "Zustand", "Rive", "NativeWind", "Notifee"],
    features: [
      "Interactive tea bag animations built in Rive",
      "Customizable brew timer",
      "Local notifications for completion",
      "Minimal and cozy user interface",
    ],
    preview: "/images/tea.png",
    link: {
      videoDemo: "/videos/tea.mp4",
      github: "https://github.com/MarroosSK/JustTea-App",
      playStore: null,
      live: null,
    },
  },
  {
    id: "justdrink",
    title: "JustDrink",
    description:
      "Cute hydration helper app that reminds you to drink enough water throughout the day. Includes animated glasses made with Rive that react to your progress.",
    type: "mobile",
    stack: [
      "React Native",
      "Expo",
      "Zustand",
      "AsyncStorage",
      "NativeWind",
      "Rive",
      "Notifee",
    ],
    features: [
      "Custom Rive animations for glass characters",
      "Local notifications using Notifee",
      "Offline hydration tracking",
      "Daily goal system",
    ],
    preview: "/images/drink.png",
    link: {
      videoDemo: "/videos/voda.mp4",
      github: "#",
      playStore: null,
      live: null,
    },
  },
  {
    id: "justtake",
    title: "JustTake",
    description:
      "Medication reminder app designed for seniors. Allows users to schedule doses, get reminders, and track their medication history.",
    type: "mobile",
    stack: [
      "React Native",
      "Expo",
      "Zustand",
      "SQLite",
      "AsyncStorage",
      "NativeWind",
      "Rive",
      "Lottie",
      "Notifee",
    ],
    features: [
      "Medication scheduling and reminders",
      "Local SQLite database storage",
      "Animated feedback with Rive and Lottie",
      "Push notifications via Notifee",
    ],
    preview: "/images/lieky.png",
    link: {
      videoDemo: "/videos/lieky.mp4",
      github: "#",
      playStore: null,
      live: null,
    },
  },
];
