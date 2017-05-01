import React from 'react'
import { PropTypes }from 'prop-types'

const AppLoader = ({ isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';
    return (
        <div className={"app-loader " + classNameState}>
            <span className="app-loader-inner">Loading</span>
        </div>
    )
};

AppLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default AppLoader
