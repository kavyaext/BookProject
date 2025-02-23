//selecting popup box and popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbtn=document.getElementById("add-popup-button")

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("Book-title-input")
var bookauthor=document.getElementById("Book-Author-input")
var bookdesc=document.getElementById("book-description-input")

/*<div class="book-container">
            <h2>Rich Dad Poor Dad</h2>
            <h5>Robert</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam qui beatae repellat consequatur illo
                odit ipsa, vel error alias maiores. Ipsa, distinctio alias suscipit velit, ipsam voluptatibus, tenetur
                repellat nisi cupiditate aliquam natus officiis debitis qui laborum expedita. Odio soluta quibusdam odit
                dolores magnam voluptatum vel asperiores nostrum dicta omnis!</p>
            <button>Delete</button>
        </div>
        */
addbook.addEventListener("click",function(event){
     event.preventDefault()
     var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h2>${booktitle.value}</h2>
<h5>${bookauthor.value}</h5>
<p>${bookdesc.value}</p>
<button>Delete</button>`
     container.append(div)
     popupoverlay.style.display="none"
     popupbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove()
}