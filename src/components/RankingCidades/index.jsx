function RankingCidades() {

  const cidadesList = [
    {
      name: "Pereiro",
      amount: 120334
    },
    {
      name: "São Miguel",
      amount: 114423
    },
    {
      name: "Jaguaribe",
      amount: 112781
    },
    {
      name: "Icó",
      amount: 109988
    },
    {
      name: "Iguatu",
      amount: 107326
    },
    {
      name: "Cedro",
      amount: 102454
    },
    {
      name: "Lavras da Mangabeira",
      amount: 90760
    },
  ]

  return (
    <div className="rounded bg-white shadow-md p-10">
      <h4 className="mb-10">Ranking de cidades</h4>
      <div>
        <div className="flex justify-between mb-5">
          <span className="font-bold">Cidade</span>
          <span className="font-bold">Montante</span>
        </div>
        <ul>
          {cidadesList.map((item, index) => (
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