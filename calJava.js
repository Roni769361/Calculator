let OutPut = document.getElementById("outPutScrin");

function display(num){
    OutPut.value += num;
}

function Calculate(){
    try{
        OutPut.value = eval(OutPut.value);
    }
    catch (err){
        alert("Sorry, Vaia This is not True Number")

    }
}
function Clear(){
    OutPut.value = "";
}
function Delete(){
    OutPut.value = OutPut.value.slice(0,-1);
}