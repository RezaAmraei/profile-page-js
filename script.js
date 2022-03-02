console.log("page loaded...");
function edit() {
  var profileName = document.querySelector(".card-body h1");
  profileName.innerText = "Reza Amraei";
}
function removeRequest(e) {
  //   var request = document.querySelector(".card-list-item");
  //   console.log(e);

  e.remove();
}
