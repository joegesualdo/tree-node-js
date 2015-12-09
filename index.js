var Node = (function(value, additional_key_values){
  var atrributes = additional_key_values || {}
  atrributes.value = value
  atrributes.left = null
  atrributes.right = null
  return atrributes
})

module.exports = Node
