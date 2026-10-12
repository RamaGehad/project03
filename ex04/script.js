const addTask = document.getElementById("addTask")
const taskInput = document.getElementById("taskInput")
const total = document.getElementById("total")
const list = document.getElementById("list")
let counter = 0;

addTask.addEventListener('click',function(){
    let newli = document.createElement("li");
    let delet = document.createElement("button");
    let check = document.createElement("input")
    check.type = "checkbox";
    newli.textContent=taskInput.value
    newli.appendChild(check)
    newli.appendChild(delet)  
    list.appendChild(newli)
    delet.textContent="Delete";
    delet.addEventListener('click',function(){
        newli.remove();
        counter -=1;
        total.textContent="Total Task:" + counter;
    })
    taskInput.value="";
    counter +=1;
    total.textContent="Total Task:" + counter;
    check.addEventListener('click',function(){
        if(check.checked){
            newli.style.textDecoration = "line-through";
        }else{
            newli.style.textDecoration = "none";
        }
    })
    
})
taskInput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
    let newli = document.createElement("li");
    let delet =document.createElement("button");
    let check = document.createElement("input")
    check.type = "checkbox";
    newli.textContent=taskInput.value
    newli.appendChild(check)
    newli.appendChild(delet)  
    list.appendChild(newli)
    delet.textContent="Delete";
    taskInput.value="";
    counter +=1;
    total.textContent="Total Task:" + counter;
     delet.addEventListener('click',function(){
        newli.remove();
        counter -=1;
        total.textContent="Total Task:" + counter;
    })
     check.addEventListener('click',function(){
        if(check.checked){
            newli.style.textDecoration = "line-through";
        }else{
            newli.style.textDecoration = "none";
        }
    })
    }
})
