const seatBtns = document.getElementsByClassName('seat-btn')

for(let seatBtn of seatBtns){
    seatCount = 8;
    countBooking = 0;
    totalPrice = 0;
    grandTotal = 0;
    seatBtn.addEventListener('click', function(e){

        if(seatCount>= 0 && countBooking <= 3){
            seatBtn.style.backgroundColor = "green";

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



            let btn = document.getElementById('apply-btn')
            btn.addEventListener('click', function(e){
                let copupon = document.getElementById('copupon');
                console.log(cuppon.innerText);
            })
            
        }
    })
}


 // Next Button 
 let nextBtn = document.getElementById('next-btn')
 function nextPage(){
    window.open("/success.html");
 }




function setOutPut(elementId, value){
   document.getElementById(elementId).innerText = value;
}