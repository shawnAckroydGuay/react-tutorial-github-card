import './App.scss';
import React from 'react';
import CardList from './components/CardList.js';
import Form from './components/Form.js';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

export default class App extends React.Component {
  state = {
    profiles: [],
  }
  addProfile = (profile) => {
    console.log(profile);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profile],
    }));
  };
  render() {
    return(
      <>
        <div className="header">{this.props.title}</div>
        <Form addProfile={this.addProfile}/>
        <CardList profiles={this.state.profiles}/>
      </>
    );
  }
}
