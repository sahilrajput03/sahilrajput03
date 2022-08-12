# Learn Axios

```js
// import axios from require('axios')
const axios = require('axios')

// # Axios api reference
axios(config)
// `config` api: https://axios-http.com/docs/req_config
// # Request method aliases - For convenience aliases have been provided for all supported request methods.
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
// NOTE: When using the alias methods url, method, and data properties don't need to be specified in config.

// Send a GET request (default method)
const response = await axios('/user/12345')
// Response api: https://axios-http.com/docs/res_schema

const {data} = await axios.get('/user?ID=12345')

// better way to send params (duplicate of above)
const {data} = await axios.get('/user', {
	params: {
		ID: 12345,
	},
})

// post request with payload :axios.post(url, [payload [,config]])
const payload = {
	firstName: 'Fred',
	lastName: 'Flintstone',
}
await axios.post('/user', payload)

// post request: axios.post(url, [payload [,config]])
const config = {
	headers: {
		'Content-Type': 'application/json', // Redundant for post/put request bcoz this header is added by default unless you rewrite it.
		Authorization: 'JWT fefege...',
	},
}
const {data} = await axios.post('/user', payload, config)

// Send a POST requests with syntax `axios(config)`
const {data} = await axios({
	method: 'post',
	url: '/user/12345',
	data: payload
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'JWT fefege...',
	},
})

// download image with axios
const fs = require('fs')
const response = await axios({
	method: 'get',
	url: 'https://avatars.githubusercontent.com/u/31458531?v=4',
	responseType: 'stream',
})
response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))


// performing concurrent requests
function getUserAccount() {
	return axios.get('/user/12345')
}
function getUserPermissions() {
	return axios.get('/user/12345/permissions')
}
const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()])
// acct.data, perm.data

// Using axios instances
const api = axios.create({
	baseURL: 'https://loveapi.ml/',
	timeout: 1000,
	headers: {'X-Custom-Header': 'foobar'},
})
const {data} = await api.get('/fso/patients.json')


// auth key in `config` will set Authentication headers? Yes. BUT DON"T USE IT, COZ IT ADDS BASIC IN THE FRONT OF THE VALUE
const {data} = await axios.post(
			'http://localhost:8005',
			payload,
			{
				// Below will create(/overwrite) Authorization header as: `Authorization: Basic amFuZWRvZTpzMDBwZXJzM2NyZXQ=`
				auth: {
					username: 'janedoe',
					password: 's00pers3cret',
				},
			}
		)

```

## Testing requests

```bash
// beerceptor: 'https://abcdef.free.beeceptor.com'
// webhoot.site: 'https://webhook.site/cb871100-2d6f-4597-b459-3db0caae74b8'
// nc: 'http://localhost:8005'

// Using: https://webhook.site/
// Using: https://beeceptor.com/console/abcdef
// Using local server: nc -kdl 127.0.0.1 8005
// BONUS: If you wan to mimic some STATUS CODE AND STATUS MESSAGE : while true; do echo -e "HTTP/1.1 400 OKKK\n" | nc -Nl 8005; done
// BONUS:^ Source (comment in this answer): https://stackoverflow.com/a/52351480/10012446
// # Its important to use 172.0.0.1 instead of localhost coz axios internall converts localhost text to 127.0.0.1
// -k	Forces nc to stay listening for another connection after its current connection is completed. It is an error to use this option without the -l option.
// -d	Do not attempt to read from stdin.
// -l	Used to specify that nc should listen for an incoming connection rather than initiate a connection to a remote host. It is an error to use this option in conjunction with the -p, -s, or -z options. Additionally, any timeouts specified with the -w option are ignored.
```
