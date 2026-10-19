# Claude Code

Claude Code is available alongside omp in the provider picker. Install Claude Code and sign in on the machine running the Pivot server. For an SSH environment, that means the remote machine.

1. Run `claude` on the server and complete its sign-in flow.
2. Open **Settings > Providers** in Pivot and check that Claude Code is ready.
3. Select **Claude Code** and a model when starting a thread.

The provider uses your existing Claude Code authentication. Choose a model included in your subscription; some models require additional usage credits.

Provider settings include a binary path and an optional home directory for a separate Claude profile. Keep credentials on the server. Permission prompts, streaming responses, tool activity, session continuation, and usage use the Claude Agent SDK integration.

When running the server as root, use the normal approval mode. Claude Code does not allow bypassing permissions as root.
