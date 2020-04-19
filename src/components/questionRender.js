import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,

} from 'react-native';
 import {Button} from 'react-native-elements';
//const interstellar = require('./Images/interstellar.jpg');

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
                                if(item.picture) {
                                    return (
                                        <View>
                                            <Text style={styles.questionText}>Guess the Movie name!</Text>
                                            <Image source={require('./Images/interstellar.jpg')} style={{width: '100%', height: '50%'}} ></Image>
                                        </View>
                                    )
                                } else {                            
                                    return  <Text key={item.name} style={styles.questionText}>{item.question}</Text>
                                }
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
        paddingBottom: 20,
    },
    inputContainer:{
        paddingBottom: 0,
        margin:10
    },
    buttonContainer:{
        marginTop: 20,
        backgroundColor:'floralwhite',
        borderWidth: .5,
        borderRadius: 6,
    }
})

export default Question;