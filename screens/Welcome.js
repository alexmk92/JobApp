import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';
import styles from '../assets/style';
import _ from 'lodash';

const SLIDE_DATA = [
    { text: 'Welcome to Jobly', color: '#03A9F4' },
    { text: 'Use this intuitive app to get your next job!', color: '#009688'  },
    { text: 'Set your location, then swipe away', color: '#03A9F4'  },
];

class WelcomeScreen extends Component {

     state = { token: null }; // move this to action creator at some point

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.setState({ token });
            return this.props.navigation.navigate('map');
        }

        this.setState({ token: false });
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth');
};

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />
        }
        return (
            <View style={styles.container}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        )
    }
}

export default WelcomeScreen;