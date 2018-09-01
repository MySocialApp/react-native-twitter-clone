import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Content, Form, Header, Input, Item, Label, Spinner, Toast} from 'native-base';
import {MySocialApp} from "./node_modules/mysocialapp-ts-client/lib/mysocialapp";

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            appId: "u470584465854a728453",
            email: "alice.jeith@mysocialapp.io",
            password: "myverysecretpassw0rd"
        }
    }

    componentDidMount() {

    }

    login(appId, email, password) {
        this.setState({isLoading: true});

        new MySocialApp()
            .setAppId(appId)
            .connect(email, password)
            .then(session => {
                this.setState({isLoading: false});
                // Hooah! You are auth through MSA API, Go to NewsFeedScreen
                this.props.navigation.navigate("NewsFeed", {session: session});
            }, (err) => {
                // Wrong credentials!
                this.setState({isLoading: false});
                Toast.show({
                    text: "Wrong credentials!",
                    buttonText: "Ok",
                    duration: 3000,
                    type: "danger",
                    position: "bottom"
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Container style={{backgroundColor: "#1da1f2"}}>
                    <Header transparent iosBarStyle="light-content" androidStatusBarColor="#1da1f2"/>
                    <Content>
                        <View style={styles.container}>
                            <Spinner color="#fff"/>
                            <Text style={styles.text}>Loading..</Text>
                        </View>
                    </Content>
                </Container>
            )
        }

        return (
            <Container style={{backgroundColor: "#1da1f2"}}>
                <Header transparent iosBarStyle="light-content" androidStatusBarColor="#1da1f2"/>
                <Content padder>
                    <View style={styles.container}>
                        <Image source={require("./images/twitter_logo.png")} style={styles.logo}/>
                    </View>

                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.text}>Email</Label>
                            <Input style={styles.text}
                                   onChangeText={(text) => this.setState({email: text})}
                                   value={this.state.email}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label style={styles.text}>Password</Label>
                            <Input style={styles.text} secureTextEntry
                                   onChangeText={(text) => this.setState({password: text})}
                                   value={this.state.password}/>
                        </Item>

                        <Button block light style={{marginTop: 10}}
                                onPress={() => this.login(this.state.appId, this.state.email, this.state.password)}>
                            <Text>Sign In</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250
    },
    text: {
        color: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#1da1f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});