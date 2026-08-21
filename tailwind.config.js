/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    borderRadius: {
      none: "0px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      "3xl": "20px",
      "3.5xl": "30px",
      "4xl": "40px",
      "5xl": "60px",
      "7xl": "100px",
      full: "9999px",
    },
    fontSize: {
      inherited: "inherit",
      xxs: "10px",
      xs: "12px",
      "2xs": "13px",
      sm: "14px",
      "2sm": "15px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "22px",
      "2xl": "24px",
      "2xxl": "26px",
      "2.5xl": "28px",
      "3xl": "30px",
      "4xl": "35px",
      "4.5xl": "40px",
      "4.65xl": "42px",
      "5xl": "50px",
      "6xl": "60px",
      "7xl": "70px",
      "7.5xl": "80px",
      "8xl": "95px",
      "8.5xl": "100px",
    },
    extend: {
      colors: {
        // Primary-Color
        primary: "var(--primary)",
        primary3: "var(--rgba-primary-3)",
        primary7: "var(--rgba-primary-7)",
        primary8: "var(--rgba-primary-8)",
        primarylight: "var(--rgba-primary-1)",
        primaryhover: "var(--primary-hover)",
        primarydark: "var(--primary-dark)",

        // Secondary-Color
        secondary: "var(--secondary)",
        secondarylight: "var(--secondarylight)",
        secondaryhover: "#191a1e",

        // Text-Color
        title: "var(--title)",
        bodybg: "var(--body-bg)",
        body: "var(--body-color)",
        border: "var(--border)",
        textdark: "var(--text-dark)",

        light: "var(--light)",
        lighthover: "#cfd0d3",

        // Other-Color
        card: "var(--card)",
        alertdark: "#c4c4c4",
        muted: "#6f767ebf",
        gold: "#ffd700",
        "gray-100": "#f8f9fa",
        "d-bg": "var(--d-bg)",

        success: "#01BD9B",
        successhover: "#27c7aa",
        successlight: "var(--success-light)",

        danger: "#E55555",
        dangerhover: "#e96f6f",
        dangerlight: "var(--danger-light)",

        info: "#2AA3E7",
        infolight: "var(--info-light)",
        infohover: "#4ab1eb",

        warning: "#F89D16",
        warninglight: "var(--warning-light)",
        warninghover: "#f9ac39",

        dark: "#444444",
        darkhover: "#606060",
        darklight: "#f7f7f7",

        purplelight: "#bb6bd91a",
        yellow: "#ffa808",
        light2: "#FEEB9D",
        lightdark: "var(--light-dark)",
        purple: "#5E5CC6",
        // orange: '#CD9B60',
        red: "#EB5757",

        // Social icons
        facebook: "var(--facebook)",
        drive: "var(--drive)",
        envato: "var(--envato)",
        flickr: "var(--flickr)",
        photo: "var(--photo)",
        dropbox: "var(--dropbox)",
        apple: "var(--apple)",
        whatsapp: "var(--whatsapp)",
        linkedin: "var(--linkedin)",
        instagram: "var(--instagram)",
        youtube: "var(--youtube)",
        "google-plus": "var(--google-plus)",
        twitter: "var(--twitter)",
        pinterest: "var(--pinterest)",
        google: "var(--google)",
        snapchat: "var(--snapchat)",
        tumblr: "var(--tumblr)",
        reddit: "var(--reddit)",
        spotify: "var(--spotify)",
        yahoo: "var(--yahoo)",
        dribbble: "var(--dribbble)",
        quora: "var(--quora)",
        vimeo: "var(--vimeo)",
        skype: "var(--skype)",

        facebookhover: "var(--facebookhover)",
        drivehover: "var(--drivehover)",
        envatohover: "var(--envatohover)",
        flickrhover: "var(--flickrhover)",
        photohover: "var(--photohover)",
        dropboxhover: "var(--dropboxhover)",
        applehover: "var(--applehover)",
        whatsapphover: "var(--whatsapphover)",
        linkedinhover: "var(--linkedinhover)",
        instagramhover: "var(--instagramhover)",
        youtubehover: "var(--youtubehover)",
        "google-plushover": "var(--google-plushover)",
        twitterhover: "var(--twitterhover)",
        pinteresthover: "var(--pinteresthover)",
        googlehover: "var(--googlehover)",
        snapchathover: "var(--snapchathover)",
        tumblrhover: "var(--tumblrhover)",
        reddithover: "var(--reddithover)",
        spotifyhover: "var(--spotifyhover)",
        yahoohover: "var(--yahoohover)",
        dribbblehover: "var(--dribbblehover)",
        quorahover: "var(--quorahover)",
        vimeohover: "var(--vimeohover)",
        skypehover: "var(--skypehover)",
      },
      spacing: {
        1.1: "5px",
        3.6: "15px",
        4.5: "1.125rem",
        6.1: "25px",
        7.5: "30px",
        13.5: "50px",
        14.5: "60px",
        17: "70px",
        25: "100px",
        29: "120px",
        45: "180px",
      },
      zIndex: {
        1: "1",
        9: "9",
        99: "99",
        999: "999",
        9999: "9999",
        99999: "99999",
        999999: "999999",
        9999999: "9999999",
      },
      boxShadow: {
        default: "0px 5px 15px 0px rgba(17, 17, 17, 0.05)",
        nav: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        dropdown: "rgba(0, 0, 0, 0.08) 0px 8px 24px",
        accordion: "0 0 0.9375rem -0.1875rem rgba(0, 0, 0, 0.3)",
        hover: "0 0 30px 0 rgba(229, 85, 85, 0.1)",
        toast: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        btnprimary: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(29, 105, 214, 0.2)",
        btnsuccess: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(42, 183, 107, 0.2)",
        btndanger: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(229, 85, 85, 0.2)",
        btninfo: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(42, 163, 231, 0.2)",
        btnsecondary: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(31, 32, 37, 0.2)",
        btnwarning: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(248, 157, 22, 0.2)",
        btndark: "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px rgba(68, 68, 68, 0.2)",
        btnwhite: "0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 4px rgba(222, 222, 237, 0.3)",
      },
      listStyleType: {
        auto: "auto",
        none: "none",
      },
      backgroundSize: {
        full: "100%",
      },
      backgroundImage: {
        menuicon:
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba(255,%20255,%20255,%200.55)%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4%207h22M4%2015h22M4%2023h22%27/%3E%3C/svg%3E')",
        "dark-menuicon":
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3E%3Cpath stroke=%27rgba(111,%20118,%20126,%200.75)%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4%207h22M4%2015h22M4%2023h22%27/%3E%3C/svg%3E')",
      },
      fontFamily: {
        monospace: ['SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
        progress: {
          "0%": { width: "0" },
        },
        spinnergrow: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.1)" },
        },
        placeholderglow: {
          "50%": { opacity: "0.2" },
        },
        wave: {
          "10%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotate: "rotate 20s infinite linear",
        progress: "progress 5s",
        spinnergrow: "spinnergrow 1.5s ease-in-out infinite",
        placeholderglow: "placeholderglow 2s ease-in-out infinite",
        placeholderwave: "placeholderwave 2s linear infinite",
        wave: "wave 1s linear infinite",
      },
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        max2lg: "960px",
        xl: "1240px",
      },
    },

    screens: {
      sm: "576px",
      // => @media (min-width: 576px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "992px",
      // => @media (min-width: 991px)

      "2lg": "1023px",
      // => @media (min-width: 1023px)

      xl: "1200px",
      // => @media (min-width: 1200px)

      "2xl": "1300px",
      // => @media (min-width: 1300px)

      "3xl": "1400px",
      // => @media (min-width: 1479px)

      "4xl": "1680px",
      // => @media (min-width: 1680px)

      "max-sm": { max: "576px" },
      // => @media (max-width: 576px)

      "max-md": { max: "767px" },
      // => @media (max-width: 767px)

      "max-lg": { max: "991px" },
      // => @media (max-width: 991px)

      max2lg: { max: "1024px" },
      // => @media (max-width: 991px)

      "max-xl": { max: "1199px" },
      // => @media (max-width: 1199px)

      "max-2xl": { max: "1400px" },
      // => @media (max-width: 1400px)

      "max-3xl": { max: "1600px" },
      // => @media (max-width: 1480px)

      "max-4xl": { max: "1700px" },
      // => @media (max-width: 1680px)

      "max-5xl": { max: "1800px" },
      // => @media (max-width: 1800px)
    },
  },
  variants: {
    extend: {
      display: ["sm", "md", "lg", "xl", "max-sm", "max-md", "max-lg", "max-xl", "max-2xl", "max-3xl"],
    },
  },
  plugins: [],
};
