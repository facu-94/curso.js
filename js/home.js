const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorall('nxt-btn')];
const preBtn = [...document.querySelectorall('pre-btn')];

productContainers.forEach((item, i)=>{
    let containerdimensions = item.getBoundingClientRect();
    let containerWidth = containerdimensions.width;

    nxtBtn[i].addeventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addeventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})