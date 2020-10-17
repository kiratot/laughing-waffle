'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.membersMemberIdNominationsPOST = function membersMemberIdNominationsPOST (req, res, next) {
  var memberId = req.swagger.params['memberId'].value;
  var data = req.swagger.params['data'].value;
  Default.membersMemberIdNominationsPOST(memberId,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nominationsGET = function nominationsGET (req, res, next) {
  Default.nominationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
