import React from 'react'

function ListVideo({content}) {
  //let value = props
    console.log(content)
    //let val=props




  function VideoList(props) {
    <div>
      <video src={props}></video>
    
    </div>
    
  }





  return (
    <div>
      {/* <h1>Video List</h1>
      <ul>
        {value.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul> */}
    
    </div>
  )
}

export default ListVideo