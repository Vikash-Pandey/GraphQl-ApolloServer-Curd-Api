import {  gql }  from 'apollo-server';

 const typeDefs = gql`
  type Query {
    AllUser:[AllUsers]
  }
  type AllUsers{
      _id:ID,
      name:String,
      email:String,
  }
  type Mutation {
    CreateUser(userNew:userInput):AllUsers,
    UpdateUser(_id:ID!,userNew:userInput):AllUsers,
    DeleteUser(_id:ID!):AllUsers
  }
  input userInput{
    name:String,
    email:String
  }
`;
export default typeDefs;