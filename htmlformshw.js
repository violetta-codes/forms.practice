function validateForm(event) {
    event.preventDefault();

    var password = document.getElementsByName("password")[0].value;
    var subscribe = document.getElementsByName("subscribe")[0].checked;

    var forbiddenPasswords = ["1111", "0000", "qwerty", "54321", "pass"];

    if (forbiddenPasswords.includes(password)) {
      alert("Your password is too simple!");
    } else {
      var message = subscribe ? "Successfully registered and subscribed!" : "Successfully registered!";
      alert(message);
    }
  }