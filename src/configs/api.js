import axios from "axios";

const api =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{"Content-Type":"application/json"},
    auth:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmYwYWIwNDUzZTI0YWJlODdmOWVjMjAwM2RkZTc3OCIsIm5iZiI6MTc0MDgxNzM5OC42MzY5OTk4LCJzdWIiOiI2N2MyYzNmNmI4NmM3OTAzZDMzZjU2NTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.smGxDzC6rDg6Dth3hEHpYAgJK51YJTJNY6VXVH9CW_M'
});
export default api