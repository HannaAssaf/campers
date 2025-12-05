import { Vehicle } from '@/types/vehicle';
import VehicleItem from '../VehicleItem/VehicleItem';
import css from './VehicleList.module.css';

type Props = {
  vehicles: Vehicle[];
};

const VehicleList = ({ vehicles }: Props) => {
  return (
    <ul className={css.list}>
      {vehicles.map(vehicle => (
        <li key={vehicle.id} className={css.item}>
          <VehicleItem vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
