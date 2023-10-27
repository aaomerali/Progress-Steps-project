const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector(".line");
const circle = document.querySelectorAll(".circle");

let state = 0;

let line = 0;

prev.disabled = true;

function disableBtn(btn) {
    if (btn.disabled == true){
        btn.classList.add('disabedBtn');
    } else { 
        btn.classList.remove('disabedBtn');
    }
}

next.addEventListener('click' , () => {
    state++;
    prev.disabled = false;
    disableBtn(prev);


    if (state > circle.length-1){
        state = 3;
        line = 270;
        
    } else {
        line = line + 90 ;
        circle[state].classList.add("active");
        progress.style.width = line;
        console.log(line);
        console.log(state);
    }

    if (state > circle.length-2){
        next.disabled = true;
        disableBtn(next);
    }
   
})


prev.addEventListener('click' , () => {
    state--;
    next.disabled = false;
    disableBtn(next);

    if (state < 0){
        state = 0;
        line = 0;
        
    } else {
        line = line - 90 ;
        circle[state+1].classList.remove("active");
        progress.style.width = line;
        console.log(line);
        console.log(state);
    }


    if (state < 1) {
        prev.disabled = true;
        disableBtn(prev);

    }
   
})


/*  


progress.classList.width = line+30; 

*/