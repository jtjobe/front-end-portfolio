$(function(){
  $('.sidebar-option').on('click', function(event){
    // hide all other content
    $('.main-content').css('display', 'none')
    // display selected content
    var contentId = '#' + $(event.target).data('content-id');
    $(contentId).css('display', 'block');
  });
});