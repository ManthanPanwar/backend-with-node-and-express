const localhost = "http://localhost:3000/user";

const form = document.querySelector("#contact-form");
const ul = document.querySelector("#detailAdded");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value == "" || email.value == "" || phone.value == "") {
    const msg = document.querySelector("#msg");
    msg.className = "form-container";
    msg.innerHTML = "Enter All Fields";
    msg.style.color = "red";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    let myObj = {
      username: username.value,
      email: email.value,
      phone: phone.value,
    };
    axios.post(`${localhost}/add-user`, myObj).then(() => showUser(myObj));
  }
  form.reset();
});

{
  function displayUser() {
    axios
      .get(`${localhost}`)
      .then((res) => {
        res.data.forEach((obj) => {
          showUser(obj, obj.id);
        });
      })
      .catch((err) => console.log(err));
  }
  window.addEventListener("DOMContentLoaded", displayUser);
}

function showUser(obj, id) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `${obj.username} - ${obj.email} - ${obj.phone} 
  <button class="delete-btn" onclick=deleteUser('${id}')>Delete</button> 
  <button class="edit-btn" onclick=editUser('${id}')>Edit</button>`;
  ul.appendChild(newLi);
}

function deleteUser(id) {
  ul.removeChild(event.target.parentElement);
  axios
    .post(`${localhost}/delete-user/${id}`)
    .then((res) => {
      console.log(res);
      console.log("userdeletedsuccess");
    })
    .catch((err) => {
      console.error(err);
      console.log("userdeleteerror");
    });
}

async function editUser(id) {
  ul.removeChild(event.target.parentElement);

  await axios.get(`${localhost}/${id}`).then((res) => {
    username.value = res.data.username;
    email.value = res.data.email;
    phone.value = res.data.phone;
    axios
      .post(`${localhost}/edit-user/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  });
}
