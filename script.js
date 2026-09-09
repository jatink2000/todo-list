function addtask() {
    let tasktitle = document.getElementById("title").value
    let taskdescription = document.getElementById("description").value

    let mytask = {
        "title": tasktitle,
        "description": taskdescription
    }
    // already task in localstorage:
    let already_task = JSON.parse(localStorage.getItem("tasks")) || []
    already_task.push(mytask)
    localStorage.setItem("tasks", JSON.stringify(already_task))

    window.location.reload()
}


// display all task : 
let myalltask = JSON.parse(localStorage.getItem("tasks")) || []
let numberoftask=myalltask.length

document.getElementById("count-task").innerHTML=numberoftask

let alltaskbox=document.getElementById("alltaskbox")

myalltask.map((data)=>{
   let task_card= document.createElement("div")
   task_card.className="task-card"

   let task_content= document.createElement("div")
   task_content.className="task-content"

   let content= document.createElement("div")

   let tasktitle= document.createElement("h3")
   tasktitle.innerHTML=data.title

   let des= document.createElement("p")
   des.innerHTML=data.description


    let action= document.createElement("div")
   action.className="action"

   let cmp= document.createElement("button")
   cmp.className="complete"
   cmp.innerHTML=`<i class="fa-solid fa-check"></i> `+"Complete"

   let dlt= document.createElement("button")
   dlt.className="delete"
   dlt.innerHTML=`<i class="fa-solid fa-trash"></i>`


  






   task_card.appendChild(task_content)
   task_content.appendChild(content)
   content.appendChild(tasktitle)
   content.appendChild(des)
   task_card.appendChild(action)
   action.appendChild(cmp)
   action.appendChild(dlt)


   alltaskbox.appendChild(task_card)



})
