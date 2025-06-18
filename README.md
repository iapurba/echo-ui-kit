# echo-ui-kit
A lightweight and accessible React component library styled with Tailwind CSS.

# 1. Create your project directory and navigate into it
mkdir echo-ui-kit
cd echo-ui-kit

# 2. Initialize the project with npm
npm init -y

# 3. Install React as a PEER dependency (CRUCIAL for libraries)
# We install it as a dev dependency so we can use it locally for Storybook/testing
npm install --save-dev react react-dom

# 4. Install Webpack and its ecosystem for bundling
npm install --save-dev webpack webpack-cli babel-loader css-loader postcss-loader autoprefixer style-loader

# 5. Install Babel for transpiling modern JavaScript
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react

# 6. Install Tailwind CSS
npm install --save-dev tailwindcss

# 7. Install Storybook for component development and visualization
npx storybook@latest init

# 8. Install Jest and React Testing Library for testing
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom jest-transform-stub
