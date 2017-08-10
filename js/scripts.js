$(document).ready(function() {
  $('#userHeight').change(function(event){
    var height = parseInt($("#userHeight").val());
    if (height === 1) {
      $(".shortHeight").show();
      $(".mediumHeight, .tallHeight").hide();
    }
    if (height === 2) {
      $(".shortHeight, .mediumHeight").show();
      $(".tallHeight").hide();
    }
    if (height === 3) {
      $(".shortHeight, .mediumHeight, .tallHeight").show();
    }
    // // if (height === 'height2') {
    // //   $(".shortHeight mediumHeight").show();
    // }
    event.preventDefault();
  });
});
