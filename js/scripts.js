
function newItem(){

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

    if (inputValue === ''){
    alert('You must enter an item to add it!');
  } else {
    $('#list').append(li);
  };

function crossOut(){
  li.toggleClass('strike')
};

li.on('dblclick', function crossOut(){
  li.toggleClass('strike')
});

function deleteListItem() {
  li.addClass('delete');
};

let crossOutButton = li.append('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
crossOutButton.on('click', deleteListItem());

$('#list').sortable();

};

