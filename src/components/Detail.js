import React, {Component} from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
    render() {
        var {match} = this.props;
        console.log(match);
        var name = match.params.slug;

        return (
            <div>
                <h1>
                    Contact Detail {name}
                </h1>
            </div>
        );
    }
}

export default connect()(Detail);