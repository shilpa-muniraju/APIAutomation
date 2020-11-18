$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/servicetests.feature");
formatter.feature({
  "line": 2,
  "name": "API services validation flows for Posts, Comments and Users services",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate that user can send \"Posts\" api service request successfully and ensure api returns appropriate \"Post\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validatepostsapi"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I setup the required URI to run posts service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send the posts api service request with given input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the posts service response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I validate the posts api service returns appropriate number of posts from system \"\u003cnumofposts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate posts api returns response with appropriate details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate posts api response includes given attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofposts"
      ],
      "line": 18,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;1"
    },
    {
      "cells": [
        "userId - 5",
        "200",
        "10"
      ],
      "line": 19,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;2"
    },
    {
      "cells": [
        "id - 50",
        "200",
        "1"
      ],
      "line": 20,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;3"
    },
    {
      "cells": [
        "id - 50,userId - 5",
        "200",
        "1"
      ],
      "line": 21,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1141800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate that user can send \"Posts\" api service request successfully and ensure api returns appropriate \"Post\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 4,
      "name": "@validatepostsapi"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I setup the required URI to run posts service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send the posts api service request with given input parameters \"userId - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the posts service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I validate the posts api service returns appropriate number of posts from system \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate posts api returns response with appropriate details \"userId - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate posts api response includes given attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 116107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "userId - 5",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 4312117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 5796000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "posts",
      "offset": 63
    },
    {
      "val": "10",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 85727800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "userId - 5",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1331100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 4918700,
  "status": "passed"
});
formatter.after({
  "duration": 1337500,
  "status": "passed"
});
formatter.before({
  "duration": 15312900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate that user can send \"Posts\" api service request successfully and ensure api returns appropriate \"Post\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 4,
      "name": "@validatepostsapi"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I setup the required URI to run posts service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send the posts api service request with given input parameters \"id - 50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the posts service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I validate the posts api service returns appropriate number of posts from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate posts api returns response with appropriate details \"id - 50\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate posts api response includes given attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 2395500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "id - 50",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1225110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 3963800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "posts",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 13876800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "id - 50",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 4421400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 7329200,
  "status": "passed"
});
formatter.after({
  "duration": 1932300,
  "status": "passed"
});
formatter.before({
  "duration": 4250600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate that user can send \"Posts\" api service request successfully and ensure api returns appropriate \"Post\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"posts\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"post\"-information-from-social-network-system;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 4,
      "name": "@validatepostsapi"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I setup the required URI to run posts service",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I send the posts api service request with given input parameters \"id - 50,userId - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the posts service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I validate the posts api service returns appropriate number of posts from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate posts api returns response with appropriate details \"id - 50,userId - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I validate posts api response includes given attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 4752000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "id - 50,userId - 5",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1206649900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 2848500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 15
    },
    {
      "val": "posts",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 3088200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    },
    {
      "val": "id - 50,userId - 5",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 3659000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 940400,
  "status": "passed"
});
formatter.after({
  "duration": 1194100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validate that user can send \"Comments\" api service request successfully and ensure api returns appropriate \"Comment\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@validatecommentsapi"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I setup the required URI to run comments service",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I send the comments api service request with given input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I validate the comments service response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate the comments api service returns appropriate number of comments from system \"\u003cnumofcomments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I validate comments api returns response with appropriate details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate comments api response includes given attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 34
    },
    {
      "cells": [
        "id"
      ],
      "line": 35
    },
    {
      "cells": [
        "name"
      ],
      "line": 36
    },
    {
      "cells": [
        "body"
      ],
      "line": 37
    },
    {
      "cells": [
        "email"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofcomments"
      ],
      "line": 41,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;1"
    },
    {
      "cells": [
        "postId - 2",
        "200",
        "5"
      ],
      "line": 42,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;2"
    },
    {
      "cells": [
        "email - Mallory_Kunze@marie.org",
        "200",
        "1"
      ],
      "line": 43,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;3"
    },
    {
      "cells": [
        "postId - 2,id - 6",
        "200",
        "1"
      ],
      "line": 44,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1642100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate that user can send \"Comments\" api service request successfully and ensure api returns appropriate \"Comment\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 26,
      "name": "@validatecommentsapi"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I setup the required URI to run comments service",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I send the comments api service request with given input parameters \"postId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I validate the comments service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate the comments api service returns appropriate number of comments from system \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I validate comments api returns response with appropriate details \"postId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate comments api response includes given attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 34
    },
    {
      "cells": [
        "id"
      ],
      "line": 35
    },
    {
      "cells": [
        "name"
      ],
      "line": 36
    },
    {
      "cells": [
        "body"
      ],
      "line": 37
    },
    {
      "cells": [
        "email"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 3096000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "postId - 2",
      "offset": 69
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1258929400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 2740600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "comments",
      "offset": 66
    },
    {
      "val": "5",
      "offset": 88
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 4079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "postId - 2",
      "offset": 67
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1532600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 1857700,
  "status": "passed"
});
formatter.after({
  "duration": 2415100,
  "status": "passed"
});
formatter.before({
  "duration": 1314000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Validate that user can send \"Comments\" api service request successfully and ensure api returns appropriate \"Comment\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 26,
      "name": "@validatecommentsapi"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I setup the required URI to run comments service",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I send the comments api service request with given input parameters \"email - Mallory_Kunze@marie.org\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I validate the comments service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate the comments api service returns appropriate number of comments from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I validate comments api returns response with appropriate details \"email - Mallory_Kunze@marie.org\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate comments api response includes given attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 34
    },
    {
      "cells": [
        "id"
      ],
      "line": 35
    },
    {
      "cells": [
        "name"
      ],
      "line": 36
    },
    {
      "cells": [
        "body"
      ],
      "line": 37
    },
    {
      "cells": [
        "email"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 4813600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "email - Mallory_Kunze@marie.org",
      "offset": 69
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1254756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 2535500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "comments",
      "offset": 66
    },
    {
      "val": "1",
      "offset": 88
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 2160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "email - Mallory_Kunze@marie.org",
      "offset": 67
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1600700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 1459100,
  "status": "passed"
});
formatter.after({
  "duration": 1728500,
  "status": "passed"
});
formatter.before({
  "duration": 1499900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Validate that user can send \"Comments\" api service request successfully and ensure api returns appropriate \"Comment\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"comments\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"comment\"-information-from-social-network-system;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 26,
      "name": "@validatecommentsapi"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I setup the required URI to run comments service",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I send the comments api service request with given input parameters \"postId - 2,id - 6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I validate the comments service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate the comments api service returns appropriate number of comments from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I validate comments api returns response with appropriate details \"postId - 2,id - 6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate comments api response includes given attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 34
    },
    {
      "cells": [
        "id"
      ],
      "line": 35
    },
    {
      "cells": [
        "name"
      ],
      "line": 36
    },
    {
      "cells": [
        "body"
      ],
      "line": 37
    },
    {
      "cells": [
        "email"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 4129400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "postId - 2,id - 6",
      "offset": 69
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1219569800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 1496100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 15
    },
    {
      "val": "comments",
      "offset": 66
    },
    {
      "val": "1",
      "offset": 88
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 2182900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    },
    {
      "val": "postId - 2,id - 6",
      "offset": 67
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1465500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 978100,
  "status": "passed"
});
formatter.after({
  "duration": 833700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Validate that user can send \"Users\" api service request successfully and ensure api returns appropriate \"user\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@validateuserapi"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I setup the required URI to run users service",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I send the users api service request with given input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I validate the users service response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I validate the users api service returns appropriate number of users from system \"\u003cnumofusers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate users api returns response with appropriate details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I validate users api response includes given attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 55
    },
    {
      "cells": [
        "name"
      ],
      "line": 56
    },
    {
      "cells": [
        "phone"
      ],
      "line": 57
    },
    {
      "cells": [
        "email"
      ],
      "line": 58
    },
    {
      "cells": [
        "website"
      ],
      "line": 59
    },
    {
      "cells": [
        "company"
      ],
      "line": 60
    },
    {
      "cells": [
        "address"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofusers"
      ],
      "line": 64,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;1"
    },
    {
      "cells": [
        "id - 1",
        "200",
        "1"
      ],
      "line": 65,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;2"
    },
    {
      "cells": [
        "username - Karianne",
        "200",
        "1"
      ],
      "line": 66,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;3"
    },
    {
      "cells": [
        "name - Clementine Bauch,website - ramiro.info,username - Samantha",
        "200",
        "1"
      ],
      "line": 67,
      "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 795900,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Validate that user can send \"Users\" api service request successfully and ensure api returns appropriate \"user\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 47,
      "name": "@validateuserapi"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I setup the required URI to run users service",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I send the users api service request with given input parameters \"id - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I validate the users service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I validate the users api service returns appropriate number of users from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate users api returns response with appropriate details \"id - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I validate users api response includes given attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 55
    },
    {
      "cells": [
        "name"
      ],
      "line": 56
    },
    {
      "cells": [
        "phone"
      ],
      "line": 57
    },
    {
      "cells": [
        "email"
      ],
      "line": 58
    },
    {
      "cells": [
        "website"
      ],
      "line": 59
    },
    {
      "cells": [
        "company"
      ],
      "line": 60
    },
    {
      "cells": [
        "address"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 1885300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "id - 1",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1244291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 1305200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "users",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 1799400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "id - 1",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1486900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 1415000,
  "status": "passed"
});
formatter.after({
  "duration": 1691900,
  "status": "passed"
});
formatter.before({
  "duration": 1232700,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Validate that user can send \"Users\" api service request successfully and ensure api returns appropriate \"user\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 47,
      "name": "@validateuserapi"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I setup the required URI to run users service",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I send the users api service request with given input parameters \"username - Karianne\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I validate the users service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I validate the users api service returns appropriate number of users from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate users api returns response with appropriate details \"username - Karianne\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I validate users api response includes given attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 55
    },
    {
      "cells": [
        "name"
      ],
      "line": 56
    },
    {
      "cells": [
        "phone"
      ],
      "line": 57
    },
    {
      "cells": [
        "email"
      ],
      "line": 58
    },
    {
      "cells": [
        "website"
      ],
      "line": 59
    },
    {
      "cells": [
        "company"
      ],
      "line": 60
    },
    {
      "cells": [
        "address"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 3833800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "username - Karianne",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1250600600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 2700200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "users",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 2835600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "username - Karianne",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 1166800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 10318700,
  "status": "passed"
});
formatter.after({
  "duration": 1240400,
  "status": "passed"
});
formatter.before({
  "duration": 1384300,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Validate that user can send \"Users\" api service request successfully and ensure api returns appropriate \"user\" information from social network system",
  "description": "",
  "id": "api-services-validation-flows-for-posts,-comments-and-users-services;validate-that-user-can-send-\"users\"-api-service-request-successfully-and-ensure-api-returns-appropriate-\"user\"-information-from-social-network-system;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apiserviceval"
    },
    {
      "line": 47,
      "name": "@validateuserapi"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I setup the required URI to run users service",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I send the users api service request with given input parameters \"name - Clementine Bauch,website - ramiro.info,username - Samantha\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I validate the users service response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I validate the users api service returns appropriate number of users from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I validate users api returns response with appropriate details \"name - Clementine Bauch,website - ramiro.info,username - Samantha\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I validate users api response includes given attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 55
    },
    {
      "cells": [
        "name"
      ],
      "line": 56
    },
    {
      "cells": [
        "phone"
      ],
      "line": 57
    },
    {
      "cells": [
        "email"
      ],
      "line": 58
    },
    {
      "cells": [
        "website"
      ],
      "line": 59
    },
    {
      "cells": [
        "company"
      ],
      "line": 60
    },
    {
      "cells": [
        "address"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 32
    }
  ],
  "location": "APIServiceTestStepDefs.setupTheRequiredURIToRunGivenService(String)"
});
formatter.result({
  "duration": 3494200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "name - Clementine Bauch,website - ramiro.info,username - Samantha",
      "offset": 66
    }
  ],
  "location": "APIServiceTestStepDefs.sendTheGivenApiServiceRequestUsingRequiredParameters(String,String)"
});
formatter.result({
  "duration": 1205352700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceResponseCode(String,String)"
});
formatter.result({
  "duration": 2759100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 15
    },
    {
      "val": "users",
      "offset": 63
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "APIServiceTestStepDefs.validateTheApiServiceReturnsAppropriateNumberOfRecords(String,String,String)"
});
formatter.result({
  "duration": 2906900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    },
    {
      "val": "name - Clementine Bauch,website - ramiro.info,username - Samantha",
      "offset": 64
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiServiceReturnsAppropriateDetails(String,String)"
});
formatter.result({
  "duration": 2622400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "users",
      "offset": 11
    }
  ],
  "location": "APIServiceTestStepDefs.validateApiResponseIncludesGivenAttributes(String,DataTable)"
});
formatter.result({
  "duration": 2272800,
  "status": "passed"
});
formatter.after({
  "duration": 4901800,
  "status": "passed"
});
});