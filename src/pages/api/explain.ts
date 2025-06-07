/**
 * API ROUTE: /api/explain
 * -----------------------
 * Backend route that:
 * 1. Receives POST request with code and selected language.
 * 2. Builds a language-specific prompt.
 * 3. Sends it to OpenAI and returns the response.

 * Request format:
 * {
 *   language: 'python',
 *   code: '...'
 * }

 * Owner: Backend Member
 */
