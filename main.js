let btn =document.querySelector("#add");
let input = document.querySelector(".addtask input");
console.log(input)

btn.onclick = function(){
    if(input.value.length==0){
        alert("write a task to add")
    }
    else{
        document.querySelector(".tasks").innerHTML+=` <div class="task">
        <span>${input.value}</span>
        <div class="btns">
        <button class="edit"></button>
        <button class="delete"><box-icon type='solid' name='trash-alt'></box-icon></button></div></div>
        
        `;
        input.value =""
    }

}