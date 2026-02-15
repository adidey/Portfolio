/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                modern: ['Satoshi', 'sans-serif'],
            },
            colors: {
                primary: '#2563eb',
            },
            animation: {
                'slow-rotate': 'slow-rotate 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                'slow-rotate': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '50%': { transform: 'translateY(-10px) rotate(5deg)' },
                },
            },
        },
    },
    plugins: [],
}
