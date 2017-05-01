function getBackgroundColor(itemPercentage) {
    const colorPercentageMin = 10;
    const colorPercentageMax = 100;

    let colorPercentage = itemPercentage < colorPercentageMin ? colorPercentageMin : itemPercentage;
    colorPercentage = colorPercentage > colorPercentageMax ? colorPercentageMax : colorPercentage;

    return 'hsla(4, '+ colorPercentage +'%, 58%, 1)';
}

function getFontSize(itemPercentage){
    const fontSizeMin = 20;
    const fontSize= itemPercentage < fontSizeMin ? fontSizeMin : itemPercentage;

    return fontSize + '%'
}


export {
    getBackgroundColor,
    getFontSize
}
