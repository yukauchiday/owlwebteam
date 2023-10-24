$(function () {
  /*---------- privacy-btn ----------*/
  const agreeCheckbox = document.getElementById("agree");
  const submitBtn = document.getElementById("submit-btn");

  agreeCheckbox.addEventListener("click", () => {
    if (agreeCheckbox.checked === true) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
  $(function () {
    $(".contact-privacy_label_color").on("click", function () {
      $(".contact-privacyPolicy").addClass("is_active");
    });
  });
});