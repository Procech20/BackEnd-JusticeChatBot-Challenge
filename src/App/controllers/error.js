import ErrorResponse from '../utils/errorResponse';

class NoRoute {
  static error(req, res, next) {
    return next(new ErrorResponse(res, 404, 'route not found! Please try a valid route like : /api/v1/blogs or /api/v1/users'));
  }
}

export default NoRoute;
