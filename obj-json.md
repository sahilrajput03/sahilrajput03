## Convert javascript object to json cli tool

Source: [sahilrajput03/obj-json](https://github.com/sahilrajput03/obj-json)

[@npm](https://www.npmjs.com/package/obj-json)

Install:

```bash
npm i -g obj-json

# Usage: Tip: Always wrap with quotes to avoid errors like below -
echo '{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}' | obj-json
# Output: {"firstName":"John","lastName":"Doe","age":50,"eyeColor":"blue"}

# Without quotes works in some cases (like below) but if we'd have used `echo {name: "carl"} | obj-json` the obj-json breaks apart.
echo {a: 10} | obj-json
# Output: {"a":10}

echo [{a: 10, b: 20}] | obj-json
# Output: [{"a":10,"b":20}]

echo "{a: 10, b: 20, name: 'sahil'}" | obj-json
# Output: {"a":10,"b":20,"name":"sahil"}

# Pretty print with jq
echo "{a: 10, b: 20, name: 'sahil'}" | obj-json | jq
# Output:
{
  "a": 10,
  "b": 20,
  "name": "sahil"
}

```
