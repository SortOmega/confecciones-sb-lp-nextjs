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
              src="https://www.dropbox.com/scl/fi/cs83cclhoqcf798o5jx73/thumbnail-300x400-IMG-combatiente-forestal.webp?rlkey=5or4tm9k6yoidq2s9egfwd9dc&st=ipzb5au6&raw=1"
              alt="Camiseta color gris oscuro con diseño de combatiente forestal"
            />
            <figcaption>Camiseta con diseño de combatiente forestal</figcaption>
          </figure>
          <figure>
            <img
              src="https://www.dropbox.com/scl/fi/08icqxstktugl4wgda4wc/thumbnail-300x400-IMG-lenca-formal-marron.webp?rlkey=plk15s3f7o0r2lzgueyz0zzv8&st=d6idyopc&raw=1"
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
