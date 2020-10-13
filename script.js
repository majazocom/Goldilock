//Global constants
const chapOneOptOneFb = '"This porridge is too hot!" she exclaimed.';

//Start frame
document.getElementById('start-button').addEventListener('click', function() {
    //Toggle hide class
    document.getElementById('chapter-one').classList.toggle('hide');
    document.getElementById('start-frame').classList.toggle('hide');
});

//When the first chapter is rendered and first option hat is incorrect is selected
document.getElementById('chapter-one-option-one').addEventListener('click', function() {
    document.getElementById('chapter-one-feedback').innerHTML = chapOneOptOneFb;
});

//Correct option selected -> render chapter 2
document.getElementById('chapter-one-option-three').addEventListener('click', function() {
    document.getElementById('chapter-two').classList.toggle('hide');
    document.getElementById('chapter-one').classList.toggle('hide');
});