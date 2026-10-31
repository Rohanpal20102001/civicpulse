# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

VITE_API_BASE_URL=http://localhost:8000





[plugin:vite:import-analysis] Failed to resolve import "axios" from "src/api/client.ts". Does the file exist?
/Users/rohanpal/Projects/civicpulse/apps/web/src/api/client.ts:1:18
1  |  import axios from "axios";
   |                     ^
2  |  const apiClient = axios.create({
3  |  	baseURL: import.meta.env.VITE_API_BASE_URL,
    at TransformPluginContext._formatLog (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:8803:39)
    at TransformPluginContext.error (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:8800:14)
    at resolveId (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:26594:18)
    at async file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:26693:23
    at async Promise.all (index 0)
    at async TransformPluginContext.transform (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:26666:4)
    at async EnvironmentPluginContainer.transform (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:8582:14)
    at async loadAndTransform (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:20155:26)
    at async viteTransformMiddleware (file:///Users/rohanpal/Projects/civicpulse/apps/web/node_modules/vite/dist/node/chunks/node.js:20375:20)
Click outside, press Esc key, or fix the code to dismiss.
You can also disable this overlay by setting server.hmr.overlay to false in vite.config.ts.
