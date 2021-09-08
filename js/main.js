$(document).ready( function() {
  $('.bottomnavbar-triger').click(function () {
    $('.bottomnavbar').slideToggle(500)
  })
  $('.topnavbar-triger').click(function () {
    $('.topnavbar').slideToggle(500)
  })
  function checkwidth() {
    var windowSize = $(window).width();
    if (windowSize >= 1000) {
      $('.bottomnavbar').show()
      $('.topnavbar').show()
    }
  }
  checkwidth();
  // Bind event listener
  $(window).resize(checkwidth);
})


$(document).ready(function () {
  $('.bottomnavbarlinks').click(function () {
      var windowSize = $(window).width();
      if (windowSize < 1000) {
          $('.bottomnavbar').slideToggle()
      }
  })
})

