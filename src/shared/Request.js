import axios from "axios";


const instance = axios.create({
	baseURL: "http://3.35.219.219" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});


export default instance;