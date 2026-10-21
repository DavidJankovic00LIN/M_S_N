import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Markus Co",
    short_name: "Markus Co",
    icons: [
      {
        src: "/assets/markus-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    theme_color: "#c19d5f",
    background_color: "#ffffff",
    display: "standalone",
  };
}
