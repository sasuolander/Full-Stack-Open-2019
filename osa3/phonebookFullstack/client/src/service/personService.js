import Axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";
const getAll = () => {
  const request = Axios.get(baseUrl);
  return request.then(response => response.data.data);
};
const create = payload => {
  const request = Axios.post(baseUrl, payload);
  return request.then(response => response.data.data);
};
const update = (payload, id) => {
  const request = Axios.put(`${baseUrl}/${id}`, payload);
  return request.then(response => response);
};
const remove = id => {
  const request = Axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data.data);
};

export default {
  getAll,
  create,
  update,
  remove
};
