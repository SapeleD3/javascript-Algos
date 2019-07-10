/* function getTeneray(num){
    return num > 0 ? "positive" : num < 0 ? "Negative" : "Zero";
}

console.log(getTeneray(0)); */





/* let Profile = [
    {
        "firstName" : "preye",
        "lastName" : "Goodluck",
        "number" : "Unknown",
        "likes" : ["football", "woman", "Argument"]
    },
    {
        "firstName" : "Moses",
        "lastName" : "Sapele",
        "number" : "07065336536",
        "likes" : ["football", "Javascript", "Gaming"]
    }
];

function lookUpProfile(name, prop){

    for (let i = 0; i < Profile.length; i++){
        if(Profile[i].firstName === name){
            return Profile[i][prop] || "No ssuch property";
        }
    } return "No such profile";
}

let data = lookUpProfile("preye", "likes");

console.log(data); */

























/* function input (){
    for (let i = 1; i <= 100; i++){
        if(i%3==0 && i%5==0){
            console.log("fizz buzz")
        } else if (i%5 == 0){
            console.log("buzz")
        } else if (i%3==0 ) {
            console.log("fizz");
        }  else {
            console.log(i);
        }
        
    }
}
setInterval(input(), 8000); */




















/* function nextInlinee(arr, item){
    arr.push(item);

    return arr.shift();
}

pushArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(pushArr));
console.log(nextInlinee(pushArr, 6));
console.log("After: " + JSON.stringify(pushArr)); */