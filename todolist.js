let Tasklist = []

    const ul = document.querySelector(".ul")
    const task = document.querySelector("#Task")
    const btn = document.querySelector(".btn")

    btn.addEventListener('click', (e) => {

        const input = task.value.trim()

        if (input !== '') {
            
           Tasklist.push(input);
           
           updateTasklist();
           
           task.value = ""
        }

        else {
            alert("please Enter Your Task")
        }
    })

    function updateTasklist(){


        ul.innerHTML =""

        Tasklist.forEach((task , index)=>{
            
            const li = document.createElement("li")
               li.className = "li"
               li.innerHTML = task
    
               //  Foe delete Button creation
               const delbtn = document.createElement("button")
               delbtn.className = 'delbtn'
               delbtn.textContent = 'Delete'
    
               li.append(delbtn)
               ul.appendChild(li)
    
    
               delbtn.addEventListener("click" , ()=>{
                   removeTask(index);
               })
        })
    

    }

    function removeTask(index){

        // Tasklist.splice(index ,1)

        // updateTasklist();

        const removeli = ul.children[index];

        ul.removeChild(removeli);

        Tasklist.splice(index , 1)
    }