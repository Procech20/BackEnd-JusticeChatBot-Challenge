import Models from '../../Database/models/server';

const { User } = Models

export default async (param) => {
  const user = await User.findOne({ where: param });
  return user;
};