




document.querySelector('#sub_btn').addEventListener('click',addToLocal);

var id=0;

function addToInterface(){
let amount = document.getElementById('amount').value;
let cat = document.getElementById('cat').value;
let desc = document.getElementById('desc').value;
let edit=document.createElement('button');
id=id+1;

edit.addEventListener('click',editFunc)
let del=document.createElement('button');
del.addEventListener('click',delFunc);
del.className="btn"
del.classList.add('btn-sm')
del.classList.add('btn-danger');

del.appendChild(document.createTextNode('delete'));
edit.classList.add('btn')
edit.classList.add('btn-sm')
edit.classList.add('btn-success');
edit.appendChild(document.createTextNode('edit'));
    let list=document.createElement('li');
list.id=id;
    list.appendChild(document.createTextNode(`${amount} ${desc} ${cat} ` ));
    list.appendChild(edit);
    list.appendChild(del);
    document.querySelector('#listitems').append(list)

}

function print(e){
e.preventDefault();
let amount = document.getElementById('amount').value;
let cat = document.getElementById('cat').value;
let desc = document.getElementById('desc').value;
console.log(amount, cat, desc);
}

function addToLocal(){
    let amount = document.getElementById('amount').value;
    let cat = document.getElementById('cat').value;
    let desc = document.getElementById('desc').value;
    
    
    let obj={amount:amount,
        cat:cat,
    desc:desc,id:id}
    if(!localStorage.getItem('items')){
        let a=[];
        a.push(obj);
        localStorage.setItem('items',JSON.stringify(a))
    }
    else{
        
        let arr=JSON.parse(localStorage.getItem('items'))
        console.log(typeof arr);
       arr.push(obj);
        localStorage.setItem('items',JSON.stringify(arr));
        console.log(arr)
    }

    addToInterface();
     document.getElementById('amount').value="";
document.getElementById('cat').value="";
document.getElementById('desc').value="";


}

function editFunc(e){
e.preventDefault();
let list=e.target.parentElement;
console.log(list)
console.log('HI')
console.log(list.textContent.split(" "));
let amount=list.textContent.split(" ")[0];
let desc=list.textContent.split(" ")[1];
let cat=list.textContent.split(" ")[2];
document.querySelector('#amount').value=amount;
document.querySelector('#desc').value=desc;
document.querySelector('#cat').value=cat;
document.querySelector('#listitems').removeChild(list);
console.log(list,"hi Neha");

removeFromLocal(amount,desc,cat);
}

function delFunc(e){
e.preventDefault();
let list=e.target.parentElement;
alert('do you really want to delete')
document.querySelector('#listitems').removeChild(list);
let amount=list.textContent.split(" ")[0];
let desc=list.textContent.split(" ")[1];
let cat=list.textContent.split(" ")[2];
removeFromLocal(amount,desc,cat)
}


function removeFromLocal(amount,desc,cat){
    let arr=[];
    arr=JSON.parse(localStorage.getItem('items'));
    console.log(arr,'in line 98')
   if(!arr.length==0)

   {

    
        arr=arr.filter((a)=>{
            
    return (a.amount!=amount && a.desc!=desc && a.cat!=cat)
        })
        console.log(arr);
    


   }
   localStorage.setItem('items',JSON.stringify(arr))
}


document.addEventListener('DOMContentLoaded',()=>{
 
    let arr=JSON.parse(localStorage.getItem('items')) || [];
    if(arr.length>0){
    arr.forEach((a)=>{
        let amount=a.amount;
        let desc=a.desc;
        let cat=a.cat;
        let edit=document.createElement('button');
id=id+1;

edit.addEventListener('click',editFunc)
let del=document.createElement('button');
del.addEventListener('click',delFunc);
del.className="btn"
del.classList.add('btn-sm')
del.classList.add('btn-danger');

del.appendChild(document.createTextNode('delete'));
edit.classList.add('btn')
edit.classList.add('btn-sm')
edit.classList.add('btn-success');
edit.appendChild(document.createTextNode('edit'));
    let list=document.createElement('li');
list.id=id;
    list.appendChild(document.createTextNode(`${amount} ${desc} ${cat} ` ));
    list.appendChild(edit);
    list.appendChild(del);
    document.querySelector('#listitems').append(list)

     

    }
)
    }
})