require("dotenv").config({ path: "api-credentials.env" });

module.exports = {
  env: {
    URI: process.env.URI,
    NAME: process.env.NAME,
    PASSWORD: process.env.PASSWORD,
    API_KEY: process.env.API_KEY,
  },
  reactStrictMode: true,
};