import { User, UserQuery, UserMutation } from "./user";
import { Profile, ProfileQuery, ProfileMutation } from "./profile";
import { Note, NoteQuery, NoteMutation } from "./note";
import { Subscription } from "./subscription";
const resolvers = {
  Query: {
    ...UserQuery,
    ...ProfileQuery,
    ...NoteQuery,
  },

  Mutation: {
    ...UserMutation,
    ...ProfileMutation,
    ...NoteMutation,
  },
  Subscription,
  User,
  Profile,
  Note,
};

export default resolvers;
