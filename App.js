import React from 'react';
import {Root} from 'native-base';
import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import NewsFeedScreen from "./NewsFeedScreen";
import SignInScreen from "./SignInScreen";

const AppStack = createStackNavigator(
    {
        NewsFeed: NewsFeedScreen,
    },
    {
        initialRouteName: "NewsFeed",
        navigationOptions: {
            header: null,
        },
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: SignInScreen
    },
    {
        initialRouteName: "SignIn",
        navigationOptions: {
            header: null,
        },
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: "Auth",
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Root>
                <SwitchNavigator/>
            </Root>
        );
    }
}