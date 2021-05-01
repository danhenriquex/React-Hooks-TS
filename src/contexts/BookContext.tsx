import React, { useState, createContext } from "react";

interface Book {
  book?: {
    title?: string;
    id?: number;
  }[];
}

export const BookContext = createContext<Book>({});

export const BookContextProvider: React.FC = (props) => {
  const [books, useBooks] = useState([
    {
      title: "name of the wind",
      id: 1,
    },
    {
      title: "the way of kings",
      id: 2,
    },
    {
      title: "the final empire",
      id: 3,
    },
    {
      title: "the hero of ages",
      id: 4,
    },
  ]);

  return (
    <div>
      <BookContext.Provider value={{ book: books }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};
