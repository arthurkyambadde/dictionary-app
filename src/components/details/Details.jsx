import React from "react";
import Meaning from "../meaning/Meaning";
import WordIntro from "../WordIntro/WordIntro";
import { useFetch } from "../../hooks/useFetch";
import { INVALID_WORD_ENTERED } from "../../constants/errors.ts";

function Details() {
  const { error } = useFetch();
  return (
    <>
      {error !== INVALID_WORD_ENTERED && (
        <>
          <WordIntro />
          <Meaning />
        </>
      )}
    </>
  );
}

export default Details;
