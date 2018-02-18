import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import AuthScreen from './screens/Auth';
import WelcomeScreen from './screens/Welcome';
import MapScreen from './screens/Map';
import DeckScreen from './screens/Deck';
import ReviewScreen from './screens/Review';
import SettingsScreen from './screens/Settings';

export default class App extends React.Component {
    render() {
        const Navigator = TabNavigator
        (
            {
                Welcome : { screen: WelcomeScreen },
                Auth    : { screen: AuthScreen },
                Main    : {
                    screen : TabNavigator({
                        Map: { screen: MapScreen },
                        Deck: { screen: DeckScreen },
                        Review : {
                            screen: StackNavigator({
                                Review: { screen: ReviewScreen },
                                Settings: { screen: SettingsScreen }
                            })
                        }
                    })
                }
            },
            {
                navigationOptions: {
                    tabBarVisible: false,
                },
                lazy: true
            }
        );

        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
