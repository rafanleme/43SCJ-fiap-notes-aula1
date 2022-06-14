import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { Form } from "./styles";

function FormNote() {
  // !!! implementar mecanismo de controle de formulário

  return (
    <Form>
      <textarea
        autoFocus
        placeholder="Insira o texto da nota"
      />
      <Checkbox
        label="Urgente?"
      />
      <Button>Salvar</Button>
    </Form>
  );
}

export default FormNote;
