/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}', 
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}', 
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            
            colors: {
                'silver': {
                    '500': '#BCC6CC',
                    '700': '#A9B2B7',
                },
                'white': { 
                    '300': '#F2F2F2',
                    '600': '#FFFFFF',
                },
            },
        },
    },
    plugins: [],
};