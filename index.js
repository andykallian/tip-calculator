/* -------------- inputs limits ----------------- */


const Bill = document.querySelector('#bill')
const NumberOfPeople = document.querySelector('#number-of-people')
const customTip = document.querySelector('#custom')

const button = document.querySelector('.reset')
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fifteen = document.querySelector('#fifteen')
const twentyFive = document.querySelector('.twenty-five')
const fifty = document.querySelector('#fifty')


const amountPerson = document.querySelector('#amount-person')
const amountTotal = document.querySelector('#amount-total')

/* limits function on the amount of characters allowed on the inputs */



function maxLengthPercentage(){
    if (customTip.value.length > customTip.maxLength){
        customTip.value = customTip.value.slice(0, customTip.maxLength);
    } 
}

function maxLengthBill(){
    if (Bill.value.length > Bill.maxLength){
        Bill.value = Bill.value.slice(0, Bill.maxLength);
    }
}

function maxLengthPeople(){
    if (NumberOfPeople.value.length > NumberOfPeople.maxLength){
        NumberOfPeople.value = NumberOfPeople.value.slice(0, NumberOfPeople.maxLength);
    }
}


/* -------------- calculations functions ----------------- */

// [Bill, NumberOfPeople, customTip].forEach((element) =>{

//     element.addEventListener('keyup', function(e){

//         let percentageString = ''
    
//         percentageString = e.target.value
    
//         let percent = parseInt(percentageString)
//         percent = percent / 100
    
//         let billValue = parseInt(Bill.value)
//         let peopleNumber = parseInt(NumberOfPeople.value)
//         let dividedBill = billValue / peopleNumber 
    
//         let percentage = (billValue * percent)
    
//         if(isNaN(billValue) || isNaN(peopleNumber) || isNaN(percentage)){
//             amountPerson.innerHTML = '$0.00'
//             amountTotal.innerHTML = '$0.00'
//         }else{
//             amountPerson.innerHTML = `$${(percentage / peopleNumber).toFixed(2)}` 
//             amountTotal.innerHTML = `$${(dividedBill + (percentage / peopleNumber)).toFixed(2)}`
//         }
//     })
// })




[Bill, NumberOfPeople].forEach(element =>{
    element.addEventListener('keyup', function(e){
        let billValue = parseInt(Bill.value)
        let peopleNumber = parseInt(NumberOfPeople.value)

        if(!isNaN(billValue) && !isNaN(peopleNumber)){
            customTip.classList.add("show")
        }
    })
})

customTip.addEventListener('keyup', function(e){

    let percentageString = e.target.value

    let percent = parseInt(percentageString)
    percent = percent / 100

    let billValue = parseInt(Bill.value)
    let peopleNumber = parseInt(NumberOfPeople.value)
    let dividedBill = billValue / peopleNumber 

    let percentage = (billValue * percent)

    if(isNaN(billValue) && isNaN(peopleNumber)){
        amountPerson.innerHTML = '$0.00'
        amountTotal.innerHTML = '$0.00'
    }else{
        amountPerson.innerHTML = `$${(percentage / peopleNumber).toFixed(2)}` 
        amountTotal.innerHTML = `$${(dividedBill + (percentage / peopleNumber)).toFixed(2)}`
    }
})


function calculateTip(percent){
    let billValue = parseInt(Bill.value)
    let percentage = (billValue * percent)

    let peopleNumber = parseInt(NumberOfPeople.value)

    let dividedBill = billValue / peopleNumber 

    if(isNaN(billValue) || isNaN(peopleNumber)){
        amountPerson.innerHTML = '$0.00'
        amountTotal.innerHTML = '$0.00'      
    }else if(billValue === 0 || peopleNumber === 0){
        amountPerson.innerHTML = '$0.00'
        amountTotal.innerHTML = '$0.00'       
    }else{
        amountPerson.innerHTML = `$${(percentage / peopleNumber).toFixed(2)}` 
        amountTotal.innerHTML = `$${(dividedBill + (percentage / peopleNumber)).toFixed(2)}`
    }


}


function reset(){
    amountPerson.innerHTML = '$0.00'
    amountTotal.innerHTML = '$0.00'

    Bill.value = ''
    NumberOfPeople.value = 1
    customTip.value = ''
    customTip.classList.remove("show")

}












