// recebe um número e diz se é primo,
// se for primo mostra o mesmo e seu dobro

// se não for primo, mostra os divisores

alert(isCousin());

function isCousin(){
    let num = Number(prompt(`Digite o número a ser checado`));
    const cousinNumber = num * 2;
    try{
        let cont = 0;
        for (let i = 1; i <= num; i++ ) {
            
            if (num % i == 1 || i == 1) {
                cont++;
            }
        }
        if(cont == 2 || num == 2){
            return(`${num} é um número primo, e o dobro dele é ${cousinNumber}`);
            
        }else{
            let dividersArray = [];

            for(let j = num; j >= 1; j--){
                if (num % j == 0) {
                    dividersArray.push(j);
                }
            }
            return(`${num} não é um número primo, os divisores são ${dividersArray.join(", ")}`)
        }
    }catch (error) {
        return (error);
      }
}