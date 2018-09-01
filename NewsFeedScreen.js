import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Body, Container, Content, Header, Left, Right, Root, Spinner, Title} from 'native-base';

export default class NewsFeedScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {

    }

    render() {
        if (this.state.isLoading) {
            return (
                <Container style={{backgroundColor: "#1da1f2"}} iosBarStyle="light-content" androidStatusBarColor="#1da1f2">
                    <Header transparent/>
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
            <Root>
                <Container>
                    <Header style={{backgroundColor: "#1da1f2"}} iosBarStyle="light-content" androidStatusBarColor="#1da1f2">
                        <Left/>
                        <Body>
                        <Title style={styles.text}>News Feed</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content padder>

                    </Content>
                </Container>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
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