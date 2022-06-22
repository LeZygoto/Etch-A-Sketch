var gridSize = 16;
let container = document.getElementById("container");
const RANDOM = -1;
var style = document.querySelector("input[type='color']").value;

container.addEventListener("mousemove", (e)=>{
    if(e.buttons == 1 && e.target.style["background-color"] == "" && e.target != container){
        if(style == RANDOM){
            e.target.style["background-color"] = "rgb(" + Math.floor(Math.random() * 256).toString() + "," + Math.floor(Math.random() * 256).toString() + "," + Math.floor(Math.random() * 256).toString() + ")";
        }
        else{
            e.target.style["background-color"] = style;
        }
    }
});

document.querySelector("input[type='color']").addEventListener("input", (e)=>{
    style = e.target.value;
});

document.getElementById("one-color").addEventListener("click", (e)=>{
    style = document.querySelector("input[type='color']").value;
});

document.getElementById("rainbow-style").addEventListener("click", (e)=>{
    style = RANDOM;
});

document.getElementById("clear").addEventListener("click", (e)=>{
    container.innerHTML = "";
    container.style.gridTemplate = "repeat(" + gridSize + ", 1fr) / repeat(" + gridSize + ", 1fr)";
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement("div");
            div.setAttribute("id", i.toString() + "-" + j.toString());
            container.appendChild(div);
        }
    }
});

document.getElementById("pixels").addEventListener("input", (e)=>{
    gridSize = parseInt(e.target.value);
    let obj = document.getElementById("pixels-value");
    obj.innerText = gridSize.toString() + "x" + gridSize.toString() + " pixels";
    let container = document.getElementById("container");
    container.innerHTML = "";
    container.style.gridTemplate = "repeat(" + gridSize + ", 1fr) / repeat(" + gridSize + ", 1fr)";
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement("div");
            div.setAttribute("id", i.toString() + "-" + j.toString());
            container.appendChild(div);
        }
    }
});


for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
        let div = document.createElement("div");
        div.setAttribute("id", i.toString() + "-" + j.toString());
        container.appendChild(div);
    }
}

let title = "Etch-A-Sketch";
let title_p = document.getElementById("title-p");

for(let i = 0; i < title.length; i++){
    let span = document.createElement("span");
    span.innerText = title.charAt(i);
    span.style.color = "rgb(" + Math.floor(Math.random() * 195 + 60).toString() + "," + Math.floor(Math.random()* 195 + 60).toString() + "," + Math.floor(Math.random() * 195 + 60).toString() + ")";
    title_p.appendChild(span);
}
