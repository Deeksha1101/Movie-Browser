import Hero from './Hero';
const Home = () => {
  return (
    <>
      <Hero text="Welcome to MOVIE BROWSER" />
      <div classNameName="container m-5">
        <div classNameName="row">
          <div classNameName="col-lg-8 offset-lg-2 my-5 p-5">
            <p classNameName="lead" align="center">
              FROM CULT CLASSNameICS TO MODERN MASTERPIECES.
              AN INCREDIBLE <br />SELECTION OF CINEMA
              FROM ALL ACROSS INDIA,
              AND ALL OVER THE WORLD.
        </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 p-2 bg-Warning">
  <div className="col">
    <div className="card">
      <img src="https://imgc.allpostersimages.com/img/print/u-g-F9LN44O3QJ6.jpg?w=900&h=900&p=1 " className="card-img-top" alt="comp" width="20px" height="400px"/>
      <div className="card-body">
        <h5 className="card-title">Star Wars - Episode IV New Hope - </h5>
   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://imgc.allpostersimages.com/img/print/u-g-F7SH25O3QJ6.jpg?w=900&h=900&p=1" width="20px" height="400px" className="card-img-top" alt="comp" />
      <div className="card-body">
        <h5 className="card-title">John Wick</h5>
     
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://imgc.allpostersimages.com/img/print/u-g-F9JL6EO1ZOP.jpg?w=900&h=900&p=1" width="20px" height="400px" className="card-img-top" alt="comp" />
      <div className="card-body">
        <h5 className="card-title">Once Upon A Time in Hollywood</h5>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://imgc.allpostersimages.com/img/print/u-g-F9LN3EO3QJ6.jpg?w=900&h=900&p=1" width="20px" height="400px" className="card-img-top" alt="comp" />
      <div className="card-body">
        <h5 className="card-title">The SpongeBob Movie: Sponge On The Run - Key Art</h5>

      </div>
    </div>
  </div>
</div>
      </div>
      
    </>
  )
}

export default Home