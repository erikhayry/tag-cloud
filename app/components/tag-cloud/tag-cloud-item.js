import React from 'react'
import PropTypes from 'prop-types'
import { getBackgroundColor, getFontSize} from '../../utils/style-utils'

const TagCloudItem = ({ name, links, max, index}) => {
    const itemPercentage = (links.length / max) * 100;
    const style = {
        backgroundColor: getBackgroundColor(itemPercentage),
        fontSize: getFontSize(itemPercentage),
        color: 'rgba(255,255,255,0)',
        animationDelay: index * 50 + 'ms'
    };

    return (
        <li className="tag-cloud-item" style={style}>
            {name}

            <div className="tag-cloud-item-links">
                {links.map(({title, url}, index) =>
                    <div key={index}>
                        {title} : {url}
                    </div>
                )}
            </div>
        </li>
    )


};

TagCloudItem.propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
    })),
    max: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default TagCloudItem
