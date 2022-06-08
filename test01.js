//Criando um novo objeto da classe promise e atribuindo ao valor da variável "const test"
const teste = new Promise ((resolve, rejeita) => {
    
                                //parametros para a criação do objeto da classe Promise
    setTimeout(
        () => resolve ('Promise resolvida'), 3000
         )
})

teste.then(
    (res => {console.log("RESULTADO: ", res)
    })
)



