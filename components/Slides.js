import React, {
    Component,
    PureComponent
} from 'react';

import {
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends PureComponent {
    renderLastButton() {
        if (this.props.isLastSlide) {
            return (
                <Button
                    buttonStyle={styles.buttonStyle}
                    title='Onwards!'
                    raised
                    onPress={this.props.onComplete}
                />
            )
        }
    }

    render() {
        return (
            <View
                style={
                    [
                        styles.slideStyle,
                        { backgroundColor: this.props.data.color }
                    ]
                }
            >
                <Text style={styles.slideText}>{ this.props.data.text }</Text>
                { this.renderLastButton() }
            </View>
        );
    }
}

class Slides extends Component {
    renderSlides() {
        const slides = this.props.data;
        return slides.map((slide, i) => <Slide key={`slide_${i}`} data={slide} onComplete={this.props.onComplete} isLastSlide={(i == (slides.length - 1))} />)
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                horizontal={true}
                pagingEnabled={true}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
    },
    slideText: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15,
    }
};

export default Slides;