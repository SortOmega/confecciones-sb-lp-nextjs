import './carousel.scss';

export function Carousel() {
  return (
    <div className="carousel">
      <div className="bg-patron">
        <div className="rectangle-red"></div>
        <div className="rectangle-blue"></div>
      </div>
      <div className="carousel-box">
        <div className="row">
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/p34ain2hwvlspi3euas81/thumbnail-450x600-IMG-combatiente-forestal.webp?rlkey=5j69941jtv29mvq23u30z1rwd&st=ewtj4pw3&raw=1"
              alt="Image 1"
            />
            <figcaption>Image 1</figcaption>
          </figure>
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/b8j46s64ixy7cyslr0xt9/thumbnail-450x600-IMG-lenca-formal-marron.webp?rlkey=zl8vngwc8a9dp4psq403uzj4h&st=pgarpkfq&raw=1"
              alt="Image 2"
            />
            <figcaption>Image 2</figcaption>
          </figure>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}
