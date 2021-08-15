// Get element by id name
const shoes = document.getElementById('shoe-title');
shoes.style.color = 'lightblue';
// set background color
const backpackBg = document.getElementById('backpack');
backpackBg.style.backgroundColor = 'tomato';
// set border radius by class name

const cards = document.getElementById('cards');
cards.style.borderRadius = '30px';
// add event handler using function
function buy() {
    console.log(56465);
}
// remove button
// const ButtonRemove = document.getElementById('buy-now');
// ButtonRemove.remove();
// removce by function/* 
function deleteButton(button)
{
    var buttons = document.getElementsByTagName('button');
    for (i = buttons.length - 1; i >= 0; i--)
    {
        buttons[i].parentNode.removeChild(buttons[i]);
    }
} 

