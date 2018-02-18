import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from "./types";

export const facebookLogin = () => async dispatch => {
    try {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
        }
        token = await doFacebookLogin(dispatch);
    } catch(e) {
        throw new Error(e);
    }
};


const doFacebookLogin = async dispatch => {
    try {
        let { type, token } = await Facebook.logInWithReadPermissionsAsync('293344294486105', {
            permission: ['public_profile']
        });

        if (type === 'cancel') {
            return dispatch({ type: FACEBOOK_LOGIN_FAIL });
        }

        await AsyncStorage.setItem('fb_token', token);
        return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } catch(e) {
        throw new Error(e);
    }
};
