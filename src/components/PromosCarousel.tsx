import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type PromoCarousel = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type Props = {
  promos: PromoCarousel[];
};
export default ({ promos }: Props) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      {promos.map((promo, index) => (
        <SwiperSlide key={`${promo.id}-${index}`}>
          {/* <img
            className="rounded-lg"
            src={promo.image}
            alt={`Promo-${promo.id}`}
          /> */}
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img src={promo.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{promo.name}</h2>
              {/* <p>{promo.description}</p> */}
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Ver</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
