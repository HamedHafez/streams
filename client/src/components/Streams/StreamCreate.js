import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../Actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {


    onSubmit = (formvalues) => {
        this.props.createStream(formvalues);
    }
    render() {
       return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
       ); 
    }
}


export default connect(null, { fetchStream })(StreamCreate);