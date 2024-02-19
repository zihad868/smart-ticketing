const seatBtns = document.getElementsByClassName('seat-btn')

for(let seatBtn of seatBtns){
    seatCount = 8;
    countBooking = 0;
    totalPrice = 0;
    grandTotal = 0;
    seatBtn.addEventListener('click', function(e){

        if(seatCount>= 0 && countBooking <= 3){
            seatBtn.style.backgroundColor = "green";
            seatBtn.disabled = true;

            if(seatBtn.disabled == true){
                seatBtn.style.color = 'white';
            }

            const seatNumber = document.getElementById('seatNumber');
            let seatNumberStr = seatNumber.innerText;
            let seatNumberInteger = parseInt(seatNumberStr);
    
            
            // Seat Count Functionality 
            seatCount = seatCount - 1
            console.log(seatCount)
            setOutPut('seatNumber', seatCount)
    
            // Booking Seat Increment Functionality
            countBooking = countBooking + 1;
            setOutPut('num-book-seat', countBooking);

            
            // seat price and seat number

            let container = document.getElementById('seat-price');
            
            let ul = document.createElement('ul')
            
            let li_btn = document.createElement('li')
            let li_class = document.createElement('li')
            let li_price = document.createElement('li')

            

            li_btn.innerText = this.innerText;
            li_class.innerText = 'Economoy';
            li_price.innerText = 550;

            ul.appendChild(li_btn);
            ul.appendChild(li_class);
            ul.appendChild(li_price)

            container.appendChild(ul)


            // Total Price Calculation 
            let priceText = document.getElementById('ticket-price').innerText;
            let price  = parseInt(priceText);
            
            totalPrice = totalPrice + price;

            setOutPut('total-price', totalPrice)

            // Grand Total Price
            let priceGrant = document.getElementById('ticket-price').innerText;
            let priceGrantInt  = parseInt(priceText);
            
            grandTotal = grandTotal + priceGrantInt;

            setOutPut('grand-price', grandTotal);
            
        }
    })
}


 // Next Button 
 let nextBtn = document.getElementById('next-btn')
 function nextPage(){
    let mainSection = document.getElementById('main');
    mainSection.classList.add('hidden')

    let success = document.getElementById('sussess');
    success.classList.remove('hidden')
 }

function cupponApply(){
    textVal = document.getElementById('copupon').value
    const couponCode = 'NEW15';
    const couponCodeCouple = 'Couple 20'

    if(textVal === couponCode){
        console.log("Cupon")
    }

    else if(textVal === couponCodeCouple){
        console.log('cuple')
    }

    else{
        console.log("Grant")
    }
}

function setOutPut(elementId, value){
   document.getElementById(elementId).innerText = value;
}

