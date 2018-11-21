import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/style.less';

class App extends React.Component {
    render(){
        return(
            <div>{this.props.title}</div>
        )
    }
}
export default App