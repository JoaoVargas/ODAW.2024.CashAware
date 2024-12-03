/** @type {import('tailwindcss').Config} */
// export default {
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: 'hsl(var(--card))',
  			cardForeground: 'hsl(var(--card-foreground))',
  			popover: 'hsl(var(--popover))',
  			popoverForeground: 'hsl(var(--popover-foreground))',
  			primary: 'hsl(var(--primary))',
  			primaryForeground: 'hsl(var(--primary-foreground))',
  			secondary: 'hsl(var(--secondary))',
  			secondaryForeground: 'hsl(var(--secondary-foreground))',
  			muted: 'hsl(var(--muted))',
  			mutedForeground: 'hsl(var(--muted-foreground))',
  			accent: 'hsl(var(--accent))',
  			accentForeground: 'hsl(var(--accent-foreground))',
  			destructive: 'hsl(var(--destructive))',
  			destructiveForeground: 'hsl(var(--destructive-foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart1: 'hsl(var(--chart-1))',
  			chart2: 'hsl(var(--chart-2))',
  			chart3: 'hsl(var(--chart-3))',
  			chart4: 'hsl(var(--chart-4))',
  			chart5: 'hsl(var(--chart-5))',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
  ],
};
