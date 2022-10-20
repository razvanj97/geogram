import { Geolocation } from '@capacitor/geolocation';

const getGeolocation = async () => {
  return await Geolocation.getCurrentPosition();
};

export default getGeolocation;
