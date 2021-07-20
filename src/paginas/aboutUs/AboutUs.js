import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <h1>Qui som?</h1>
      <hr />
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            assumenda in excepturi voluptatem quam, esse atque quibusdam
            molestiae voluptate nihil dolor ad necessitatibus eaque et quos amet
            qui tempora. Esse atque quibusdam molestiae voluptate nihil dolor ad
            necessitatibus eaque et quos amet qui tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            assumenda in excepturi voluptatem quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            assumenda in excepturi voluptatem quam, esse atque quibusdam
            molestiae voluptate nihil dolor ad necessitatibus eaque et quos amet
            qui tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non
            assumenda in excepturi voluptatem quam, esse atque quibusdam
            molestiae voluptate nihil dolor ad necessitatibus eaque et quos amet
            qui tempora.
          </p>
        </div>
        <div className="col-md-12 col-lg-4">
          <img
            src="https://picsum.photos/400/400"
            className="img-about-us w-100"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
