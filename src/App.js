
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Button, Container, Card } from 'react-bootstrap';



function App() {


  const plantNames = [
    { plant_id: 1, name: 'Luminant Station' },
    { plant_id: 2, name: 'Leeward Renewable Energy' },
    { plant_id: 3, name: 'Denison Dam Hydroelectric Power Plant' },
    { plant_id: 4, name: 'Spencer Generating Station' },
    { plant_id: 5, name: 'Exelon Power Texas' },
    { plant_id: 6, name: 'River Bend Station' },
    { plant_id: 7, name: 'Exelon Power Texas' },
    { plant_id: 8, name: 'AZZ Wind' },
    { plant_id: 9, name: 'Panda Power Plant' }
  ]

  function renderPlantNames() {

    return plantNames.map((plant) => {

      return (
        <Card>
          <Card.Body>
            <Button>
              {plant.name}
            </Button>
          </Card.Body>
        </Card>
      )

    })

  }
  


  return (
    <div className="App">
      <Container fluid >
        {renderPlantNames()}
      </Container>

    </div>
  );
}

export default App;
