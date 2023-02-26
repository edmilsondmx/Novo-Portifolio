const content = "Full-Stack Developer";
const text = document.getElementById("p");
const speed = 200;
const cursor = document.querySelector('.cursor');
cursor.classList.toggle('ativo');
let cont = 0;
function maqEscrever(){
    
    if(cont < content.length){
        text.textContent += content.charAt(cont);
        cont++;
        setTimeout(maqEscrever, speed);
    }
    
}
maqEscrever()
        
function initCursorBlink() {
    

    function animaCursor() {
        cursor.classList.toggle('ativo');
    }
    setInterval(animaCursor, 500);
};

setTimeout(() => {
    initCursorBlink() 
}, 2500);