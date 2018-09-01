import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Container, Content, Form, Header, Input, Item, Label} from 'native-base';
import {MySocialApp} from "./node_modules/mysocialapp-ts-client/lib/mysocialapp";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "alice.jeith@mysocialapp.io",
            password: "myverysecretpassw0rd"
        }
    }

    componentDidMount() {

    }

    login(email, password) {
        this.state.isLoading = true;

        new MySocialApp()
            .setAppId("u470584465854a728453")
            .connect(email, password)
            .then(v => {
                v.account.get(false).then(acc => {
                    console.log(acc);
                    this.setState({
                        isLoading: false,
                        account: acc,
                    }, function () {

                    });
                }, err => {
                    console.log("err: " + err.response);
                });

            }, err => {
                console.log(err.response);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (<View style={styles.container}>
                <Text style={styles.text}>Loading..</Text>
            </View>)
        }

        return (
            <Container style={{backgroundColor: "#1da1f2"}}>
                <Header transparent/>
                <Content padder>
                    <View style={styles.container}>
                        <Image source={require("./images/twitter_logo.png")} style={styles.logo}/>
                    </View>

                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.text}>Email</Label>
                            <Input style={styles.text} value={this.state.email}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label style={styles.text}>Password</Label>
                            <Input style={styles.text} secureTextEntry value={this.state.password}/>
                        </Item>

                        <Button block light style={{marginTop: 10}} onPress={() => this.login(this.state.email, this.state.password)}>
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
    floatingLabel: {},
    container: {
        flex: 1,
        backgroundColor: '#1da1f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
