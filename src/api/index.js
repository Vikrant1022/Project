import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  

export const getPlacesData = async(sw,ne)=>{
    try{
        const {data:{data}} = await axios.get(URL,{
  
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '9c6f6e9829msh87dca4caf9590a6p1e08fcjsnf12dcddc40aa'
            }
          });
        return data;
    }catch(error){
        console.log(error);
    }
}