
function forget() {
  var auth = firebase.auth();
  var emailAddress = document.getElementById("email_field").value;
  console.log(emailAddress);
  auth.sendPasswordResetEmail(emailAddress).then(function () {
    // Email sent.
    console.log('send!');
    document.getElementById("send_div").style.display = "none";
    document.getElementById("message_div").style.display = "block";
  }).catch(function (error) {
    // An error happened.
    alert(error);
  });
}
