import React from 'react'
import { PropTypes }from 'prop-types'

const AppLoader = ({ isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';
    return (
        <div className={"app-loader " + classNameState}>Loading</div>
    )
};

AppLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default AppLoader
