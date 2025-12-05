import VehicleList from '@/components/VehicleList/VehicleList';
import { getVehicles } from '@/lib/api/api';

const CampersAll = async () => {
  const campers = await getVehicles();

  return (
    // <section>
    //   {Array.isArray(campers) && campers.length > 0 ? (
    //     <VehicleList vehicles={campers} />
    //   ) : (
    //     <p>No campers found</p>
    //   )}
    // </section>
    <section>
      {Array.isArray(campers) && campers.length > 0 ? (
        <VehicleList vehicles={campers} />
      ) : (
        <p>
          No campers found. Count:{' '}
          {Array.isArray(campers) ? campers.length : 'not array'}
        </p>
      )}
    </section>
  );
};

export default CampersAll;
