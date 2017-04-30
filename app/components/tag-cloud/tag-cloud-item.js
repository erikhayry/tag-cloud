import React from 'react'
import PropTypes from 'prop-types'

const TagCloudItem = ({ section, count, max, index}) => {
    let percentage = (count / max) * 100;
    let colorPercentage = percentage < 10 ? 10 : percentage;
    let fontSize= percentage / 10 < 1 ? 1 : percentage / 10;
    const style = {
        backgroundColor: 'hsla(4, '+ colorPercentage +'%, 58%, 1)',
        fontSize:  fontSize + 'rem',
        color: 'rgba(255,255,255,0)',
        animationDelay: index * 50 + 'ms'
    };

    return (
        //TODO accessibility
        <li className="tag-cloud-item" style={style}>
            {section}
        </li>
    )
};

TagCloudItem.propTypes = {
    section: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default TagCloudItem
