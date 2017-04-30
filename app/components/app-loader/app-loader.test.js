import React from 'react';
import {shallow} from 'enzyme';
import AppLoader from './app-loader';
import { expect } from 'chai';

describe('AppLoader', () => {
    it('should add active state class', () => {
        const seriesLoader = shallow(
            <AppLoader isLoading={true} />
        );

        expect(seriesLoader.find('.is-loading')).to.have.length(1);
    });

    it('should not add active state class when inactive', () => {
        const seriesLoader = shallow(
            <AppLoader isLoading={false} />
        );

        expect(seriesLoader.find('.is-loading')).to.have.length(0);
    });
});
