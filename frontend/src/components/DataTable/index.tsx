const DataTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/01/2021</td>
            <td>Anakin</td>
            <td>28</td>
            <td>10</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Barry Allen</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>19/06/2021</td>
            <td>Kal-El</td>
            <td>65</td>
            <td>55</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>25/10/2021</td>
            <td>Logan</td>
            <td>23</td>
            <td>9</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>30/03/2021</td>
            <td>Padmé</td>
            <td>54</td>
            <td>49</td>
            <td>15017.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
