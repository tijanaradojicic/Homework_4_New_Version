var form = document.getElementById("addForm");
var parent = document.getElementById("divSquare");
var char = [];
var divs = [];
var k=0;
function sub(event) 
{
    document.onkeydown = checkKey;
    event.preventDefault();
    var input = document.getElementById("input").value;
    for(var i=0;i<Number(input);i++)
    {
        char[i]=null;
    }
    for(var i=0; i<Number(input); i++)
    {
        var d = document.createElement("div");
        divs[k++] = d;
        d.addEventListener("click",write);
        d.className = "square";
        d.style.display = "inline-block";
        parent.appendChild(d);
        var b = document.createElement("button");
        b.className = "delete";
        d.appendChild(b);
        b.addEventListener("click",remove);
        b.appendChild(document.createTextNode("X"));
        b.addEventListener("click",remove);
    }

    function remove(event)
    {
        var pos = divs.indexOf(event.target.parentElement);
        char.splice(pos,1);
        if(checkPalindrome(char))
            {
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "none";
            }         
        else
            {
                document.getElementById("no").style.display = "block";
                document.getElementById("yes").style.display = "none";
            }
        event.target.parentElement.style.display = "none";
    }

    function write(event)
    {
        if(document.getElementById("ptext")!==null)
        {
            document.getElementById("ptext").remove();
        }
        let inp = document.createElement("input");
        inp.className = "enter";
        event.target.appendChild(inp);
        let btn = document.createElement("button");
        let ok = document.createTextNode("unesi");
        btn.appendChild(ok);
        btn.addEventListener("click",text);
        btn.className = "ok";
        event.target.appendChild(btn);
        event.target.removeEventListener("click",write);  
        function text()
        {
            var pos = divs.indexOf(event.target);
            let t = inp.value;
            if(check(t)===false)
            {
                alert('Potrebno je unijeti slovo ili broj!');
                write();
            }
            char[pos]=t;
            let p = document.createElement("p");
            p.className = "text";
            let pp = document.createTextNode(t);
            p.appendChild(pp);
            inp.parentElement.appendChild(p);
            var dthis = inp.parentElement;
            inp.style.display = "none";
            btn.style.display = "none";    
            if(checkPalindrome(char))
            {
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "none";
            }         
            else
            {
                document.getElementById("no").style.display = "block";
                document.getElementById("yes").style.display = "none";

            }
            p.addEventListener("click",rewrite);
            function rewrite(event)
            {
                event.target.removeEventListener("click",rewrite);
                event.target.parentElement.addEventListener("click",write);
                event.target.remove();
            }

        }   
    }
    function checkKey(e) {

        e = e || window.event;
        
        if (e.keyCode == '107')
        {
            var d = document.createElement("div");
            divs[k++] = d;
            d.addEventListener("click",write);
            d.className = "square";
            d.style.display = "inline-block";
            parent.appendChild(d);
            var b = document.createElement("button");
            b.className = "delete";
            d.appendChild(b);
            b.addEventListener("click",remove);
            b.appendChild(document.createTextNode("X"));
            b.addEventListener("click",remove);
        }
    }

    this.removeEventListener("submit",sub);
}

form.addEventListener("submit", sub);
function check(c)
{
    if((c>='a' && c<='z') || (c>='A' && c<='Z') || (c>='0' && c<='9'))
    {
        return true;
    }
    return false;
}

function checkPalindrome(s)
{
    var ind = 1;
    s=remfalse(s);
    for(var i=0;i<s.length/2;i++)
    {
        if(s[i]!=s[s.length-1-i])
        {
            ind=0;
        }
    }
    return ind;
}

function remfalse(x)
{
    var niz1 = [];
    for(var i = 0; i < x.length; i++)
    {
        if(Boolean(x[i])!=false)
        {
            niz1.push(x[i]);
        }
    }
    return niz1;
}

