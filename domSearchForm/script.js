//USER_DATABASE
var users = [
  {
    avatar: "http://icons.iconarchive.com/icons/martin-berube/character/48/Dad-icon.png",
    username: "adm1n"
  },
  {
    avatar: "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Hulk-icon.png",
    username: "vasea"
  },
  {
    avatar: "http://icons.iconarchive.com/icons/hopstarter/bioman/48/Bioman-Avatar-6-Peebo-icon.png",
    username: "petea"
  }
];
//SHOWS ONLY ONE USER
function showUser(index) {
  var results_wrapper = document.querySelector('#results');
  //1)CERATE NEW DIV IN MEMORY
  var div = document.createElement('div');
  // 2)SET CLASS
  div.className = "user";
  // 3)CREATE IMAGE
  var img = document.createElement('img');
  // 4)SET src
  img.setAttribute('src',users[index].avatar);
  // 5)CREATING LINK
  var a = document.createElement('a');
  // 6)SET TEXT INSIDE
  a.innerText=users[index].username;
  // 7)APPEND CHILDREN
  div.appendChild(img);
  div.appendChild(a);
  // 8)APPEND TO results
  results_wrapper.appendChild(div);
  a.setAttribute('href',"http://google.com")
}
function showUsersList(word){
  for(var i=0;i<users.length;i++){
    if(users[i].username==word){
      showUser(i);
    }
  }
}
function search() {
  var input = document.getElementById('search').firstElementChild;
  var word = input.value;
  console.dir(word);
  showUsersList(word);
}
showUsersList();
