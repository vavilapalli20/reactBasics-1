
-> creating a React project by create react app
   - go to the terminal -> open desktop { cd Desktop}
   - in that Desktop write npx create-react-app netflix-gpt 
   - after this it creates all the packages for us and we are going to start

-> if we want to use tailwind css then we should download them
   - to download go to tailwind web and go to create react app one it will give u information (go to Framework Guides)
   - use these {npm install -D tailwindcss} and {npx tailwindcss init} after this it will be downloaded
   - now we should add this 
   /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    - after this write this in css file
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

-> use rafce in vs code which automatically gives functional components