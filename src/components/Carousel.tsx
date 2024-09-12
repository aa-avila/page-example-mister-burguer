import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  images: string[];
};
export default ({ images }: Props) => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${image}-${index}`}>
          <img className="rounded-lg" src={image} alt={`Imagen-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
