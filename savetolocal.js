//for seperating savetolocal function and display function

function savetolocal(event){
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
    localStorage.setItem(name,JSON.stringify(details))
    display();    
    }

    function display(){

    let name=document.getElementById('name').value;
    let mail=document.getElementById('mail').value;
    let number=document.getElementById('number').value;
    
    //creating li element
    let parent = document.getElementById('form')
    let li=document.createElement('li')
    li.appendChild(document.createTextNode(`${name}  ${mail}  ${number}`)); 
    
    //Adding delete button
    let deletebutton=document.createElement('button');
    deletebutton.appendChild(document.createTextNode('Delete'));
    deletebutton.onclick=()=>{
        localStorage.removeItem(name);
        parent.removeChild(li)
    }
    li.appendChild(deletebutton)  //Appending delete button to li
    
    //Adding delete button
    let editbutton=document.createElement('button');
    editbutton.appendChild(document.createTextNode('edit'));
    editbutton.onclick=()=>{
        localStorage.removeItem(name);
        parent.removeChild(li);
        document.getElementById('name').value=name;
        document.getElementById('mail').value=mail;
        document.getElementById('number').value=number;
    }
    li.appendChild(editbutton); //Appending edit button to li
    parent.appendChild(li);    //Appending li to parent element
    }