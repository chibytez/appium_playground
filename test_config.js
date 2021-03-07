exports.config = {
    runner: 'local',
    port:4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    frameWork: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances:1,
    sync: true,
    specs: [
        './play_with_mocha.js'
    ],
    capabilities:[{
        "platformName": "Android",
        "automationName": "UIAutomator2",
        "udid": "9SF3Y18312001031",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity"
      }]
    }