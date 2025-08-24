module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'background-gradient': 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #bae6fd 100%)',
            },
            animation: {
                'pulse-slow': 'pulse 3s linear infinite',
            },
            colors: {
                primary: '#0369a1',
                secondary: '#0ea5e9',
                accent: '#38bdf8',
                light: '#e0f2fe',
                dark: '#0c4a6e',
                text: '#334155',
                success: '#10b981',
                warning: '#f59e0b',
                cardBg: 'rgba(255, 255, 255, 0.95)',
            },
            fontFamily: {
                tajawal: ['Tajawal', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
