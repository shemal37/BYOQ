import React from 'react';
import Animation from 'lottie-react-native';
import {
  StyleSheet,
  View,
  } from 'react-native';
import anim from '../Images/15003-lottie-coming-soon.json'

const CreateGame = (props) => {
    return(
        <>
        <View style={{alignItems:'center'}}> 
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

export default CreateGame