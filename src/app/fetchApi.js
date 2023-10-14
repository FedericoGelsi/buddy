import axios from "axios";
export async function getInfo(state){
  const llamadoAPI = await axios.get(
    'https://buddy-api-msil.onrender.com/health_check',
    {
      headers:{
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Headers":'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      }
    });
  console.log(llamadoAPI.data);
  state(llamadoAPI.data);
}