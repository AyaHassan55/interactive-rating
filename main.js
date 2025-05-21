const rating = document.querySelectorAll('.rating-nums li');
const submitButton = document.querySelector("button");
const ratingCard= document.querySelector('.card');
const ThankYouCard= document.querySelector('.card-thank');
rating.forEach(element => {
    element.addEventListener('click',()=>{
        rating.forEach(i => i.classList.remove("selected"));

        element.classList.add("selected");
    });
});

submitButton.addEventListener("click",()=>{
    const selected = document.querySelector(".rating-nums li.selected");
    if(selected){
        const ratingValue = selected.textContent;
        const ratingText = document.querySelector('.rate-choice') ;
        ratingText.textContent = `You selected ${ratingValue} out of 5`

        document.querySelector('.card').style.display= "none";
        document.querySelector('.card-thank').style.display = 'flex';
    }
});