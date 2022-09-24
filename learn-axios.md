# Learn Axios

- `useAxios` react example: [Click here](https://github.com/sahilrajput03/learn-react/tree/main/with-msw-and-useAxios), `axiosist` for express backend testing: [Click here](https://github.com/sahilrajput03/learn-express/#testing-with-axiosist-seems-really-awesome)
- **Please starting learning from this topic onwards now:** https://axios-http.com/docs/interceptors
- Please make notes from -> **Handling errors:** https://axios-http.com/docs/handling_errors
- Submit form data with axios: [Click here](https://stackoverflow.com/a/47630754)

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
// Response Schema: https://axios-http.com/docs/res_schema

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
	baseURL: 'http://localhost:8005',
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

// https://axios-http.com/docs/config_defaults
// Using global values
axios.defaults.baseURL ='http://localhost:8005';
axios.defaults.headers.common['Authorization'] = 'BEARER my-token';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// now below requests will use above values unless u overwrite them by providing new config
const r1 = await axios.post('/', payload)
//update Authorization headers for everywhere, YIKES!
axios.defaults.headers.common['Authorization'] = 'BEARER my-token-updated';
const r2 = await axios.get('/bar')

```

## Independently updating authorization headers at `global` and `instance` level:

```js
// https://axios-http.com/docs/config_defaults
const axios = require('axios')

const baseURL = 'http://localhost:8005'
// Using axios instances

// NOTE: Instance must be created before setting `axios` default values bcoz otherwise default values will be inherited into axios insatance as well. ~Sahil
// FOR DETAILS READ: ORDER OF PRECEDENCE - OFFICIAL DOCS - https://axios-http.com/docs/config_defaults

// INSTANCE
const api = axios.create({
	baseURL,
})

// UPDATING GLOBAL'S DEFAULT VALUES
axios.defaults.baseURL = baseURL
axios.defaults.headers.common['Authorization'] = 'BEARER my-token'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 2500

const sleep = (TIME = 500) => new Promise((res) => setTimeout(res, TIME))

void (async function () {
	try {
		const payload = {
			firstName: 'Fred',
			lastName: 'Flintstone',
		}
		const r1 = await axios.post('/', payload)

		// UPDATING `Authorization` HEADER FOR GLOBAL'S DEFAULT VALUES
		axios.defaults.headers.common['Authorization'] = 'BEARER my-token-UPDATED'
		await sleep()
		const r2 = await axios.get('/bar')

		// UPDATING INSTANCE'S DEFAULT VALUES
		api.defaults.headers.common['Authorization'] = 'BEARER my-token-FOR-INSTANCE'
		await sleep()
		const {data} = await api.get('/fso/patients.json')
	} catch (e) {
		console.log(e.name)
		console.log(e.message)
	}
})()
```

# Testing requests made EASY!!

```bash
# beerceptor: 'https://abcdef.free.beeceptor.com'
# webhoot.site: 'https://webhook.site/cb871100-2d6f-4597-b459-3db0caae74b8'
# nc: 'http://localhost:8005'

# Using: https://webhook.site/
# Using: https://beeceptor.com/console/abcdef
# Using local server: nc -kdl 127.0.0.1 8005
## LEARN: (#2 below*) provides best results for general purpose testing coz we do send a dummy 200 OK response as well and I have an alias for it -
# ALIAS: startApiTesting
###### BONUS: If you wan to mimic some STATUS CODE AND STATUS MESSAGE
#1) while true; do echo -e "HTTP/1.1 200 OKKK\n" | nc -Nl 8005;echo -e "\n---"; done
#2) while true; do echo -e "HTTP/1.1 400 FUOC\n" | nc -Nl 8005;echo -e "\n---"; done
######

# BONUS:^ Source (comment in this answer): https://stackoverflow.com/a/52351480/10012446
# # Its important to use 172.0.0.1 instead of localhost coz axios internall converts localhost text to 127.0.0.1
# -k	Forces nc to stay listening for another connection after its current connection is completed. It is an error to use this option without the -l option.
# -d	Do not attempt to read from stdin.
# -l	Used to specify that nc should listen for an incoming connection rather than initiate a connection to a remote host. It is an error to use this option in conjunction with the -p, -s, or -z options. Additionally, any timeouts specified with the -w option are ignored.
```


## Typescript

Data Types Code of axios: [Click here](https://github.com/axios/axios/blob/v2.x/index.d.ts#L190-L197)

- Error handling with typescript:
	```ts
	try {
		// ...
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const err = error as AxiosError<{message: string}>
			// Access to config, request, and response
			if (err.response?.data.message === 'Account with this email already exists.') {
				alert(err.response?.data.message)
			}
		} else {
			// Just a stock error
			console.log('some error 28g4h ~Sahil')
		}
	}
	```
	
- Typing `response data`:

	```ts
	// data is typed as `string`
	const {data} = await axiosInstance.post<string>(paths.login, {
		username: email,
		password: password,
	})
	```

- Typing `response data` and `payload type`:

	```ts
	interface dataT {
		access_token: number
	}
	interface payloadT {
		username: string
		password: string
	}
	// data is typed 'dataT', and payload is typed `payloadT` (first `any` has no significance ~ IMO ~ Sahil)
	const {data} = await axiosInstance.post<any, AxiosResponse<dataT>, payloadT>(paths.login, {
		username: email,
		password: password,
	})
	```
