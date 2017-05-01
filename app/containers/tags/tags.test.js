import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../../__mocks__/store';
import Tags from '../../containers/tags/tags';
import AppLoader from '../../components/app-loader/app-loader';
import TagCloud from '../../components/tag-cloud/tag-cloud';
import { expect } from 'chai';

describe('List Container', () => {
    let Component;
    let TagCloudComponent;
    let AppLoaderComponent;

    beforeEach(() => {
        const store = storeFake({
            tags: {}
        });

        const wrapper = mount(
            <Provider store={store}>
                <Tags items={[]}
                      isFetching={true}
                      getTags={() => {}}
                />
            </Provider>
        );

        Component = wrapper.find(Tags);
        TagCloudComponent = Component.find(TagCloud);
        AppLoaderComponent = Component.find(AppLoader);
    });

    it('should render Tags container', () => {
        expect(Component).to.have.length(1);
        expect(TagCloudComponent).to.have.length(1);
        expect(AppLoaderComponent).to.have.length(1);
    });
});
