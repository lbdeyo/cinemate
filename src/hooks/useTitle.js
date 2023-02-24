import {useEffect} from "react";

export const useTitle = (title) => {
  useEffect(() => {
    console.log(title);
    document.title = `${title} / Cinemate`;
  });
  return null;
};
