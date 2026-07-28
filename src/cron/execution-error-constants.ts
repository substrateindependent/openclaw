/** Stable cron execution error text shared by runtime and ledger codecs. */
export const CRON_JOB_EXECUTION_TIMEOUT_ERROR = "cron: job execution timed out";

/**
 * Rejection text the native `cron` tool throws when an isolated run's agent
 * calls `cron` against a job id other than its own (self-introspection scope
 * guard). This is a by-design policy rejection, not evidence the run's real
 * mission failed — the outcome resolver treats it as non-terminal (ENG-24).
 */
export const CRON_SELF_REMOVE_SCOPE_ERROR = "Cron tool is restricted to the current cron job.";

/**
 * True when the given text is (or contains) the cron self-introspection scope
 * rejection above. Shared between the outcome resolver (which sees raw tool
 * text in unit fixtures) and the payload builder (which sees the typed
 * `ToolErrorSummary.error` field before it gets reduced to a generic
 * formatted warning label) so both stages agree on what counts as this
 * specific non-terminal rejection (ENG-24).
 */
export function isCronSelfRemoveScopeRejectionText(text: string | undefined): boolean {
  return typeof text === "string" && text.includes(CRON_SELF_REMOVE_SCOPE_ERROR);
}
