import Table from 'react-bootstrap/Table';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          
        </tr>
      </thead>
      <tbody>
        {
          tableRows.map((each)=>{
             return(
              <>
                      <tr>
                        <td>{index}</td>
                      </tr>
                            </>
             )
          }
        
      </tbody>
    </Table>
  );
}

export default MyTable;