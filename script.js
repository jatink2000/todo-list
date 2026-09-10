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

   cmp.addEventListener("click",()=>task_cmp(data))


   let dlt= document.createElement("button")
   dlt.className="delete"
   dlt.innerHTML=`<i class="fa-solid fa-trash"></i>`

   dlt.addEventListener("click",()=>task_dlt(data))

   task_card.appendChild(task_content)
   task_content.appendChild(content)
   content.appendChild(tasktitle)
   content.appendChild(des)
   task_card.appendChild(action)
   action.appendChild(cmp)
   action.appendChild(dlt)

   alltaskbox.appendChild(task_card)
})



// delete task
let task_dlt=(dltitem)=>{
    let remainging_task=myalltask.filter(data=> data.title!=dltitem.title)
    localStorage.setItem("tasks",JSON.stringify(remainging_task))
    window.location.reload()
} 


// complete task : 
let task_cmp=(cmptask)=>{
    let remainging_task=myalltask.filter(data=> data.title!=cmptask.title)
    localStorage.setItem("tasks",JSON.stringify(remainging_task))

    let allcpmtask= JSON.parse(localStorage.getItem("completetask"))||[]
    allcpmtask.push(cmptask)
    localStorage.setItem("completetask",JSON.stringify(allcpmtask))
    window.location.reload()

}




// display completed task : 
let myallcompletetask= JSON.parse(localStorage.getItem("completetask")) || []
let numberofcmptask=myallcompletetask.length
document.getElementById("countcmp").innerHTML=numberofcmptask

let mycpmtask=document.getElementById("mycpmtask")

myallcompletetask.map((item)=>{
    let task_card=document.createElement("div")
    task_card.className="task-card completed"

    let task_content=document.createElement("div")
    task_content.className="task-content"

    let checked=document.createElement("span")
    checked.innerHTML=`<i class="fa-solid fa-check"></i>`
    checked.className="checked"

    let content=document.createElement("div")
    let cpmtitle=document.createElement("h3")
    cpmtitle.innerHTML=item.title

    let cpmdes=document.createElement("p")
    cpmdes.innerHTML=item.description

    let dltbtn=document.createElement("button")
    dltbtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
    dltbtn.className="delete"


    task_card.appendChild(task_content)
    task_content.appendChild(checked)
    task_content.appendChild(content)
    content.appendChild(cpmtitle)
    content.appendChild(cpmdes)
    task_card.appendChild(dltbtn)


    mycpmtask.appendChild(task_card)
})
