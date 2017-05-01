import mapper from './mapper';
import { expect } from 'chai';

describe('Mapper', () => {
        let data;
        beforeEach(() => {
            data ={
                "response":{
                    "results":[
                        {"sectionName":"Stage", "webUrl": 'www.1', "webTitle": "Title 1"},
                        {"sectionName":"Sport", "webUrl": 'www.2', "webTitle": "Title 2"},
                        {"sectionName":"Sport", "webUrl": 'www.3', "webTitle": "Title 3"}
                    ]
                }
            }
        });

    it('should map api data', () => {
        let mappedData = mapper(data);

        expect(mappedData).to.have.length(2);
        expect(mappedData[0].name).to.equal('Sport');

        expect(mappedData[0].links).to.have.length(2);
        expect(mappedData[0].links[0].url).to.equal('www.2');
        expect(mappedData[0].links[0].title).to.equal('Title 2');
        expect(mappedData[0].links[1].url).to.equal('www.3');
        expect(mappedData[0].links[1].title).to.equal('Title 3');


        expect(mappedData[1].name).to.equal('Stage');
        expect(mappedData[1].links).to.have.length(1);
        expect(mappedData[1].links[0].url).to.equal('www.1');
        expect(mappedData[1].links[0].title).to.equal('Title 1');
    });

    it('should map missing api data', () => {
        let mappedData = mapper({});

        expect(mappedData).to.have.length(0);
    });
});
