
/*
#     CloudBoost - Core Engine that powers Bakend as a Service
#     (c) 2014 HackerBay, Inc.
#     CloudBoost may be freely distributed under the Apache 2 License
*/


module.exports = function (){
    return  {
        //Defaults.
        appExpirationTimeFromCache: 86400,
        cacheAppPrefix : 'app',
        cacheSchemaPrefix: 'schema',
        schemaExpirationTimeFromCache: 86400,
        analyticsUrl: 'http://cb-analytics:5555',
        globalDb : "_GLOBAL",
        globalSettings : "_Settings",
        analyticsKey : "109eb359-3d22-4165-9e21-21439637f975",
        logToken : "8939ac60-d759-49ce-852a-95467be01d37",
        logglySubDomain : "backendbox",
        slackWebHook : process.env['SLACK_WEBHOOK'],
        myURL: 'https://api.easyoncloud.com'
    };
};
