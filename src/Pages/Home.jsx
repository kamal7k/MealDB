import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';

const Home = () => {


  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data);

    } catch (err) {
      setLoad(false);
      setErr(err?.message);

    }


  }


  useEffect(() => {
    getData();
  }, []);


  if (load) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }



  return (
    <div className='p-3 grid grid-cols-3 gap-4'>

      {data?.categories.map((cata, i) => {
        return <CategoryCard cata={cata} key={i} />
      })}





    </div>
  )
}

export default Home