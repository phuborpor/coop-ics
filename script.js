const search = () =>{
  const searchbox = document.getElementById("search-box").value.toUpperCase();
  const searchitem = document.getElementById("row")
  const text = document.querySelectorAll(".text")
  const tname = document.getElementsByTagName("h3")

  for(var i=0; i < tname.length; i++){
    let match = text[i].getElementsByTagName('h3')[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        text[i].style.display="";
      }else{
        text[i].style.display="none";
      }
    }
  }
}
// function loadJSON(){
//   fetch('example_data.json')
//   .then(response => response.json()
//   .then(data =>{
//     let html='';
//     data.forEach()
//   }))
// }
