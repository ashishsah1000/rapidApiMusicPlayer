import Keycloak from "keycloak-js";

const keycloak: any = new Keycloak({
  url: "http://localhost:8080/auth",
  // realm: "react-music-app",
  realm: "master",
  clientId: "react-auth",
});
// keycloak.init({
//   onLoad: "login-not-required",
//   checkLoginIframe: false,
//   flow: "implicit",
// });

export default keycloak;
