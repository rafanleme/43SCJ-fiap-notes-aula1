import { useEffect, useState } from "react";
import CardNote from "../../components/CardNote";
import FabButton from "../../components/FabButton";
import FormNote from "./FormNote";
import Modal from "../../components/Modal";
import { NotesService } from "../../services/notes/note-service";
import { Note } from "../../services/notes/types";
import { Container } from "./styles";

function Home() {
  /// !implementar listagem

  const notes = [{ text: "Nota de Exemplo", date: new Date() }] as Note[];

  return (
    <>
      {/* !!! implementar modal */}
      <Container>
        <CardNote note={notes[0]}></CardNote>

        <FabButton handleClick={() => {}}>+</FabButton>
      </Container>
    </>
  );
}

export default Home;
