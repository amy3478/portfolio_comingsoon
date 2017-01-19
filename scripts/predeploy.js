var fs = require('fs');
var prompt = require('prompt-sync')();
var file = require('../package.json');

var mode = process.argv[2];

if(mode==='-surge') {
    if(file.homepage) delete file.homepage;
} else {//mode="-ghpages"
    if(!file.homepage) {
        var username = prompt("Your Github Username:");
        var reponame = prompt("Your Repo Name:");
        var page = "https://"+ username +".github.io/" + reponame;
        file.homepage=page;
        console.log('Command-line input received: '+file.homepage);
    }
}
fs.writeFileSync("../package.json", JSON.stringify(file));
