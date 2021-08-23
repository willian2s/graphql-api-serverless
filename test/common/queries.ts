export const getUserByIdQuery = (id: string): string => `
  query {
    getUserById(_id: "${id}") {
      _id
      firstName
      lastName
      email
      active
    }
  }`;

export const getUsersQuery = `
  query {
    getUsers {
      _id
      firstName
      lastName
      email
      active
    }
  }`;
