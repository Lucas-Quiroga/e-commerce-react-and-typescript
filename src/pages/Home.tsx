import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import buzo3 from "../assets/buzo3.jpg";
import campera1 from "../assets/campera1.jpeg";
import campera3 from "../assets/campera3.jpeg";

const Home = () => {
  return (
    <div style={{ height: 600, margin: 30 }}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          maxWidth: "600px",
          height: "800px",
          display: "flex",
          alignItems: "center",
          objectFit: "cover",
        }}
      >
        <SwiperSlide>
          <img src={buzo3} style={{ height: "100%" }} alt="hoodie"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={campera1} style={{ height: "100%" }} alt="hoodie"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={campera3} style={{ height: "100%" }} alt="hoodie"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
