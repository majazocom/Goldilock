//Global constants
const chapOneOptOneFb = '"This porridge is too hot!" she exclaimed.';
const chapOneOptTwoFb = '"This porridge is too cold" she said.';
const startButton = document.getElementById('start-button');
const chapterOne = document.getElementById('chapter-one');

//Start frame
startButton.addEventListener('click', function() {
    //Toggle hide class
    chapterOne.classList.toggle('hide');
    document.getElementById('start-frame').classList.toggle('hide');
});

//When the first chapter is rendered and first option that is incorrect is selected
document.getElementById('chapter-one-option-one').addEventListener('click', function() {
    document.getElementById('chapter-one-feedback').innerHTML = chapOneOptOneFb;
});

//When the first chapter is rendered and second option that is incorrect is selected
document.getElementById('chapter-one-option-two').addEventListener('click', function() {
    document.getElementById('chapter-one-feedback').innerHTML = chapOneOptTwoFb;
});

//Correct option selected -> render chapter 2
document.getElementById('chapter-one-option-three').addEventListener('click', function() {
    document.getElementById('chapter-two').classList.toggle('hide');
    document.getElementById('chapter-one').classList.toggle('hide');
});