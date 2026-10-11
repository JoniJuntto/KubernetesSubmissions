import { randomUUID } from "node:crypto";
import { setTimeout as sleep } from "node:timers/promises";

const randomString = randomUUID();

while (true) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
  await sleep(5_000);
}
