import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loadData from '../redux/countryActions'
const Country = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const loading=useSelector(state=>state.countries.loading)

    useEffect(() => {
      dispatch(loadData())
      const interval=setInterval(()=>{
        dispatch(loadData())
      },5000)
      return()=>clearInterval(interval)
    }, [])
    
  return (
    <div>
      {loading?  
     <div className="d-flex justify-content-center align-items-center mt-5"><img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'/></div> :
        <div>
            <h1  className='text-center text-warning mt-3 mb-3'>About countries</h1>
             <table className='table table-bordered text-center'>
              <thead>
                <tr className='row'>
                <th className='col-4'>Country name</th>
                <th className='col-4'>Capital</th>
                <th className='col-4'>Flag</th>
                </tr>
              </thead>
             </table>
          </div>
}
      {countries.country.map((item,index)=> {
        return (
           <table className='table text-center' key={index}>
            <tr className='row'>
              <td className='col-4'>{item.name.common}</td>
              <td className='col-4'>{item.capital}</td>
              <td className='col-4'><img src={item.flags.png}  alt='err' style={{width:'160px'}}/></td>
            </tr>
           </table>
         

        )
      })}
    </div>
  )
}

export default Country