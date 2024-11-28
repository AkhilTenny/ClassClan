module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1200px', 
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        customBlue:{
          '1': '#caf0f8',
          '2': '#ade8f4',
          '3': '#90e0ef',
          '4': '#48cae4',
          '5': '#00b4d8',
          '6': '#0096c7',
          '7': '#0077b6',
          '8': '#023e8a',
          '9': '#03045e',
        },
        customPink:{
          '1': '#ffe5ec',
          '2': '#ffc2d1',
          '3': '#ffb3c6',
          '4': '#ff8fab',
          '5': '#fb6f92',
          '6': '#ff4d6d',
        }
      }
    },
  },
  plugins: [],
};
