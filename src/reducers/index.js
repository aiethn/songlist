import { combineReducers } from 'redux';

const songsReducer = () => {
	return[
		{title: 'Aku Bahagia', duration: '3:46'},
		{title: 'Aku Senang', duration: '2:55'},
		{title: 'Aku Gembira', duration: '1:34'}
	];
};

const selectedSongReducer = (selectedSong=null, action) => {
	if(action.type === 'SONG_SELECTED') {
		return action.payload;
	}	

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});