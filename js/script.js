//Task 3.0

var menuLinks = [
     {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
     {text: 'orders', href: '/orders'},
   {text: 'account', href: '/account'},
   ];

//Task 2.0
//Select and cache <main> in a variable named mainEl
let mainEl = document.querySelector("main");

// Set background color of mainEl
mainEl.style.background = 'var(--main-bg)';

//Set content of mainEl to <h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Add a class of flex-ctrto mainEl
mainEl.classList.add('flex-ctr');

//Select and cache id="top-menu" element in a variable named topMenuEl

let topMenuEl = document.getElementById('top-menu');

//Task 2.1
//Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

//Task 2.2
//Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.background = "var(--top-menu-bg)";

//Task 2.3
topMenuEl.classList.add('flex-around');

//interate over entire array
//Task 3.1
menuLinks.forEach(function(link){

    //Create an <a> element.
  
    let anchor = document.createElement("a");
  
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    
    anchor.setAttribute("href", link.href);
  
    //Set the new element's content to the value of the text property of the "link" object.
  
    anchor.innerText = link.text;
  
    //Append the new element to the topMenuElelement.
  
   topMenuEl.appendChild(anchor);
    });