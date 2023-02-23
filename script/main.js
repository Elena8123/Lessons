let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let body = document.querySelector('.body')

burger.addEventListener('click', () =>{
    burger.classlist.toggle('active')
    menu..classlist.toggle('active')
    body.classlist.toggle('hidden')
})