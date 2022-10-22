const inquirer=require('inquirer');
const Intern=require("./lib/Intern");
const Manager=require("./lib/Manager");
const Engineer=require("./lib/Engineer");
const fs=require("fs");
const generateHTML=require("./lib/generateHTML");
// Employee needed to be required?

const managerQuestion=[{
    type: 'input',
    message: `What is your team manager's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is your team manager's ID`,
    name: 'id',
  },
  {
    type: 'input',
    message: `What is your team manager's email`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What is your team manager's office number`,
    name: 'officeNum',
  },
  {
    type: 'list',
    message: `which type of team member would you like to add?`,
    choices:['Engineer','Intern',`I don't want to add anymore`],
    name: 'type',
}];

const question={
    type: 'list',
    message: `which type of team member would you like to add?`,
    choices:['Engineer','Intern',`I don't want to add anymore`],
    name: 'type',
}

const engineerQuestion=[{
    type: 'input',
    message: `What is your team Engineer's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is your team engineer's ID`,
    name: 'id',
  },
  {
    type: 'input',
    message: `What is your team engineer's email`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What is your team engineer's github`,
    name: 'github',
  },
  {
    type: 'list',
    message: `which type of team member would you like to add?`,
    choices:['Engineer','Intern',`I don't want to add anymore`],
    name: 'type',
}];

const internQuestion=[{
    type: 'input',
    message: `What is your team intern's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is your team intern's ID`,
    name: 'id',
  },
  {
    type: 'input',
    message: `What is your team intern's email`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What is your team intern's school`,
    name: 'school',
  },
  {
    type: 'list',
    message: `which type of team member would you like to add?`,
    choices:['Engineer','Intern',`I don't want to add anymore`],
    name: 'type',
}];

  // TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(fileName, markdown, (err) =>
    err ? console.error(err) : console.log('Success!')
    );}



const employee=[];
async function init() {  
    // Prompt Inquirer questions
    var responses = await inquirer.prompt(managerQuestion);
    //create class manager
    //const manager=new Manager(responses.name,responses.id,responses.email,responses.officeNum);
    employee.push(new Manager(responses.name,responses.id,responses.email,responses.officeNum));
  

    while(responses.type!==`I don't want to add anymore`){
        if(responses.type==='Engineer'){
            responses =await inquirer.prompt(engineerQuestion);
            employee.push(new Engineer(responses.name,responses.id,responses.email,responses.github));
            console.log('engineer',responses);

        }
        else{//if Intern
            responses =await inquirer.prompt(internQuestion);
            employee.push(new Intern(responses.name,responses.id,responses.email,responses.school));
            console.log('engineer',responses);
        }

    }
    
  

    console.log("Generating your HTML...")
    const html = generateHTML(employee);
    console.log(html);

  // Write markdown to file
  await writeToFile('team.html', html);
  
  }
  
  // Function call to initialize app
  init();
  
