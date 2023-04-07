const para = document.querySelector('.para');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');
 let b = 0

increase.addEventListener('click', function(){
    para.innerHTML = b++
})
decrease.addEventListener('click', function(){
    para.innerHTML = b-- 
})
reset.addEventListener('click', function(){
    para.innerHTML= 0
})