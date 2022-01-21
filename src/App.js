import './App.css';
import {useState, useEffect} from 'react';


function App() {
  
  const [videolist, setVideolist] = useState([]);

  useEffect(()=>{

    fetch("https://386gi5nn8f.execute-api.ap-south-1.amazonaws.com/default/youtube?class=10th&subject=Maths")
    .then((res)=>res.json())
    .then((res)=>setVideolist(res))
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))

  },[]);

  
  return (
    <div className="App">
    <nav className='navbar'>
    <h3 className='nav-heading'>Video Gallery</h3>
    </nav>

    <div className='videos-wrapper'>

    {
      videolist.map((item,index)=>{
        let vidlink = item.link.split(".be/")[1] || item.link.split("?v=")[1];
        const mystyle ={height: "400px", width: "600px"};
        return(
          <div className='video-card' key={index}>


            <iframe className='vid-frame' title={item.title} src={`https://www.youtube.com/embed/${vidlink}`} style={mystyle}>

            </iframe>
            <div className='vid-info'>
            <p className='vid-title'>{item.title}</p>
            <p className='vid-desc'>{item.description}</p>
            <p className='vid-tags'>{item.tags}</p>
            </div>
          </div>

        )

      })
    }

    </div>


    </div>
  );
}

export default App;
