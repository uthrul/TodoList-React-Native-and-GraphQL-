
import React from 'react';
import { StyleSheet,View, Text, TouchableHighlight } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Container, Header, Fab, Button, Icon} from 'native-base';

import Post from './components/posts/Post';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';
import navStyles from './styles/navStyles';

class Home extends React.Component {
    static navigationOptions = {
      title: "Home",
        ...navStyles
    };
  
    goToPost = () => {
      this.props.navigation.navigate("Post")
    };

    NewPost = () => {
        this.props.navigation.navigate("NewPost")
      }
  
    render() {
      return (
        <View style={styles.container}>
            <Posts{...this.props} />
              <Fab 
                onPress={this.NewPost}
                style={styles.newPost}
              >
                <Icon name= 'add'/>
              </Fab>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    newPost:{
        backgroundColor: "#82D8D8",
        padding: 20,
    },
    newPostText:{
        fontSize: 20,
        textAlign: "center"
    }
  });

export default StackNavigator({
    Home : {
      screen: Home
    },
    Post : {
      screen: Post
    },
    NewPost : {
        screen: NewPost
      }
  });
  