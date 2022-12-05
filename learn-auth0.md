# Learn auth0

**Code:**

```js
// file: check.js
const axios = require("axios");
const otp = "111111";
axios
  .post(`https://dev-zzzzzzzz.auth0.com/oauth/token`, {
    otp,
    grant_type: "http://auth0.com/oauth/grant-type/passwordless/otp",
    client_id: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    client_secret:
      "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    audience: "https://dev-zzzzzzzz.auth0.com/userinfo",
    username: "zzzzzzzzzzzzzzzzzzzz@yopmail.com",
    realm: "email",
    scope: "openid",
  })
  .then((res) => {
    console.log("resp::", res.data);
  });
  
  
// -------------
// file: send.js
const axios = require("axios");
const userEmail = "zzzzzzzzzzzzzzzzzzzz@yopmail.com";

const AuthData = {
  client_id: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  client_secret:
    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
  connection: "email",
  email: userEmail,
  send: "code",
};

axios
  .post(`https://dev-zzzzzzzz.auth0.com/passwordless/start`, AuthData)
  .then((res) => {
    console.log("data received: ", res.data);
  });



// -------------
// React Component
import auth0 from "auth0-js";
let l = console.log;

let domain = "dev-zzzzzzzz.us.auth0.com";
let clientID = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
let redirectUri = "http://localhost:3001";
// let clientsecret = aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

var webAuth = new auth0.WebAuth({
  clientID,
  domain,
  redirectUri,
  responseType: "token id_token",
});

const email = "zzzzzzzzzzzzzzzzz@yopmail.com";

const fun = () => {
  webAuth.passwordlessStart(
    // ^ This send the magic link.
    {
      connection: "email",
      send: "code",
      // send: "link",
      email,
    },
    function (err, res) {
      // handle errors or continue
    }
  );

  setTimeout(() => {
    webAuth.passwordlessLogin(
      {
        connection: "email",
        email,
        verificationCode: String(prompt("Enter otp")),
      },
      function (err, res) {
        // handle errors or continue
        l({ err, res });
      }
    );
  }, 8000);
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button
        onClick={() => {
          fun();
        }}
      >
        Send magic link
      </button>
    </div>
  );
}
````

![auth0_1](https://user-images.githubusercontent.com/31458531/200034362-54535b52-ba82-412c-af08-329ebc5c2779.png)

![auth0_2](https://user-images.githubusercontent.com/31458531/200034099-9e155e5e-c898-416e-9307-e151e30b4e0d.png)

![auth0_3](https://user-images.githubusercontent.com/31458531/200034102-95fe77cb-a440-4ddd-9bd9-6c098bb3767d.png)

![auth0_4](https://user-images.githubusercontent.com/31458531/200034114-2f9cb571-f089-48e8-8919-8a4c04538cd0.png)

![auth0_5](https://user-images.githubusercontent.com/31458531/200034120-7e9044d2-5405-499b-8483-85fd3f6c9194.png)
