class APIHandler {
  constructor (baseUrl) {

    this.BASE_URL = baseUrl;
  }

  getFullList() {
    let resultDiv = document.getElementsByClassName('character-info')[0]
    axios.get(' https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
      const characterArr = response.data;
      resultDiv.innerHTML = '';
      characterArr.forEach((eachThing)=>{
        resultDiv.innerHTML += `
        <div class="characters-container">
        <div class='character-info'>
        <div class="name">Character Name: ${eachThing.name}</div>
        <div class="occupation">Character Occupation: ${eachThing.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon: ${eachThing.weapon}</div>
        </div>
        </div>
        `
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  

  getOneRegister() {
    let resultDiv = document.getElementsByClassName('character-info')[0]
    const getOne = document.getElementById('character-num')  
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+getOne.value)
    .then((response)=>{
      console.log(response)
      resultDiv.innerHTML = '';
        resultDiv.innerHTML += `
        <div class="characters-container">
        <div class='character-info'>
        <div class="name">Character Name: ${response.data.name}</div>
        <div class="occupation">Character Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon: ${response.data.weapon}</div>
        </div>
        </div>
        `
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  createOneRegister() {
    let theName = document.getElementById('new-name').value
    let theOcc = document.getElementById('new-occ').value
    let theWep = document.getElementById('new-wep').value
    axios.post('https://ih-crud-api.herokuapp.com/characters', 
    {name: theName, occupation: theOcc, weapon: theWep})
    .then((response)=>{
    })
    .catch((err)=>{
    })
  }

  updateOneRegister() {
    const infoUpdate = {
      name: document.getElementById('char-name').value,
      occupation: document.getElementById('char-occ').value,
      weapon: document.getElementById('char-wep').value
    };
    const charId = document.getElementById('char-id').value;
    axios.put(`https://ih-crud-api.herokuapp.com/characters/${charId}`, infoUpdate)
    .then((response)=>{
    })
    .catch((err)=>{
    })
  }

  deleteOneRegister() {
    let resultDiv = document.getElementsByClassName('character-info')[0]
    const getOne = document.getElementById('char-delete')  
    axios.delete('https://ih-crud-api.herokuapp.com/characters/'+getOne.value)
  }
}
