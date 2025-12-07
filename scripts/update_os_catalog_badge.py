import json
from pathlib import Path

software_path = Path("catalog/software.json")
badge_path = Path("catalog/software-badge.json")

data = json.loads(software_path.read_text(encoding="utf-8"))
count = len(data)

badge = {
    "schemaVersion": 1,
    "label": "Open Source at UM6P",
    "message": str(count),
    "color": "#D7492A",
}

badge_path.write_text(json.dumps(badge), encoding="utf-8")
