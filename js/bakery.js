$(".p_btn").click(function(){
    const username = $(".username").val();
    const phone = $(".phone").val();
    const datetime = $(".datetime").val();
  
    if(username && phone && datetime) {
        $("#popup_body").show();
        $(".popup_username").html(username);
        $(".popup_phone").html(phone);
        $(".popup_datetime").html(datetime);
      }
      else {
        $("#popup_body").hide();
        alert("입력정보를 확인하세요.");
      }
  });
  
  $(".ok_btn").click(function(){
      $("#popup_body").hide();
  });