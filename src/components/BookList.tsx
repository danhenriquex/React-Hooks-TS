import React, { useContext } from "react";
import { BookContext, ThemeContext } from "../contexts";

const BookList: React.FC = () => {
  const { dark, light, lightTheme } = useContext(ThemeContext);
  const { book } = useContext(BookContext);
  const theme = lightTheme ? dark : light;

  return (
    <div>
      <div
        className="book-list"
        style={{ color: theme?.syntax, background: theme?.bg }}
      >
        <ul>
          {book!.map((books) => {
            return (
              <li key={books.id} style={{ background: theme?.ui }}>
                {books.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
