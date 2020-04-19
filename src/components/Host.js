import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';

const Host = (props) => {
    return(
        <>
        <Text style={styles.headingContainer}>Pick a question from your library </Text>
        <View style={styles.buttonContainer} >
            {
                props.games.map((game) => (
                    <Button
                        key={game.name}
                        id={game.name}
                        type="clear"
                        style={styles.button}
                        onPress={(event) => props.click(event,game.name)}
                        title= {game.name}
                    />
                 ))
            }
        </View>
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
        margin: 20,
        fontWeight: 'bold'
      },
})

export default Host;