const checkBox = document.getElementById("checkbox")
const mainHead = document.getElementById("mainhead")
const arrayLinks = ["<link rel='stylesheet' href='./css/darkStyle.css'>", "<link rel='stylesheet' href='./css/lightStyle.css'>"]

checkBox.addEventListener("change", (event)=>{
    const linkNode = document.getElementsByTagName('link')[1];
    linkNode.parentNode.removeChild(linkNode);
    if(event.target.checked == true){
        mainHead.innerHTML += arrayLinks[0]
    }
    else{
        mainHead.innerHTML += arrayLinks[1]
    }
    mainHead.innerHTML += theNode
})