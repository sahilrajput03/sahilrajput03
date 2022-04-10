## Convert javascript object to json cli tool

Source: [sahilrajput03/obj-json](https://github.com/sahilrajput03/obj-json)

[@npm](https://www.npmjs.com/package/obj-json)

Install:

```bash
npm i -g obj-json

# Usage:
echo {a: 10} | obj-json
# Output: {"a":10}

echo [{a: 10, b: 20}] | obj-json
# Output: [{"a":10,"b":20}]

echo '{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}' | obj-json
# Output: {"firstName":"John","lastName":"Doe","age":50,"eyeColor":"blue"}

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
