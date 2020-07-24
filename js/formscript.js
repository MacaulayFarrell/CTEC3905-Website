"use strict";
const btnForm = document.getElementById("btnForm");
const closebtn = document.getElementById("close");

btnForm.addEventListener("click", function() {
  //grab form data and store in variables
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let comments = document.getElementById("comments").value;
  //check if empty
  if (name == "" || email == "" || age == "" || comments == "") {
    alert("A field is empty, please check your responses and try again");
  }
  //display form data if not empty
  else {

    document.getElementById("modal-container").style.display = "block";
    document.getElementById("formReceipt").innerHTML = "<br>Name: " + name + "<br>Email Address: " + email + "<br>Age: " + age + "<br>Comments: " + comments;

    closebtn.addEventListener("click", function() {

      document.getElementById("modal-container").style.display = "none";
      document.getElementById("contact-form").reset();

    });

  }

});
