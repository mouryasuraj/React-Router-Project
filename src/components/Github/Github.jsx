import { useEffect, useState } from "react"
import { Outlet, useLoaderData } from "react-router-dom";
// Fucntion to fetch data using loader
export const githubLoader = async () =>{
  const res = await fetch('https://api.github.com/users/mouryasuraj');
  return res.json();
}


function Github() {
    // This is not the optimized way to fetch the api and show the data instead we can used loader fucntionality from react-router-dom
    // const [data, setData] = useState([]);
    // const githubUsername = 'mouryasuraj'

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${githubUsername}`)
    //     .then((res) => res.json())
    //     .then((res) => setData(res) )
    // },[])

    const data = useLoaderData()

  return (
    <div className="px-5 py-[100px] flex justify-center gap-x-10 items-start">
      <div className="px-4 py-5">
        <h2><span className="text-sky-700 font-bold">Name:</span> {data.name}</h2>
        <h2><span className="text-sky-700 font-bold">Username:</span> {data.login}</h2>
        <h2 > <span className="text-sky-700 font-bold">Followers:</span> {data.message === 'Not Found' ? 'Not found' : data.followers}</h2>    
        <h2> <span className="text-sky-700 font-bold">Following:</span> {data.message === 'Not Found' ? 'Not found' : data.following}</h2>    
      </div>
      <img className="rounded-full w-[300px]" src={data.avatar_url} alt="" />
      <Outlet />
    </div>
  )
}

export default Github
