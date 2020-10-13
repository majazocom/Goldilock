jsconst chapOneOptOneFb = '"This porridge is too hot!" she exclaimed.';

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('chapter-one').classList.toggle('hide');
    document.getElementById('start-frame').classList.toggle('hide');
});

document.getElementById('chapter-one-option-one').addEventListener('click', function() {
    
});

document.getElementById('chapter-one-option-three').addEventListener('click', function() {
    document.getElementById('chapter-two').classList.toggle('hide');
    document.getElementById('chapter-one').classList.toggle('hide');
});