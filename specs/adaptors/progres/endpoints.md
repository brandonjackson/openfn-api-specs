# UNHCR proGres v4 interoperability API (DTP) (progres) v4

<!-- derived from openapi.json by `pnpm specs index progres` — do not edit by hand -->

base: https://{host}/{deployment} | auth: apiKey (header Ocp-Apim-Subscription-Key) | 3 operations in 1 resource

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## referrals
- POST /ReceiveIncomingReferral — postIncomingReferral: Send an interagency referral into proGres v4
- POST /ReceiveDecisionOutgoingReferral — postOutgoingReferralDecision: Report the partner system's decision on a referral proGres sent out
- POST /Feedback — postReferralFeedback: Acknowledge delivery of an intervention, or report that it failed
