import React,{useEffect, useState} from 'react'
import Header from './ASSETS/Header';


function Home() {
  const[search,setSearch]= useState('');
  const[data, setData]= useState(null);
  const[loading, setLoading]= useState(true);
  const [error,setError]= useState(null);
 useEffect(()=>{
  const fetchApi = async ()=>{
    try{
      const key='3dbdef1dbc3e23fffefc17ca40135e5a'
      const url =`https://api.themoviedb.org/3/movie/11?api_key=${key}`
      const response = await fetch(url)
      const jasonData = await response.json();
      if(!response){
        throw new Error("could not get data");
     }
     setLoading(false);
     setData(jasonData);
     console.log(jasonData)
    }
    catch(error){
      setError(error);
      setLoading(false);
    }
  }
  fetchApi();
 },[data])
 const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.title.toLowerCase())
  );
 
 const handle = (e)=>{
    setSearch(e.target.value);
 }
 if(loading){
  return <div>Loading....</div>
  }
 
  return (
    <>
   
    <Header />
     <section className='home'>
      
     <input type='text'  placeholder='SEARCH HERE.....' value={search} onChange={handle} className='searchbar'></input>
     <button className='btn' onClick={handle}>Search</button>
      <div>
        <div>
          <h1>{data.title}</h1>
        </div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500//${data.poster_Path}`} alt='imdb'></img>
        </div>
        <div>
          <h2>{data?.overview}</h2>
        </div>

        <div>
          <h3>{data?.release_date}</h3>
        </div>
        
      </div>
   </section>
   </>
  )
}

export default Home