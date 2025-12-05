import { VehicleLocation } from '@/types/vehicle';
import css from './VehicleMeta.module.css';

interface Props {
  rating: number;
  reviewsCount: number;
  location: VehicleLocation;
}

export default function VehicleMeta({ rating, reviewsCount, location }: Props) {
  return (
    <div className={css.meta}>
      <div className={css.metaLeft}>
        <span className={css.rating}>
          <svg className={css.icon}>
            <use href="/icons.svg#star-pressed" />
          </svg>
          {rating}
        </span>
        <span className={css.reviews}>({reviewsCount} Reviews)</span>
      </div>

      <span className={css.location}>
        <svg className={css.icon}>
          <use href="/icons.svg#map" />
        </svg>
        {location.location}
      </span>
    </div>
  );
}
