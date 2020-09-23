for(i = 0; i < 16; i++) {
    $('#boxesHolder').append("<div class = 'box'></div>");
}
$('#boxesHolder').on('click', '.box', function(){
    $(this).toggleClass('greyBox')
});