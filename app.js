var list = document.getElementById("list")

function addlist(){
  var a = document.getElementById("text")
  
  
  
  var b = document.createElement('li')
  var c = document.createTextNode(a.value)
  b.appendChild(c)



  var del = document.createElement('button')
  var deltext = document.createTextNode("DELETE")
  del.setAttribute("onclick", "deleteTodo(this)")
  del.setAttribute("class", "btn")
  del.appendChild(deltext)
  


  var edBtn = document.createElement("button")
  var edText = document.createTextNode("EDIT")
  edBtn.setAttribute("onclick", "editBtn(this)")
  edBtn.setAttribute("class", "btn")
  edBtn.appendChild(edText)




  list.appendChild(b)
  b.appendChild(del)
  b.appendChild(edBtn)



  a.value = ""
  console.log(c)
}

function deleteTodo(e){
  e.parentNode.remove()


}


function deleteAll(){
  list.innerHTML= ""

}

function editBtn(e){
  var edVal = prompt("Enter Your Text Again To Edit")
 e.parentNode.firstChild.nodeValue

 e.parentNode.firstChild.nodeValue = edVal


}


