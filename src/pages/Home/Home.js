import "./home.scss";
import video from "../../assets/images/video.mp4";
import bg1 from "../../assets/images/home-bg5.png";
import bg2 from "../../assets/images/home-bg1.png";
import bg3 from "../../assets/images/home-bg3.png";
const Home = () => {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="navbar">
            <h1 className="navbar__logo">LOGO.</h1>
          </div>
          <div className="header">
            <div className="header__title">
              <h2>BE A CREATIVE SELLER!!</h2>
              <p className="header__title-desc">
                You have a source of goods, products. But you have no place to
                sell them. Come to us now. We offer you a private booth. Where
                you can design your own store and sell your products on our
                commerce platform with 5000+ other sellers.
              </p>
              <button className="header__btn">Let start!</button>
            </div>
            <div className="header__video">
              <video width="620" autoplay="autoplay" loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="content">
            <div className="content__box">
              <h3>what do we have?</h3>
              <div className="content__flex">
                <img src={bg1} alt="" />
                <div className="content__desc">
                  <p>
                    with customer comfort. In general, we provide the ability to
                    create a personal brand right on the website with the
                    advantage of creativity, attracting customers. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Corrupti omnis
                    enim delectus aspernatur magnam. Eos harum nam laudantium
                    explicabo excepturi reprehenderit et, esse illum quo
                    incidunt. Exercitationem fugit consequuntur quae.
                  </p>
                </div>
              </div>
            </div>

            <div className="content__box">
              <h3>benefits bring</h3>
              <div className="content__flex">
                <img src={bg2} alt="" />
                <div className="content__desc">
                  <p>
                    Your job is to create your own personal store. Let us take
                    care of the rest. You just need to manage the source of
                    goods on the invoice and receive it in an easier way. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                    repellat commodi cumque, eius nam accusantium, aut
                    consectetur expedita vel tenetur fugit, at sit distinctio
                    officiis eos velit voluptatum aliquid perspiciatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="content__box">
              <h3>Quick support</h3>
              <div className="content__flex">
                <img src={bg3} alt="" />
                <div className="content__desc">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Excepturi, aut et, mollitia dolorem repellat harum neque
                    repudiandae tenetur, nesciunt suscipit dicta sapiente? Optio
                    animi eaque nam explicabo non, aliquid deserunt
                    <br />
                    .Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis accusantium aliquid amet accusamus, alias
                    facilis voluptas aut nulla ab aspernatur, perferendis
                    maxime, cumque odio unde beatae sapiente? Itaque, sapiente
                    ea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
