import React from 'react'
import PropTypes from 'prop-types'
import TagCloudItem from './tag-cloud-item'

const TagCloud = ({ items, getTags, isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';
    let max = items.reduce((acc, val) => {
           return acc > val.count ? acc : val.count;
    }, 0);

    return (
        //TODO accessibility
        <div>
            {items.length > 0 &&
            <ul className={"tag-cloud " +  classNameState}>
                {items.map((item, index) =>
                    <TagCloudItem key={index} index={index} section={item.section} count={item.count} max={max}/>
                )}
            </ul>
            }
            {!isLoading &&
            <button className="btn"
                    onClick={getTags}>
                Refresh
            </button>
            }
        </div>
    )
};

TagCloud.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        section: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
    }).isRequired).isRequired,
    getTags: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TagCloud
