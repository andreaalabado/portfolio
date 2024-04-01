$(document).ready(function () {
  let mode = localStorage.getItem("darkMode") === "true";

  if (mode) {
    $("body").toggleClass("dark-mode");
    $(".dark-mode-button i").removeClass("gg-moon").addClass("gg-sun");
    $(".dark-mode-button i").attr("data-bs-original-title", "Light Mode");
    $("#portfolyo").attr("src", "assets/img/codes/portfolio.png");
  } else {
    $(".dark-mode-button i").removeClass("gg-sun").addClass("gg-moon");
    $(".dark-mode-button i").attr("data-bs-original-title", "Dark Mode");
    $("#portfolyo").attr("src", "assets/img/codes/portfolio-dark.png");
  }

  $(".dark-mode-button").click(function (e) {
    e.preventDefault();

    mode = !mode;

    $("body").toggleClass("dark-mode", mode);

    if (mode) {
      $(".dark-mode-button i").removeClass("gg-moon").addClass("gg-sun");
      $(".dark-mode-button i").attr("data-bs-original-title", "Light Mode");
      $("#portfolyo").attr("src", "assets/img/codes/portfolio.png");
    } else {
      $(".dark-mode-button i").removeClass("gg-sun").addClass("gg-moon");
      $(".dark-mode-button i").attr("data-bs-original-title", "Dark Mode");
      $("#portfolyo").attr("src", "assets/img/codes/portfolio-dark.png");
    }

    localStorage.setItem("darkMode", mode);
  });

  $(document).scroll(function () {
    const scroll_position = $(document).scrollTop();

    $("section").each(function () {
      const top = $(this).offset().top;
      const bottom = top + $(this).height();

      if (scroll_position >= top && scroll_position < bottom) {
        $(".nav-link").removeClass("aktib");
        $('.nav-link[href="#' + this.id + '"]').addClass("aktib");
      }

      if (scroll_position > 100) {
        $(".navbar").css("boxShadow", "0 5px 10px var(--shadow-color)");
      } else {
        $(".navbar").css("boxShadow", "none");
      }
    });
  });

  //progress bar animation
  const progressBar = $(".percent");
  const progressNum = $(".prog");
  const maxProgress = [90, 85, 65, 70, 60];

  progressBar.each(function (index) {
    let counter = 0;
    const progbar = $(this);
    const prognum = progressNum.eq(index);
    let interval;

    function updateProgress() {
      if (counter >= maxProgress[index]) {
        clearInterval(interval);
      } else {
        counter += 1;
        progbar.css("width", counter + "%");
        prognum.html(counter + "%");
      }
    }
    interval = setInterval(updateProgress, 20);
  });

  $(".abawt").click(function () {
    //progress bar animation
    const progressBar = $(".percent");
    const progressNum = $(".prog");
    const maxProgress = [90, 85, 65, 70, 60];

    progressBar.each(function (index) {
      let counter = 0;
      const progbar = $(this);
      const prognum = progressNum.eq(index);
      let interval;

      function updateProgress() {
        if (counter >= maxProgress[index]) {
          clearInterval(interval);
        } else {
          counter += 1;
          progbar.css("width", counter + "%");
          prognum.html(counter + "%");
        }
      }
      interval = setInterval(updateProgress, 20);
    });
  });

  $(".iskils").click(function () {
    //progress bar animation
    const progressBar = $(".percent");
    const progressNum = $(".prog");
    const maxProgress = [90, 85, 65, 70, 60];

    progressBar.each(function (index) {
      let counter = 0;
      const progbar = $(this);
      const prognum = progressNum.eq(index);
      let interval;

      function updateProgress() {
        if (counter >= maxProgress[index]) {
          clearInterval(interval);
        } else {
          counter += 1;
          progbar.css("width", counter + "%");
          prognum.html(counter + "%");
        }
      }
      interval = setInterval(updateProgress, 20);
    });
  });
});
