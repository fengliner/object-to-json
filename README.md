# object2json

convert object to standard format json

## INSTALL

  npm install object2json

## DEMO

```js
var object2json = require('object2json');

var user = {
  id: 1,
  name: 'fengliner',
  color: {
    id: 1,
    name: 'fengliner'
  },
  font: ['crazy' ,3, {id: 1, name: 'fengliner'}]
};

console.log(object2json(user));

/**
{
  "id": 1,
  "name": "fengliner",
  "color": {
  "id": 1,
  "name": "fengliner"
},
  "font": ["crazy",3,{
  "id": 1,
  "name": "fengliner"
}]
}
 */
```
