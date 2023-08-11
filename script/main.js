$(window).ready(function(){

  // 섹션.2 뉴스 탭메뉴
  $('.tab-button').click(function(){
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    let index = $(this).index();
    $('.tab-box').removeClass('active');
    $('.tab-box').eq(index).addClass('active');
  });
  
  //섹션.2 뉴스 탭메뉴 슬라이드
  $('.menu_box > li:last-child').insertBefore('.menu_box > li:first-child');
  $('.menu_box').css('margin-left','-410px');

  let currentPageIndex = 1;
  let totalPages = $('.menu_box > li').length;

  function updateProgressBar() {
    let progressPercentage = (currentPageIndex / totalPages) * 100;
    $('.progress-bar').css('width', progressPercentage + '%');
  }

  function moveLeft() {
      if (isAnimating) return;
      isAnimating = true;
      $('.menu_box > li:first-child').insertAfter('.menu_box > li:last-child');
      $('.menu_box').css('margin-left', '0px');
      $('.menu_box').animate({'margin-left': '-410px'}, 500, function() {
          isAnimating = false;
      });
      currentPageIndex = (currentPageIndex % totalPages) + 1;
      updateProgressBar();
  }

  function moveRight() {
      if (isAnimating) return;
      isAnimating = true;
      $('.menu_box > li:last-child').insertBefore('.menu_box > li:first-child');
      $('.menu_box').css('margin-left', '-820px');
      $('.menu_box').animate({'margin-left': '-410px'}, 500, function() {
          isAnimating = false;
      });
      currentPageIndex = (currentPageIndex - 1) || totalPages;
      updateProgressBar();
  }

  let isAnimating = false;
  $('.menu_prev').click(function() {
      moveRight();
  });

  $('.menu_next').click(function() {
      moveLeft();
  });

  updateProgressBar();
});

