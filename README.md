# Javascript code

### All the POCs and garbage code goes here.

* **Prototype Pollution** - `routes/prototypepollution`

    Normal assignment - `http://localhost:3000/proto?attr=__proto__&value={"admin":"true"}`

    Object.assign - `http://localhost:3000/proto/2?value={"__proto__":{"admin":"true"}}`

    Spread operator - `http://localhost:3000/proto/3?value={"__proto__":{"admin":"true"}}`

    Notes:

    The item that you are assigning to `__proto__` must be an object. It doesn't seem to work if it is a string literal which kind of makes sense. Wasted a day figuring out this lol but it was good learning. Just so I dont forget this,

    `const obj = Object.assign({}, JSON.parse(req.query.value))` works but `const obj = Object.assign({}, req.query.value)` doesn't. It has got to be an object.