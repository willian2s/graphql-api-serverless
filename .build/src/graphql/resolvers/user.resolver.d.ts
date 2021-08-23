declare const _default: {
    Query: {
        getUserById: (_: any, args: any) => Promise<import("../../database/models/User").User | null>;
        getUsers: () => Promise<import("../../database/models/User").User[]>;
    };
    Mutation: {
        createUser: (_: any, args: any) => Promise<import("../../database/models/User").User>;
    };
};
export default _default;
