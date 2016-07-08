/**
 * FileName: app.js
 * @Author Javid Niftaliyev
 * Student ID: 300742916
 * @description: This is the main javascript file for the current web site.
 * Website(Azure):
 * Website(Github): 
 * 
 */

//IIFE - Immediately invoked Expression 

(function () {
    "use strict";  //doesnt allow variables to be redeclared
    
    var username;
    var password;

var User = {
        ID: "1",
        Name: "admin",
        Email: "admin@example.com",
        Password: "1234",
        Courses: [Course1]
      

};


//use as an array method and send it to User
var Course1 = {

    ID: "1",
    Name: "COMP125",
    Desc: "prog1"
};

/*
var NewUser = new Object();
newUser.ID = "1";
newUser.Name = "Annna";
newUser.Email = "admin@example.com";
newUser.Password = "1234";
*/
//method
var User = {
    name: "Anna",
    age: 47,
    saysHello: function(){
    console.log(this.name + " says Hello");

    }
}

function ContactF() {
        // create a reference for your form
        var contactForms = document.getElementById("contactForms");
        username = document.getElementById("username");
        password = document.getElementById("password");

        contactForms.addEventListener("submit", onFormSubmit);
}
   
   function onFormSubmit(event){

            // stops the form from clearing and trying to submit
            event.preventDefault();
            // displays the forms values to the console
            Users();
            // reset the form
            contactForms.reset();
    }


// Users class
    var Users = function () {
 // Constructor 
        function Users(username, password) {
        }
            

            Users.prototype.SetUsersName = function (){
                this.Username = username;
                this.Password = password;
            };

            Users.prototype.SetUsersName = function (){
                return this.username + password;
                 
            };

            return Users

         

        }

    
function init (){
    
      var users = new Users(username, password);
    
      console.log(" Userame: " +  username);
      console.log(" Password: " + password);
      
    
  //  NewUser.Role = "Editor";
 
}


   
    //call init function when window finishes loading 
    window.addEventListener("load", init);



})();