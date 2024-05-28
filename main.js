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
        <button class="edit"><span class="material-symbols-outlined">
        edit
        </span></button>
        <button class="delete"><span class="material-symbols-outlined">
        delete
        </span></button></div></div>
        
        `;
        input.value ="";

        let current_task_delete =document.querySelectorAll(".delete");
        for(i=0;i<current_task_delete.length;i++){
            current_task_delete[i].onclick=function(){
                this.parentNode.parentNode.remove();
            }
        }
        let current_task_edit=document.querySelectorAll(".edit");
        for(i=0;i<current_task_edit.length;i++){
            current_task_edit[i].onclick=function(){
                input.value=this.parentNode.parentNode.firstElementChild.innerText;
                this.parentNode.parentNode.remove();
            }
        }

    }

}