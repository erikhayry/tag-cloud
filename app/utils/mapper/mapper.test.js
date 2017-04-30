import mapper from './mapper';
import { expect } from 'chai';

describe('Mapper', () => {
        let data;
        beforeEach(() => {
            data = {
                _embedded: {
                    'viaplay:blocks': [
                        {
                            _embedded: {
                                'viaplay:products': [
                                    {
                                        content: {
                                            series: {
                                                title: 'A Title'
                                            },
                                            images: {
                                                landscape: {
                                                    url: 'a.url'
                                                }
                                            }
                                        }
                                    },
                                    {
                                        content: {
                                            series: {
                                                title: 'Another Title'
                                            },
                                            images: {
                                                landscape: {
                                                    url: 'another.url'
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            };
        });
    it('should map api data', () => {
        let mappedData = mapper(data);
        expect(mappedData).to.have.length(2);
        expect(mappedData[0].title).to.equal('A Title');
        expect(mappedData[0].src).to.equal('a.url');
        expect(mappedData[1].title).to.equal('Another Title');
        expect(mappedData[1].src).to.equal('another.url');
    });

    it('should handle missing api data', () => {
        let mappedData = mapper({});
        expect(mappedData).to.have.length(0);
    });

    it('should map api data with missing image', () => {
        delete data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'][1].content.images;

        let mappedData = mapper(data);

        expect(mappedData).to.have.length(2);
        expect(mappedData[0].title).to.equal('A Title');
        expect(mappedData[0].src).to.equal('a.url');
        expect(mappedData[1].title).to.equal('Another Title');
        expect(mappedData[1].src).to.be.undefined
    });

    it('should map api data with missing title', () => {
        delete data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'][1].content.series;

        let mappedData = mapper(data);

        expect(mappedData).to.have.length(1);
        expect(mappedData[0].title).to.equal('A Title');
        expect(mappedData[0].src).to.equal('a.url');
    })
});
