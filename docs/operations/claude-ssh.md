# Run this fork over SSH

This branch restores Claude Code alongside omp. Upstream `npx pivot-cli@latest` and upstream desktop releases do not include this change.

On the remote machine, install Node.js supported by the repository, Vite+, omp, and Claude Code. Authenticate both agent CLIs there, then build this checkout:

```bash
git clone --branch feat/claude-code-ssh https://github.com/waltod/Pivot.git
cd Pivot
vp i
cd apps/web
vp build
cd ../server
node scripts/cli.ts build
cd ../..
node apps/server/dist/bin.mjs serve --host 127.0.0.1 --port 43773 --base-dir "$PWD/.remote-runtime"
```

Keep this process running with your preferred service manager. From the client machine, forward the loopback port:

```bash
ssh -N -L 127.0.0.1:43773:127.0.0.1:43773 your-ssh-host
```

Open the pairing URL printed by the server at `http://127.0.0.1:43773/pair#token=...`. Agent processes, credentials, terminals, and projects remain on the SSH server. The web UI is served through the tunnel.

To issue a fresh one-time pairing URL, run on the server:

```bash
node apps/server/dist/bin.mjs pair --base-dir "$PWD/.remote-runtime"
```

The built-in desktop SSH launcher normally downloads the published npm package. Until this fork is published, use the forwarded web UI for this build. A desktop development checkout can instead set `T3CODE_DEV_REMOTE_T3_SERVER_ENTRY_PATH` to the remote absolute path of this build's `apps/server/dist/bin.mjs`; that override applies only in development.

If dependency install scripts were disabled, rebuild node-pty before starting the server. Normal `vp i` runs the required native build scripts.
