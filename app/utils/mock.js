//Mock methods to showcase functionality
function mock(items){
    return new Promise((resolve) => {
        //Add delay
        setTimeout(() => {
            resolve(items)
        }, 1000);
    })
}

export default mock
