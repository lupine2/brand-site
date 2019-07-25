$(function(){
  // 상품 선택 시 구매 페이지 링크
    $('.products li a')
      .attr('href', 'buy.html');

      // 상품 구매 > 수량 버튼
      var buy_number = 1; // 기본 수량 값
      var min_number = 1; // 최솟값
      var max_number = 9; // 최댓값

      $('#btn-add').on('click', function(){
        if(buy_number == max_number) return;
        buy_number++;
        $('#number').val(buy_number);
      });

      $('#btn-sub').on('click', function(){
        if(buy_number == min_number) return;
        buy_number--;
        $('#number').val(buy_number);
      });
  })