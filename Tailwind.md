# Setting up Tailwind css

Links:

- [Tailwind.css](https://tailwindcss.com/)
- [Playground](https://play.tailwindcss.com/)
- [Tailblocks](https://tailblocks.cc/)

Step-0: Setup npm in vite project and tailwind css extension in vsc

Step 1: Run the following commands

```
npm install -D tailwindcss postcss autoprefixer                    //installs as dependancies
npx tailwindcss init -p
```

Step 2: Update tailwind.conf.js file to include this line:

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],                                                             //tell on which files to apply css
```

- Optional Step 2: Configure PostCSS to use Tailwind CSS and Autoprefixer (postcss.config.js):

```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

Step 3: Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file:

```
@tailwind base;
@tailwind components;
@tailwind utilities;    //complies into clean browser unerstandable css
```

Step 4: Start your build process
Run your build process with npm run dev.

```
npm run dev
```

- For html projects:

Step 1:

```
npm install -D tailwindcss
npx tailwindcss init                                                //sets up config js file
```

Step 4: Include the src/output.css file to your html using link:css

Step 5: Run the following command:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
//generates a output.css file which has only necessay utility classes of css
```
