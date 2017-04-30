import React from 'react'
import PropTypes from 'prop-types'

const TagCloudItem = ({ name, count, max, index}) => {
    const percentage = (count / max) * 100;

    const colorPercentageMin = 10;
    const colorPercentage = percentage < colorPercentageMin ? colorPercentageMin : percentage;

    const fontSizeMin = 20;
    const fontSize= percentage < fontSizeMin ? fontSizeMin : percentage;
    
    const style = {
        backgroundColor: 'hsla(4, '+ colorPercentage +'%, 58%, 1)',
        fontSize:  fontSize + '%',
        color: 'rgba(255,255,255,0)',
        animationDelay: index * 50 + 'ms'
    };

    return (
        //TODO accessibility
        <li className="tag-cloud-item" style={style}>
            {name}
        </li>
    )
};

TagCloudItem.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default TagCloudItem
