import { Note } from "../../services/notes/types";
import { formatDate } from "../../services/utils";
import { Container } from "./styles";

interface NoteProps {
  note: Note;
}

function CardNote({ note }: NoteProps) {
  const showUrgent = () =>
    note.urgent ? (
      <span className="material-icons" id="priority">
        priority_high
      </span>
    ) : (
      ""
    );

  return (
    <>
      <Container>
        <p>{formatDate(new Date(note?.date))}</p>
        <p>{note?.text}</p>
        {showUrgent()}
        <span className="material-icons"> delete_forever </span>
      </Container>
    </>
  );
}

export default CardNote;
