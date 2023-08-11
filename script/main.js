$(window).ready(function(){

  // 섹션.2 뉴스 탭메뉴
  $(document).ready(function(){
    // 탭 버튼을 클릭했을 때의 이벤트 핸들러
    $('.tab-button').click(function(){
      // 모든 탭 버튼의 활성화 상태를 제거
      $('.tab-button').removeClass('active');

      // 클릭한 탭 버튼에 활성화 상태를 추가
      $(this).addClass('active');

      // 클릭한 탭 버튼의 인덱스를 가져옴
      let index = $(this).index();

      // 모든 탭 박스의 활성화 상태를 제거
      $('.tab-box').removeClass('active');

      // 선택한 인덱스에 해당하는 탭 박스를 활성화
      $('.tab-box').eq(index).addClass('active');
    });
  });
  
})