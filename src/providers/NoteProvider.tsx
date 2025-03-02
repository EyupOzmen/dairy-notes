"use client";

import { createContext, ReactNode, useState } from "react";

type NoteProviderContextType = {
  noteText: string;
  setNoteText: (text: string) => void;
};

export const NoteProviderContext = createContext<NoteProviderContextType>({
  noteText: "",
  setNoteText: () => {},
});

const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [noteText, setNoteText] = useState("");

  return (
    <NoteProviderContext.Provider value={{ noteText, setNoteText }}>
      {children}
    </NoteProviderContext.Provider>
  );
};

export default NoteProvider;
