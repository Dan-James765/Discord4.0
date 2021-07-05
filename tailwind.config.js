// tailwind.config.js
module.exports = {
  // mode: "jit",
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBG: "#36393f",
        discord_serverContainerBG: "#202225",
        discord_channelsBG: "#2f3136",
        discord_serverNameHoverBG: "#34373c",
        discord_channel: "#8e9297",
        discord_channelHoverBG: "#3a3c43",
        discord_userID: "#b9bbbe",
        discord_userSectionBg: "#292b2f",
        discord_userIconHover: "#dcddde",
        

      },
      height: {
        "83vh": "83vh",
        
       },
       


     },
   },
   variants: {
     extend: {},
   },
   plugins: [require('tailwind-scrollbar-hide')],
 }
