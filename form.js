async function savetocloud(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let phoneNumber = document.getElementById("number").value;

  const details = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
  };
  // console.log(details)
  try {
    const response = await axios.post(
      "http://localhost:3000/users/add-user",
      details
    );
    console.log(response);
    display(response.data.newUserDetails);
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("number").value = "";
  } catch (error) {
    console.log(error);
  }
}
//FUNCTION TO DISPLAY ON SCREEN//
function display(details) {
  //creating li element
  let parent = document.getElementById("form");
  let li = document.createElement("li");

  li.appendChild(
    document.createTextNode(
      `${details.name}  ${details.email}  ${details.phoneNumber}`
    )
  );

  //Adding delete button
  let deletebutton = document.createElement("button");
  deletebutton.appendChild(document.createTextNode("Delete"));
  deletebutton.onclick = () => {
    axios
      .delete(`http://localhost:3000/users/delete-user/${details.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    parent.removeChild(li);
  };

  //Adding edit button
  let editbutton = document.createElement("button");
  editbutton.appendChild(document.createTextNode("edit"));
  editbutton.onclick = () => {
    axios
      .delete(`http://localhost:3000/users/edit-user/${details.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    parent.removeChild(li);
    document.getElementById("name").value = details.name;
    document.getElementById("mail").value = details.email;
    document.getElementById("number").value = details.phoneNumber;
  };

  li.appendChild(deletebutton); //Appending delete button to li
  li.appendChild(editbutton); //Appending edit button to li
  parent.appendChild(li); //Appending li to parent element
}

// WHENEVER THE PAGE GETS REFRESHED THERE WILL BE A GET REQUEST

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/users")
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        display(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
