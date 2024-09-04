let ISL_choice = document.querySelector('.choice-ISL');
let gujarati_choice = document.querySelector('.choice-guj');
let hindi_choice = document.querySelector('.choice-hindi');

function actionPerform(){
    ISL_choice.style.borderBottomStyle = 'blue';
    document.querySelector('.ISL-Sign-section').classList.remove('hide');
    ISL_choice.style.color = "blue";
    gujarati_choice.style.color = "black";
    hindi_choice.style.color = "black";
}

ISL_choice.addEventListener('click', actionPerform);

gujarati_choice.addEventListener('click', ()=>{
    document.querySelector('.ISL-Sign-section').classList.add('hide');
    gujarati_choice.style.color = "blue";  
    hindi_choice.style.color = "black";
    ISL_choice.style.color = "black";
});

hindi_choice.addEventListener('click', ()=>{
    document.querySelector('.ISL-Sign-section').classList.add('hide');
    hindi_choice.style.color = "blue"; 
    gujarati_choice.style.color = "black";
    ISL_choice.style.color = "black";
});