import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            MovieBrowser.com is the go-to destination for wall art and other fun visual products that express personal interests, life-long passions and of-the-moment obsessions. With a selection of over 3,000,000 images, AllPosters has something for every budget and decorating style. Find your favorite art prints from classic masters and discover up-and-coming artists. Browse the hottest posters in music, movies and sports. Explore our range of t-shirts and novelty gifts. You can even turn your own photo into an art masterpiece with MyPhotos. Plus, choose from custom framing, canvas and wood mounting to truly make a piece your own — all high-quality at amazing prices.


            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
