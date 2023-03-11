 
import './App.css';

function App() {
  return (
    <div className="App">
      <Details
        img="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
        name="AJI"
        batch="B43WD"
      />
      <Details
        img="https://howtodrawforkids.com/wp-content/uploads/2022/05/how-to-draw-a-simple-anime-face.jpg"
        name="PAZHANI"
        batch="B42WD"
      />
      <Details
        img="https://sketchok.com/images/articles/06-anime/023-naruto/17/11.jpg"
        name="AJU"
        batch="B41WD"
      />
    </div>
  );
}
export default App;

function Details(props) {
  return (
    <div className="card">
      <img src= {props.img} alt= {props.name} />
      <h2>{props.name}</h2>
      <p>{props.batch}</p>
    </div>
  );
}

