import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Promotion } from '../schemas/promotion';

function truncate(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength - 1) + '…' : str;
}

function CardPromo(promo: Promotion) {
  return (
    <div className="card card-compact mb-2 w-full bg-base-100 shadow-md">
      <figure>
        <img src={promo.images[0]} alt={promo.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl">{promo.name}</h2>
        <p className="text-base">{truncate(promo.description, 20)}</p>
        <div className="card-actions mt-2 justify-center">
          <button className="btn btn-primary btn-block max-w-64">
            Ver más...
          </button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  promos: Promotion[];
};
export default ({ promos }: Props) => {
  // console.log(promos);
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={20}
      slidesPerView={1.5}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      // loop={true}
    >
      {promos.map((promo, index) => (
        <SwiperSlide key={`${promo.id}-${index}`}>
          <CardPromo {...promo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
