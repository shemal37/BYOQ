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
const ironman = require('../Images/Ironman1.jpg');
const avengers = require('../Images/avengers.jpg')
const randomColor = () =>{
    const array = ['lightsalmon', 'plum', '#88b3a5', 'goldenrod']
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

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
                                        <View key={item} style={{justifyContent: 'center', textAlign: 'center'}}>
                                            <Text style={styles.questionText}>{item.question}</Text>
                                            <Image source={item.name === 'Guess the Movie' ? avengers:ironman} style={styles.stretch} ></Image>
                                        </View>
                                    )
                                } else {                            
                                    return  <Text key={item.name} style={styles.questionText}>{item.question}</Text>
                                }
                        }
                        })
                    }
                    <View style={styles.inputContainer} >
                        <TextInput 
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:1, width:'85%' }}
                            onChangeText={this._onChange}
                            placeholder=' Enter your answer'
                            placeholderTextColor = "gray"
                            
                        />
                        <Button
                            style={{marginTop: 20,
                                backgroundColor: 'sandybrown',
                                borderRadius: 10,}}
                            title="Submit"
                            type="clear"
                            onPress= {(event) => {this.props.submit(event, this.state.text, 'Captain America')}}
                            titleStyle={{color:'black', fontSize:25}}
                        />
                        <Text style={styles.gameName}>Q-up!</Text>
                    </View>
            </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    questionContainer:{
        margin: 20,
      },
    questionText:{
        color:'white', 
        fontSize: 23, 
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer:{
        margin:20,
        flex:1,
        alignItems: 'center'
    },
    stretch: {
        width: '100%',
        height: 220,      
      },
      gameName:{
        fontFamily: 'Futura-MediumItalic',
        color:'#c75f46', 
        fontSize: 25,
        paddingTop: 25,
        textAlign: 'center'
    },
})

export default Question;