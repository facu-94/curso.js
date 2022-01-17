const producContainers = [ document.querySelectorAll('.product-container')];
const nxtBtn = [ document.querySelectorAll('.nxt-btn')];
const preBtn = [ document.querySelectorAll('.pre-btn')];

producContainers.forEach((item, i) =>{
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
}) 