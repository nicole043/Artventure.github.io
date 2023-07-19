function shuffle (array){
    var currentIndex = array.length,
    randomIndex;

    while(0 !==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array [currentIndex], array [randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin (){
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let Digital = shuffle ([1890, 2250, 2610]);
    let Portrait = shuffle ([1855, 2210, 2570]);
    let Painting = shuffle ([1770, 2130, 2490]);
    let Digital1 = shuffle ([1810, 2170, 2530]);
    let Portrait2 = shuffle ([1750, 2210, 2470]);
    let Painting3 = shuffle ([1630, 1990, 2350]);
    let Digital4 = shuffle ([1570, 1930, 2290]);

    let result = shuffle ([
        Digital [0],
        Portrait [0],
        Painting [0],
        Digital1 [0],
        Portrait2 [0],
        Painting3 [0],
        Digital4 [0],
    ]);
     
    if (Digital.includes(result[0])) SelectedItem ="Digital";
    if (Portrait.includes(result[0])) SelectedItem ="Portrait";
    if (Painting.includes(result[0])) SelectedItem ="Painting";
    if (Digital1.includes(result[0])) SelectedItem ="Digital";
    if (Portrait2.includes(result[0])) SelectedItem ="Portrait";
    if (Painting3.includes(result[0])) SelectedItem ="Painting";
    if (Digital4.includes(result[0])) SelectedItem ="Digital";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + result[0] + "deg)";
    element.classList.remove ("animate");
    setTimeout(function(){
        element.classList.add("animate");
    },5000);

    setTimeout(function(){
        Swal.fire({
            title: 'Sweet!' + 'You choose  '+SelectedItem,
            html: 'Proceed to    ' + SelectedItem + '|  ' + '<a href="category.html">Category</a>',
            imageUrl: 'yay-excited.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }, 5500)

    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform = "rotate(90deg)";
    }, 6000)
    

 
}