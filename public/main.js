let myScore = "";
// let myName = document.getElementById("user-name").value;
// console.log(myName);
// let btn1 = document.querySelector("#submit");
let btn2 = document.querySelector("#get-score");
// //console.log(btn1);
// btn2.addEventListener ("click", getApi);

function GetSelectedValue() {
    var selectedName = document.getElementById("user-name");
    //var selectedText = selectedName.options[selectedName.selectedIndex].innerHTML;
    var selectedValue = selectedName.value;
    alert(" Value: " + selectedValue);
    //console.log(selectedValue);
}


async function getApi(){
    let response = await fetch (`/scores`, {
        mode: "no-cors"});
    let data = await response.json();
    myScore = data.payload[0].name;
    console.log(myScore);

    // if (myName === myScore){

    // }
};
getApi();


function showScore(){

};



// function readScore (string) {
//     let p = document.createElement("p")
//     p.innerText = string;
//     score.appendChild(p);
//     if 
// };

