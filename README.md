## Tree Node 
> A tree node structure 

## Install
```
$ npm install --save tree-node-js 
```

##Usage
```javascript
var Node = require("tree-node-js")
var node1 = Node(22)
```

## API

### `Node(value, additional_attributes)`

| Name | Type | Description |
|------|------|-------------|
| data | `Any` | Data that the node will store
| additional_attrubutes| `Hash` | A hash of additional key values you want the node to have

```javascript
var Node = require("tree-node-js")
var node1 = Node(22, {visited: false})
```
