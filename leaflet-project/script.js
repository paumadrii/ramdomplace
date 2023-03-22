let selectedRow=null
let playerArr=[]

class player{
    constructor(namePlayer,age,address,music,price){
        this.player=namePlayer
        this.age= age
        this.address= address
        this.music= music
        this.price= price
    }
}


document.querySelector('#player-form').addEventListener('submit',(e) => {
    e.preventDefault();
    
        const namePlayer=document.querySelector('#name').value
        const age= document.querySelector('#age').value
        const address= document.querySelector('#address').value
        const music= document.querySelector('#music').value
        const price= document.querySelector('#price').value

    if(namePlayer == '' || age == '' || address== '' || music == '' || price == ''){
        showAlert('Please fill all fields')
    }else{
        const name=document.querySelector('#name').value
        const addplayer= new player(namePlayer,age,address,music,price)
        console.log(addplayer)
        playerArr.push(addplayer);
        console.log(playerArr);

        if(selectedRow === null){
            const list=document.querySelector('.name-list')
            const row=document.createElement('tr')
            //row.setAttribute('position', 'playerArr.length-1'){
          //en eliminar get atrribute(position) parse int a player arr eliminar position 
            row.innerHTML=`
            <td>${name}</td>
            <td>
            <button  class="btn delete" id="delete">Delete</button>
            </td>
            `
            list.appendChild(row)
            selectedRow=null
            showAlert('player added')
        }
            clear()
    }

})


function showAlert(message,className){
    const div=document.createElement('div')
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.content');
    const main= document.querySelector('.main');
    container.insertBefore(div,main);

    setTimeout(()=> document.querySelector('.alert').remove(),3000);

}

function clear(){
    document.querySelector('#name').value=''
    document.querySelector('#age').value=''
    document.querySelector('#address').value=''
    document.querySelector('#music').value=''
    document.querySelector('#price').value=''
}




document.querySelector('.name-list').addEventListener('click',(e) =>{
    target = e.target;
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
        showAlert('player remove')
        
    }
})

document.querySelector('.sh').addEventListener('click',(e)=>{


    const change= playerArr[Math.floor(Math.random() * playerArr.length)]
    console.log(change)


    // el caso es que yo quiero que me apunte a mi .name-list

})

