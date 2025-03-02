"use cient";

import { useContext } from "react";
import { NoteProviderContext } from "@/providers/NoteProvider";

const useNoteHook = () => {
  const { noteText, setNoteText } = useContext(NoteProviderContext);

  return { noteText, setNoteText };
};

export default useNoteHook;
