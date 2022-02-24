/**
 * @dev file contains all packages required 
 */

module.exports={
    restana: require('restana')({
        disableResponseEvent: true,
      }),
    inputValidator:require('@hapi/joi'),
    bigNumber:require("bignumber.js"),
    chai:require("chai"),
    chaiHttp:require('chai-http'),
    sinon:require('sinon'),
    morgan:require('morgan'),
    bodyParser:require('body-parser'),
    cors:require('cors'),
}