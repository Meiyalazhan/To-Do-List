const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
const dte = document.getElementById('date');
const tme = document.getElementById('time');

function addtask(){
    if(inputBox.value===''){
        alert("Can't add Empty List")
    } 
    else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    let date = document.createElement('date');
    let time = document.createElement('time');
    date.innerHTML = dte.value;
    time.innerHTML = tme.value;
    list.appendChild(li);
    li.appendChild(date);
    li.appendChild(time);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

list.addEventListener("click", function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem("data");
}
showData();

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addtask();
    }
    else {
        inputBox.focus();
    }
});