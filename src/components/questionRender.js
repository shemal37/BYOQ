import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,

} from 'react-native';
 import {Button} from 'react-native-elements';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state= {
            text :'',
        }
    this._onChange = this._onChange.bind(this);
    }
    _onChange(text){
        this.setState({
            text:text
        })
        console.log(this.state)
    }
    render(){
        return(
            <>
            <View style={styles.questionContainer}>
                    {
                    this.props.games.map((item) => {
                        if(item.name === this.props.questionId) {
                        return <Text key={item.name} style={styles.questionText}>{item.question}</Text>
                        }
                    })
                    }
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={this._onChange}
                            placeholder='Write yo answer'
                            placeholderTextColor = "darkcyan"
                        />
                        <Button
                            style={styles.buttonContainer}
                            title="Submit"
                            type="clear"
                            onPress= {(event) => {this.props.submit(event, this.state.text)}}
                        />
                    </View>
            </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    questionContainer:{
        margin: 20,
        padding:20,
        height:400,
        justifyContent: 'space-between',
      },
    questionText:{
        fontSize: 25,
        color: 'darkcyan',
        textAlign: 'center',
    },
    inputContainer:{
        paddingBottom: 0,
        margin:10
    },
    buttonContainer:{
        marginTop: 40,
        backgroundColor:'floralwhite',
        borderWidth: .5,
        borderRadius: 6,
    }
})

export default Question;