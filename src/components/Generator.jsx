import { useState } from "react";
import { API_TOKEN } from "../firebase.config";

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-10 p-5 text-center">
      <h1>
        Stable <span>Diffusion</span>
      </h1>
      <p>
        Please provide your detailed prompt here and the ai will generate 
        an image based on your prompt.
      </p>
      <form onSubmit={handleSubmit} className=" flex flex-col sm:flex-row gap-5 justify-center sm:gap-2">
        <input
          type="text"
          name="input"
          placeholder="type your prompt here..."
          className="px-5 py-3 border-none outline-none rounded-md w-full sm:w-1/2"
        />
        <button
          type="submit"
          className="px-2 py-2 bg-indigo-500 text-white font-bold"
        > 
          Generate
        </button>
      </form>
      <div className="mx-auto">
        {loading && <div className="loading">Loading...</div>}
        {!loading && output && (
          <div className="result-image">
            <img  className="rounded max-w-full w-full" src={output} alt="art" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerationForm;
