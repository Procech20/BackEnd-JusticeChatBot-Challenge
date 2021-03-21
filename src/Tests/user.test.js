import mocha from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Op } from 'sequelize';
import app from '../index';
import { mockAdmin, mockUser } from './mocks/user.mock';
import Models from '../Database/models/server';

const { User } = Models;
const {
  it, describe, beforeEach, afterEach,
} = mocha;
const signin = async (user) => {
  const userData = await chai.request(app).post('/api/v1/auth/login').send(user);
  const data = {
    id: `${userData.body.data.foundUser.id}`,
    token: `Bearer ${userData.body.data.token}`,
  };
  return data;
};
chai.expect();
chai.use(chaiHttp);

describe('Testing Users routes', () => {
  beforeEach(async () => {
    await User.destroy({
      where: { email: { [Op.not]: ['admin@techblogs.pro', 'user@techblogs.pro'] } },
    });
  });
  afterEach(async () => {
    await User.destroy({
      where: { email: { [Op.not]: ['admin@techblogs.pro', 'user@techblogs.pro'] } },
    });
  });
  it('should Create, Update, Delete and Fetch all or single User.', async () => {
    const Dummy = await signin(mockAdmin);
    const { token, id } = Dummy;
    const res = await chai.request(app).get('/api/v1/users').set('auth', token);
    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('message', 'All users retreived successfully');
    const res1 = await chai.request(app).get(`/api/v1/users/${id}`).set('auth', token);
    expect(res1.status).to.be.equal(200);
    expect(res1.body).to.have.property('message', 'successfully retrieved user');
    const res2 = await chai.request(app).post('/api/v1/users').send(mockUser).set('auth', token);
    expect(res2.status).to.be.equal(201);
    expect(res2.body).to.have.property('message', 'Successfully created user');
    const res3 = await chai.request(app).patch(`/api/v1/users/${id}`).set('auth', token);
    expect(res3.status).to.be.equal(201);
    expect(res3.body).to.have.property('message', 'successfully updated user');
    const res4 = await chai.request(app).delete(`/api/v1/users/${id}`).set('auth', token);
    expect(res4.status).to.be.equal(200);
    expect(res4.body).to.have.property('message', 'Deleted successfully a user');
  });
});
