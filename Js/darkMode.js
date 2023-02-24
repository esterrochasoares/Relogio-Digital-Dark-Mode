const button = document.querySelector('#btn')
const button2 = document.querySelector('#btn2')
const body = document.querySelector('body')


button.addEventListener('click',()=>{
    body.classList.toggle('dark')
    button.classList.add('escondido')
    button2.classList.remove('escondido')
  })

  button2.addEventListener('click',()=>{
    body.classList.toggle('dark')
    button.classList.remove('escondido')
    button2.classList.add('escondido')
  })