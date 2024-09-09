const guj_lang = document.querySelector(".choice-guj");
const hindi_lang = document.querySelector(".choice-hindi");
const ISL_lang = document.querySelector(".choice-ISL");
const sign_section = document.querySelector(".ISL-Sign-section");
let input_Translation_section = document.querySelector(".input-translation-text");
let isremove = false;

function openCamera() {
    input_Translation_section.style.display = "none";
    const cameraSection = document.getElementById('camera-section');
    const video = document.getElementById('video');
    isremove = true;

    // Remove the hide class to show the camera section
    cameraSection.classList.remove('hide');

    // Access the user's camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("Error: " + err);
        });
    } else {
        alert("Camera not supported by your browser");
    }
}

ISL_lang.addEventListener('click', ()=>{
    openCamera();
    ISL_lang.style.color = 'blue';
    guj_lang.style.color = 'black';
    hindi_lang.style.color = 'black';
});

guj_lang.addEventListener('click', ()=>{
    if(isremove){
       input_Translation_section.style.display = "block";
    }
    sign_section.classList.add('hide');
    guj_lang.style.color = 'blue';
    ISL_lang.style.color = 'black';
    hindi_lang.style.color = 'black';
});

hindi_lang.addEventListener('click', ()=>{
    if(isremove){
        input_Translation_section.style.display = "block";
    }
    sign_section.classList.add('hide');
    hindi_lang.style.color = 'blue';
    ISL_lang.style.color = 'black';
    guj_lang.style.color = 'black';
});