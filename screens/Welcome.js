import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import styles from '../assets/style';

const SLIDE_DATA = [
    { text: 'Welcome to Jobly', color: '#03A9F4' },
    { text: 'Use this intuitive app to get your next job!', color: '#009688'  },
    { text: 'Set your location, then swipe away', color: '#03A9F4'  },
];

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
            </View>
        )
    }
}

export default WelcomeScreen;