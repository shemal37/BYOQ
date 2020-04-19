import React from 'react';
import {
  StyleSheet,
  View,
  //Text,
} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Player = (props) => {
    return(
        <>
        <Text style={styles.headingContainer}> You're battling against </Text>
        { 
            props.players.map((player) => {
                return (
                    <Text style={styles.headingContainer} key={player} > {player} </Text>
                )
            })
        }
        <Text style={{fontSize:40}} > {"\n"} Let's Kick their asses </Text>

        </>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 5, 
        margin: 13,
        backgroundColor:'floralwhite',
        borderWidth: .5,
        borderRadius: 6,
    },
    headingContainer:{
        color:'darkcyan', 
        fontSize: 30, 
        margin: 10,
        fontWeight: 'bold'
      },
})

export default Player;