import useStoreList from "../../hooks/useStoreList"
import { groupBy } from "../../services/utils"

function RankingCidades() {

  const {stores, error} = useStoreList()

  const campareCity = (a, b) => {
    if(a.amount > b.amount){
      return -1
    } else if (a.amount < b.amount){
      return 1
    }

    return 0
  }

  const cidadesList = () => {
    if(!!stores && stores.length > 0){
      const cities = groupBy(stores, "city")
      
      const list = []
      
      for(let ct in cities){
        let city = cities[ct]
        
        let c = {name: ct, amount: 0}

        city.forEach(item => {
          c.amount += Number(item.amount)
        });

        list.push(c)
      }

      return list.sort(campareCity)
    }

    return []
  } 

  return (
    <div className="rounded bg-white shadow-md p-10">
      <h4 className="mb-10">Ranking de cidades</h4>
      <div>
        <div className="flex justify-between mb-5">
          <span className="font-bold">Cidade</span>
          <span className="font-bold">Montante</span>
        </div>
        <ul>
          {cidadesList().length > 0 && cidadesList().map((item, index) => (
            <div key={index} className="w-full flex justify-between py-5 border-t-2 border-solid border-slate-100">
              <li>{item.name}</li>
              <li className="whitespace-nowrap">{item.amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RankingCidades;