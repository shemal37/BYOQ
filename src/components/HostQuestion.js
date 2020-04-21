import React, { Component } from 'react';
import Animation from 'lottie-react-native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,

} from 'react-native';
import anim from '../Images/Animate.json';
import {Button, withTheme} from 'react-native-elements';
const ironman = require('../Images/Ironman1.jpg');
const avengers = require('../Images/avengers.jpg');
const array = [ '#9ed4e8', 'lightsalmon', '#ebc86a','#88b3a5', 'lightgoldenrodyellow']

const HostQuestion = (props) => {
    return(
        <>      
        {
            !props.toggle ? 
            <View style={styles.waitingContainer}>
                {
                    props.games.map((item) => {
                        if(item.name === props.questionId) {
                            if(item.picture) {
                                return (
                                    <View key={item} style={{
                                        justifyContent: 'center', 
                                        textAlign: 'center',
                                        }}>
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
        
            <>
            <Text style={styles.wait}>Waiting for answers 
            <Animation 
                ref={animation => {
                    this.animation = animation;
                  }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={anim}
                  autoPlay
            />
            </Text> 
            </>
            </View> :
            <View >    
                <Text style= {{
                    color:'goldenrod', 
                    fontSize: 24, 
                    marginTop: 14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
                }} >Who got it right?</Text>
                <View style={styles.questionContainer}>
                {
                    props.games.map((item) => {
                        if(item.name === props.questionId) {
                            if(item.picture) {
                                return (
                                    <View key={item} style={{
                                        justifyContent: 'center', 
                                        textAlign: 'center',
                                        borderTopColor: 'white',
                                        borderTopWidth:2,
                                        }}>
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
                </View>
            {
                
                props.playerAnswers.map((player,i) => (
                    <TouchableOpacity style={{ flexDirection:'row', justifyContent:'center'}}>
                        <View style={{
                            padding: 9, 
                            margin: 12,
                            backgroundColor: array[i],
                            borderRadius: 10,
                            width: '75%',
                            alignItems: 'center'
                        }}>
                            <Text>{player.name}</Text>
                            <Text>{player.answer}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
            <Button
                title="Next Question"
                onPress= {() => {props.click()}}
                style={{marginTop: 20,
                    backgroundColor: 'sandybrown',
                    borderRadius: 10,}}
            /> 
         </View>  
        }
            <Text style={styles.gameName}>Q-up! </Text>
         
        </>
        );
    }

const styles = StyleSheet.create({
    questionContainer:{
        margin: 20,
        borderBottomWidth:2,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        borderTopWidth:2,
      },
      waitingContainer:{
        margin: 20,
      },
    questionText:{
        color:'white', 
        fontSize: 23, 
        margin: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    stretch: {
        width: '100%',
        height: 200,      
      },
      gameName:{
        fontFamily: 'Futura-MediumItalic',
        color:'#c75f46', 
        fontSize: 25,
        paddingTop: 25,
        textAlign: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        margin:10,
        padding: 5
      },
    wait:{
        textAlign: 'center',
        //paddingTop: 20,
        fontSize: 22,
        color: 'darkgray'
    }
});
export default HostQuestion;