const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");



function addTask(){
    if(inputBox.value==''){
        alert("you must write something!");
    }
    else{
        //create list 
        let li=document.createElement("li");
        //add input box value to li 
        li.innerHTML=inputBox.value;
        //add new li to list container 
        listContainer.appendChild(li);
        //create new span element 
        let span=document.createElement("span");
        //add croce icon in span 
        span.innerHTML="\u00d7";
        //add created span to li 
        li.appendChild(span);

    }
    //clear input box 
    inputBox.value="";
    //call save data function 
    saveData();
}

//create event listener for list container 
listContainer.addEventListener("click", function(e){
    //check if user click list and it add the class name it "checked"
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //if user click span element it delate parent element 
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


//function to save listContainer data to browser local storage 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//function to show all listContainer data in local storage
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();