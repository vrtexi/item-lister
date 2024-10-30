// // // //console.log(document.domain);
// // // // console.log(document.URL);
// // // // console.log(document.title);
// // // // console.log(document.doctype);
// // // // console.log(document.head);
// // // // console.log(document.body);
// // // // console.log(document.all);
// // // // console.log(document.all[9]);
// // // // // document.all[9].textContent = 'hello';
// // // // console.log(document.forms[0]);
// // // // console.log(document.links);

// // // // Getellementttt

// // // // console.log(document.getElementById('header-title'));
// // // // const headerTitle = document.getElementById('header-title');
// // // // console.log(headerTitle);

// // // // const header = document.getElementById('main-header');
// // // // console.log(headerTitle);
// // // // headerTitle.textContent = 'heeeello';
// // // // headerTitle.innerText = 'tetetet';
// // // // headerTitle.innerHTML = '<p style="font-size: 30px">lello</p> ';
// // // // header.style.borderBottom = 'solid 3px #000';

// // // // getelemewntsbyclassname

// // // // var items = document.getElementsByClassName('list-group-item');
// // // // console.log(items);
// // // // items[1].textContent= 'hello2'
// // // // items[1].style.fontWeight = 'bold'
// // // // items[1].style.backgroundColor = 'yellow'

// // // // for(var i =0; i< items.length; i++){
// // // //   items[i].style.backgroundColor= 'green';
// // // // }

// // // // get element by tag name 

// // // // var li = document.getElementsByTagName("li");
// // // // console.log(li);
// // // // console.log(li[1]);
// // // // li[1].textContent = 'hello 2'
// // // // li[1].style.fontWeight = 'bold'
// // // // li[1].style.backgroundColor = 'lightgreen';

// // // // for (var i =0; i< 5; i++){
// // // //   li[i].style.backgroundColor = 'lightgreen';
// // // // }

// // // // query selector 
// // // // var header = document.querySelector("#main-header");

// // // // header.style.borderBottom = '4px solid #ccc';

// // // // var input = document.querySelector(" input");

// // // // input.value = 'hekeke';

// // // // var submit = document.querySelector('input[type="submit"]');

// // // // submit.value = 'Send'

// // // // var item = document.querySelector('.list-group-item');

// // // // item.style.color = 'blue'

// // // // var lastItemn = document.querySelector('.list-group-item:nth-child(4)')
// // // // lastItemn.style.color = "orange"

// // // // var secondItem = document.querySelector('.list-group-item:nth-child(2)');

// // // // secondItem.style.backgroundColor = 'lightgreen';


// // // var all = document.querySelectorAll('.title')

// // // for (var i = 0; i< 2; i++ ){
// // //   all[i].style.backgroundColor = 'yellow'
// // // }

// // // var odd = document.querySelectorAll('li:nth-child(odd)')

// // // var even = document.querySelectorAll('li:nth-child(even)')


// // // for(var i= 0; i< odd.length; i++){
// // //   odd[i].style.backgroundColor = '#f4f4f4'
// // //   even[i].style.backgroundColor = 'lightgreen'
// // // }


// // // traversing the dom 
// // var itemList = document.querySelector('#items');

// // // parents node

// // console.log(itemList.parentNode)
// // itemList.parentNode.style.backgroundColor = '#f4f4f4'

// // //  child node n children

// // console.log(itemList.childNodes)
// // console.log(itemList.children)
// // itemList.children[1].style.backgroundColor = "#098765"

// // // first child & first element child 

// // // console.log(itemList.firstChild)
// // // console.log(itemList.firstElementChild)
// // // itemList.firstElementChild.textContent = 'jijij'



// // // console.log(itemList.lastChild)
// // // console.log(itemList.lastElementChild)
// // // itemList.lastElementChild.textContent = 'lorem10'

// // //create element 

// // //create a div

// // var newDiv = document.createElement('div');

// // // add class 
// // newDiv.className= 'hello';

// // // add id 
// // newDiv.id = 'hello1';

// // //add attr
// // newDiv.setAttribute('title', 'hello div');



// //------------------------ create text node-------------------------
// // var newDivText = document.createTextNode('hello world');
// // var newDivText1 = document.createTextNode(' goodbye world');

// // -------------------------add text to div----------------------------

// // newDiv.appendChild(newDivText);
// // newDiv.appendChild(newDivText1);
// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header hi');

// // container.insertBefore(newDiv, h1);
// // newDiv.style.fontSize= "19px"
// // console.log(newDiv);

// // ----------------------------------------------events ---------------

// // var button = document.getElementById('button').addEventListener('click', buttonClick);

// // function buttonClick(e){
//   // document.getElementById("header-title").textContent = 'ok';
//   // document.querySelector('#main').style.backgroundColor = "yellow";
//   // console.log(e)

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);

//   var output = document.getElementById("output");
//   // output.innerHTML = " <h4>" +e.target.id+  "</h4>" 

//   // console.log(e.type);

//   // console.log(e.clientX);
//   // console.log(e.clientY);

//   // console.log(e.offsetX);
//   // console.log(e.offsetY);

//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);

// // }

// // --------------------- TYPE OF Event -------------------------------
// var button = document.getElementById('button');
// var box = document.getElementById('box');

// // button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);

// // ----------------only for parent Element------------ 
// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);

// // works on even on the inner element of container 

// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var items = document.querySelector('#items');
// var select = document.querySelector("select");

// // form.addEventListener('submit', onSubmit);
// // select.addEventListener('change', runEvent);
// form.addEventListener('submit', runEvent);
// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);
// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);
// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);

// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);
//   console.log(e.target.value);

//   const li = document.createElement('li');
//   var textnode = document.createTextNode(`${itemInput.value} ${select.value} `);
//   li.appendChild(textnode);
//   li.classList.add('list-group-item');
//   items.appendChild(li);
//   // console.log(li)

//     // clearfeild
//     itemInput.value = '';

//   // output.innerHTML = ' <h3>' +e.target.value+ '</h3>'

 
//   // output.innerHTML = '<h2> Mouse X' +e.offsetX+ '</h2><h2> Mouse Y' +e.offsetY+ '</h2>';

//   // button.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//   // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// }


// ------------------ add items ------------------------

var form = document.querySelector('form');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

// form submit event 

form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeInput)

// filter event
filter.addEventListener('keyup', filterItems);

// add items

function addItem(e){
  e.preventDefault();

  // get input value 
  var newItem = document.getElementById('input-value').value;

  // create new li element 
  var btn = document.createElement('button');
  var li = document.createElement('li');
  
  // add class
  li.classList.add('list-group-item');
  btn.classList.add('btn-danger');

  //create text node
  var textnode = document.createTextNode(newItem);
  li.appendChild(textnode);
  btn.appendChild(document.createTextNode('X'));

  // append li to list
  li.appendChild(btn);
  itemList.appendChild(li);

}

// remove items
function removeInput(e){
  e.preventDefault();

  if(e.target.classList.contains('btn-danger')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

//filter items 
function filterItems(e){
   
  // convert to loer case 
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'flex';
    }else {
      item.style.display = 'none';
    }
  })
}