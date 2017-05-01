import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes }from 'prop-types'
import { getTags } from '../../actions'
import TagCloud from '../../components/tag-cloud/tag-cloud'
import AppLoader from '../../components/app-loader/app-loader'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTags()
    }

    render(){
        return (
            <div className="l-container">
                <AppLoader
                    isLoading={this.props.isFetching}
                />
                <TagCloud
                    items={this.props.items}
                    getTags={this.props.getTags}
                    isLoading={this.props.isFetching}
                />
            </div>
        )
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getTags: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { tags } = state;

    const {
        items,
        isFetching
    } = tags.items && tags.items.length > 0 ? tags : {
        items: [],
        isFetching: true
    };

    return {
        items,
        isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTags: () => dispatch(getTags()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
