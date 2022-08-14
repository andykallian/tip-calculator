/* -------------- inputs limits ----------------- */


const Bill = document.querySelector('#bill')
const NumberOfPeople = document.querySelector('#number-of-people')
const customTip = document.querySelector('#custom')



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



/* -------------- maths ----------------- */

const button = document.querySelector('.reset')
const five = document.querySelector('#five')
const ten = document.querySelector('#ten')
const fifteen = document.querySelector('#fifteen')
const twentyFive = document.querySelector('.twenty-five')
const fifty = document.querySelector('#fifty')


const amountPerson = document.querySelector('#amount-person')
const amountTotal = document.querySelector('#amount-total')


function customPercent(){

    let isFocused = (document.activeElement === customTip);
    let peopleNumber = parseInt(NumberOfPeople.value)

    if(isFocused && peopleNumber > '1'){
        let billValue = parseInt(Bill.value)
        let customValue = customTip.value / 100

        let percentage = (billValue * customValue).toFixed(2)

        let dividedBill = billValue / peopleNumber 

        amountPerson.innerHTML = percentage / peopleNumber
        amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)

    }else{
        amountPerson.innerHTML = '$0.00'
        amountTotal.innerHTML = '$0.00'
    }

}

function fivePercent(){
    let billValue = parseInt(Bill.value)


    let percentage = (billValue * 0.05).toFixed(2)


    let peopleNumber = parseInt(NumberOfPeople.value)

    console.log(peopleNumber)

    let dividedBill = billValue / peopleNumber 

    amountPerson.innerHTML = percentage / peopleNumber
    amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)
}

function tenPercent(){
    let billValue = parseInt(Bill.value)


    let percentage = (billValue * 0.1).toFixed(2)


    let peopleNumber = parseInt(NumberOfPeople.value)

    console.log(peopleNumber)

    let dividedBill = billValue / peopleNumber 

    amountPerson.innerHTML = percentage / peopleNumber
    amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)
    
}

function fifteenPercent(){
    let billValue = parseInt(Bill.value)


    let percentage = (billValue * 0.15).toFixed(2)


    let peopleNumber = parseInt(NumberOfPeople.value)

    console.log(peopleNumber)

    let dividedBill = billValue / peopleNumber 

    amountPerson.innerHTML = percentage / peopleNumber
    amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)

}

function twentyFivePercent(){

    let billValue = parseInt(Bill.value)


    let percentage = (billValue * 0.25).toFixed(2)


    let peopleNumber = parseInt(NumberOfPeople.value)

    console.log(peopleNumber)

    let dividedBill = billValue / peopleNumber 

    amountPerson.innerHTML = percentage / peopleNumber
    amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)

}

function fiftyPercent(){

    let billValue = parseInt(Bill.value)


    let percentage = (billValue * 0.5).toFixed(2)


    let peopleNumber = parseInt(NumberOfPeople.value)

    console.log(peopleNumber)

    let dividedBill = billValue / peopleNumber 

    amountPerson.innerHTML = percentage / peopleNumber
    amountTotal.innerHTML = dividedBill + (percentage / peopleNumber)

}












