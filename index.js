//Problem 1
let my_name = "Kevin";  //These are my variables to be used in the template
let my_id = "2112";
let my_address = "Memphis, TN";

let my_template_string = `My name is ${my_name}.
My ID is ${my_id}.
My address is ${my_address}.`;  //this template incorporates my variables

console.log(my_template_string); //checking to see if it worked

//Problem 2
var contestant = "1_M_l337!";
var score = "9001";

let congratsMessage = `Congratulations ${contestant} !!, Your score is ${score}.`;
console.log(congratsMessage); //checks to see if the variables were stored in my template variable


//Problem 3
function printParent() {
    for (let index in familyListing) {
        console.log(`Parent's name: ` + familyListing[index].parent);
        for (let idx in familyListing[index].children) {
            console.log(`Children: ` + familyListing[index].children[idx]);
        }
    }
}



let familyListing =
    [
        {
            parent: "Mr. Bill",
            children: ["Sluggo", "Spot", "Linda"]
        },
        {
            parent: "Nancy R.",
            children: ["Stan"]
        },
        {
            parent: "J. Page",
            children: ["Mick", "Robert", "John", "Kenny"]
        },
        {
            parent: "Randolh H.",
            children: ["Biffy", "Carl Jr."]
        }
    ];

printParent();
