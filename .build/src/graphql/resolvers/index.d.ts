declare const _default: {
    Query: {
        getUserById: (_: any, args: any) => Promise<import("../../database/models/User").User | null>;
        getUsers: () => Promise<import("../../database/models/User").User[]>;
        hello: () => string;
    };
    Mutation: {
        createUser: (_: any, args: any) => Promise<import("../../database/models/User").User>;
    };
};
export default _default;
