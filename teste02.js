const teste = new Promise ((resolve, rejeita) => {
    let a = 10
    let b = 20 

    resolve(a + c) //forçando o C que não foi declarado para dar erro
}).then(
    (res => {console.log("RESULTADO: ", res)
    //catch pega o erro e existe a mensagem
    })).catch(() => {
        console.log("Erro!")
    //caso use o B que foi declarado, aparece a resposta e a mensagem
    }).finally(() => {
        console.log("Fim da execução!")
    })