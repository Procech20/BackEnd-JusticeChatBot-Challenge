export default (res, status, messsage, data) => {
  res.status(status).json({
    success: true,
    messsage,
    data: data,
  });
};