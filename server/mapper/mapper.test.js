import mapper from './mapper';
import { expect } from 'chai';

describe('Mapper', () => {
        let data;
        beforeEach(() => {
            data ={
                "response":{
                    "results":[
                        {"sectionName":"Stage"},
                        {"sectionName":"Sport"},
                        {"sectionName":"Sport"}
                    ]
                }
            }
        });

    it('should map api data', () => {
        let mappedData = mapper(data);

        expect(mappedData).to.have.length(2);
        expect(mappedData[0].name).to.equal('Sport');
        expect(mappedData[0].count).to.equal(2);
        expect(mappedData[1].name).to.equal('Stage');
        expect(mappedData[1].count).to.equal(1);
    });
});
