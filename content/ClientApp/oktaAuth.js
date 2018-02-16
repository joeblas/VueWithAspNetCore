import OktaAuth from '@okta/okta-auth-js'

const org = 'https://dev-444675.oktapreview.com',
    clientId = '0oae1b6oge67CA0YF0h7',
    redirectUri = 'http://localhost:57352',
    authorizationServer = 'default';

const oktaAuthClient = new OktaAuth({
    url: org,
    issuer: authorizationServer,
    clientId,
    redirectUri
});

export default {
    client: oktaAuthClient
};
