import React from "react";
import { useAppSelector } from "../redux/hooks";
import { Paper } from "@mui/material";
import BookItem from "../components/BookItem";

const Home = () => {
  const { books }: GlobalState = useAppSelector((state) => state);
  return (
    <div>
      {books.map((book) => {
        return (
          <Paper>
            <BookItem book={book} />
          </Paper>
        );
      })}
    </div>
  );
};

export default Home;
