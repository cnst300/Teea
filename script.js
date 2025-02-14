const customCursor = document.querySelector('.custom-cursor');
const colorButtonYes = document.querySelector('#yesBT');
const colorButtonNo = document.querySelector('#noBT');
const body = document.querySelector('body');

let clickNo= 0;

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX - 10}px`; 
    customCursor.style.top = `${e.pageY - 10}px`;  
});

colorButtonYes.addEventListener('mouseenter', () => {
    customCursor.classList.add('color-changedRed');  
});

colorButtonYes.addEventListener('mouseleave', () => {
    customCursor.classList.remove('color-changedRed');  
});

colorButtonNo.addEventListener('mouseenter', () => {
    customCursor.classList.add('color-changedBlack');  
});

colorButtonNo.addEventListener('mouseleave', () => {
    customCursor.classList.remove('color-changedBlack');
});





document.getElementById("yesBT").addEventListener("click", function() {
    if(clickNo != 0){
        alert("Ai scapat, de data asta..❤️");
    }
    window.location.href = "yes.html";
});

document.getElementById("noBT").addEventListener("click", () => {
    clickNo++;
    console.log("clickNo: ", clickNo);

    document.body.classList.add("blackOUT");

    if(clickNo == 1){
        setTimeout(() => {
            alert("Vrei sa-ti rup picioarele?\n Mai baga o fisa!");

            document.body.classList.remove("blackOUT");
        }, 1500); 
    }

    if(clickNo == 2){
        setTimeout(() => {
            alert("OK.. 2 picioare rupte sunt pe drum\n Vrei si un ochi negru?");

            document.body.classList.remove("blackOUT");
        }, 1500); 
    }

    if(clickNo == 3){
        setTimeout(() => {
            alert("Te bag in pizda ma-tii..\n Esti nesimtita..");

            document.querySelector("h1").style.display = "none";

            document.querySelectorAll("button").forEach(button => {
                button.style.display = "none";
            });

            document.getElementById("gifDisplay").style.display = "block";
        }, 1500); 
    }
});