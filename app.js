let textbox = document.getElementById("textbox")
textbox.addEventListener("input",function(){
    let text = this.value
    let character = text.length
    document.getElementById("char").innerHTML = character
      
    text = text.trim()
    let word = text.split(" ")
    let cleanWords = word.filter(function(element){
        return element != ""
    })
    document.getElementById("word").innerHTML = cleanWords.length

})

