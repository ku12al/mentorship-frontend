export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure Tailwind scans all files
      theme: {
        extend: {
          fontFamily: {
            lato: ["Lato", "sans-serif"], // Adding Lato font
          },
        },
      },
      plugins: [],
    };
    