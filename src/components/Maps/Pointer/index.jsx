import PropTypes from 'prop-types'
import { Marker, Popup } from "react-leaflet";

function Pointer({ store }) {
  return ( 
    <Marker position={[store.latitude, store.longitude]}>
      <Popup>
        <div>
          <p className='font-bold text-lg flex flex-col'>
            {store.name} <span className='font-normal text-xs text-gray-color-60'>{store.adress.city}, {store.adress.state}</span>
          </p>
          <p className='font-bold text-lg flex flex-col'>
            Endereço <span className='font-normal text-xs text-gray-color-60'>{store.adress.street}, {!!store.adress.neighborhood ? store.adress.neighborhood : "Centro"}, {store.adress.city} - {store.adress.state}, {store.adress.zipcode}</span>
          </p>
          <p className='font-bold text-lg flex flex-col'>
            Montante <span className='font-normal text-xs text-gray-color-60'>{(store.amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
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