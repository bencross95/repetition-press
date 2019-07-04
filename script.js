const images = [
  "images/image-1.png", "images/image-2.png", "images/image-3.png"
]

let i = 0;
let justDragged = false;

function placeImage(x, y) {

  const nextImage = images[i]

  const img = document.createElement("img")

  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10)+ "deg)"




  document.body.appendChild(img)

  i = i + 1

  if (i>= images.length) {
    i = 0
  }

  dragElement(img)


}




document.addEventListener("click", function(event) {
  if (justDragged == false) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
  }
  justDragged = false;
})




document.addEventListener("touchend", function(event) {
    if (justDragged == false) {
      event.preventDefault()
      placeImage(event.pageX, event.pageY)
    }
  justDragged = false;
})





function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    justDragged = true;
    console.log('I have just dragged');
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    // console.log(pos3);


    // if (pos3 < 1) {
    //   console.log("oioi");
    // }

  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    onBrag = false;


    // console.log("closeDragElement");


  }


    // When you click, and closeDragElement doesnt run, place image



    // Either this function runs, or the other one doesnt
    // if this closeDragElement runs, the placeImage doesn't


}

document.getElementsByTagName("html")[0].style.cursor = "crosshair"

if (document.getElementsByTagName("html")[0].style.cursor = "crosshair") {
  console.log("fucking yes boy")
}


console.log(document.getElementsByTagName("html")[0].style.cursor);
// document.getElementsByTagName('p');
