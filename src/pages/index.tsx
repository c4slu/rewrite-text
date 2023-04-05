import {
  Spinner,
  HomeContainer,
  ResultContainer,
  ErrorMensage,
  Button,
  ButtonReescrever,
} from "@/styles/pages/home";
import { useState, useRef } from "react";
import * as z from "zod";
import { ZodError } from "zod";
import { AiFillCopy, AiOutlineCheckCircle } from "react-icons/ai";
import { css } from "@stitches/react";

export default function Home() {
  const textareaSchema = z
    .string()
    .min(5, "O texto deve ser maior que 10 caracteres.")
    .max(4000, "O texto deve ser menor que 4000 caracteres.");

  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [textareaError, setTextareaError] = useState("");

  const [text, setText] = useState(result);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [clicked, setClicked] = useState(false);

  const handleCopy = () => {
    if (textRef.current) {
      setClicked(true);
      navigator.clipboard.writeText(textRef.current.innerText);
    }
  };
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    setClicked(false);
    e.preventDefault();
    setLoading(true);

    try {
      textareaSchema.parse(animalInput);
      setTextareaError("");
      setResult("");

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setAnimalInput("");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setResult("");
      if (error instanceof ZodError) {
        // Se for um erro do Zod, exiba a mensagem de erro para o usuário
        const errorMessage = error.issues[0].message;
        setTextareaError(errorMessage);
      } else {
        // Se for outro tipo de erro, trate-o de acordo
        console.error(error);
      }
    }
  }

  const Clicked = css({
    backgroundColor: "red",
    // animation: `${pulse} 0.5s`,
  });

  const ClicadoIcon = clicked ? <AiOutlineCheckCircle /> : <AiFillCopy />;
  const ClicadoStyle = clicked ? `` : { Clicked };

  return (
    <div>
      <HomeContainer>
        <h1>
          <img src="https://techguide.sh/assets/emoji/star.png" width={20} />
          Reformule seus textos
        </h1>
        <p>
          Reescreva textos automaticamente com <span>API ChatGPT</span>
        </p>
        <form onSubmit={onSubmit}>
          <textarea
            id="myTextarea"
            name="texto"
            placeholder="Insira seu texto para reescreve-lo."
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <ButtonReescrever type="submit" value="Generate names">
            Reescrever
          </ButtonReescrever>
        </form>
        {textareaError && (
          <ErrorMensage>
            <p>{textareaError}</p>
          </ErrorMensage>
        )}
        {loading && (
          <Spinner>
            <div></div>
          </Spinner>
        )}
        {result && (
          <ResultContainer>
            <Button active={clicked} onClick={handleCopy}>
              {ClicadoIcon}
            </Button>
            <p ref={textRef}>{result}</p>
          </ResultContainer>
        )}
      </HomeContainer>
    </div>
  );
}
