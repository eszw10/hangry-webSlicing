/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A30926',
        'dark' : '#303030',
        'accent':'#5A5A5A',
        'dark-accent':'#707070',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

