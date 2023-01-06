"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.taskApi = (0, react_1.createApi)({
    reducerPath: "tasksApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "http://localhost:5000/"
    }),
    endpoints: (builder) => ({})
});
