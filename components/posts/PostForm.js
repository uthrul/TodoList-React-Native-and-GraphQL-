import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Form, Item, Input, Label, Textarea} from 'native-base';

export default class PostForm extends Component {
    state = {
        title: "",
        body: " "
    };

    submitForm = () => {
        this.props.onSubmit({
            title: this.state.title,
            body: this.state.body,
        });
    };

render() {
return (
    <Form style={styles.formStyle}>
        <Item regular>
            <Input
                placeholder="Title"
                underlineColorAndroid = "transparent" 
                placeholderTextColor = "red" 
                onChangeText={title => this.setState({title})}
                value={this.state.title}
            />
        </Item>
        <Form>
            <Textarea 
                rowSpan={15} 
                placeholder="Body"
                underlineColorAndroid = "transparent" 
                placeholderTextColor = "red"
                onChangeText={body => this.setState({body})}
                value={this.state.body}
                bordered 
                />
        </Form>
            <Button title="Save Post" onPress={this.submitForm}/>
        </Form>
        );
    }
}

const styles = StyleSheet.create({
    formStyle: {
        padding: 10,
    },
    body:{
        height: 400,
        borderColor: "#333",
        borderWidth: 1,
        textAlignVertical: "top"
    },
  });

