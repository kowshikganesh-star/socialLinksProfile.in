
document.getElementById("border").addEventListener('click',(event)=>{
    if(event.target.classList.contains('button')){
        console.log(event);
        buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
    }
    
})