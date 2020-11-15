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


// creates an empty array of employees to push to.
const team = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// =====Questions for manager=======
function showManagerQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Pleas enter Manager's name."

        },

        {
            type: "input",
            name: "id",
            message: "Pleas enter Manager's ID."

        },

        {
            type:"input",
            name: "email",
            message: "Pleas enter Managers email."
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Pleas enter Manager's officeNumber."
        }
    ]).then(data => {
        let moreInfo = new Manager(
            data.name, 
            data.email, 
            data.id, 
            data.officeNumber);
        team.push(moreInfo);
        createTeam();
    })
}


// ======Questions for Engineer======
function showEngineerQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Pleas enter Engineer's name."

        },

        {
            type: "input",
            name: "id",
            message: "Pleas enter Engineer's ID."

        },

        {
            type:"input",
            name: "email",
            message: "Pleas enter Engineer's email."
        },

        {
            type: "input",
            name: "GitHub",
            message: "Pleas enter Engineer's Github ."

        }
      ]).then(data =>{
    console.log(data);
    let moreInfo = new Engineer(
        data.name,
        data.id, 
        data.email, 
        data.GitHub)
        team.push(moreInfo)
    createTeam()
});
}
//======Questions for Intern======
function showInternQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Pleas enter Intern's name."

        },

        {
            type: "input",
            name: "id",
            message: "Pleas enter Intern's ID."

        },

        {
            type:"input",
            name: "email",
            message: "Pleas enter Intern's email."
        },

        {
            type: "input",
            name: "school",
            message: "Pleas enter Intern's school."
        }
      ]).then(data =>{
    console.log(data)
    let moreInfo = new Intern(
        data.name, 
        data.id, 
        data.email, 
        data.school)
        team.push(moreInfo)
    createTeam()

})
}



// fuction to prompt users which employees they want to add.
function createTeam() {
    inquirer
    .prompt([{
        type: "list",
        message: "Choose the employee's job Role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Done adding employees at this time."
        ],
        name: "jobRole"
    }]).then(answers => {
        if (answers.jobRole === "Manager") {
            showManagerQuestions();
        }
        else if (answers.jobRole === "Engineer") {
            showEngineerQuestions();
        }
        else if (answers.jobRole === "Intern") {
            showInternQuestions();
        }
        else
            return writeHTML(team);
        
    })
}


//function to write file
function buildTeam() {
    // statement checks if there is an exisiting filles prior to writing a the file
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    
    createTeam();
    // createTeam() initiates prompt to add an employee
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

//file to render team array
function writeHTML(){
    console.log(team);
    fs.writeFileSync(outputPath, render(team), "UTF-8");
}

// calling function to write file
buildTeam();




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
