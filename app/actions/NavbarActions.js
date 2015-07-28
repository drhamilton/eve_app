/**
 * Created by diz on 7/27/15.
 */
import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
	constructor() {
		this.generateActions(
			'updateOnlineUsers',
			'updateAjaxAnimation',
			'updateSearchQuery',
			'getCharacterCountSuccess',
			'getCharacterCountFail',
			'findCharacterSuccess',
			'findCharacterFail'
		);
	}

	findCharacter(payload) {
		$.ajax({
			url: '/api/characters/search',
			data: {name: payload.searchQuery}
		}).done((data) => {
			assign(payload, data);
			this.actions.findCharacterSuccess(payload);
		}).fail(() => {
			this.actions.findCharacterFail();
		});
	}

	getCharacterCount() {
		$.ajax({
			url: '/api/characters/count'
		}).done((data) => {
			this.actions.getCharacterCountSuccess(data);
		}).fail((jqXHR) => {
			this.actions.getCharacterCountFail(jqXHR)
		});
	}
}

export default alt.createActions(NavbarActions);