// DOM
// fundaments
// Comm with the server


// Bring in the data from the database
   // Identify where we will be placing the data
        // Select by ID
   // fetch the data
      // convert to readable format => json
// Display
     //loop through the data
     // created a div
     // add the data to the div from each item
     // append the data 

     let entry_list = document.getElementById('entries')
     let dataUrl = 'http://localhost:3000/diaryEntries'
     let postForm = document.getElementById('postForm')
     
      // GET, POST, PUT, DELETE
      // GET 
     fetch(dataUrl)
     .then(res => res.json()) // promise
     .then(data => displayScreen(data)) // json
     
     let displayScreen = (data) => {
         data.map(i => {
            let entry = document.createElement('div')
             entry.innerHTML = `
                 <h3>Title : ${i.title}</h3>
                 <h6>Date : ${i.date}</h6>
                 <p>${i.content}</p>
             `
             entry_list.appendChild(entry)
         })
     }
     
     // POST
     
     // Posting our experiences
         // function
         // access the inputs value and store as variables
         // fetch
             // define method
             // define headers and body
         // convert to json
     // Add eventlistener 
     
     // prevent default
     
     let addDiaryEntry = (event) =>{
         event.preventDefault()
     
         let title  = document.getElementById('title').value
         let date = document.getElementById('date').value
         let experience = document.getElementById('experience').value
     
         console.log("title: ", title)
         console.log("date: ", date)
         console.log(typeof(experience))
     
         
         const entryObj = {
             title: title,
             date: date,
             content: experience
         }
     
         // 2 params
         fetch(dataUrl,{
             method: 'POST',
             headers:{
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(entryObj)
         })
         .then(res => res.json())
         .then(data => console.log(data))
     
     }
     
     postForm.addEventListener('submit',addDiaryEntry)