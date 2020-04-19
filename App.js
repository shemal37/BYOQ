import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';
import Host from './src/components/Host';
import Player from './src/components/Player';
import {games, players} from './gameInfo.js';
import Question from './src/components/questionRender';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      games: games,
      players: players,
      toggleUserScreen: false,
      buttonId: '',
      answers:[]
    }
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressSubmit = this._onPressSubmit.bind(this);
  }
  
  _onPressButton(e, buttonId) {
    this.setState({
      toggleUserScreen:true,
      buttonId: buttonId
    })
  }
  _onPressSubmit(e, answer){
    this.setState({
      answers: this.state.answers.push(answer)
    })
    console.log(this.state.answers)
  }

  render() {
    const player = <Player players={this.state.players} /> 
    const question = <Question games={this.state.games} questionId={this.state.buttonId} submit={this._onPressSubmit}/>
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollViewHost}>

            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            
            <Host games={this.state.games} click={this._onPressButton} />
              {/* <LearnMoreLinks /> */}
          </ScrollView>

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollViewPlayer}>
            {/* <Header /> */}
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View>
            { !this.state.toggleUserScreen ? player :  question }
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollViewHost: {
    backgroundColor: Colors.light,
    height: 400
  },
  scrollViewPlayer: {
    backgroundColor: 'wheat',
    height: 430
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  
});

export default App;
