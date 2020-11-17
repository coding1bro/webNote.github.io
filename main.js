console.log('HELLO world');

showNotes();
let submit1 = document.getElementById('submit').addEventListener('click', funadd);

function funadd(e) {
  inputBox1 = document.getElementById('inputBox');
  LCnote1 = localStorage.getItem('LCnote');

  if (localStorage.getItem('LCnote') === null) {
    array_LCN = [];

  }
  else {
    array_LCN = JSON.parse(localStorage.getItem('LCnote'));
  }

  array_LCN.push(inputBox1.value);
  localStorage.setItem('LCnote', JSON.stringify(array_LCN))
  inputBox1.value = '';
  showNotes();
}

  //Show Notes Function Inside Original function 
  function showNotes(e) {
    inputBox1 = document.getElementById('inputBox');
    LCnote1 = localStorage.getItem('LCnote');

    if (localStorage.getItem('LCnote') === null) {
      array_LCN = [];

    }
    else {
      array_LCN = JSON.parse(localStorage.getItem('LCnote'));
    }

let html="";
array_LCN.forEach(function showhtml(element, index){
  html+=
  `<div class="aditya mx-2 my-2 card text-white bg-primary" style="max-width=18rem">
    <div class="notett card-header"><b>Note ${index +1}</b></div>
    <div class="card-body">
      <p class="mynt card-text"> ${element}</p>
    </div>
  </div> `
});

let notesElem=document.getElementById('notes');
if (array_LCN.length != 0) {
  notesElem.innerHTML=html;
}
else{
  notesElem.innerHTML=`<div class="empty1 alert alert-primary" role="alert">
    Sorry, You Dont Have Any Notes !
  </div>
  <div class="empty1 alert alert-primary" role="alert">
    To Add Notes Write Your Note In Above Box & Tap "Add Note" Button.
  </div>
  `
}

  }
  
     // To Add Notes Write Your Note In Above Box & Tap "Add Note" Button

  
  
