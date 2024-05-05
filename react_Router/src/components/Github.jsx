import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Aritra-09')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // }, [])

const data = useLoaderData()
  return (
    <div className=' flex flex-row-reverse justify-center items-center gap-x-10 bg-gray-600 text-4xl text-white p-5 font-semibold'>
      {data.login} Github Followers : {data["followers"]}
      <img src={data.avatar_url} alt="GithubPic" width={450} />
    </div>
  )
}

export default Github;

export const githubInformation = async () => {
    const response = await fetch('https://api.github.com/users/Aritra-09')
    return response.json()
}
