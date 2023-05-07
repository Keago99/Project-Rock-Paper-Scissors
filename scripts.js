const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', alertFunction);
paper.addEventListener('click', alertFunction);
scissors.addEventListener('click', alertFunction);


function alertFunction(){
    alert("testing testing! you clicked on " + this.id);
}