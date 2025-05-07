#!/bin/bash
file="thinking-by-cherry.html"
wget --output-document=$file "https://docs.google.com/document/d/1kfDwNhR5-BBSyCbtbSrMjM6mr9lczs3DT46o1Y5l9Dg/export?format=html"

# Using prettier for readability of your code: (not necessary but if you use sed to update lines a space after : is added and we need to also specify the space in `sed` as well)
npm i -g prettier
prettier --write $file


# to remove - "max-width: 468pt;"
# to replace - "padding: 72pt 72pt 72pt 72pt;" with "padding: 0% 5%;"
# sed -i '' 's/max-width: 468pt;//g' "$file"
# sed -i '' 's/padding: 72pt 72pt 72pt 72pt;/padding: 0% 5%;/g' "$file"
