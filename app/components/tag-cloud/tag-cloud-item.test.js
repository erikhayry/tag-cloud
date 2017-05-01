import React from 'react';
import {shallow} from 'enzyme';
import TagCloudItem from './tag-cloud-item';
import { expect } from 'chai';

describe('TagCloudItem', () => {
    it('should render item with styles', () => {
        const tagCloud = shallow(
            <TagCloudItem name={'Name 1'} url={'www.to.name'} count={3} max={12} index={1}/>
        );

        let tagCloudItems = tagCloud.find('.tag-cloud-item');
        let tagCloudItemStyle = tagCloudItems.get(0).props.style;
        let tagCloudItemLink = tagCloudItems.find('a').get(0);

        expect(tagCloudItems).to.have.length(1);
        expect(tagCloudItems.text()).to.equal('Name 1');
        expect(tagCloudItems.find('a')).to.have.length(1);
        expect(tagCloudItemLink.props.href).to.equal('www.to.name');

        expect(tagCloudItemStyle.color).to.equal('rgba(255,255,255,0)');
        expect(tagCloudItemStyle.fontSize).to.equal('25%');
        expect(tagCloudItemStyle.backgroundColor).to.equal('hsla(4, 25%, 58%, 1)');
        expect(tagCloudItemStyle.animationDelay).to.equal('50ms');
    });
});
