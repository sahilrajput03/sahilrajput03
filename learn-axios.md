# Learn Axios

```js
import axios from require('axios')
const axios = require('axios')

// # Axios api reference
axios(config)
// Q. Complete `config` api on onepage? Ans. https://axios-http.com/docs/req_config
// # Request method aliases - For convenience aliases have been provided for all supported request methods.
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
// NOTE: When using the alias methods url, method, and data properties don't need to be specified in config.


// Send a GET request (default method)
const {data} = axios('/user/12345');


const {data} = await axios.get('/user?ID=12345')


// better way to send params (duplicate of above)
const {data} = await axios.get('/user', {
                params: {
                  ID: 12345
                }
              })


// post request with payload :axios.post(url, [payload [,config]])
const payload = {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
await axios.post('/user', payload)
  

// post request: axios.post(url, [payload [,config]])
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
}
const {data} = await axios.post('/user', payload, config)
  
  
// Send a POST requests with syntax `axios(config)`
const {data} = await axios({
                  method: 'post',
                  url: '/user/12345',
                  data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                  },
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
                  }
                });

  
// download image with axios
const fs = require('fs')
const {data} = axios({
                  method: 'get',
                  url: 'https://avatars.githubusercontent.com/u/31458531?v=4',
                  responseType: 'stream'
                })
                  .then(function (response) {
                    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
                  });


// performing concurrent requests
function getUserAccount() {
  return axios.get('/user/12345');
}
function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}
const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()])
// acct.data, perm.data
  
 
 // Using axios instances
const api = axios.create({
  baseURL: 'https://loveapi.ml/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
const {data} = await api.get('/fso/patients.json')


```
