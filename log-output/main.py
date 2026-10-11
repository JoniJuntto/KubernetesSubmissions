from datetime import datetime, timezone
from time import sleep
from uuid import uuid4

random_string = str(uuid4())

while True:
    timestamp = datetime.now(timezone.utc).isoformat(timespec="milliseconds")
    timestamp = timestamp.replace("+00:00", "Z")
    print(f"{timestamp}: {random_string}", flush=True)
    sleep(5)