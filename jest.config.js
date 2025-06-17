module.exports = {
  TestEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    "\\.(js|jsx)$": "babel-jest",
    "\\.css$": "babel-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "jest-transform-stub",
  },
};
