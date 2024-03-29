# Learn postman

- ❤️ You can export collection via CLI in postman as described in this comment - [Click here](https://github.com/postmanlabs/postman-app-support/issues/2691#issuecomment-512180455)

- **TODO: Learn tests with postman** -

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/29cb544d-270a-4a1c-812b-445378af7766)

- Open link in browser

<img width="500" src="https://github.com/sahilrajput03/sahilrajput03/assets/31458531/f9ad279d-0b21-406d-b64e-0c8848af23dc" />

- We can mark collections as starred so that they appear on the top like that -

 ![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/bb8454af-dfe3-4f23-b6ff-ca0053f0fdf7)

- We can use params ❤️❤️ in postman with a beautiful syntax like that:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/5c41c439-4041-4a86-a060-5f83126add35)

- Delete workspace (#remove workspace)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/1bb9f083-fb0f-41ca-a070-cdd452ec4cc8)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/0efdacc0-ef79-43cb-afeb-1c4db84011e9)

- TODO: Learn how teams work in postman

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/0dc41b89-dcc5-4d60-8534-7b98b4f2b86c)

- Choosing between collection variables vs. environment variables

**NOTE: Environment variables always override collection variables.**

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/0d2d1a12-1106-407b-af67-10f7b99ae446)

- Important: Postman never read values form "Initial value" column ever.

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/ce5455e8-3c53-406b-8eb7-0ec55aea05f5)

- Inheriting authorization from authorization defined in collection settings

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/cc299df3-9403-48ef-b44f-f6b1313d231b)

*Beware Beware Beware that you must remove "Inherit Authorization" from the signin/login requests as shown in below screenshot otherwise your' backend may intercept those requests badly. (WARNIN: In slasher it actually does).*

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/29902738-9d28-43f1-9a36-afa77812c4de)

- Setting variable at collection level: 

```js
var jsonData = pm.response.json();

// 1. setting in currently active environment (MOST COMMONLY NEEDED, Date: 28 May, 2023)
pm.environment.set("TOKEN1", jsonData.token);

// 2. setting collection variable
pm.collectionVariables.set("TOKEN1", jsonData.token);

// 3. setting globally
pm.globals.set("TOKEN1", jsonData.token);
```

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/1da05f53-30ab-40e5-926b-32b1758b46f9)


- Thats how you set collection specific variables:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/3710988a-3b88-40ca-8550-384d64636046)

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/615d0dd9-6752-423c-828e-f450ad7636db)

- Thats how you export a postman collection:

