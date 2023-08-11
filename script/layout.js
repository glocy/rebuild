
$(window).ready(function(){
  $('header').hover(function(){
    $('header').addClass('act');
    $('header .gnb > li > a, header i.fa-solid').css('color','#fff');
  }, function() { 
    $('header').removeClass('act');
    $('header .gnb > li > a, header i.fa-solid').css('color','#fff');
  });

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos>=900){
      $('header').addClass('act');//1. 배경색변경
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo_gundaminfo-white.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fa-solid').css('color','#fff');

      //header에 마우스 오버시 색상 어둡게
      $('header').mouseleave(function(){
        $('header').addClass('act');//1. 배경색변경
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo_gundaminfo-white.png');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fa-solid').css('color','#fff');
      });
    }else{
      $('header').removeClass('act'); //1. 배경 원래대로
      //2. 로고변경
      $('header h1 img').attr('src','./images/logo_gundaminfo-white.png');
      //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
      $('header .gnb > li > a, header i.fa-solid').css('color','#fff');

      //header에 마우스 오버시 색상 원래대로
      $('header').mouseleave(function(){
        $('header').removeClass('act'); //1. 배경 원래대로
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo_gundaminfo-white.png');
        //3. 메뉴색상 변경, 로그인, 알람아이콘 색상 변경하기
        $('header .gnb > li > a, header i.fa-solid').css('color','#fff');
      });
    }
  });




});