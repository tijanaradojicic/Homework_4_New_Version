var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
document.onkeydown = checkKey;
var i = 0;
form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterItems);
window.saveArray = new Array();

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  let inh = "<li class='list-group-item'>"+newItem+"<button class='btn btn-danger btn-sm float-right delete'>X</button></li>"
  localStorage.setItem('it'+i,inh);
  i++;
  //itemList.innerHTML += localStorage.getItem('it');
}

for(let i=0;i<localStorage.length;i++)
{
    const t = localStorage.getItem('it'+i);
    itemList.innerHTML += t;
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().startsWith(text))
    {
        item.style.display = "block";
        item.addEventListener("click",function(){
            e.target.value = itemName;
        })
    }
    else {
        item.style.display = "none";
    }
  });
}

var items = itemList.getElementsByTagName("li");
var array = Array.from(items);
var count = 0;
var temp;
function checkKey(e) {

    e = e || window.event;
  
    if (e.keyCode == '38') {
      if(count==0)
      {
          temp=0;
          for(var i=0;i<array.length;i++)
          {
              if(i==temp)
              {
                  array[i].style.backgroundColor = "rgb(40, 167, 69)";
              }
              else
              {
                  array[i].style.backgroundColor = "white";
              }
          }
            count = 1;
      }
      else
      {
        if(temp==0)
        {
            temp=array.length-1;
        }
        else
        {
            temp--;
        }
        for(var i=0;i<array.length;i++)
        {
            if(i==temp)
            {
                array[i].style.backgroundColor = "rgb(40, 167, 69)";
            }
            else
            {
                array[i].style.backgroundColor = "white";
            }
        }

            count--;
      }
    }
    else if (e.keyCode == '40') {
      if(count==0)
      {
          temp=0;
        for(var i=0;i<array.length;i++)
        {
            if(i==temp)
            {
                array[i].style.backgroundColor = "rgb(40, 167, 69)";
            }
            else
            {
                array[i].style.backgroundColor = "white";
            }
        }
            count=1;
      }
      
      else
      {
          if(temp==array.length-1)
          {
              temp=0;
          }
          else
          {
              temp++;
          }
        for(var i=0;i<array.length;i++)
        {
            if(i==temp)
            {
                array[i].style.backgroundColor = "rgb(40, 167, 69)";
            }
            else
            {
                array[i].style.backgroundColor = "white";
            }
        }
            count++;
      }
    }
    else if (e.keyCode == '13')
    {
        filter.value = array[temp].firstChild.textContent;
    }
  
  }

