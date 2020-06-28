
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function init(employeeQuestions) {
   await inquirer.prompt({
      type: "number",
      message: "How many employees on your team?",
      name: "teamMates"
})
           .then((data) => {
               teamMates = data.teamMates + 1;
          });

   for (i = 1; i < teamMates; i++) {
      let name;
      let role;
      let id;
      let email;
      
      await inquirer.prompt([
      { 
          
          type: "input",
          message: "What is the employee's name?",
          name: "name"

      },{
         
          type: "list",
          message: "What is the employee's role?",
          name: "role",
          choices: [
              "Manager",
              "Engineer",
              "Intern" ]

      },{

          type: "number",
          message: "What is the employee's id number?",
          name: "id"

      },{

          type: "input",
          message: "What is the employee's email adress?",
          name: "email"
      }
      ])
          .then((data) => {
              teammates = data.teamMates
              name = data.name;
              role = data.role;
              id = data.id;
              email = data.email;
          });
 //CREATE A SWITCH STATEMENT FOR ALL ROLES, . 
switch (role) {
case "Manager":
await inquirer.prompt([{
    type: "input",
    message: "Office Number?",
    name: "officeNumber"
}])
.then((data) => {
    var manager = new Manager(name, id, email, data.officeNumber);
    manager = fs.readFileSync("templates/manager.html");
});

// REPEAT  SAME STATEMENT AGAIN, WHILE JUST ADJUSTING THE TAGS
// CREATE STATEMENT FOR ENGINEER
break;
case "Engineer":
await inquirer.prompt([{
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub"
}])
.then((data) => {
    var engineer = new Engineer(name, id, email, data.gitHub);
    manager = fs.readFileSync("templates/engineer.html");
});

// CREATE STATEMENT FOR INTERN
break;
case "Intern":
await inquirer.prompt([{
    type: "input",
    message: "What school do you currently attend?",
    name: "school"
}])
.then((data) => {
    var intern = new Intern(name, id, email, data.school);
    manager = fs.readFileSync("templates/intern.html");
});
break;

}


var eliteTeam = fs.readFileSync("templates/main.html");
eliteTeam = eval('`' + eliteTeam + '`');
fs.writeFile("Output/index.html", eliteTeam, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Check out your team page now!");
});

init();