![image](https://user-images.githubusercontent.com/31458531/192098914-a3438a9c-21cc-4fe0-9db3-fbd8bd3ee4fe.png)

- There are three types of variables-

![image](https://user-images.githubusercontent.com/31458531/192097123-03363f4f-c73f-4eeb-8560-ea43f28af8e4.png)

- To use a environment variable, make sure you have an active environment:

![image](https://user-images.githubusercontent.com/31458531/192097168-c942fe81-bac8-433e-8782-17d5f0175993.png)

- Realistic Example of setting and using a global variable (global environment variable):

![image](https://user-images.githubusercontent.com/31458531/192096992-b0f411bd-94b8-40ec-b8e3-1da159dfb7bc.png)

![image](https://user-images.githubusercontent.com/31458531/192097027-607ccbd6-efa2-4e08-9252-a129e717fe04.png)

![image](https://user-images.githubusercontent.com/31458531/192097045-67907d3a-b262-479a-b041-d41df42ac9b2.png)


- **Thats how you set a global variable with postman tests:**

![image](https://user-images.githubusercontent.com/31458531/202670601-dd595467-2185-40f6-bda4-8a093b02616c.png)

- Course video:
  - https://www.youtube.com/watch?v=juuhb3W8xT4
  - https://www.youtube.com/watch?v=VywxIQ2ZXw4

- **Socket.io Server Requests**

  Source: Official Postman Article - [Click here](https://blog.postman.com/postman-now-supports-socket-io/)

  ![image](https://user-images.githubusercontent.com/31458531/202640780-2d8b1f24-69be-4c2c-b052-9ba07eef4c23.png)

  ![image](https://user-images.githubusercontent.com/31458531/202640917-279da6ed-7aa0-4ba8-b0e4-70012a18c15a.png)

  - **You can choose client version now:**

  ![image](https://user-images.githubusercontent.com/31458531/202641045-34a12cdd-2745-4e2d-af8c-3fbe3bbe97bf.png)
  
  - Set url of socket now *(connects automatically to: `localhost:PORT/socket.io`)*:

  ![image](https://user-images.githubusercontent.com/31458531/202674719-3b430491-8dd8-40e0-8069-025dac790dd3.png) 


  - You can set authorization header with socket like that (even though browsers don't allow setting headers for socket connections yet ~Eric Slasher Project Notes):

  ![image](https://user-images.githubusercontent.com/31458531/202671481-19c3fe2c-376f-4880-8075-3a1ce02c509c.png)

  - Listening to event and sending event (see next screenshot as well):

  ![image](https://user-images.githubusercontent.com/31458531/202681646-842da8a5-04cd-4c9b-a309-593a286de4a2.png)


  ![image](https://user-images.githubusercontent.com/31458531/202681171-522a10c0-d5d3-4609-bb1b-8acc981b9e87.png)


- How do we get the return value (**Acknowledgement**) from the event as we can see the return value of the event handler in the code:

  ![image](https://user-images.githubusercontent.com/31458531/202679754-fb80a256-5169-41e4-a95f-baf72f1780db.png)


- You can write documentation for a postman requets like that:

![image](https://user-images.githubusercontent.com/31458531/207377460-05b98813-c6e0-4b88-8a23-faf8a62d6a06.png)


- In a request payload you can now write comments with `//` and `/* */` format by adding that pre-script code

Source Stackoverflow Answer: [Click here](https://stackoverflow.com/a/67467079/10012446)

```js
// Strip JSON Comments
if (pm?.request?.body?.options?.raw?.language === 'json') {
    const rawData = pm.request.body.toString();
    const strippedData = rawData.replace(
        /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,
        (m, g) => g ? "" : m
    );
    pm.request.body.update(JSON.stringify(JSON.parse(strippedData)));
}

// To set Content-Type again (see the original stackoverflow answer's comment section):
// pm.request.upsertHeader({key: 'Content-Type', value: 'application/json'});
```

- Also you can make use explicit comment section to make notes as well:

![image](https://user-images.githubusercontent.com/31458531/207378369-41d78f06-e3d6-454a-adba-3ed0c0ce1015.png)

- Hidden Headers?

![image](https://user-images.githubusercontent.com/31458531/207421624-510f6c07-d366-44fc-ac24-1ee328041652.png)

- Thats how you can use param variables (**actually called `path variables` in postman**)

  ![image](https://user-images.githubusercontent.com/31458531/208105028-41ca37f7-77e9-41fd-a79f-312cbbcac948.png)


- Set authorization "bearer token" header easily

![image](https://user-images.githubusercontent.com/31458531/214358688-33fe42e6-7059-4f85-abed-b7e24372e6ef.png)

![image](https://user-images.githubusercontent.com/31458531/214358881-046e94f9-4272-48ff-bbe6-e6e92ed0d20c.png)

- How to send file in http request

[Click here](https://stackoverflow.com/a/39037889/10012446)

![image](https://user-images.githubusercontent.com/31458531/214363835-ed9f954b-fc09-4732-b225-ad9f29cc1a2a.png)

In slasher:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/4e056ab9-8046-486e-afb6-a6f77fb0663b)

- We can fetch an image in postman as well:

![image](https://github.com/sahilrajput03/sahilrajput03/assets/31458531/e379c325-5144-4b1d-b63b-c09db2f7cc8f)
