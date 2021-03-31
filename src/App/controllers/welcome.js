import successRes from '../utils/succHandler';

class Welcome {
  static greeting(req, res) {
    return successRes(res, 200, 'Welcome to Justice ChatBot Backend API!');
  }
}

export default Welcome;
