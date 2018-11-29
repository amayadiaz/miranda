import React from 'react';
import RegularError from './regularError';

class ErrorContainer extends React.Component{

    state = {
        handleError: false,
    }
    
    componentDidCatch(error, info){
        this.setState({
            handleError:true,
        })
    }

    render(){
        if (this.state.handleError){
            return(
                <RegularError />
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorContainer