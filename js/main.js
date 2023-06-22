


const dicLetterTo = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat'
};

let dicTextTo = {};


for (let key in dicLetterTo) {
  dicTextTo[dicLetterTo[key]] = key;
}


const encryptZone = document.getElementById('encryptZone');
const span = document.createElement('span');

span.className = 'showTextEncrypted';
span.id = 'textForCopy';

function createBtn() {
  const btn = document.createElement('button');
  const spanbtn = document.createElement('span');
  btn.id = 'btnCopy';
  btn.onclick = function() { copy(); };
  spanbtn.className = 'btnCopy-Text';
  spanbtn.textContent = 'Copiar';
  encryptZone.appendChild(btn);
  btn.appendChild(spanbtn);

}


var input = document.getElementById('textToEncrypt');

input.addEventListener('input', function() {
  var onlyLowercaseLetters = /^[a-z\s]+$/;
  var button1 = document.getElementById('btnEncrypt');
  var button2 = document.getElementById('btnDecrypt');

  const instruction = document.getElementsByClassName('textOnlyLowerCase');

  if (!this.value.match(onlyLowercaseLetters)) {
    instruction[0].classList.add('vibrate-and-highlight');
    button1.disabled = true;
    button2.disabled = true;

  } 
  else {
    instruction[0].classList.remove('vibrate-and-highlight');
    button1.disabled = false;
    button2.disabled = false;
  }
});




function encrypt() {
  const userText = document.getElementById('textToEncrypt').value;
  let textEncrypted = '';
  for (let char of userText) {
    textEncrypted += dicLetterTo[char] || char;

  }

  span.textContent = textEncrypted;
  encryptZone.textContent = '';
  encryptZone.appendChild(span);
  createBtn();

}

function decrypt() {
  const userText = document.getElementById('textToEncrypt').value;
  const span = document.createElement('span');
  let newText = userText;
  for (let char in dicTextTo) {
    newText = newText.replaceAll(char, dicTextTo[char]);
    span.textContent = newText;
    span.className = 'showTextEncrypted';
    span.id = 'textForCopy';
    encryptZone.textContent = '';
    encryptZone.appendChild(span);

  }
  createBtn();
  

}

function copy() {
  const textToCopy = document.getElementById('textForCopy').textContent;
  navigator.clipboard.writeText(textToCopy);

}

function errorEffect() {
  var elements = document.getElementsByClassName('textOnlyLowerCase');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('vibrate');
  }

}
