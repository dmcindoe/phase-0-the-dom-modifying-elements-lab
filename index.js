document.querySelector('main').remove()

// const newHeader = document.createElement('h1')
 //document.body.appendChild(newHeader)
 
 let newHeader = document.createElement("h1")
    newHeader.setAttribute("id", "victory")
    document.body.appendChild(newHeader)  

let champD = document.getElementById("victory").textContent += "Drew is the champion";

 
    //var node = document.createElement("LI");                 // Create a <li> node
    //var textnode = document.createTextNode("Water");         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    //document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
