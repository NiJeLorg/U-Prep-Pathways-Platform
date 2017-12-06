
const db = require('../../models/index');
const expect = require('chai').expect;
describe('element model', () => {
    beforeEach((done) => {
        db.sequelize.sync({ force: true }) // drops table and re-creates it
            .then(async () => {
                const element = await db.element.create({ name: 'test' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });

    it('should have all associations', async () => {
        const element = await db.element.findById(1);
        expect(element).to.be.a('object');
        expect(element).to.have.property('name');
        expect(element.name).to.equal('test');
    });
});
