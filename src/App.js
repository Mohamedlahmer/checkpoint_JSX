import image from './sophie-src.jpg';
import './App.css';


function App() {
  return (
    <div className='page'>
      <div style={{border:'solid 1px black' , maxWidth:'100vw'}}>
        <h1 className='tetle red'>Sophie Turner</h1>
              <div className='img'>
                <img src="/sophie-pub.jpg" alt="myimagepub" width='300px'/>
                <img src={image} alt="myimagesrc" width='300 px'/>
              </div>
      </div>
              <div>
                  <video className='vid' width="854" height="480" controls>
                  <source src="/sophievid.mp4" type="video/mp4"/> 
                  </video>
              </div>
    </div>
  );
}

export default App;
