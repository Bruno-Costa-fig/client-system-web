import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PlusIcon from "../icons/PlusIcon"
import useStoreList from '../../hooks/useStoreList';
import Pointer from './Pointer';

function Maps({actionCadastrar}) {

  const { stores, error } = useStoreList()

  return (
    <div className='w-full h-full p-5 rounded shadow-md flex flex-col'>
      <div className='py-10 pt-5 flex justify-between items-center'>
        <h4>Mapa de lojas</h4>
        <button className='flex py-3 hover:border-solid border-b-2 border-brand-color-blue-100' onClick={() => actionCadastrar()}>
          <PlusIcon className='me-3'/>
          <span className='paragraph'>Cadastrar loja</span>
        </button>
      </div>
      <MapContainer center={[-6.401087758398589, -38.85733606981505]} zoom={13} scrollWheelZoom={true} style={{ height: '500px', width: '100%', zIndex: 10 }}>
        <TileLayer
          style={{zIndex: 10}}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {error == null && stores.map((store) => (
          <Pointer store={store} key={store.id} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Maps;