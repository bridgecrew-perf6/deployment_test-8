//This would contain some configuration details
const env = process.env.REACT_APP_ENV;
// environment variables are variables that is used by the application itself
// details such as secret keys/environment are part of the env't variables
// In react, environment variables start with REACT_APP_

let config = {
    baseURL:"https://localhost"
}

switch (env.toUpperCase()){
    case "STAGE":
        config.baseURL="https://stage.skillsunion.com"
        break;
    case "PRODUCTION":
        config.baseURL="https://skillsunion.com"
        break;
}

export default config;