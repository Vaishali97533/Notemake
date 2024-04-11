const close = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");
const makebtn = document.querySelector("#makebtn");
const maketask = document.querySelector("#maketask");

const vacant = document.querySelector(".vacant");

if( localStorage.getItem("tasks")===null){
    localStorage.setItem("tasks", JSON.stringify([]));
}

close.addEventListener("click", function(){
    overlay.style.display = "none";
});

makebtn.addEventListener("click", function(){
    overlay.style.display = "initial";
});

maketask.addEventListener("click", function(){
    var valueoftitle = document.querySelector("#title").value;
    var valueofdata = document.querySelector("#data").value;
    
    const ans = parser(localStorage.getItem("tasks"));
    ans.push({title: valueoftitle, data: valueofdata})

    localStorage.setItem("tasks", stringi(ans));
    function parser(data){
        return JSON.parse(data);
    }
    
    function stringi(data){
        return JSON.stringify(data);
    }
    title.value = "";
    data.value = "";
    overlay.style.display="none";

});

function printer(){
    //data nikalo
    const alltasks = localStorage.getItem("tasks");
    //parse karo
    const parsedTasks = JSON.parse(alltasks);
    // is array pe loop karo and har baar ek member add  karo clutter variable me
    var clutter = "";
    parsedTasks.forEach(function(elem){
        clutter += ` <div class="card w-40 p-4 bg-indigo-200 rounded-md">
        <h1 class="text-21xl ">${elem.title}</h1>
        <p class=" text-sm tracking-light mt-3 ">${elem.data}</p>
       </div>`

    }) 
    document.querySelector(".cards").innerHTML = clutter;    
    if(parsedTasks.length >0){
        vacant.style.display = "none";
        console.log();
    }
    }
    printer();



