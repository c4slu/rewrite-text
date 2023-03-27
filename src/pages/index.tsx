import { Spinner, HomeContainer, ResultContainer } from "@/styles/pages/home";
import { useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
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
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error);
    }
    const inputValue = (e.target as HTMLFormElement).value;
  }

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
            name="animal"
            placeholder="Insira seu texto para reescreve-lo"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <button type="submit" value="Generate names">
            Reescrever
          </button>
        </form>
        {loading && (
          <Spinner>
            <div></div>
          </Spinner>
        )}
        <ResultContainer>
          <p>{result}</p>
        </ResultContainer>
      </HomeContainer>
    </div>
  );
}
