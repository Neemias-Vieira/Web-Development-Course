// Faça um Menu com as seguintes opções:
/*
Digite a opção desejada:
    1 - Cadastrar item
    - Poder cadastrar itens enquanto não cancelar
    - Alertar usuário para adicionar item caso não informe
    - Mostrar mensagem de sucesso junto do nome ao cadastrar
    - Fazer alerta de item cadastrado caso ele já esteja cadastrado

    2 - Ver itens cadastrados
    - Mostrar itens cadastrados
    - Alertar caso a lista esteja vazia

    3 - Remover item cadastrado
    - Alertar caso a lista esteja vazia
    - Poder remover itens pelo nome enquanto não cancelar
    - Remover item automaticamente caso só tenha um na lista
    - Mostrar mensagem de sucesso junto do nome ao remover
    - Alertar usuário caso o item informado não seja encontrado

    4 - Sair do programa
    - Sair do programa quando escolher a opção 4 ou cancelar
    - Se não escolher uma das opções do menu mostrar mensagem de alerta
*/
menuList();

function menuList(){ 
    

    const listItens = [];
    while (true) { 
        const menuOption = prompt(`
            Digite a opção desejada:

                1 - Cadastrar item
                2 - ver itens cadastrados
                3 - Remover item cadastrado
                4 - Sair do programa
        `);

        if (menuOption === "4" || menuOption === null) break;

        if(menuOption === ""){

            alert(`Escolha uma opção`);
            continue;

        }
    

        switch (menuOption) {
            case "1":
                while(true){
                    let addItem = prompt("Digite o nome a ser cadastrado, por favor");
                    
                    if (addItem === null) break;
                    
                    addItem = addItem.trim().split(" ").filter(Boolean).join(" ");
                    
                    if (addItem === ""){
                        alert("Digite um nome a cadastrar.");
                        continue;
                    }

                    if (listItens.includes(addItem)) {
                        alert("Item já cadastrado!");
                    } else{
                        listItens.push(addItem);
                        alert(`"${addItem}" cadastrado com sucesso!`);
                      }
                }
            break;

            case "2":
                
                if (listItens.length === 0) {

                    alert("Lista vazia!");
                
                }else {
                    
                    alert(listItens.join(" - "));
                
                }
                
                break;

            case "3":
                
                if (listItens.length === 1) {

                    const removedItemName = listItens.pop();
                    alert (`O item "${removedItemName}" foi removido com sucesso!`);
                    break;

                }

                while (true) {
                    
                    if (listItens.length === 0) {

                        alert(`Lista vazia!`);
                        break;

                    }else{

                        let itemNameToRemove = prompt("Digite o nome para remover");

                        if(itemNameToRemove === null) break;

                        itemNameToRemove = itemNameToRemove.trim().split(" ").filter(Boolean).join(" ");

                        if(itemNameToRemove === " ") {

                            alert(`Por favor, insira o nome a ser removido`);
                            continue;
                        
                        }

                        if (listItens.includes(itemNameToRemove)) {
                            
                            listItens.splice(listItens.indexOf(itemNameToRemove) , 1);

                            let viewNewList;
                            do { 
                                viewNewList = prompt(`
                                    "${itemNameToRemove}" foi removido com sucesso!
                                                            
                                        Se deseja ver a lista atualizada insira o número "1"
                                        Se não deseja ver clique em "cancelar"
                                `);

                                if (viewNewList === null) break;

                                if(menuOption === ""){

                                    alert(`Escolha uma opção`);
                                    continue;
                        
                                }
                                
                                switch (viewNewList) {
                                    case "1":
                                        
                                    if (listItens.length === 0) {

                                        alert("A lista ficou vazia!");
                                    
                                    }else {
                                        
                                        alert(listItens.join(" - "));
                                    
                                    }
                                        break;
                                
                                    default:
                                        break;
                                }
                            }while (viewNewList === "");
    

                        }else{
                            alert(`Item não encontrado, tente novamente`);
                        }

                    }
                    break;

                }
                break;

            default:
                alert("Opção Inválida!");
        }
        
    }

}