/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightRedWork: 'hsl(15, 100%, 70%)',
      softBlue: 'hsl(195, 74%, 62%)',
      lightRedStudy: 'hsl(348, 100%, 68%)',
      limeGreenWorkout: 'hsl(145, 58%, 55%)',
      violetSocial: 'hsl(264, 64%, 52%)',
      softOrangeSelfCare: 'hsl(43, 84%, 65%)',
    
      blue: 'hsl(246, 80%, 60%)',
      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue : 'hsl(235, 46%, 20%)',
      darkLightBlue: 'hsl(235, 47%, 28%)',
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',
    },
  },
  plugins: [],
}
