import { useEffect, useState } from 'react';
import ContainerWrapper from "../../components/ContainerWrapper"
import FormCadastrarLoja from "../../components/FormCadastrarLoja";
import Maps from "../../components/Maps";
import useStoreList from "../../hooks/useStoreList"

function MapaLojas() {
  const [showForm, setShowForm] = useState(false)
  const { stores, error } = useStoreList()
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)

  const handleChangeShowForm = () => {
    setShowForm(state => !state)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });    
  }, [stores])

  return ( 
    <ContainerWrapper>
      {!!lat && <Maps lat={lat} long={long} stores={stores} actionCadastrar={handleChangeShowForm}/>}
      <FormCadastrarLoja showForm={showForm} handleChangeShowForm={handleChangeShowForm} />
    </ContainerWrapper>
  );
}

export default MapaLojas;