import React from 'react';
import Home from './home/home.js';
import Categories from './categories/categories.js';
import Menu from './menu/menu.js';
import ModalContainer from './modal/modalContainer.js';
import Modal from './modal/modal.js';
import ErrorContainer from './error/errorContainer.js';



class Miranda extends React.Component{

    state = {
        modalVisible: false,
        handleError: false
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })
    }

    render(){
        return(
            <ErrorContainer>
                <Home> 
                    <Menu />
                    <Categories handleOpenModal={this.handleOpenModal} categories={this.props.data.categories} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                    
                </Home>
            </ErrorContainer>
        )
    }
}

export default Miranda