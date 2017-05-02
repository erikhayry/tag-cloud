import mapper from './mapper';
import { expect } from 'chai';

describe('Mapper', () => {
        let data;
        beforeEach(() => {
            data ={
                "response":{
                    "results":[
                        {"sectionName":"Stage", "sectionId": "stage"},
                        {"sectionName":"Sport", "sectionId": "sport"},
                        {"sectionName":"Sport", "sectionId": "sport"}
                    ]
                }
            }
        });

    it('should map api data', () => {
        let mappedData = mapper(data);

        expect(mappedData).to.have.length(2);
        expect(mappedData[0].name).to.equal('Sport');
        expect(mappedData[0].url).to.equal('https://www.theguardian.com/sport');
        expect(mappedData[0].count).to.equal(2);
        expect(mappedData[0].count).to.equal(2);
        expect(mappedData[1].name).to.equal('Stage');
        expect(mappedData[1].url).to.equal('https://www.theguardian.com/stage');
        expect(mappedData[1].count).to.equal(1);
    });

    it('should return 100 most popular', () => {
        let results = [];

        for (let i = 0; i <= 102; i++) {
            let iAsString = i.toString();
            results.push(
                {"sectionName": iAsString, "sectionId": iAsString,},
                {"sectionName": iAsString, "sectionId": iAsString,}
            )
        }

        let mappedData = mapper({
            "response": {
                "results": results
            }
        });

        expect(mappedData).to.have.length(100);

    });
});
