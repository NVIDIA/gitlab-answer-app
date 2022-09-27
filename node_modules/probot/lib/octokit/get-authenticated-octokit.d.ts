import { State } from "../types";
export declare function getAuthenticatedOctokit(state: State, installationId?: number): Promise<import("@octokit/core").Octokit & {
    retry: {
        retryRequest: (error: import("@octokit/request-error").RequestError, retries: number, retryAfter: number) => import("@octokit/request-error").RequestError;
    };
} & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
} & import("@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types").RestEndpointMethods & import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & import("@probot/octokit-plugin-config/dist-types/types").API>;
