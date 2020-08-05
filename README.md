# flow-bug-demo

Reproduce bug:

```sh
npm install
# or
yarn install

# Make sure Flow isn't running (the bug only happens if a Flow server isn't running)
npm run stop

# Try calling Flow from Node
node run-flow.js
```

Flow (called with Node's `spawnSync`) never exits, so the command hangs.

The problem started in Flow `0.71`, so the command will succeed with Flow `0.70`.

**Note:** This is a Windows-only bug.
