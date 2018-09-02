import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Body, Button, Container, Content, Fab, Header, Left, List, ListItem, Right, Spinner, Title, Icon} from 'native-base';
import NewsFeedCard from "./NewsFeedCard";

export default class NewsFeedScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            isLoading: false,
            session: this.props.navigation.getParam("session"),
            feeds: []
        }
    }

    getNewsFeed(page) {
        this.state.session.newsFeed.list(page, 10).then(feeds => {
            this.setState({feeds: this.state.feeds.concat(feeds)});
        });
    }

    componentDidMount() {
        this.getNewsFeed(0);
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
            <Container>
                <Header style={{backgroundColor: "#1da1f2"}} iosBarStyle="light-content" androidStatusBarColor="#1da1f2">
                    <Left/>
                    <Body>
                    <Title style={styles.text}>News Feed</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <List itemDivider="false">
                        {
                            this.state.feeds.map((feed, i) => {
                                return <ListItem key={i}><NewsFeedCard feed={feed}/></ListItem>
                            })
                        }
                    </List>

                </Content>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: '#1da1f2'}}
                    position="bottomRight"
                    onPress={() => this.setState({active: !this.state.active})}>
                    <Icon name="share"/>
                    <Button style={{backgroundColor: '#34A34F'}}>
                        <Icon name="logo-whatsapp"/>
                    </Button>
                    <Button style={{backgroundColor: '#3B5998'}}>
                        <Icon name="logo-facebook"/>
                    </Button>
                    <Button disabled style={{backgroundColor: '#DD5144'}}>
                        <Icon name="mail"/>
                    </Button>
                </Fab>
            </Container>
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