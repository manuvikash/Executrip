const Validator = require('fastest-validator');

const V = new Validator();

const schema = {
    uname: {type: "string"},
    pw: {type: "string"}
};

const checker = V.compile(schema);

module.exports = checker;