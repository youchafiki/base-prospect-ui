export const environment = {
  production: true,
  envName: 'DMZR',
  apiUrl: window["env"]["apiUrl"] || "default",
  debug: window["env"]["debug"] || false,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://keycloak.dsira.bnpparibas.com/auth/',

    // Realm
    realm: 'collaborateurs',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'prospects',
  }
};
