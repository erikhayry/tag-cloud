import React from 'react'
import PropTypes from 'prop-types'

const TagCloud = ({ items, getTags, isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';

    return (
        //TODO accessibility
        <div>
            {items.length > 0 &&
            <ul className={"tag-cloud " +  classNameState}>
                {items.map((item, index) =>
                    <li key={index}>
                        {item.section} : {item.count}
                    </li>
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
