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
        let tagCloudItemLink = tagCloudItems.find('a').get(0);
        let tagCloudItemLinkStyle = tagCloudItemLink.props.style;

        expect(tagCloudItems).to.have.length(1);
        expect(tagCloudItems.text()).to.equal('Name 1');
        expect(tagCloudItems.get(0).props.tabIndex).to.equal(10);

        expect(tagCloudItems.find('a')).to.have.length(1);
        expect(tagCloudItemLink.props.href).to.equal('www.to.name');

        expect(tagCloudItemLinkStyle.color).to.equal('rgba(255,255,255,0)');
        expect(tagCloudItemLinkStyle.fontSize).to.equal('25%');
        expect(tagCloudItemLinkStyle.backgroundColor).to.equal('hsla(4, 25%, 58%, 1)');
        expect(tagCloudItemLinkStyle.animationDelay).to.equal('50ms');
    });
});
