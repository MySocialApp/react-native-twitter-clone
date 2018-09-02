import React from "react";
import {StyleSheet, View} from 'react-native';
import {Body, Button, Card, CardItem, Content, Image, Left, Text, Thumbnail} from 'native-base';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NewsFeedCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            feed: this.props.feed
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                        <Left>
                            {
                                this.state.feed.actor.displayed_photo != null ?
                                    <Thumbnail circular source={{uri: this.state.feed.actor.displayed_photo.high_url}}/> :
                                    <Thumbnail circular source={require("./images/male_placeholder.jpg")}/>
                            }
                            <Body>
                            <Text>{this.state.feed.actor.displayed_name}</Text>
                            <Text note>{this.state.feed.object.created_date}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                        {
                            this.state.feed.object.displayed_photo != null ?
                                <Image source={{uri: this.state.feed.object.displayed_photo.high_url}}/> : <View/>
                        }
                        <Text>
                            {this.state.feed.object.displayed_name}
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <MCIcon name="comment-multiple-outline"/>
                                <Text>Comment</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
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