//Mock methods to showcase functionality
function mock(items){
    return new Promise((resolve) => {
        //Random sized item list between 2 and n big
        //let itemsShort = items.slice(0, Math.floor(Math.random() * items.length) + 2);

        //Remove cover art for one random item
        //let randomIndex = Math.floor(Math.random() * itemsShort.length);

        //itemsShort[randomIndex].src = undefined;

        //Add delay
        setTimeout(() => {
            resolve(items)
        }, 1000);
    })
}

export default mock
