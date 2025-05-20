const rating = document.querySelectorAll('.rating-nums li');
rating.forEach(element => {
    element.addEventListener('click',()=>{
        rating.forEach(i => i.classList.remove("selected"));

        element.classList.add("selected");
    });
});