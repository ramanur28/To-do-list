let list = document.getElementById('list');
let inputList = document.getElementById('input-list');
let addButton = document.getElementById('addButton');
let input = document.getElementById('input-list');

function newlist() {
  console.log('ok');
  var paragraph = document.createElement('p');
  paragraph.innerText = inputList.value;
  list.appendChild(paragraph);
  inputList.value = '';
  paragraph.className = 'taskList';
  paragraph.addEventListener('click', function () {
    paragraph.innerHTML = 'Finished';
  });
}

addButton.addEventListener('click', newlist);
input.addEventListener('keyup', function (e) {
  if (e.keyCode == 13) {
    newlist();
  }
});
