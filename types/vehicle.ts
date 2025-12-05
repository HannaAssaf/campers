export interface VehicleEquipment {
  transmission?: 'manual' | 'automatic';
  engine?: 'diesel' | 'petrol';
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

export interface VehicleReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface VehicleGalleryItem {
  thumb: string;
  original: string;
}

export interface VehicleLocation {
  location: string;
}

export interface VehicleDetails {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
}

export interface Vehicle {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  location: VehicleLocation;
  details: VehicleDetails;
  equipment: VehicleEquipment;
  gallery: VehicleGalleryItem[];
  reviews: VehicleReview[];
}

export interface getVehiclePrors {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission?: 'manual' | 'automatic';
  engine?: 'diesel' | 'petrol';
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  gallery: Array<{ thumb: string; original: string }>;
  reviews: Array<{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }>;
}
