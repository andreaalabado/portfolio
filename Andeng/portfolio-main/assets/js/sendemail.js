$(document).ready(function () {
  $(".form").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const msg = $("#message").val();

    const content =
      "Name: " +
      name +
      "<br/>" +
      "Email: " +
      email +
      "<br/>" +
      "Subject: " +
      subject +
      "<br/>" +
      "Message: " +
      msg;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "andreaalabado",
      Password: "92F5B68CB3D49DE9F6DBFC0C0B1875BFCC3B",
      To: "Alabado@gmail.com",
      From: "Alabado@gmail.com",
      Subject: "Message from portfolio contact form",
      Body: content,
    }).then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message has been sent.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          $(".form")[0].reset();
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Message not sent.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          $(".form")[0].reset();
        });
      }
    });
  });
});
