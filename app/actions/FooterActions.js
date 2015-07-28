/**
 * Created by diz on 7/27/15.
 */
import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
		//Equivalent to this:
		//getTopCharactersSuccess(payload) {
		//	this.dispatch(payload);
		//}
		//
		//getTopCharactersFail(payload) {
		//	this.dispatch(payload);
		//}
	}

	getTopCharacters() {
		$.ajax({ url: '/api/characters/top' })
			.done((data) => {
				this.actions.getTopCharactersSuccess(data);
			})
			.fail((jqXHR) => {
				this.actions.getTopCharactersFail(jqXHR);
			});
	}
}

export default alt.createActions(FooterActions);
