export const users = {
  name: null,
  gender: null,
  status: null,
  email: null
};

export const getRandomGender = () => {
  return Math.random() < 0.5 ? "male" : "female";
};

export const getRandomStatus = () => {
  return Math.random() < 0.5 ? "active" : "inactive";
};

export const isNumericId = (id) => {
  return !isNaN(id) && Number.isInteger(Number(id));
};

export default users;
