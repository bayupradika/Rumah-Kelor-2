// Email Submit
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function sendEmail() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (email && name && subject && message && validateEmail(email)) {
    const headers = 'From: ' + name + '<' + email + '>' + '\r\n' +
      'Reply-To: ' + email + '\r\n' +
      'X-Mailer: JavaScript';

    const data = {
      email: email,
      name: name,
      subject: subject,
      message: message,
      headers: headers
    };

    // Assuming you are using AJAX to send the data to the server
    // Replace the AJAX call with your preferred method
    $.ajax({
      type: "POST",
      url: "send_email.php",
      data: data,
      success: function(response) {
        // Handle success response
      },
      error: function(xhr, status, error) {
        // Handle error response
      }
    });
  }
}
