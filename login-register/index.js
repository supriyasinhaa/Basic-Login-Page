  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCiNNAyG6ussU2-gtEt6pnStPwoDt4IZvw",
    authDomain: "form-d7245.firebaseapp.com",
    databaseURL: "https://form-d7245.firebaseio.com",
    projectId: "form-d7245",
    storageBucket: "form-d7245.appspot.com",
    messagingSenderId: "12661355616",
    appId: "1:12661355616:web:fee6112ea9a28dde4bbf05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =firebase.auth();

  function signUp() {
      var email = document.getElementById("emailREG");
      var password = document.getElementById("regPass");

      const promise =auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      // Save message
     
      // Show alert
      document.querySelector('.alert').style.display = 'block';

      // Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

      // Clear form
      document.getElementById('registerform').reset();
      // alert("signed up");
      
  }
  function signInform(){
    var email = document.getElementById("FormEmail");
    var password = document.getElementById("FormPassword");

   
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('loginform').reset();
    promise.then(() => {
        alert("welcome");
        window.location.replace("main.html");
    });
  }


function signOut() {
    firebase.auth().signOut().then(function () {
      console.log("you logged off");
  
     
   location.href = 'index.html';
    }).catch(function (error) {
      alert(error);
    });
  }
// auth.onAuthStateChanged(function(user){
//     if(user){
//         var email = user.email;
//         alert("Active User " + email); 
//     }else{
//         alert("No Active User");
//     }
// });
// $("#reset").click(function(){
// var auth =firebase.auth();
// var email =$("#FormEmailReset").val();
// if(email!=""){
//   auth.sendPasswordResetEmail(email).then(function(){
//     window.alert("Email has been sent to you , Please check and verify");
//   })
//   .catch(function(){
//     var errorCode = error.code;
//     var errorMessage =error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     Window.alert("Message"+errorMessage);
//   });
// }
// else{
//   Window.alert("Please write your email first");
// }
// });

function reset(){
  var auth =firebase.auth();
  var email =document.getElementById("FormEmailReset").value;
  if(email!=""){
    auth.sendPasswordResetEmail(email).then(function(){
      window.alert("Email has been sent to you , Please check and verify");
    })
    .catch(function(){
      var errorCode = error.code;
      var errorMessage =error.message;
      console.log(errorCode);
      console.log(errorMessage);
      Window.alert("Message"+errorMessage);
    });
  }
  else{
    Window.alert("Please write your email first");
  }
}




// navbar
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
// end






