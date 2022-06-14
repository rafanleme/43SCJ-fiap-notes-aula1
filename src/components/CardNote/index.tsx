import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";

interface NoteProps {
  note: Note;
}

function CardNote({ note }: NoteProps) {
  return (
    <>
      <Container>
        <p>{note?.date.toString() /* !!! implementar formatação de data*/ }</p>
        <p>{note.text}</p>
        { /** !!! implementar renderização condicional */
          <span className="material-icons" id="priority">
            priority_high
          </span>
        }
        <span className="material-icons"> delete_forever </span>
      </Container>
    </>
  );
}

export default CardNote;
