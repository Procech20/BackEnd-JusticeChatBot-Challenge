export default (res, status, messsage, datas) => {
  res.status(status).json({
    success: true,
    messsage,
    data: { blog: datas,  count: datas.lenght }
  });
};