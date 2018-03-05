firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    // Get idToken
    user.getIdToken().then(function (token) {
      console.log(token);
    });
    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

// FB 登入
function fb_login() {

  const provider = new firebase.auth.FacebookAuthProvider();
  // 自動偵測瀏覽器語言
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorMessage);
  });
}

// google 登入
function google_login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  // 自動偵測瀏覽器語言
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorMessage);
  });
}

// 訪客登入
function phone_login() {
  window.location.href = "phone.html";
}

function changeEmail() {
  // 自動偵測瀏覽器語言
  firebase.auth().useDeviceLanguage();
  // 修改 Email
  var user = firebase.auth().currentUser;
  user.updateEmail("andy6804tw@gmail.com").then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
}


function logout(){
  firebase.auth().signOut();
}
