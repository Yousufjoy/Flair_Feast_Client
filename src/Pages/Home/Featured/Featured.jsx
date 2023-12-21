import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-20 featured-item text-white pt-10 bg-fixed">
      <SectionTitle heading="Featured" subHeading="Check it Out"></SectionTitle>
      <div className=" md:flex justify-center bg-slate-500 bg-opacity-50 items-center py-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className=" md:ml-10">
          <p>Lorem ipsum dolor sit amet.</p>
          <p className=" uppercase"> Where can i get</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            explicabo sunt non voluptatibus accusamus tenetur, quas
            reprehenderit exercitationem ut architecto ratione, perspiciatis
            cupiditate fuga incidunt assumenda sapiente quasi soluta laudantium.
          </p>

          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Ghost
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
