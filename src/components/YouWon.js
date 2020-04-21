import React from 'react';
import Animation from 'lottie-react-native';
import StyledText from 'react-native-styled-text';
import {
  StyleSheet,
  View,
  //Text,
  InlineImage,
} from 'react-native';
import {Button, Text, withTheme} from 'react-native-elements';
import anim from '../Images/1370-confetti.json'

const YouWon = (props) => {
    return(
        <>
        <View style={{alignItems:'center'}}>
        
            <StyledText
    style={styles.header}
  >
    {"You got it Right!"}
  </StyledText>    

            <Animation 
                ref={animation => {
                    this.animation = animation;
                  }}
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  source={anim}
                  autoPlay
            />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
    fontSize: 42,
    color: 'orange',
    textAlign: 'center',
    padding: 20,
  },
})

export default YouWon