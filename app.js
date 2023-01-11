// Question 1
let name1 = prompt("What is your name");
let name2 = prompt("What is your lover's name");


var lovepercentage = Math.random() * 100;
lovepercentage = Math.floor(lovepercentage) + 1;

if(lovepercentage > 70){
    alert("Your love score is " + lovepercentage + "%. Your love will last forever");
}
else if(lovepercentage > 30 && lovepercentage <= 70){
    alert("Your love score is " + lovepercentage + "%. You need to be more romantic")
}
else if(lovepercentage <= 30){
    alert("Your love score is " + lovepercentage + "%. Your love is like Tom and Jerry")
}

lovepercentage = confirm("Are you satisfied with your love percentage?");



// Question 2 dividing array 1 and array 2
var A = [10, 20, 25, 24, 50];

var B = [5, 4, 5, 6, 2];

var C = [];

for (var i=0; i < A.length; i++) { 
    C.push (A[i] / B[i]);
}
console.log(C)

// Question 3

let profile = [{name:"Rachel", gender:"female"},{name:"John", gender:"male"},{name:"cherish", gender:"female"},
                {name:"fareeda", gender:"female"},{name:"fatima", gender:"female"}]

                // Using the for loop
for (let person of profile){ 
    if (person.gender ==='female')
    // display only female names
    {console.log(person.name)}
}

// using While Loop
let index=0
undefined
while (index<profile.length){
    if (profile[index].gender==='female'){
        console.log(profile[index].name);
    } else {continue;}index++;
}