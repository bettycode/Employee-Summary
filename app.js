const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { ADDRGETNETWORKPARAMS } = require("dns");

const team = []

  
function employeeQuestions(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Pleas enter name."

        },

        {
            type: "input",
            name: "id",
            message: "Pleas enter ID."

        },

        {
            type:"input",
            name: "email",
            message: "Pleas enter the email."
        },

        {
            type: "list",
            name: "Title",
            message: "Pleas choose the title.",
            choices:[

                "Engineer",
                "Intern",
                "Manager"
            ]
        }
    ]
    inquirer.prompt(questions).then(data =>{

        
            if (data.Title === "Engineer"){

                showEngineerQuestions(data);
            }else if(data.Title === "Intern"){

                showInternQuestions(data);
            }else if(data.Title === "Manager"){
                showManagerQuestions(data);
            }
        })
        team.push(questions)
}

// function call to employeeQuestions
employeeQuestions()

//Manager Questions
function showManagerQuestions(){
    const managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "Pleas enter officeNumber."
        }
    ]
    inquirer.prompt(managerQuestions ).then(data =>{
        let moreInfo = new Manager(
            data.name,
            data.id, 
            data.email, 
            data.officeNumber)
        team.push(moreInfo)
        addMore()
    });
}

//Engineer Questions

function  showEngineerQuestions(){
    const EngineerQuestions = [
        {
            type: "input",
            name: "Github",
            message: "Pleas enter Github username."

        }
    ]
    inquirer.prompt(EngineerQuestions ).then(data =>{
        let moreInfo = new Engineer(
            data.name,
            data.id, 
            data.email, 
            data.GitHub)
        team.push(moreInfo)
        addMore()
    });

}


// Intern Question
function  showInternQuestions(){
    const InternQuestions = [
        {
            type: "input",
            name: "school",
            message: "Pleas enter your school."
        }
    ]
    inquirer.prompt(InternQuestions).then(data =>{
        let moreInfo = Intern(
            data.name, 
            data.id, 
            data.email, 
            data.school)
        Team.push(moreInfo)
        addMore()

    })
}
  // After the user has input all employees desired, call the `render` function (required
  // above) and pass in an array containing all employee objects; the `render` function will
  // generate and return a block of HTML including templated divs for each employee!
  
  
 
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
