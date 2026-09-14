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
              alt="Camiseta color gris oscuro con diseño de combatiente forestal"
            />
            <figcaption>Camiseta con diseño de combatiente forestal</figcaption>
          </figure>
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/b8j46s64ixy7cyslr0xt9/thumbnail-450x600-IMG-lenca-formal-marron.webp?rlkey=zl8vngwc8a9dp4psq403uzj4h&st=pgarpkfq&raw=1"
              alt="Camiseta color marrón con diseño formal con acentos lencas"
            />
            <figcaption>Camiseta con diseño formal con acentos lencas</figcaption>
          </figure>

          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/7bj0p5jhviqn9xl3aabjd/thumbnail-300x400-IMG-camiseta-casual-spider-boy-260913.webp?rlkey=pz9wl74orlhgsj3guompv8o5a&st=ql9wi263&raw=1"
              alt="Camiseta color azul con diseño de Spider-Man"
            />
            <figcaption>Camiseta con diseño de Spider-Man</figcaption>
          </figure>
        </div>
        <div className="row">
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/2l88j2zdyf0nhk83njlwk/thumbnail-300x400-IMG-camiseta-casual-spider-girl-260913.webp?rlkey=vjjl2xfmkf1zzmxy3kd71vldp&st=tr8vyhc2&raw=1"
              alt="Camiseta color rosa con diseño de Spider-Woman"
            />
            <figcaption>Camiseta con diseño de Spider-Woman</figcaption>
          </figure>
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/y0nfteuwx2cquyhve3omk/thumbnail-300x400-IMG-lenca-formal-blanca-doble-guacamaya.webp?rlkey=4pdleuwqd7a271ip0ypsfvnx7&st=u26kqqt1&raw=1"
              alt="Camiseta color blanca con diseño formal con doble guacamaya"
            />
            <figcaption>Camiseta diseño formal con doble guacamaya</figcaption>
          </figure>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
