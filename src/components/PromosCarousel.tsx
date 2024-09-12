import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function truncate(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '…' : str;
}

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
      slidesPerView={1.5}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
    >
      {promos.map((promo, index) => (
        <SwiperSlide key={`${promo.id}-${index}`}>
          <div className="card card-compact mb-2 w-full bg-base-100 shadow-md">
            <figure>
              <img src={promo.image} alt={promo.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{promo.name}</h2>
              <p>{truncate(promo.description, 20)}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary btn-block">
                  Ver más...
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
