import * as NodeAssert from "node:assert/strict";

import { describe, it } from "vite-plus/test";

import { BUILT_IN_DRIVERS } from "./builtInDrivers.ts";

describe("BUILT_IN_DRIVERS", () => {
  it("registers OMP and Claude Code together", () => {
    NodeAssert.deepEqual(
      BUILT_IN_DRIVERS.map((driver) => driver.driverKind),
      ["omp", "claudeAgent"],
    );
  });
});
