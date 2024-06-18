document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
  });
  
  document.addEventListener('animationend', function (e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
     }
  });

const question = document.getElementsByClassName('question')

for(let i=0; i<question.length; i++){
    console.log(question[i])

    question[i].addEventListener('click', ()=>{

        console.log( question[i].parentNode.childNodes[3] )

        if(question[i].childNodes[3].classList[0] === "plus-icon" ){
            question[i].childNodes[3].src = 'assets/images/icon-minus.svg'
            question[i].childNodes[3].classList.toggle('plus-icon')
            // question[i].parentNode.childNodes[3].style.display = 'initial'
            question[i].parentNode.childNodes[3].style.opacity = '100%'
            question[i].parentNode.childNodes[3].style.overflow = 'visible'
            question[i].parentNode.childNodes[3].style.height = 'auto'
        }else{
            question[i].childNodes[3].src = 'assets/images/icon-plus.svg'
            question[i].childNodes[3].classList.toggle('plus-icon')
            // question[i].parentNode.childNodes[3].style.display = 'none'
            question[i].parentNode.childNodes[3].style.opacity = '0'
            question[i].parentNode.childNodes[3].style.overflow = 'hidden'
            question[i].parentNode.childNodes[3].style.height = '0'
        }
    })
}

