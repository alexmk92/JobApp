import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.props.facebookLogin();
                this.onAuthComplete(this.props);
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('Map');
        } else {
            this.props.navigation.navigate('Welcome');
        }
    }

    render() {
        return (
            <View />
        )
    }
}

export default connect(null, actions)(AuthScreen);