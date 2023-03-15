import axios from "axios";

const getData = async (userId) => {
  const {data: userData} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const {data: postData} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return {userData,postData};
}
export default getData;