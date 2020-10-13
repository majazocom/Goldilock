//Global constants
const chapOneOptOneFb = '"This porridge is too hot!" she exclaimed.';
const chapOneOptTwoFb = '"This porridge is too cold" she said.';

//Start frame
document.getElementById('start-button').addEventListener('click', function() {
    //Toggle hide class
    document.getElementById('start-frame').classList.toggle('hide');
    document.getElementById('chapter-one').classList.toggle('hide');
});

// Chapter one
const chapterOneOptionOne = document.getElementById('chapter-one-option-one');
const chapterOneFeedback = document.getElementById('chapter-one-feedback');
const chapterOneOptionTwo = document.getElementById('chapter-one-option-two');
const chapterOneOptionThree = document.getElementById('chapter-one-option-three');

//When the first chapter is rendered and first option that is incorrect is selected
chapterOneOptionOne.addEventListener('click', function() {
    chapterOneFeedback.innerHTML = chapOneOptOneFb;
});

//When the first chapter is rendered and second option that is incorrect is selected
chapterOneOptionTwo.addEventListener('click', function() {
    chapterOneFeedback.innerHTML = chapOneOptTwoFb;
});

//Correct option selected -> render chapter 2
chapterOneOptionThree.addEventListener('click', function() {
    document.getElementById('chapter-one').classList.toggle('hide');
    document.getElementById('chapter-two').classList.toggle('hide');
});