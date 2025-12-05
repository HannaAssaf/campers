import { getVehiclePrors, Vehicle } from '@/types/vehicle';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getVehicles = async (): Promise<Vehicle[]> => {
  try {
    const res = await axios.get('/campers');

    const data = Array.isArray(res.data)
      ? res.data
      : res.data.items || res.data.campers || [];

    return data.map((item: getVehiclePrors) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      rating: item.rating,
      description: item.description,
      location: { location: item.location },
      details: {
        form: item.form,
        length: item.length,
        width: item.width,
        height: item.height,
        tank: item.tank,
        consumption: item.consumption,
      },
      equipment: {
        transmission: item.transmission,
        engine: item.engine,
        AC: item.AC,
        bathroom: item.bathroom,
        kitchen: item.kitchen,
        TV: item.TV,
        radio: item.radio,
        refrigerator: item.refrigerator,
        microwave: item.microwave,
        gas: item.gas,
        water: item.water,
      },
      gallery: item.gallery,
      reviews: item.reviews,
    }));
  } catch (error) {
    console.error('Failed to fetch vehicles:', error);
    return [];
  }
};

export const getVehiclesById = async (id: string): Promise<Vehicle> => {
  const res = await axios.get<getVehiclePrors>(`/campers/${id}`);
  const item = res.data;

  return {
    id: item.id,
    name: item.name,
    price: item.price,
    rating: item.rating,
    description: item.description,
    location: { location: item.location },
    details: {
      form: item.form,
      length: item.length,
      width: item.width,
      height: item.height,
      tank: item.tank,
      consumption: item.consumption,
    },
    equipment: {
      transmission: item.transmission,
      engine: item.engine,
      AC: item.AC,
      bathroom: item.bathroom,
      kitchen: item.kitchen,
      TV: item.TV,
      radio: item.radio,
      refrigerator: item.refrigerator,
      microwave: item.microwave,
      gas: item.gas,
      water: item.water,
    },
    gallery: item.gallery,
    reviews: item.reviews,
  };
};
