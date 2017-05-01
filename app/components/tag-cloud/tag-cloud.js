import React from 'react'
import PropTypes from 'prop-types'
import TagCloudItem from './tag-cloud-item'

const TagCloud = ({ items, getTags, isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';

    let max = items.reduce((acc, val) => {
           return acc > val.count ? acc : val.count;
    }, 0);

    return (
        <div className="tag-cloud-wrapper">
            {items.length > 0 &&
            <ul className={"tag-cloud " +  classNameState}>
                {items.map((item, index) =>
                    <TagCloudItem
                        key={index}
                        index={index}
                        name={item.name}
                        count={item.count}
                        max={max}
                    />
                )}
            </ul>
            }
            {!isLoading &&
            <button className="tag-cloud-btn"
                    onClick={getTags}>
                Refresh tags
            </button>
            }
        </div>
    )
};

TagCloud.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
    }).isRequired).isRequired,
    getTags: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TagCloud
