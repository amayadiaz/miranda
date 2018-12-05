import React from 'react';
import Home from './home.js';
import Menu from '../menu/menu.js';
import ModalContainer from '../modal/modalContainer.js';
import Modal from '../modal/modal.js';
import ErrorContainer from '../error/errorContainer.js';
import VideoPlayerContainer from '../player/videoPlayerContainer';
import Playlist from '../playlist/playlist.js';



class HomeContainer extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          movies: [],
          videos: [],
        };

        this.getData = this.getData.bind(this);

    }

    getData(){
        const key = '84ff3251498b1fa0b9f22832083b3196';

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=' + key)
        .then(response => {

            if (response.status !== 200) {
              console.log('Error: ' + response.status);
              return;
            }
    
            response.json().then(data => {
            
              this.setState({ 
                movies : data.results,
              });
              
              
            });
            
        })

    }

    componentDidMount() {
        this.getData();
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
                    <Playlist handleOpenModal={this.handleOpenModal} playlist={this.state.movies} />
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