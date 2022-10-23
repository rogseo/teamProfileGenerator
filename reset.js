//Removes the team.html file from the dist
//Used in 'npm run reset' script

const fs=require("fs");

if(fs.existsSync('./dist/team.html')){
    fs.unlinkSync('./dist/team.html');
    console.log('./dist/team.html removed');
}