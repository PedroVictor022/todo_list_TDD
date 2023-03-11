import {
  Card,
  Container, Header, ListContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/x.svg';
import trash from '../../assets/images/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Victor</strong>
              <small>instagram</small>
            </div>
            <span>teste@gmail.com</span>
            <span>31 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Victor</strong>
              <small>instagram</small>
            </div>
            <span>teste@gmail.com</span>
            <span>31 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Victor</strong>
              <small>instagram</small>
            </div>
            <span>teste@gmail.com</span>
            <span>31 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </Container>
  );
}
