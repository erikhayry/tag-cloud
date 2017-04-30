import React from 'react';
import {shallow} from 'enzyme';
import TagCloudItem from './tag-cloud-item';
import { expect } from 'chai';

describe('TagCloudItem', () => {
    it('should render', () => {
        const tagCloud = shallow(
            <TagCloudItem name={'Name 1'} count={1} max={1} index={1}/>
        );

        expect(tagCloud.find('.tag-cloud-item')).to.have.length(1);
    });
});
