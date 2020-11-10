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

const Team = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// question for every one

function employeeQuestions(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Pleas enter name."

        },

        {
            type: "input",
            id: "id",
            message: "Pleas enter ID."

        },

        {
            type:"input",
            email: "email",
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
        Team.push(questions)
}

// function call to employeeQuestions
employeeQuestions()

//Manager Questions
function showManagerQuestions(more){
    const managerQuestions = [
        {
            type: "input",
            name: "officeNumber",
            message: "Pleas enter officeNumber."
        }
    ]
    inquirer.prompt(managerQuestions ).then(data =>{
        let moreInfo = new Manager(more.name,more.id, more.email, more.officeNumber)
        Team.push(moreInfo)
        addMore()
    });
}

//Engineer Questions

function  showEngineerQuestions(more){
    const EngineerQuestions = [
        {
            type: "input",
            name: "Github",
            message: "Pleas enter Github username."

        }
    ]
    inquirer.prompt(EngineerQuestions ).then(data =>{
        let moreInfo = new Engineer(more.name,more.id, more.email, more.GitHub)
        Team.push(moreInfo)
        addMore()
    });

}


// Intern Question
function  showInternQuestions(more){
    const InternQuestions = [
        {
            type: "input",
            name: "school",
            message: "Pleas enter your school."
        }
    ]
    inquirer.prompt(InternQuestions).then(data =>{
        let moreInfo = Intern(more.name, more.id, more.email, more.school)
        Team.push(moreInfo)
        addMore()

    })
}

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
