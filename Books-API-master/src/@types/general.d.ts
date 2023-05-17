type GlobalState = {
  books: BookItem[];
  favouriteBooks: BookItem[];
};

type BookItem = {
  id: string;
  volumeInfo: {
    author: string;
    title: string;
    publisher: string;
    description: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
  searchInfo: {
    textSnippet: string;
  };
};
