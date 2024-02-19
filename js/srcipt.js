const seatBtns = document.getElementsByClassName('seat-btn')

for(let seatBtn of seatBtns){
    seatCount = 8;
    count = 0;
    seatBtn.addEventListener('click', function(){
        const seatNumber = document.getElementById('seatNumber');
        let seatNumberStr = seatNumber.innerText;
        let seatNumberInteger = parseInt(seatNumberStr);

        // Seat Count Functionality 
        seatCount = seatCount - 1
        console.log(seatCount)
        setOutPut('seatNumber', seatCount)
        
    })
}


function setOutPut(elementId, value){
   let element = document.getElementById(elementId).innerText = value;
   console.log(value);
}