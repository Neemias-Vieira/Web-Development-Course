//  Logical Operators (Boolean)

//  and &&
//  or  ||
//  not !

const creditCard = true;
const hasCredit = false;

document.write("////3-LOGICAL////");
document.write(creditCard + "<BR>");    //true
document.write(!creditCard + "<BR>");    //false
document.write(!!creditCard + "<BR><BR>");    //true

document.write(hasCredit + "<BR>");    //false
document.write(!hasCredit + "<BR>");    //true
document.write(!!hasCredit + "<BR><BR>");    //false


document.write(creditCard && hasCredit + "<BR>");   //false
document.write(creditCard && !hasCredit + "<BR>");   //true
document.write(!creditCard && hasCredit);   //false

const saveMoney = true;
const borrow = true;

document.write("<BR><BR>" + saveMoney || borrow);   //true

