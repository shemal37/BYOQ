import React from 'react';
import Animation from 'lottie-react-native';
import {
  StyleSheet,
  View,
  //Text,
  InlineImage,
} from 'react-native';
import {Button, Text, withTheme} from 'react-native-elements';
import anim from '../Images/Animate.json'

// const randomColor = () =>{
//     const array = ['lightsalmon', 'plum', '#88b3a5', 'goldenrod']
//     const randomNumber = Math.floor(Math.random() * array.length);
//     return array[randomNumber];
// }
const Player = (props) => {
    return(
        <>
        <Text style={styles.gameName}>Q-up!</Text>
         <View style={ {flexDirection: 'row', borderBottomWidth:2, justifyContent:'center', padding:5,
        borderBottomColor: 'white',}}> 
            <Text style={styles.gameHost}>Captain America:  </Text>
            <Text style={styles.tagline}>I can do this all day</Text>
        </View>
        <Text style={styles.headingContainer}> You will be Battling Against: </Text>
        { 
            props.players.map((player,i) => {
                return (
                    <View style={ {flexDirection: 'column', justifyContent:'flex-end'}} key={i}> 
                    <Text style={styles.gameHost} key={player.name} > {i+1}. {player.name} </Text>
                    <Text 
                        style={styles.tagline} key={i} 
                        numberOfLines={1}
                    > 
                        {player.tagline} 
                    </Text>
                    </View>
                )
            })
        }
        <View style={styles.buttonContainer}>
            <Button 
            style={styles.button}
            title={'Let the battle begin!  🚀 '}
            type= "clear"
            titleStyle={{color:'#c75f46', fontSize:25, fontWeight:'bold',fontFamily: 'Futura-MediumItalic'}}
            > 
            </Button>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 5, 
        margin: 30,
        backgroundColor:'black',
        borderRadius: 30,

    },
    buttonContainer:{
        fontSize:40,
        color: 'white',
    },
    headingContainer:{
        color:'white', 
        fontSize: 23, 
        marginTop: 30,
        marginBottom:14,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      gameName:{
        fontFamily: 'Futura-MediumItalic',
        color:'#c75f46', 
        fontSize: 40,
        paddingTop: 5,
        textAlign: 'center'
    },
      gameHost:{
        textAlign:'center',
        fontFamily: 'Futura',
        color: 'goldenrod', 
        fontSize: 25,
        paddingTop: 0,
        textAlign:'center',
        },
        tagline:{
        textAlign:'center',
        fontFamily: 'Futura',
        color: 'lightsalmon', 
        fontSize: 19,
        paddingTop: 4,
        paddingBottom:5,
        textAlign:'center',
        }
})

export default Player;