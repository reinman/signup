$(document).ready(function () {
  /* =========================
   ScrollReveal
   (on scroll fade animations)
   ============================*/
  var revealConfig = {vFactor: 0.20}
  window.sr = new scrollReveal(revealConfig);


  /* =========================
   Detect Mobile Device
   ============================*/
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };


  /* ===========================
   jQuery One Page Navigation
   ==============================*/
  $('#main-nav').onePageNav({
    filter: ':not(.external)'
  });



  /* ==================================
   Hero Form Validation
   =====================================*/
  $('#hero-submit').click(function (e) {

    // Stop form submission & check the validation
    e.preventDefault();


    // Variable declaration
    var error = false;
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Form field validation
    if (fname.length == 0) {
      var error = true;
      $('#fname').parent('div').addClass('field-error');
    } else {
      $('#fname').parent('div').removeClass('field-error');
    }

    if (lname.length == 0) {
      var error = true;
      $('#lname').parent('div').addClass('field-error');
    } else {
      $('#lname').parent('div').removeClass('field-error');
    }

    if (email.length == 0 || email.indexOf('@') == '-1') {
      var error = true;
      $('#email').parent('div').addClass('field-error');
    } else {
      $('#email').parent('div').removeClass('field-error');
    }

    if (password.length == 0) {
      var error = true;
      $('#password').parent('div').addClass('field-error');
    } else {
      $('#password').parent('div').removeClass('field-error');
    }

    if (error == true) {
      $('#hero-error-notification').addClass('show-up');
    } else {
      $('#hero-error-notification').removeClass('show-up');
    }
    

    // TODO: Make sure this only works if the form submits successfully
    if (error == false) {
      $('#hero-success-notification').addClass('show-up');
      $('#hero-submit').addClass('disabled');
    }


    if (error == false) {
      $.post("hero-form.php", $("#register-form").serialize(), function (result) {
        if (result == 'sent') {
          $('#hero-success-notification').addClass('show-up');
          $('#hero-submit').addClass('disabled');
        }
      });
    }
  });


  // Function to close the Notification
  $('a.notification-close').click(function () {
    $(this).parent('div').fadeOut(200);
  });


});



