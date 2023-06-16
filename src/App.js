import 'bootstrap/dist/css/bootstrap.min.css';
import './dark-theme.sass';

import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

const App = () => {
  return (
    <Container>
      <br />

      <h1>¡Hello World!</h1>
      <br />

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
    </Container>
  );
};

export default App;
