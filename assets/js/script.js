$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $("ul").append(`
      <li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>
    `);
    $(this).val("");
  }
});

$(".fa-edit").click(function() {
  if ($("input").css("display") === "none") {
    $("input").fadeIn();
    $("input").focus();
  } else {
    $("input").fadeOut();
  }
});
