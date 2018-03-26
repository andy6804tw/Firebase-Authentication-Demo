firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    // Get idToken
    user.getIdToken().then(function (token) {
      console.log(token);
    });
    if (user != null) {

      var phone = user.phoneNumber;
      document.getElementById("user_para").innerHTML = "User phone: " + phone;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

//window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': function (response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
function onSignInSubmit(){
  firebase.auth().signInWithPhoneNumber(document.getElementById("phone_field").value, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      // 簡訊傳送成功隱藏
      document.getElementById("phone_div").style.display = "none";
      document.getElementById("verification_div").style.display = "block";
    });
}

var myFunction = function () {
  console.log(document.getElementById("verificationcode").value);
  // window.confirmationResult.confirm(document.getElementById("verificationcode").value)
  //   .then(function (result) {
  //     alert('login process successfull!\n redirecting');
  //     alert('<a href="javascript:alert(\'hi\');">alert</a>')
  //     window.location.href = "details.html";
  //   }, function (error) {
  //     alert(error);
  //   });
  const code = document.getElementById("verificationcode").value;
  //console.log(window.confirmationResult.verificationId+' '+code)
  var credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, code);
  firebase.auth().signInWithCredential(credential);
};

// 登出
function logout() {
  firebase.auth().signOut();
}
