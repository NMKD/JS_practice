const objState = {
    age: 45,
    name: "Vasilisa"
}

function setPropertyOfObject() {
    const obj = {}
    return Object.defineProperties(obj, {
        prop1: {
            value: 42,
            writable: true,
            enumerable: true
        },
        prop2: {
            value: "kristina",
            writable: true,
            enumerable: true
        }
    })
}

console.log(setPropertyOfObject().prop1)
console.log(setPropertyOfObject().prop2)
console.log(setPropertyOfObject().hasOwnProperty("prop1"))
console.log(setPropertyOfObject()) // enumerable "true"

console.log(objState.hasOwnProperty("name"))