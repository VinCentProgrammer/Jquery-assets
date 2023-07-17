let dataSrc = ['assets/images/pic-1.png', 'assets/images/pic-2.png', 'assets/images/pic-3.png', 'assets/images/pic-4.png'];

$(document).ready(function(){
    //Click btn next
    $('.btn-next').click(function(){
        let imgElenment = $(this).parents('.product-thumb').find('img');
        let srcCurrent = imgElenment.attr('src');

        for(let i = 0; i <= 3; i++){
            if(dataSrc[i] == srcCurrent){
                let index = i + 1;
                if(index == 4){
                    imgElenment.attr('src', dataSrc[index - 4]);
                    $(`li.product-thumb-item img[src]`).removeClass('active');
                    $(`li.product-thumb-item img[src = '${dataSrc[index - 4]}']`).addClass('active');
                }
                else{
                    imgElenment.attr('src', dataSrc[index]);  
                    $(`li.product-thumb-item img[src]`).removeClass('active');
                    $(`li.product-thumb-item img[src = '${dataSrc[index]}']`).addClass('active');
                }
            }
        }

    });
    //Click btn prev
    $('.btn-prev').click(function(){
        let imgElenment = $(this).parents('.product-thumb').find('img');
        let srcCurrent = imgElenment.attr('src');
        
        for(let i = 0; i <= 3; i++){
            if(dataSrc[i] == srcCurrent){
                let index = i - 1;
                if(index == -1){
                    imgElenment.attr('src', dataSrc[index + 4]);
                    $(`li.product-thumb-item img[src]`).removeClass('active');
                    $(`li.product-thumb-item img[src = '${dataSrc[index + 4]}']`).addClass('active');
                }
                else{
                    imgElenment.attr('src', dataSrc[index]); 
                    $(`li.product-thumb-item img[src]`).removeClass('active');
                    $(`li.product-thumb-item img[src = '${dataSrc[index]}']`).addClass('active');
                } 
            }
        }
    });
});

//Click foot slider

const divProductThumb = document.querySelector('.product-thumb');
const clickFootSlider = (element) => {
    divProductThumb.firstElementChild.setAttribute('src', element.getAttribute('src'));
    const listImg = element.closest('ul').querySelectorAll('img');
    for(let imgItem of listImg){
        imgItem.classList.remove('active');
    }
    element.classList.add('active');
}
