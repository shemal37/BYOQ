import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import {Button} from 'react-native-elements';

const array = [ '#88b3a5', 'goldenrod', '#9ed4e8','lightsalmon', 'plum']

const Host = (props) => {
    return(
        <>
            <Text style={styles.gameName}>Q-up!</Text>
        <Text style={styles.headingContainer}>Pick a Question from your Library </Text>
        <View style={styles.buttonContainer} >
            {
                props.games.map((game, i) => (
                    <Button
                        key={game.name}
                        id={game.name}
                        type="clear"
                        style={{
                            padding: 5, 
                            margin: 12,
                            backgroundColor: array[i],
                            borderRadius: 10,
                        }}
                        disabled = {props.disabled[i]}
                        onPress= {(event) => {props.click(event,game.name,i) }}
                        title= {game.name}
                        titleStyle={{color:'black',fontSize:20}}
                    />
                 ))
            }
        </View>
    </>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        color: 'black'
    },
    gameName:{
        fontFamily: 'Futura-MediumItalic',
        color:'#c75f46', 
        fontSize: 40,
        paddingTop: 7,
        textAlign: 'center'
    },
    gameHost:{
        fontFamily: 'Futura',
        color:'white', 
        fontSize: 20,
        paddingTop: 15
        },
    headingContainer:{
        color:'white', 
        fontSize: 23, 
        margin: 15,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default Host;