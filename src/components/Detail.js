import React, {Component} from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
    render() {
        var {match} = this.props;
        var name = match.params.slug;

        return (
            <React.Fragment>
                <h1>
                    Contact Detail {name}
                </h1>
            </React.Fragment>
        );
    }
}

export default connect()(Detail);