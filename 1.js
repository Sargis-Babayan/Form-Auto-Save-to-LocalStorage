function persist(thisArg) {
    localStorage.setItem(thisArg.id, thisArg.value);
  }

function asd(){
  document.getElementById("test").value = localStorage.getItem("test")
}