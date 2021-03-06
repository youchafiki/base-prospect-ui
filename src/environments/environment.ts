// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'local',
  apiUrl: window["env"]["apiUrl"] || "default",
  debug: window["env"]["debug"] || false,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://keycloak.dsira.bnpparibas.com/auth/',

    // Realm
    realm: 'collaborateurs',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'prospects',
  }
};
