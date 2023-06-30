import { useState } from "react";
import ContainerWrapper from "../../components/ContainerWrapper"
import FormCadastrarLoja from "../../components/FormCadastrarLoja";
import Maps from "../../components/Maps";

function MapaLojas() {
  const [showForm, setShowForm] = useState(false)

  const handleChangeShowForm = () => {
    setShowForm(state => !state)
  }

  return ( 
    <ContainerWrapper>
      <Maps actionCadastrar={handleChangeShowForm}/>
      <FormCadastrarLoja showForm={showForm} handleChangeShowForm={handleChangeShowForm} />
    </ContainerWrapper>
  );
}

export default MapaLojas;