import mapper from './mapper';
import { expect } from 'chai';

describe('Mapper', () => {
        let data;
        beforeEach(() => {
            data = {
                "response": {
                    "status":"ok",
                    "userTier":"developer",
                    "total":54620,
                    "startIndex":1,
                    "pageSize":3,
                    "currentPage":1,
                    "pages":18207,
                    "results":[
                        {"id":"a-shot-of-sustainability/a-shot-of-sustainability","type":"keyword","sectionId":"a-shot-of-sustainability","sectionName":"A shot of sustainability","webTitle":"a shot of sustainability","webUrl":"https://www.theguardian.com/a-shot-of-sustainability/a-shot-of-sustainability","apiUrl":"https://content.guardianapis.com/a-shot-of-sustainability/a-shot-of-sustainability"},
                        {"id":"aberdeen-grampian/aberdeen-grampian","type":"keyword","sectionId":"aberdeen-grampian","sectionName":"Aberdeen-Grampian","webTitle":"Aberdeen-Grampian","webUrl":"https://www.theguardian.com/aberdeen-grampian/aberdeen-grampian","apiUrl":"https://content.guardianapis.com/aberdeen-grampian/aberdeen-grampian"},
                        {"id":"abpi-partner-zone/abpi-partner-zone","type":"keyword","sectionId":"abpi-partner-zone","sectionName":"A shot of sustainability","webTitle":"ABPI partner zone","webUrl":"https://www.theguardian.com/abpi-partner-zone/abpi-partner-zone","apiUrl":"https://content.guardianapis.com/abpi-partner-zone/abpi-partner-zone"}
                        ]
                }
            }
        });
    it('should map api data', () => {
        let mappedData = mapper(data);

        expect(mappedData).to.have.length(2);
        expect(mappedData[0].name).to.equal('A shot of sustainability');
        expect(mappedData[0].count).to.equal(2);
        expect(mappedData[1].name).to.equal('Aberdeen-Grampian');
        expect(mappedData[1].count).to.equal(1);
    });
});
