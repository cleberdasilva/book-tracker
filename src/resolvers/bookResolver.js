const Book = require('../models/Book');

const resolvers = {
  Query: {
    getBooks: async () => {
      return await Book.find().sort({ endDate: -1 });
    },
    getBook: async (_, { id }) => {
      return await Book.findById(id);
    }
  },
  Mutation: {
    createBook: async (_, { input }) => {
      const book = new Book(input);
      return await book.save();
    },
    updateBook: async (_, { id, input }) => {
      return await Book.findByIdAndUpdate(id, input, { new: true });
    },
    deleteBook: async (_, { id }) => {
      await Book.findByIdAndDelete(id);
      return true;
    }
  }
};

module.exports = resolvers;