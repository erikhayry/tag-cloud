import React from 'react'
import PropTypes from 'prop-types'
import { getBackgroundColor, getFontSize} from '../../utils/style-utils'

const TagCloudItem = ({ name, count, max, index}) => {
    const itemPercentage = (count / max) * 100;

    const style = {
        backgroundColor: getBackgroundColor(itemPercentage),
        fontSize: getFontSize(itemPercentage),
        color: 'rgba(255,255,255,0)',
        animationDelay: index * 50 + 'ms'
    };

    return (
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
