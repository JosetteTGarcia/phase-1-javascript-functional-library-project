
const checkForArray = function(collection) {
  return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback){
  for (let element in collection){
    callback(collection[element])
  }
  return collection;
}

function myMap(collection, callback){
  let modifiedArray = []
  for (let element in collection){
    modifiedArray.push(callback(collection[element]))
  }
  return modifiedArray;
}

const myReduce = function(collection, callback, acc) {
  let newCollection = checkForArray(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  const len = newCollection.length;

  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}

function myFind (collection, predicate){
  for (let accessor in collection)
{
  let element = collection[accessor];
  if (predicate(element)){
    return element;
  }
}
}

const myFilter = function(collection, predicate) {
  const newCollection = checkForArray(collection);

  const newArr = [];

  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
  }

  return newArr;
}

function mySize(collection){
  return Object.keys(collection).length;
}

function myFirst (array, n = false){
  return (n) ? array.slice(0, n) : array[0]

}

function myLast (array, n = false){
  return (n) ? array.slice(-n) :array[array.length-1]
}

function myKeys(object){
  return Object.keys(object);
}

function myValues(object){
  return Object.values(object);
}