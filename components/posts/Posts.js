import React, { Component } from 'react';
import { View, FlatList, Button } from 'react-native';
import { 
  List, ListItem, Text, 
  Container, Header, Content, Left, Right, Icon
} from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Posts extends Component {

  render() {
    const { loading, allPosts, navigation } = this.props;
    if(loading)return null;
    return (
      <Container>
        <Content>
        <List>
          <FlatList 
            data={allPosts}
            renderItem={({ item }) => (
              <ListItem selected
                  onPress={() => 
                    navigation.navigate("Post", {
                    id: item.id,
                    title: item.title,
                  })}>
                  <Left>
                    <Text>{item.title}</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
              </ListItem>
            )}
            keyExtractor={item => item.id}
          />
        </List>
        </Content>
      </Container>
    );
  }
}

const postsQuery = gql`
query postsQuery{
  allPosts {
    id
    title
  }
}
`;

export default graphql(postsQuery, {
  props: ({data}) => ({...data})
})(Posts);