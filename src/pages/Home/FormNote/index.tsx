import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { api } from "../../../services/api";
import { Note } from "../../../services/notes/types";
import { Form } from "./styles";

interface FormValues {
  text: string;
  urgent: boolean;
}

interface FormNoteProps {
  handleUpdateNotes: (note: Note) => void;
}

function FormNote({ handleUpdateNotes }: FormNoteProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    text: "",
    urgent: false,
  });

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, text: event.target.value });
  };

  const handleChangeUrgent = () => {
    setFormValues({ ...formValues, urgent: !formValues.urgent });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await api.post("/notes", formValues);

    handleUpdateNotes(response.data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <textarea
        value={formValues.text}
        onChange={handleChangeText}
        autoFocus
        placeholder="Insira o texto da nota"
      />
      <Checkbox
        checked={formValues.urgent}
        handleChange={handleChangeUrgent}
        label="Urgente?"
      />
      <Button handleClick={() => {}}>Salvar</Button>
    </Form>
  );
}

export default FormNote;
