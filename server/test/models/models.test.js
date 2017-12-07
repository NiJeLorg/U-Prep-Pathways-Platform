const db = require('../../models/index');
const expect = require('chai').expect;
describe('Testing Model Associations For Master Tables', () => {
    beforeEach((done) => {
        db.sequelize.sync({force: true}) // drops table and re-creates it
            .then(async () => {
                const element = await db.element.create({name: 'Culture of  High Expectations'});
                const component = await db.component.create({name: 'Character'});
                const indicator = await db.indicator.create({name: 'crew'})
                await element.addComponent(component);
                await component.addIndicator(indicator);
                done();

            })
            .catch((error) => {
                done(error);
            });
    });

    it('Should have all associations', async () => {
        const element = await db.element.findById(1);
        const components = await element.getComponents();
        expect(components.length).to.equal(1);
        expect(element.name).to.equal('Culture of  High Expectations');
        expect(components[0].name).to.equal('Character');
        const component =  await db.component.findById(components[0].id);
        const indicators = await component.getIndicators();
        expect(indicators.length).to.equal(1);
        expect(indicators[0].name).to.equal('crew');
    });
});
