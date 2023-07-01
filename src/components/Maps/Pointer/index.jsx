import PropTypes from 'prop-types'
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

function Pointer({ store, useRedPointer = false }) {

  const redPointerIcon = L.icon({
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/640px-Google_Maps_pin.svg.png",
    iconSize: [25, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });
 
  const blueIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return ( 
    <Marker icon={useRedPointer ? redPointerIcon : blueIcon} position={[store.latitude, store.longitude]}>
      <Popup>
        <div>
          <p className='font-bold text-lg flex flex-col'>
            {store.name} <span className='font-normal text-xs text-gray-color-60'>{store.adress.city}, {store.adress.state}</span>
          </p>
          <p className='font-bold text-lg flex flex-col'>
            Endereço <span className='font-normal text-xs text-gray-color-60'>{store.adress.street}, {!!store.adress.neighborhood ? store.adress.neighborhood : "Centro"}, {store.adress.city} - {store.adress.state}, {store.adress.zipcode}</span>
          </p>
          <p className='font-bold text-lg flex flex-col'>
            Montante <span className='font-normal text-xs text-gray-color-60'>{(Number(store.amount)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

Pointer.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string,
    adress: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      neighborhood: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    amount: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired
}


export default Pointer;