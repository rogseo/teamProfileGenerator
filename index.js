const inquirer=require('inquirer');
const Intern=require("./lib/Intern");
const Manager=require("./lib/Manager");
const Engineer=require("./lib/Engineer");
const fs=require("fs");
const generateHTML=require("./lib/generateHTML");

const promptQuestion = (type)=>{
    return [{
        type: 'input',
        message: `What is your ${type}'s name?`,
        name: 'name',
        default: 'Yeon',
      },
      {
        type: 'input',
        message: `What is your ${type}'s ID`,
        name: 'id',
        default: 3,
      },
      {
        type: 'input',
        message: `What is your ${type}'s email`,
        name: 'email',
        default:'rogseo@gmail.com'
      },
      {
        type: 'input',
        message: `What is your ${type}'s office number`,
        name: 'officeNum',
        default:'1234',
        when() {
            return type === 'manager'
        }
      },
      {
        type: 'input',
        message: `What is your team ${type}'s github username`,
        name: 'github',
        default:'rogseo',
        when() {
            return type === 'engineer'
        }
      },
      {
        type: 'input',
        message: `What is your team ${type}'s school`,
        name: 'school',
        default:'UT',
        when() {
            return type === 'intern'
        }
      },
      {
        type: 'list',
        message: `which type of team member would you like to add?`,
        choices:['Engineer','Intern',`I don't want to add anymore`],
        name: 'type',
    },]

}


// TODO: Create a function to write html file
function writeToFile(fileName, markdown) {
    fs.writeFile(fileName, markdown, (err) =>
    err ? console.error(err) : console.log('Success!')
    );}



const employee=[]; // array of employee
async function init() {  
    // Prompt Inquirer questions
    var responses = await inquirer.prompt(promptQuestion('manager'));
    employee.push(new Manager(responses.name,responses.id,responses.email,responses.officeNum));
  
    //Keep asking questions until user choose 'I don't want to add anymore'
    while(responses.type!==`I don't want to add anymore`){
        if(responses.type==='Engineer'){
            responses =await inquirer.prompt(promptQuestion('engineer'));
            employee.push(new Engineer(responses.name,responses.id,responses.email,responses.github));
        }
        else{//if Intern
            responses =await inquirer.prompt(promptQuestion('intern'));
            employee.push(new Intern(responses.name,responses.id,responses.email,responses.school));
        }

    }
    
    console.log("Generating your HTML...")
    const html = generateHTML(employee);
    console.log(html);

  // Write markdown to file
    await writeToFile('./dist/team.html', html);
  
  }
  
  // Function call to initialize app
  init();
  
