import React from 'react';
import {shallow} from 'enzyme';
import TagCloud from './tag-cloud';
import { expect } from 'chai';

describe('TagCloud', () => {
    it('should render', () => {
        const tagCloud = shallow(
            <TagCloud items={[{name: 'Name 1', count: 1}]} getTags={function(){}} isLoading={true} />
        );

        expect(tagCloud.find('.tag-cloud')).to.have.length(1);
    });
});
