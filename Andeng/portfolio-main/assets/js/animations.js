$(document).ready(function () {
  const txt = $(".title");

  const txtload = () => {
    setTimeout(() => {
      txt.html("❤️ Web Developer");
    }, 0);
    setTimeout(() => {
      txt.html("❤️ UI/UX Designer");
    }, 1000);
  };
  txtload();
  setInterval(txtload, 500);
});
