import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,

} from 'react-native';
 import {Button} from 'react-native-elements';
 const ironman = require('../Images/Ironman1.jpg');
 const avengers = require('../Images/avengers.jpg')
 const HostQuestion = (props) => {
    return(
        <>
        <View style={styles.questionContainer}>
                {
                    props.games.map((item) => {
                        if(item.name === props.questionId) {
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
                
                <Button
                    title="Next Question"
                    onPress= {() => {props.click()}}
                    style={{marginTop: 20,
                        backgroundColor: 'sandybrown',
                        borderRadius: 10,}}
                />
                <Text style={styles.gameName}>Q-up!</Text>
        </View>
        </>
        );
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
});
export default HostQuestion;