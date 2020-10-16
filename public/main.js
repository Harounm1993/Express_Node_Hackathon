let myScore = "";
let myName = 

async function getApi(){
    let response = await fetch (`/scores`, {
        mode: "no-cors"});
    let data = await response.json();
    myScore = data.payload[0].name;
    console.log(myScore);

    if (myName === myScore){

    }
};
getApi();

