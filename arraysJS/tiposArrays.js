const latas = ["grande", "media", "pequena"];

//inserir elementos no array
latas.push("extra-small");

//filtrar elementos de um array
const latasAtualizadas = latas.filter(lata =>{
  return lata !== "media"
})

const latasPequena = latas.find(lata => {
  return lata === "pequena"
})

// update do array
const novasLatas = [...latas,"mini-lata"]

//console.log(latas)
//console.log(latasAtualizadas)
//console.log(latasPequena.includes("pequena",1))
 //console.log(novasLatas.slice(1,-1))

 //mudar um array original com o pop para remover um ou mais elementos

 const latasVersaoPop = latas.pop()
 //console.log(latasVersaoPop)

 //usando o map e o

 const listaFrutas = ["uva", "goiaba","tangerina"]

 const uvas = listaFrutas.map(listaFruta => {
   return "uva"

 })
  //console.log(listaFrutas)
  //console.log(uvas) 

  /**
   * criando objetos js
   */

  let User = {
    name: 'Lucas',
    age : 32,
    weight: 58.6,
    city: 'Miame' 
  }
   console.log(User.age)