import axios from 'axios';

export const registerUser = async (body) => {
    let res = await axios.post("http://localhost:3000/auth/register", body);
    return res.data.token;
};