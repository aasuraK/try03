var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var itemDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input values
  li.appendChild(document.createTextNode(newItem + " " + itemDescription));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  // Add classes to del and edit buttons
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-sm float-right edit';
  // Append text nodes
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('edit'));
  // Append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
  var user = {
    item: newItem,
    description: itemDescription
  };

  // Save user object to local storage
;
  localStorage.setItem(newItem, itemDescription);
  console.log(localStorage.getItem(newItem));

}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
