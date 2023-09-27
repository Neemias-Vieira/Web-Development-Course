// Expressions Grouping Operator

// Operator Precedence

// grouping                      ()
// negation and increment        ! ++ --
// multiplication and division   * /
// addition and subtraction      + -
// comparison                    < <= > >=
// equality                      == != === !==
// and                           &&
// or                            ||
// conditional                   ?:
// assignment                    = += -= *= %=


console.log(" ");
console.log("//////////5-GROUPING////////");
const total =  (7 + 8) / 2;
console.log(total); //7.5
console.log(3 > 2 && 2 < 1); //false
console.log(true || false); //true
console.log(3 > 2 > 1); //false. Pois 3 é maior que 2, então retorna TRUE; TRUE é maior que 1? NÃO! (OBS: TRUE == 1)
console.log(3 > 2 >= 1); //true
console.log(3 > 2 && 2 > 1); //true
console.log(true == 1); //true
console.log(true === 1); //false