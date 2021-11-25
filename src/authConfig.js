// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "6dccb97a-8c76-44c1-9319-e89a60866206",
        authority: "https://continiadevb2c.b2clogin.com/continiadevb2c.onmicrosoft.com/B2C_1_ContiniaLearnDev",
        knownAuthorities: ["continiadevb2c.b2clogin.com"],
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000"
    }
};

export const loginRequest = {
    scopes: ["https://continiadevb2c.onmicrosoft.com/api/demo.read"]
};
