import React from 'react'
import PropTypes from 'prop-types'
import TagCloudItem from './tag-cloud-item'

const TagCloud = ({ items, getTags, isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';

    let max = items.reduce((acc, val) => {
           return acc > val.links.length ? acc : val.links.length;
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
                        links={item.links}
                        max={max}
                    />
                )}
            </ul>
            }
            {!isLoading && items.length == 0 &&
                <div className="tag-cloud-empty">
                    No tags found
                </div>
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
        links: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired)
    }).isRequired).isRequired,
    getTags: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TagCloud
