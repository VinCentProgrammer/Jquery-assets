
$(document).ready(function(){
    //1. Problem click thumb item
    $('.product-thumb-item img').click(function(){
        let srcImgItem = $(this).attr('src');
        $('.product-thumb img').attr('src', srcImgItem);
        $('.product-thumb-item img').removeClass('active');
        $(this).addClass('active');
    })
    //2. Problem click button next prev
    $('.btn-next').click(function(){
        if($('.product-thumb-item:last-child').find('img').hasClass('active'))
            $('.product-thumb-item:first-child').find('img').click();
        else
            $('.product-thumb-item img.active').parent().next().find('img').click();
    });
    $('.btn-prev').click(function(){
        if($('.product-thumb-item:first-child').find('img').hasClass('active'))
            $('.product-thumb-item:last-child').find('img').click();
        else
            $('.product-thumb-item img.active').parent().prev().find('img').click();
    })
    //Problem click thumb first
    $('.product-thumb-item:first-child').find('img').click();
})
