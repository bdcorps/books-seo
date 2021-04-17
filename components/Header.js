import styles from '../styles/Header.module.css'
import { Table, Col, Row, Jumbotron, Button, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Jumbotron>
      <Container className="text-center">
        <h1>Discover with Music Station</h1>
        <p>
          Music Station allows you to discover new music with 3000+ pre-built playlists to help you find that perfect jam
</p>
        <p>
          <Button variant="primary">Discover 100+ Rap Playlists</Button>
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Header