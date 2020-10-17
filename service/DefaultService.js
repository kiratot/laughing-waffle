"use strict";

/**
 * Receives a new candidate nomination from an existing Nova member
 *
 * memberId String The id of the existing nova member that is doing the nomination
 * data Data Body of the nomination (optional)
 * returns apiResult
 **/
exports.membersMemberIdNominationsPOST = function (memberId, data) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      message: "Request message response",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Returns all the non-rejected nominations for the admins to see
 *
 * returns inline_response_201
 **/
exports.nominationsGET = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: [
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "CR7 skills",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "PENDING",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "CR7 skills",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "PENDING",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description:
            "Eu dolore deserunt nisi laborum amet esse. Ex sunt ullamco deserunt excepteur mollit ut velit nostrud consectetur Lorem sunt occaecat minim sunt. Cupidatat quis dolor et pariatur veniam. Occaecat duis incididunt veniam consequat cupidatat fugiat dolore fugiat excepteur. Et quis magna laboris incididunt ut laborum elit. In magna sint consequat deserunt velit ea officia.",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "PENDING",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "He dreams in code",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "PENDING",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "CR7 skills",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "REJECTED",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "CR7 skills",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "PENDING",
        },
        {
          score: {
            involvement: 8,
            talent: 10,
          },
          referrer: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          dateReferred: "2020-08-20T08:40:58.200Z",
          description: "CR7 skills",
          id: "8c8ff55c-11f5-4b3c-8596-3d9831a8934d",
          email: "newcandidate@gmail.com",
          status: "REJECTED",
        },
      ],
      message: "Request message response",
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
