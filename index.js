console.clear()

const question = document.getElementsByClassName('question')

console.log(question)



for(let i=0; i<question.length; i++){
    console.log(question[i])

    question[i].addEventListener('click', ()=>{

        console.log( question[i].parentNode.childNodes[3] )

        if(question[i].childNodes[3].classList[0] === "plus-icon" ){
            question[i].childNodes[3].src = 'assets/images/icon-minus.svg'
            question[i].childNodes[3].classList.toggle('plus-icon')
            question[i].parentNode.childNodes[3].style.display = 'initial'
        }else{
            question[i].childNodes[3].src = 'assets/images/icon-plus.svg'
            question[i].childNodes[3].classList.toggle('plus-icon')
            question[i].parentNode.childNodes[3].style.display = 'none'
        }
    })
}