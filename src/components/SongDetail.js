import React from 'react';
import { connect } from 'react-redux';

const SongDetail =( { song } ) =>{
    if (!song) {
        //Added some comment to check
        return<div>Select a song</div>
    }

    return <div>
        <div>Title : {song.title}</div>
        <p>Duration :{song.duration}</p>
    </div>
};

const mapStateToProps = state =>{
    return {song : state.selectedSong}
};
export default connect(mapStateToProps)(SongDetail);