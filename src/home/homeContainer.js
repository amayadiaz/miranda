import React from 'react';
import Home from './home.js';
import Categories from '../categories/categories.js';
import Menu from '../menu/menu.js';
import ModalContainer from '../modal/modalContainer.js';
import Modal from '../modal/modal.js';
import ErrorContainer from '../error/errorContainer.js';
import VideoPlayerContainer from '../player/videoPlayerContainer';
import Playlist from '../playlist/playlist.js';



class HomeContainer extends React.Component{

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
                    <Playlist handleOpenModal={this.handleOpenModal} playlist={this.props.data.playlist} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayerContainer autoplay />
                            </Modal>
                        </ModalContainer>
                    }
                    
                </Home>
            </ErrorContainer>
        )
    }
}

export default HomeContainer