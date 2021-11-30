import React from 'react';
import axios from 'axios';

export default class Form extends React.Component{
    state = {
        userName: ''
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        const profile = response.data; 
        this.props.addProfile(profile);
        this.setState({userName: ''});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="GitHub username" 
                value={this.state.userName}
                onChange={event => this.setState({ userName : event.target.value})}
                />
                <button>Add card</button>
            </form>
        );
    }
}


// export default class Form extends React.Component{
//     userNameInput = React.createRef();
//     handleSubmit = (event) => {
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" placeholder="GitHub username" ref={this.userNameInput}/>
//                 <button>Add card</button>
//             </form>
//         );
//     }
// }