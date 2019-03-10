import * as types from './mutation-types'

const mutations = {
	[types.SET_MUSIC_LIST] (state, musicList) {
    	state.musicList = musicList
  	},
  	[types.SET_FULL_SCREEN] (state, flag) {
    	state.fullScreen = flag
  	},
	[types.SET_PLAYLIST] (state, list) {
		state.playlist = list
	},
	[types.SET_SEQUENCE_LIST] (state, list) {
		state.sequenceList = list
	},
	[types.SET_CURRENT_INDEX] (state, index) {
		state.currentIndex = index
	},
	[types.SET_PLAYING_STATE] (state, flag) {
		state.playing = flag
	},

}

export default mutations