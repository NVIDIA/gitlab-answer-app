import { Octokit } from "@octokit/core";
export declare const ProbotOctokit: typeof Octokit & import("@octokit/core/dist-types/types").Constructor<{
    retry: {
        retryRequest: (error: import("@octokit/request-error").RequestError, retries: number, retryAfter: number) => import("@octokit/request-error").RequestError;
    };
} & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
} & import("@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types").RestEndpointMethods & import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & import("@probot/octokit-plugin-config/dist-types/types").API>;
