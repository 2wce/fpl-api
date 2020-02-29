module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["schema/**/*.{js,jsx,ts,tsx}"],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  //   /* ... */
  // },
  moduleFileExtensions: ["ts", "tsx", "js", "graphql", "json", "node"],
  roots: ["<rootDir>/schema"]
  //setupFilesAfterEnv: ["<rootDir>/setup-tests.js"]
};
