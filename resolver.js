import { mongoose } from "mongoose";
const GeaphQlUser = mongoose.model("GeaphQlUser");

const resolvers = {
  Query: {
    AllUser: async () => {
      return await GeaphQlUser.find({});
    },
  },
  Mutation: {
    CreateUser: async (_, { userNew }) => {
      const { name, email } = { ...userNew };

      const newUser = new GeaphQlUser({
        name: name,
        email: email,
      });

      return await newUser.save();
    },
    UpdateUser: async (_, { _id, userNew }) => {
      const { name, email } = { ...userNew };
      const updateduser = await GeaphQlUser.findByIdAndUpdate(
        _id,
        {
          name: name,
          email: email,
        },
        { new: true }
      );
      return updateduser;
    },

    DeleteUser: async (_, { _id }) => {
  
      const deleteuser = await GeaphQlUser.findByIdAndDelete(_id);
      return deleteuser;
    },
  },
};
export default resolvers;
