import css from './VehicleItem.module.css';
import Image from 'next/image';
import { Vehicle } from '@/types/vehicle';
import VehicleMeta from '../VehicleMeta/VehicleMeta';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Link from 'next/link';

export default function VehicleItem({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.imageWrapper}>
          <Image
            src={vehicle.gallery[0]?.original}
            alt={vehicle.name}
            className={css.image}
            width={292}
            height={320}
            unoptimized
          />
        </div>
        <div className={css.content}>
          <div className={css.header}>
            <h2 className={css.title}>{vehicle.name}</h2>
            <div className={css.headerRight}>
              <p className={css.price}>€{vehicle.price.toFixed(2)}</p>
              <FavoriteButton />
            </div>
          </div>
          <VehicleMeta
            rating={vehicle.rating}
            reviewsCount={vehicle.reviews.length}
            location={vehicle.location}
          />
          <p className={css.description}>{vehicle.description}</p>
          <VehicleEquipment equipment={vehicle.equipment} variant="catalog" />
          <Link href={`/campers/${vehicle.id}`} className={css.link}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}
