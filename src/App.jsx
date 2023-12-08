import { useEffect } from "react"
import fetchDataFromApi from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiconfiguration, getGenres } from './store/homeSlice'

function App() {
  
  const dispatch = useDispatch();
  
  const { home_url } = useSelector((state) => state.home_url)
  console.log(home_url);

  useEffect(() => {
    apiTest()
  }, []);

  const apiTest = async () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        // console.log(res);
        dispatch(getApiconfiguration(res))
      })
  }




  return (
    <>

    </>
  )
}

export default App
