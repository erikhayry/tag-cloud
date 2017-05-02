import React from 'react'
import PropTypes from 'prop-types'
import TagCloudItem from './tag-cloud-item'

function shuffleArr(array, skipShuffle){
    if(skipShuffle){
        return array;
    }
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const TagCloud = ({ items, getTags, isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';

    let max = items.reduce((acc, val) => {
           return acc > val.count ? acc : val.count;
    }, 0);

    return (
        <div className="tag-cloud-wrapper">
            {items.length > 0 &&
            <div className={"tag-cloud " +  classNameState}>
                {shuffleArr(items, isLoading).map((item, index) =>
                    <TagCloudItem
                        key={index}
                        index={index}
                        name={item.name}
                        url={item.url}
                        count={item.count}
                        max={max}
                    />
                )}
            </div>
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
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
    }).isRequired).isRequired,
    getTags: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default TagCloud
