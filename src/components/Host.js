import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import {Button} from 'react-native-elements';

const randomColor = () =>{
    const array = ['lightsalmon', 'plum', '#88b3a5', 'goldenrod']
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}
const Host = (props) => {
    return(
        <>
        {/* <View style={ {flexDirection: 'row', justifyContent:'space-between', padding:5}}> */}
            <Text style={styles.gameName}>Q-up!</Text>
            {/* <Text style={styles.gameHost}>Shemal S.</Text> */}
        {/* </View> */}
        <Text style={styles.headingContainer}>Pick a Question from your Library </Text>
        <View style={styles.buttonContainer} >
            {
                props.games.map((game) => (
                    <Button
                        key={game.name}
                        id={game.name}
                        type="clear"
                        style={{
                            padding: 5, 
                            margin: 13,
                            backgroundColor: randomColor(),
                            borderRadius: 10,
                        }}
                        onPress={(event) => props.click(event,game.name)}
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
    // button: {
    //     padding: 5, 
    //     margin: 13,
    //     backgroundColor: randomColor(),
    //     borderWidth: .5,
    //     borderRadius: 6,
    // },
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
        margin: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default Host;