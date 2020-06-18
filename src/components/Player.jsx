import React from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { player } from '../actions'
import NotFound from '../containers/NotFound'

const Player = ({history,match,playing, player}) => {
  let hasPlaying = Object.keys(playing).length > 0;
  
  React.useEffect(()=>{
    player(match.params.id);
  },[])

  return (hasPlaying)
    ?<>
      <div className="container mt-5">
        <div className="row">
          <div className="offset-2 col-8">
            <video controls autoPlay>
              <source src={playing.source} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className="player-back">
          <button onClick={()=>history.goBack()} className="btn btn-outline-light mt-5 mb-3" type="button">Back</button>
        </div>
      </div>
    </>
    :<NotFound />;
}

const mapStoreToProps = store =>{
  return{
    playing: store.playing
  }
}

const mapDispachToProps ={
  player
}


export default connect(mapStoreToProps,mapDispachToProps)(Player);