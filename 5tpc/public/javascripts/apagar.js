function apagaItem(id) {
    console.log("Vou apagar o item: "+ id)
    axios.delete('/compras/'+id)
         .then(response => window.location.assign('/compras'))
         .catch(error => console.log(error))
}