/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: ["./src/**/*.{ts,tsx}", "./src/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        small: "4px",
        mid: "10px",
      },
      boxShadow: {
        common: "0px 0px 32px rgba(136, 152, 170, 0.15)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        community: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary-500))",
          foreground: "hsl(var(--primary-foreground-50))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        button: {
          DEFAULT: "hsl(var(--button))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 8px)",
      },
      width: {
        12.5: "50px",
        50: "200px",
      },
      height: {
        12.5: "50px",
        header: "var(--header-height)",
      },
    },
  },
  plugins: [],
};
