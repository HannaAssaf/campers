import { getVehiclesById } from '@/lib/api/api';
import css from './CardPage.module.css';
import Image from 'next/image';
import VehicleMeta from '@/components/VehicleMeta/VehicleMeta';

type Props = {
  params: Promise<{ id: string }>;
};

const VehicleDetails = async ({ params }: Props) => {
  const { id } = await params;
  const vehicle = await getVehiclesById(id);
  return (
    <div className={css.page}>
      <div className={css.container}>
        <section className="metaSection">
          <h2 className={css.title}>{vehicle.name}</h2>
          <VehicleMeta
            rating={vehicle.rating}
            reviewsCount={vehicle.reviews.length}
            location={vehicle.location}
          />
          <p className={css.price}>€{vehicle.price.toFixed(2)}</p>
          <div className={css.gallery}>
            {vehicle.gallery.slice(0, 4).map((img, index) => (
              <div className={css.imageWrapper} key={index}>
                <Image
                  src={img.original}
                  alt={`${vehicle.name} photo ${index + 1}`}
                  className={css.image}
                  width={292}
                  height={312}
                  unoptimized
                  style={{ borderRadius: '12px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
          <p className={css.description}>{vehicle.description}</p>
        </section>
        <section className="detailsSection"></section>
      </div>
    </div>
  );
};
export default VehicleDetails;
