import React from 'react'
import PropTypes from 'prop-types'
import { getBackgroundColor, getFontSize} from '../../utils/style-utils'

const TagCloudItem = ({ name, url, count, max, index}) => {
    const itemPercentage = (count / max) * 100;
    const tabIndex = max - count + 1;

    const linkStyle = {
        backgroundColor: getBackgroundColor(itemPercentage),
        fontSize: getFontSize(itemPercentage),
        color: 'rgba(255,255,255,0)',
        animationDelay: index * 50 + 'ms',
    };

    const itemStyle = {
        order: tabIndex
    };

    return (
        <li className="tag-cloud-item" tabIndex={tabIndex} style={itemStyle}>
            <a href={url} target="_blank" style={linkStyle}>{name}</a>
        </li>
    )
};

TagCloudItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default TagCloudItem
