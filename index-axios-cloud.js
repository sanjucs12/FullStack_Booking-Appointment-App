

function savetocloud(event){
    event.preventDefault()

    let name=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let number=document.getElementById('number').value;
    
    const details={
        name:name,
        mail:mail,
        number:number
    }
    
    //Saving to local storage
    // localStorage.setItem(name,JSON.stringify(details))

    axios
    .post('https://crudcrud.com/api/d708fa8046f743debd8e8d531dd8f6e2/appointments',details)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        //document.body.innerHTML=document.body.innerHTML+'<h4>Something went wrong</h4>'
        li.appendChild(document.createTextNode('error:adding to database'))
        console.log(err)
    })
    display(details);    
    }
//FUNCTION TO DISPLAY ON SCREEN//
    function display(details){

    let name=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let number=document.getElementById('number').value;

    
    //creating li element
    let parent = document.getElementById('form')
    let li=document.createElement('li')
    //li.textContent=details.name+details.mail+details.number;
    li.appendChild(document.createTextNode(`${name}  ${mail}  ${number}`)); 
    
    //Adding delete button
    let deletebutton=document.createElement('button');
    deletebutton.appendChild(document.createTextNode('Delete'));
    deletebutton.onclick=()=>{
        //localStorage.removeItem(name);
        parent.removeChild(li)
    }
    li.appendChild(deletebutton)  //Appending delete button to li
    
    //Adding delete button
    let editbutton=document.createElement('button');
    editbutton.appendChild(document.createTextNode('edit'));
    editbutton.onclick=()=>{
        //localStorage.removeItem(name);
        parent.removeChild(li);
        document.getElementById('name').value=name;
        document.getElementById('mail').value=mail;
        document.getElementById('number').value=number;
    }
    li.appendChild(editbutton); //Appending edit button to li
    parent.appendChild(li);    //Appending li to parent element
    }

    //WHENEVER THE PAGE GETS REFRESHED THERE WILL BE A GET REQUEST
    window.addEventListener('DOMContentLoaded',()=>{
        axios
        .get('https://crudcrud.com/api/d708fa8046f743debd8e8d531dd8f6e2/appointments')
        .then((response)=>{
            console.log(response)
            for(let i=0; i<response.data.length;i++)
            {
                display(response.data[i].id)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })