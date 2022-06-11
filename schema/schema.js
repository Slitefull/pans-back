const graphql = require('graphql');
const { GraphQLSchema } = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const books = [
  {
    id: 1,
    thumbnail: 'https://booksit.com.ua/image/import_files/db/db90dc5a-6219-11ec-ab58-2c44fd7d892b.jpeg',
    author: 'Alex Banks, Eve Porcello',
    name: 'React: modern templates for app development',
    year: 2021,
    pages: 320,
    genre: 'JavaScript, React',
  },
  {
    id: 2,
    thumbnail: 'https://balka-book.com/files/2018/02_27/09_22/u_files_store_6_119893.jpg',
    author: 'Alex Banks, Eve Porcello',
    name: 'Learning React: Functional Web Development',
    year: 2017,
    pages: 320,
    genre: 'JavaScript, React, Redux',
  },
  {
    id: 3,
    thumbnail: 'https://balka-book.com/files/2017/03_22/13_44/u_files_store_3_248633.jpg',
    author: 'Alex Banks, Eve Porcello',
    name: 'React. Quick start',
    year: 2017,
    pages: 304,
    genre: 'JavaScript, React',
  },
  {
    id: 4,
    thumbnail: 'https://balka-book.com/files/2019/04_26/14_24/u_files_store_3_1699559.jpg',
    author: 'Alex Banks, Eve Porcello',
    name: 'GraphQL. Query language for modern web applications',
    year: 2019,
    pages: 240,
    genre: 'GraphQL',
  },
  {
    id: 5,
    thumbnail: 'https://booksit.com.ua/image/import_files/b5/b5b9376a-6219-11ec-ab58-2c44fd7d892b.jpeg',
    author: 'Carlos Santana Roldan',
    name: 'React 17. Design Patterns and Best Practices',
    year: 2021,
    pages: 394,
    genre: 'JavaScript, React',
  },
  {
    id: 6,
    thumbnail: 'https://balka-book.com/files/2018/02_27/15_00/u_files_store_6_120009.jpg',
    author: 'Stoyan Stefanov',
    name: 'React: Up & Running: Building Web Applications',
    year: 2016,
    pages: 222,
    genre: 'JavaScript, React',
  },
  {
    id: 7,
    thumbnail: 'https://images.prom.ua/3754452764_w640_h640_3754452764.jpg',
    author: 'Azat Mardan',
    name: 'React Quick. Web applications on React, Redux and GraphQL',
    year: 2020,
    pages: 452,
    genre: 'JavaScript, React',
  },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    thumbnail: { type: GraphQLString },
    author: { type: GraphQLString },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    pages: { type: GraphQLInt },
    genre: { type: GraphQLString },
  })
});

const Query = new GraphQLObjectType({
  name: 'Catalog',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      args: {},
      resolve() {
        return books;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find((book) => book.id == args.id);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
