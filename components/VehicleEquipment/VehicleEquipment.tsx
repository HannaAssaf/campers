import { VehicleEquipment as VehicleEquipmentType } from '@/types/vehicle';
import { equipmentConfig } from '@/types/vehicleEquipType';
import Icon from '../Icon/Icon';
import css from './VehicleEquipment.module.css';

type Variant = 'catalog' | 'detailed' | 'compact';

type Props = {
  equipment: VehicleEquipmentType;
  variant: Variant;
};

const ORDER: (keyof VehicleEquipmentType)[] = [
  'transmission',
  'engine',
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
];

export default function VehicleEquipment({ equipment, variant }: Props) {
  const active = ORDER.filter(key => equipment[key]);

  let visible = active;

  if (variant === 'catalog') {
    visible = active.slice(0, 4);
  }

  const className =
    variant === 'compact'
      ? css.compact
      : variant === 'catalog'
        ? css.catalogGrid
        : css.detailed;

  if (!visible.length) return null;

  return (
    <div className={className}>
      {visible.map(key => {
        const cfg = equipmentConfig[key];
        const value = equipment[key];

        const label =
          typeof value === 'string'
            ? value.charAt(0).toUpperCase() + value.slice(1)
            : cfg.label;
        return (
          <span key={key} className={css.badge}>
            {cfg.icon && (
              <Icon
                name={cfg.icon}
                className={css.icon}
                width={20}
                height={20}
              />
            )}
            {label}
          </span>
        );
      })}
    </div>
  );
}
