import * as types from './mutation-types'
import {playMode} from '../common/js/config'

// export const sequencePlay = function ({commit}, {list}) {
// 	commit(types.SET_PLAY_MODE, playMode.sequence)
// 	commit()
// }

export const findIndex = function (list, song) {
	return list.findIndex(item => item.id === song.id)
}

export const insertSong = function ({commit, state}, song) {
	let playlist = state.playlist.slice()
	let sequenceList = state.sequenceList.slice()
	let currentIndex = state.currentIndex
	// 当前播放歌曲
	let currentSong = playlist[currentIndex]
	// 查找 playlist 中是否有插入的歌曲
	let fpIndex = findIndex(playlist, song)
	// 插入歌曲
	playlist.splice(++currentIndex, 0, song)
	if (fpIndex > -1) {
		if (currentIndex > fpIndex) {
			playlist.splice(fpIndex, 1)
			currentIndex--
		} else {
			playlist.splice(++fpIndex, 1)
		}
	}

	let currentSIndex = findIndex(sequenceList, currentSong)
	let fsIndex = findIndex(sequenceList, song)

	sequenceList.splice(++currentSIndex, 0, song)
	if (fsIndex > -1) {
		if (currentSIndex > fsIndex) {
			sequenceList.splice(fpIndex, 1)
		} else {
			sequenceList.splice(++fpIndex, 1)
		}
	} 
	commit(types.SET_PLAYLIST, playlist)
	commit(types.SET_SEQUENCE_LIST, sequenceList)
	commit(types.SET_CURRENT_INDEX, currentIndex)
	commit(types.SET_FULL_SCREEN, true)
	commit(types.SET_PLAYING_STATE, true)
}