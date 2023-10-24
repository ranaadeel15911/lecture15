'use client'
import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [usir,setUsir] = useState({})
  const [followers,setFollowers] = useState([])
  const handleData = async()=>{
    let data =await axios.get('https://api.github.com/users/ranaadeel15911')
    console.log(data.data)
    const newData = await data.data
    setUsir(newData)
  }
  const handleUsers = async()=>{
    let data =await axios.get('https://api.github.com/users/naveed-rana/followers')
    console.log(data.data)
    const newData = await data.data
    setFollowers(newData)
  }

  return (
    <>
    <Image
    src='/urlstructure.jpg'
    width={500}
    height={400}
    alt="Image of Url Structure"
    quality={100}
    />
    {/* Here we can see next js made a image tag in which we will only define image name with forward slash and it will find it  */}
    {/* in it we can also define quality of image from 1 to 100 and by default it gives low quality */}
    {/* The above is 4 is required */}
    <h1>Detail</h1>
    <p>When we request a server than in reply server gives this url in back Here we can see first is protocole and than domain than port on which our site is running in server and if it not mentioned than it
      will be 80 which is by default port and than directry and than file or document
    </p>
<h1>Rest API</h1>
<p>When we request a server of get request and we get data in json format than this is called rest api and if not give in json format than it is not rest api
  <b>Like when we search anything on google it give request to server but in response we get html page so it is not rest api we can also see this in console and 
    than by click &gt;&gt; we can see network in it we can see request of get and response but firstly refresh to the page we will see in header that url and request
    method
  </b>
</p>
<h1>Types of requests into the Server</h1>
<ul>
  <li>Get  to get some response</li>
  <li>Post to give something to add or anything</li>
  <li>Delete to delete </li>
  <li>Put(update) to delete something</li>
</ul>
<b>But in google there is only one request which we can send is get </b>
<h1>How can get our account url of github</h1>
<p>https://api.github.com/users/ranaadeel15911</p>
<b>This is my github account url where i can see anything of user if i write at the place of ranaadeel15911 to naveed-rana</b>
<b>And this is a rest api because we got in json format</b>
<h1>Diff Between fetch and axios</h1>
<p>Main diffrence is that fetch dnt give data to us in json format so we after getting data convert in json by json() functon like response.json() But 
  in axios we get by default data in json we no need to convert it 
</p>
<button style={{fontSize:30}} onClick={handleData}>Load My Data</button>
<h1>Github Name - {usir.name} - followers - {usir.followers} - following - {usir.following} - id - {usir.id}</h1>
{/* Because it was a single object so we stored we defined it like that if more than one object than i can apply array on it */}
<h2>We use Postman Because we can see the response which we are getting is an object or many objects by this we can take initiaValue in useState({}) object or arrray
  if one object than we will consider it like a user than we will not apply array as we took at top when click on Load Data otherwise there is many objects than 
  we will keep it in array as a initialValue also will be array useState([]) </h2>
<button style={{fontSize:30}} onClick={handleUsers}>Load My Followers</button>
{followers.map((follows,i)=>{
  return(
    <>
    
    <h1 key={i}>The Followe is {follows.login} </h1>
    
    </>

  )
})}
    </>
  )
}
