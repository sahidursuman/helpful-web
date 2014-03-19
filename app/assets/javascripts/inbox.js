$(document).ready(function(){
  var messageIndex = 0;
  var totalCount = $('.conversation-row').length;

  var updateHighlight = function(){
    $($('.conversation-heading')).removeClass('highlight');
    $($('.conversation-heading')[messageIndex]).addClass('highlight');
  }

  var openConversation = function() {
    updateHighlight();
  }

  //keyboard shortcuts for sending and/or archiving
  $('.response').keydown(function(e){
    if(e.ctrlKey){
      switch(e.keyCode){
        case 13: //enter
          if(e.shiftKey){
            $('.response').parents('form').find('.send').click();
          }else{
            $('.response').parents('form').find('.send_archive').click();
          }
        break;
      }
    }

  });

  //keyboard shortcuts for cycling through conversations
  $(document).keydown(function(e){
      if(e.ctrlKey){
        switch(e.keyCode){
          case 32: //space
            openConversation($('.conversation-heading')[messageIndex]);
          break;
          case 74: //j
            messageIndex = (messageIndex + 1) % totalCount;
          break;
          case 75: //k
            messageIndex = (messageIndex + totalCount - 1) % totalCount;
          break;
        }
        updateHighlight();

      }
  });
});