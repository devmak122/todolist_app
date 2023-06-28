const inputBox=document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert("enter the task!!");
    }
        else{
            let li=document.createElement("li");
            li.innerHTML =inputBox.value;
            listcontainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        savaData();

    }
    listcontainer.addEventListener("click" , function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savaData();
        }
        else if(e.target.tagName === "span"){
            e.target.parentElement.remove();
            savaData();

        }
    },false);

    function savaData(){
        localStorage.setItem("data",listContainer.innerHTML);

    }
    function showtask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showtask();
