const birthDateInput = document.querySelector("#birthday")
const luckNumberInput = document.querySelector("#luckyNumber")
const messageEle = document.querySelector(".message")
const privacyNotice = document.querySelector("#privacy")
const privacyClick = document.querySelector("#privacyClick")
const imgLucky = document.querySelector("#img-lucky")
const imgNotLucky = document.querySelector("#img-notlucky")

imgLucky.style.display = "none"
imgNotLucky.style.display = "none"
privacyClick.addEventListener('click',function(){
    clear(privacyNotice)
    clear(privacyClick)
})

luckNumberInput.addEventListener('change',function(){ //arrow function is not good for visibility here
    luckyBility()
})

birthDateInput.addEventListener('change',function(){
    if(luckNumberInput.value !=="")
    luckyBility();

})

function clear(elementToClear){
    elementToClear.style.display = "none";
}
function display(elementToDisplay){
    elementToDisplay.style.display = "block";
}
function luckyBility(){
    let sumOfDate = findSumOfBirthDate();
    let luckNumber = luckNumberInput.value;
    console.log(messageEle.innerHTML)
    if(sumOfDate % luckNumber === 0){
        messageEle.innerHTML = "Your Lucky🥳"
        clear(imgNotLucky)
        display(imgLucky) 
    }else{
        messageEle.innerHTML = "Sometimes you lose, sometimes you win, sometimes you are unlucky, but that's life.😔"
        clear(imgLucky)
        display(imgNotLucky)
    }
}

const findSumOfBirthDate = () =>{
    let acc = 0;
    let sumOfDates = birthDateInput.value.split('').filter(ele=>ele!=="-").reduce((acc,val)=>{
        acc = Number(acc)
        return acc += Number(val);
    })
    return sumOfDates;
}




