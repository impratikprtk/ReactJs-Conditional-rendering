import React, { Component } from 'react';
import './index.css';

function WarningBanner(props) {
    if(!props.warn){
        return(
            <div className="warning">
                Warning!
            </div>
        );
    }
    else{
        return null;
    }
}


class App extends Component{
constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={hidden:false};
}

handleClick(){
    if(this.state.hidden===false){
        this.setState({hidden:true});
    }
    else {
        this.setState({hidden:false});
    }
}


    render(){
        return(
                    <div>
                        <WarningBanner warn={this.state.hidden} />
                        <button onClick={this.handleClick}>
                            {this.state.hidden===false ? 'hide' : 'show'}
                        </button>
                    </div>
        );
    }


}


export default App;
