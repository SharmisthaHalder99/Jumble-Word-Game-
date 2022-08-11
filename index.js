

// function syncReadFile(filename) {
//     const contents = fs.readFileSync(filename, 'utf-8');
  
//     const arr = contents.split(/\r?\n/);
  
//     console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
  
//     return arr;
//   }
//   syncReadFile("assets/sgb-words.txt")
const letters1 = document.getElementById("letter1")
const letters2 = document.getElementById("letter2")
const letters3 = document.getElementById("letter3")
const letters4 = document.getElementById("letter4")
const letters5 = document.getElementById("letter5")
let result 
const result_string = document.getElementById("result_string") 
const input_string = document.getElementById("input-string") 
const body = document.getElementById("body")



function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                const arr = allText.split(/\r?\n/);
                var word = arr[Math.floor(Math.random()*arr.length)]
                console.log(word);
                var letters = word.split("");
                console.log(letters);
                letters = shuffleArray(letters)
                console.log(letters);
                result = word


                letters1.innerText=letters[0]
                letters1.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
                letters2.innerText=letters[1]
                letters2.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`

                letters3.innerText=letters[2]
                letters3.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`

                letters4.innerText=letters[3]
                letters4.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`

                letters5.innerText=letters[4]
                letters5.style.backgroundColor=`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`


  
            }
        }
    }
    rawFile.send(null);
}

const checking=()=>{
    if (result==input_string.value){
        console.log("correct");
        body.classList.toggle("correct-animation")
        setTimeout(() => {
            body.classList.toggle("correct-animation")
            
        }, 5000);
        setTimeout(() => {
            readTextFile("assets/sgb-words.txt")
            input_string.value = ""
            
        }, 5000);


    }
    else{
        console.log("false");
        input_string.classList.toggle("fail-animation")
        setTimeout(() => {
            input_string.classList.toggle("fail-animation")
            
        }, 500);

    }
    
}
result_string.addEventListener("click",checking)


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}




readTextFile("assets/sgb-words.txt")