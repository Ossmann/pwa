// app/manifest.ts
export default function manifest() {
  return {
    name: "Student App",
    short_name: "StudentApp",
    description: "Student learning portal",
    start_url: "/",
    display: "standalone", // or "fullscreen" if you want fully immersive
    theme_color: "#ffffff",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}