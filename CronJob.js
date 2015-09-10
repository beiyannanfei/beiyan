var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {
    console.log("%j, aaaa", new Date().toLocaleString());
}, null, true);