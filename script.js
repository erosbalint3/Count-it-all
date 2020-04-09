let clicks = 0;
$('#increaseButton').on("click", function(){
    clicks++;
    $('#counterNumber').text(clicks);
});
$('#decreaseButton').on("click", function(){
    clicks--;
    $('#counterNumber').text(clicks);
});