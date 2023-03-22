let map = L.map('map').setView([40.42116944, -3.701063889], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

class Address{
    viaClase = ""
    addressQuery = ""
    constructor({VIA_CLASE, VIA_PAR, VIA_NOMBRE, NUMERO, LONGITUD, LATITUD }){
        this.viaClase = VIA_CLASE
        this.viaPar = VIA_PAR
        this.viaNombre = VIA_NOMBRE
        this.numero = NUMERO
        this.longitud = LONGITUD
        this.latitud = LATITUD

        this.setAddressQuery()

    }

    setAddressQuery(){
        let addressQuery = ""
        if(this.viaClase){
            addressQuery = `${addressQuery} ${this.viaClase}`.toLocaleLowerCase().trim()//autovia
        }
        if(this.viaPar){
            addressQuery = `${addressQuery} ${this.viaPar}`.toLocaleLowerCase().trim() // autovia asldkfj
        }
        if(this.viaNombre){
            addressQuery = `${addressQuery} ${this.viaNombre}`.toLocaleLowerCase().trim() // autovia asldkfj
        }
        if(this.numero){
            addressQuery = `${addressQuery} ${this.numero}`.toLocaleLowerCase().trim() // autovia asldkfj
        }
        this.addressQuery = addressQuery
    }
}
let addresses = []

const x = fetch('./address.json')
    .then((response) => response.json())
    .then((json) => {
        addresses = json.map((address) => new Address(address))
    });

document.querySelector('#player-form').addEventListener('submit',(e)=>{
    const home= document.querySelector('#address').value
    const address = addresses.find(({addressQuery}) => addressQuery.toLowerCase().includes(home.toLowerCase().trim()))
        L.marker([address.latitud, address.longitud]).addTo(map)
   
})

   
       
    