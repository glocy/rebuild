$(window).ready(function(){

  // $('a[href^="#"]').on('click', function(event) {
  //   let target = $($(this).attr('href'));

  //   if (target.length) {
  //       event.preventDefault();
  //       $('html, body').animate({
  //           scrollTop: target.offset().top + 100
  //       }, 1000);
  //   }
  // });

  function updateTotalPagesAndProgress() {
    // 현재 활성화된 탭의 li 갯수 업데이트
    totalPages = $('.tab-box.active .menu_box > li').length;
    updateProgressBar();
  }
  
  function updateProgressBar() {
    let progressPercentage = (currentPageIndex / totalPages) * 100;
    $('.progress-bar').css('width', progressPercentage + '%');
  }

  $('.tab-button').click(function(){
    $('.tab-button').removeClass('active');
    $(this).addClass('active');
    let index = $(this).index();
    $('.tab-box').removeClass('active');
    $('.tab-box').eq(index).addClass('active');
    // 탭이 변경될 때마다 totalPages 및 프로그레스바 업데이트
    currentPageIndex = 1;  // 탭이 바뀌면 현재 페이지 인덱스를 초기화
    updateTotalPagesAndProgress();
  });
  
  // 섹션.2 뉴스 탭메뉴 슬라이드 초기 설정
  $('.tab-box').each(function() {
    $(this).find('.menu_box > li:last-child').insertBefore($(this).find('.menu_box > li:first-child'));
  });
  
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
  
      let activeMenuBox = $('.tab-box.active .menu_box');
      activeMenuBox.find('> li:first-child').insertAfter(activeMenuBox.find('> li:last-child'));
      activeMenuBox.css('margin-left', '0px');
      activeMenuBox.animate({'margin-left': '-410px'}, 500, function() {
          isAnimating = false;
      });
      currentPageIndex = (currentPageIndex % totalPages) + 1;
      updateProgressBar();
  }
  
  function moveRight() {
      if (isAnimating) return;
      isAnimating = true;
  
      let activeMenuBox = $('.tab-box.active .menu_box');
      activeMenuBox.find('> li:last-child').insertBefore(activeMenuBox.find('> li:first-child'));
      activeMenuBox.css('margin-left', '-820px');
      activeMenuBox.animate({'margin-left': '-410px'}, 500, function() {
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
  updateTotalPagesAndProgress();
  updateProgressBar();


  // product fadein

  const initialTransforms = {
    ".product_gunpra": "translateY(-5%)",
    ".product_figure": "translateY(5%)",
    ".product_etc": "translateY(-5%)"
};

$(".product_gunpra, .product_figure, .product_etc").each(function() {
    $(this).css({
        'opacity': 0, 
        'transform': `${initialTransforms[$(this).attr('class')]} translateY(100px)`
    });
});

$(".product_gunpra img, .product_figure img, .product_etc img").css({'opacity': 0, 'transform': 'translateY(100px)'});
$(".product_gunpra h3, .product_figure h3, .product_etc h3").css({'opacity': 0, 'transform': 'translateY(100px)'});

$(window).scroll(function() {
  let top_of_element = $("#product").offset().top;
  let bottom_of_element = $("#product").offset().top + $("#product").outerHeight();
  let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  let top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // .product_gunpra 요소 페이드인 및 위치 조정
    setTimeout(function() {
      $(".product_gunpra").css({'opacity': 1, 'transform': 'translateY(-5%)'});
      setTimeout(function() {
        $(".product_gunpra img").css({'opacity': 1, 'transform': 'translateY(0)'});
        setTimeout(function() {
            $(".product_gunpra h3").css({'opacity': 1, 'transform': 'translateY(0)'});
        }, 100);
      }, 100);
    }, 300);

    // .product_figure 요소 페이드인 및 위치 조정
    setTimeout(function() {
      $(".product_figure").css({'opacity': 1, 'transform': 'translateY(5%)'});
      setTimeout(function() {
        $(".product_figure img").css({'opacity': 1, 'transform': 'translateY(0)'});
        setTimeout(function() {
            $(".product_figure h3").css({'opacity': 1, 'transform': 'translateY(0)'});
        }, 100);
      }, 100);
    }, 600);

    // .product_etc 요소 페이드인 및 위치 조정
    setTimeout(function() {
      $(".product_etc").css({'opacity': 1, 'transform': 'translateY(-5%)'});
      setTimeout(function() {
        $(".product_etc img").css({'opacity': 1, 'transform': 'translateY(0)'});
        setTimeout(function() {
            $(".product_etc h3").css({'opacity': 1, 'transform': 'translateY(0)'});
        }, 100);
      }, 100);
    }, 900);
  }
});
  
  // movies iframe change

  function changeIframeSrc(newSrc) {
    let iframe = $("#movie .box_inner1 iframe");
    iframe.fadeOut(400, function() {
        iframe.attr("src", newSrc);
        iframe.fadeIn(400);
    });
  }

  $(".movie_img.movies01").click(function(e) {
    e.preventDefault();
    console.log("Movie 01 clicked");
    changeIframeSrc("https://www.youtube.com/embed/K7rvBGeuowY");
  });

  $(".movie_img.movies02").click(function(e) {
    e.preventDefault();
    changeIframeSrc("https://www.youtube.com/embed/OYGTGVsizY8");
  });

  $(".movie_img.movies03").click(function(e) {
    e.preventDefault();
    changeIframeSrc("https://www.youtube.com/embed/5YGW2JRxWUU");
  });

  $(".movie_img.movies04").click(function(e) {
    e.preventDefault();
    changeIframeSrc("https://www.youtube.com/embed/zax3LcPvfsA");
  });



  // about gundam timeline 

  (function($) {
    $.fn.timeline = function() {
      let selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      let itemLength = selectors.item.length;
      $(window).scroll(function() {
        let max, min;
        let pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top - 300;
          max = $(this).height() + $(this).offset().top;
          let that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
                $(this)
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $("#timeline-1").timeline();

  //


  $('a[href^="#"]').on('click', function(event) {
    // .movie_img 클래스를 포함하지 않는 요소만 대상으로 함
    if (!$(this).hasClass('movie_img')) {
      let target = $($(this).attr('href'));
      
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top + 100
        }, 300);
      }
    }
  });


  // shop animation

  let animated = false;

  $(window).scroll(function(){
    let shopTop = $('#shop').offset().top;
    let windowHeight = $(window).height();
    let scrollPosition = $(window).scrollTop();

    if (scrollPosition + windowHeight > shopTop && !animated) {
      animated = true;

      $('.bandaimall').animate({
          left: '120px',
          opacity: 1
      }, 1000);

      $('.bandaimall_text').delay(300).animate({
          left: '600px',
          opacity: 1
      }, 1000);

      $('.gundambase').delay(600).animate({
          right: '120px',
          opacity: 1
      }, 1000);

      $('.gundambase_text').delay(900).animate({
          right: '600px',
          opacity: 1
      }, 1000);
    }
  });
  // ad product banner



  // ad random banner
  
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  $('.ad-inner').addClass('bg0' + randomNumber);
});

