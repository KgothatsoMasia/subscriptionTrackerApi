import { Client as workflow } from "@upstash/workflow";
import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new workflow({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN
});