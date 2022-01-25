var URL = 'http://universities.hipolabs.com/search?country=india';

fetch(URL).then((res)=> res.json()).then((data)=> {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div1.innerText = data[i].name;
        div2.innerText = data[i]["state-province"];
        li.appendChild(div1);
        li.appendChild(div2);
  
        ul.appendChild(li);
    }
});