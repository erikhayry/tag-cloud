import { getBackgroundColor, getFontSize} from './style-utils';
import { expect } from 'chai';


describe('Style Utils', () => {
   describe('getBackgroundColor', () => {
       it('should return a background color', () => {
           let bgColor = getBackgroundColor(30);

           expect(bgColor).to.equal('hsla(4, 30%, 58%, 1)')
       });

       it('should return a background color for a max percentage', () => {
           let bgColor = getBackgroundColor(110);

           expect(bgColor).to.equal('hsla(4, 100%, 58%, 1)')
       });

       it('should return a background color for a min percentage', () => {
           let bgColor = getBackgroundColor(2);

           expect(bgColor).to.equal('hsla(4, 10%, 58%, 1)')
       })
   })

    describe('getFontSize', () => {
        it('should return a font size', () => {
            let bgColor = getFontSize(30);

            expect(bgColor).to.equal('30%')
        });

        it('should return a font size for a min percentage', () => {
            let bgColor = getFontSize(2);

            expect(bgColor).to.equal('20%')
        })
    })
});
