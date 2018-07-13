var recipes = {prop: 1}
var obj = { prop2: 1}


function updateObjectWithKeyAndValue (object, key, value) {
  
  recipes['prop2'] = 2
  
  return recipes
  
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)



function deleteFromObjectByKey (object, key) {
  
  var newObj = Object.assign({}, obj)
  
  delete newObj['prop2']
  
  return newObj
}


deleteFromObjectByKey(recipes, 'prop')

  function destructivelyDeleteFromObjectByKey() {
  
}

