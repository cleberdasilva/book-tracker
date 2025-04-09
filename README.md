# 📚 Book Tracker

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo Server](https://img.shields.io/badge/Apollo_Server-311C87?style=for-the-badge&logo=apollographql&logoColor=white)

**Book Tracker** is a simple yet powerful application designed to help you keep track of the books you read throughout the year. Whether you're an avid reader or just want to organize your reading history, this tool allows you to log essential details about each book, including a summary, for future reference.

---

## ✨ Features

- Record books with details like start date, end date, title, authors, subject, area, summary, and publication year.
- Store your reading history in a MongoDB database.
- Access your book data through a GraphQL API.
- Perfect for personal use or as a foundation for a larger reading management system.

---

## 🛠️ Technologies Used

- **[Node.js](https://nodejs.org/)**: The runtime environment for building fast and scalable server-side applications.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database for storing book records in a flexible, document-based structure.
- **[Mongoose](https://mongoosejs.com/)**: An elegant MongoDB object modeling tool for Node.js, providing schema validation and easy querying.
- **[GraphQL](https://graphql.org/)**: A query language for your API, allowing precise and efficient data retrieval.
- **[Apollo Server](https://www.apollographql.com/docs/apollo-server/)**: A powerful GraphQL server implementation that integrates seamlessly with Node.js.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: A zero-dependency module to manage environment variables securely.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally or a MongoDB Atlas account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/book-tracker.git
   cd book-tracker

2. Install dependencies:
    npm install
   
3. Set up environment variables: Create a .env file in the root directory and add the following:
    MONGODB_URI=mongodb://localhost:27017/book-tracker
    PORT=4000

    Replace MONGODB_URI with your MongoDB connection string if using a remote database.

4. Run the application:
    Development mode (with hot reloading):    
    npm run dev
    Production mode:
    npm run build && npm run start
   
5. Access the GraphQL Playground: 
    Open your browser and navigate to http://localhost:4000/graphql to interact with the API.

   📖 Usage
    The application provides a GraphQL API to manage your book records. Below are some example queries and mutations:
        Add a Book
        mutation {
    createBook(input: {
        startDate: "2025-01-01"
        endDate: "2025-01-15"
        title: "The Great Gatsby"
        authors: ["F. Scott Fitzgerald"]
        subject: "Fiction"
        area: "Literature"
        summary: "A story of wealth, love, and the American Dream."
        publicationYear: 1925
    }) {
        id
        title
        summary
    }
    }

Retrieve All BooksRetrieve All Books
    query {
    getBooks {
        id
        title
        startDate
        endDate
        authors
        subject
        area
        summary
        publicationYear
    }
    }

📂 Project Structure
book-tracker/
├── src/
│   ├── config/         # Database configuration
│   ├── models/         # Mongoose schemas
│   ├── resolvers/      # GraphQL resolvers
│   ├── schemas/        # GraphQL type definitions
│   └── server.js       # Main server file
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation

📜 License
This project is licensed under the MIT License.

Happy reading and tracking! 📚
