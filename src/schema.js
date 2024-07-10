


// Define your type definitions (schema)
export const typeDefs = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    address: String
    school: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

// Dummy user data
const users = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 Main St',
    school: 'Example University',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    address: '456 Elm St',
    school: 'Another University',
  },
  // Add more dummy users as needed
];

// Define your resolvers
export const resolvers = {
  Query: {
    users: () => users,
    user: (_,args) => users.find(user => user.id === args.id),
  },
};


