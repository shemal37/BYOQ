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
import HostQuestion from './src/components/HostQuestion'
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
      buttonName: '',
      answers:[
        {name: 'Captain America',
        answer: 'Avengers'},
        {name: 'Iron Man',
        answer: 'ABC'},
        {name: 'Thor',
        answer: 'XYZ'},
        {name: 'Hulk',
        answer: 'RRR'},
      ],
      toggleDisabledButton: [false, false, false, false],
      toggleHostScreen: true,
      toggleHostQuestionScreen: false,
    }
    this._onPressButton = this._onPressButton.bind(this);
    this._onPressSubmit = this._onPressSubmit.bind(this);
    this._onPressBack = this._onPressBack.bind(this);
  }
  
  _onPressButton(e, buttonName, buttonId) {
    this.setState((state) => {
      const udpatedArray = state.toggleDisabledButton.map((item, j) => {
        if(j===buttonId) return true;
        else if (item) return true;
        else return false;
      })
      return {
        toggleDisabledButton: udpatedArray,
        toggleUserScreen: true,
        buttonName: buttonName,
        toggleHostScreen: !state.toggleHostScreen,
      }
    });
  }
  _onPressBack(){
    this.setState({
      toggleHostScreen: !this.state.toggleHostScreen,
      toggleHostQuestionScreen: !this.state.toggleHostQuestionScreen

    })
  }
  _onPressSubmit(e, answer){
    this.setState((state)=>{
      const updatedanswers = state.answers.map((item) => {
        if(item.name === 'Captain America') {
          item.answer = answer
        } else return null;
      })
      return {updatedanswers,
        toggleHostQuestionScreen: !this.state.toggleHostQuestionScreen}
      
    })
    console.log(this.state.answers)
  }

  render() {
    const player = <Player players={this.state.players} /> 
    const question = <Question games={this.state.games} questionId={this.state.buttonName} submit={this._onPressSubmit} />
    const host = <Host games={this.state.games} click={this._onPressButton} disabled={this.state.toggleDisabledButton} />
    const hostQuestion = <HostQuestion games={this.state.games} toggle={this.state.toggleHostQuestionScreen} click={this._onPressBack} questionId={this.state.buttonName} playerAnswers={this.state.answers}/>
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
            {this.state.toggleHostScreen ? host : hostQuestion}
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
    backgroundColor: '#242323' , 
    height: 400,
   
    
  },
  scrollViewPlayer: {
    backgroundColor: '#242323',
    height: 430,
    borderTopWidth: 3,
    borderTopColor: Colors.lighter
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
