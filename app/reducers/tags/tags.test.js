import {GET_TAGS, RECEIVE_TAGS} from '../../actions'
import tagsReducer from './tags';
import { expect } from 'chai';

describe('Series reducers', () => {

    it('should return GET_TAGS state when no previous state', () => {
        let state = tagsReducer(undefined, {
            type: GET_TAGS,
            items: []
        });

        expect(state.isFetching).to.be.true;
        expect(state.items).to.have.length(0)
    });

    it('should return GET_TAGS state with previous state', () => {
        let state = tagsReducer({
            items: ['1','2'],
            isFetching: false
        }, {
            type: GET_TAGS,
            items: ['4','5','6']
        });

        expect(state.isFetching).to.be.true;
        expect(state.items[0]).to.equal('1');
        expect(state.items).to.have.length(2);
    });

    it('should return RECEIVE_TAGS state when no previous state', () => {
        let state = tagsReducer(undefined, {
            type: RECEIVE_TAGS,
            items: [
                '1','2'
            ]
        });

        expect(state.isFetching).to.be.false;
        expect(state.items).to.have.length(2)
    })

    it('should return RECEIVE_TAGS state when previous state', () => {
        let state = tagsReducer({
            items: ['1','2'],
            isFetching: true
        }, {
            type: RECEIVE_TAGS,
            items: [
                '3','4', '5'
            ]
        });

        expect(state.isFetching).to.be.false;
        expect(state.items[0]).to.equal('3');
        expect(state.items).to.have.length(3)
    })
});
