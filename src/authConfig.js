// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "11ec2c01-4106-43e7-8651-ba783a948865",
        authority: "https://continiadevb2c.b2clogin.com/continiadevb2c.onmicrosoft.com/B2C_1_demo",
        knownAuthorities: ["continiadevb2c.b2clogin.com"],
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000"
    }
};

export const loginRequest = {
    scopes: ["https://continiadevb2c.onmicrosoft.com/50d38c5b-3504-485e-b172-4e7dd494f44e/demo.read"]
};
