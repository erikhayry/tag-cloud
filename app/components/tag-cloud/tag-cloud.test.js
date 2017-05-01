import React from 'react';
import {mount} from 'enzyme';
import TagCloud from './tag-cloud';
import TagCloudItem from './tag-cloud-item';
import { expect } from 'chai';
import sinon from 'sinon';

describe('TagCloud', () => {
    let items = [
        {name: 'Name 1', count: 3},
        {name: 'Name 2', count: 2},
        {name: 'Name 3', count: 1}
    ];

    it('should render a tag cloud', () => {
        const seriesList = mount(
            <TagCloud
                items={items}
                getTags={() => {}}
                isLoading={false}
            />
        );

        let tagCloudItems = seriesList.find(TagCloudItem);

        expect(tagCloudItems).to.have.length(3);

        expect(tagCloudItems.get(0).props.index).to.equal(0);
        expect(tagCloudItems.get(0).props.name).to.equal('Name 1');
        expect(tagCloudItems.get(0).props.count).to.equal(3);
        expect(tagCloudItems.get(0).props.max).to.equal(3);

        expect(tagCloudItems.get(1).props.index).to.equal(1);
        expect(tagCloudItems.get(1).props.name).to.equal('Name 2');
        expect(tagCloudItems.get(1).props.count).to.equal(2);
        expect(tagCloudItems.get(1).props.max).to.equal(3);

        expect(tagCloudItems.get(2).props.index).to.equal(2);
        expect(tagCloudItems.get(2).props.name).to.equal('Name 3');
        expect(tagCloudItems.get(2).props.count).to.equal(1);
        expect(tagCloudItems.get(2).props.max).to.equal(3);

        expect(seriesList.find('.is-loading')).to.have.length(0);
        expect(seriesList.find('.tag-cloud-btn')).to.have.length(1);
    });

    it('should render an empty state', () => {
        const seriesList = mount(
            <TagCloud
                items={[]}
                getTags={() => {}}
                isLoading={false}
            />
        );

        expect(seriesList.find(TagCloudItem)).to.have.length(0);
        expect(seriesList.find('.is-loading')).to.have.length(0);
        expect(seriesList.find('.tag-cloud-btn')).to.have.length(1);
        expect(seriesList.find('.tag-cloud-empty')).to.have.length(1);
    });

    it('should render a loading state', () => {
        const seriesList = mount(
            <TagCloud
                items={items}
                getTags={() => {}}
                isLoading={true}
            />
        );

        expect(seriesList.find(TagCloudItem)).to.have.length(3);
        expect(seriesList.find('.is-loading')).to.have.length(1);
        expect(seriesList.find('.tag-cloud-btn')).to.have.length(0);
    });

    it('should handle reload button action', () => {
        const onFetchTags = sinon.spy();

        const seriesList = mount(
            <TagCloud
                items={items}
                getTags={onFetchTags}
                isLoading={false}
            />
        );

        seriesList.find('.tag-cloud-btn').simulate('click');
        expect(onFetchTags).to.have.property('callCount', 1);
    });
});
