import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { mongoose } from "mongoose";
// import  GeaphQlUser from  "./Models/User.Model.js"
import typeDefs from "./Schema.js";
import "./Models/User.Model.js"
const db =
  "mongodb+srv://vikash:vikash@cluster0.zehk8.mongodb.net/GraphQlDb?retryWrites=true&w=majority";
mongoose.connect(db).then((res) => {
  console.log("database Connected success");
});
import resolvers from "./resolver.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
