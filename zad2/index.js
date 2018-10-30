//neparni - X
//parni - O

var count = 1;
var elementList = document.querySelectorAll('td');
for (var i = 0; i < elementList.length; i++)
{
    elementList[i].addEventListener("click",write);
}
var arraytr = Array.from(document.getElementsByTagName("tr"));
var array = [];
for(var i=0;i<9;i++)
{
    array[i]=-1;
}
var countFalse = 0;
function write()
{
    if(count%2==1)
        {   
            var tar = event.target;
            var row = (event.target.parentNode).rowIndex;
            var col = Array.from(arraytr[row].getElementsByTagName("td")).indexOf(tar);
            array[3*row+col] = 1;
            var p = document.createElement("p");
            var text = document.createTextNode("X");
            p.appendChild(text);
            p.className = "x";
            (event.target).appendChild(p);
            if(correct(array))
            {
                    alert('Pobijedo je igrac X!');
                    window.location.reload(true);
            }
            else
            {
                countFalse++;
            
            if(countFalse==9)
            {
                window.location.reload(true);
            }
            }
            count++;
            (event.target).removeEventListener("click",write);        }
        else
        {
            var tar = event.target;
            var row = (event.target.parentNode).rowIndex;
            var col = Array.from(arraytr[row].getElementsByTagName("td")).indexOf(tar);
            array[3*row+col] = 0;
            var p = document.createElement("p");
            var text = document.createTextNode("O");
            p.appendChild(text);
            p.className = "o";
            (event.target).appendChild(p);
            if(correct(array))
            {
                    alert('Pobijedo je igrac O!');
                    window.location.reload(true);
            }
            else
            {
                countFalse++;
            
            if(countFalse==9)
            {
                for(var i=0;i<9;i++)
                {
                    (Array.from(document.getElementsByTagName("td")))[i].removeChild(p);
                }
            }}
            count++;
            (event.target).removeEventListener("click",write);
        }
        
}

function correct(x)
{
    if(x[0]!==-1 && x[3]===x[0] && x[6]===x[0]){ return true;}
    else if(x[1]!==-1 && x[4]===x[1] && x[7]===x[1]) {return true;}
    else if(x[2]!==-1 && x[5]===x[2] && x[8]===x[2]) {return true;}
    else if(x[0]!==-1 && x[1]===x[0] && x[2]===x[0]) {return true;}
    else if(x[3]!==-1 && x[4]===x[3] && x[5]===x[3]) {return true;}
    else if(x[6]!==-1 && x[7]===x[6] && x[8]===x[6]) {return true;}
    else if(x[0]!==-1 && x[4]===x[0] && x[8]===x[0]) {return true;}
    else {return false;}
}