import json
from pathlib import Path

SOFTWARE_PATH = Path("catalog/software.json")
BADGE_PATH = Path("catalog/software-badge.json")

def main():
    data = json.loads(SOFTWARE_PATH.read_text(encoding="utf-8"))
    count = len(data)

    badge = {
        "schemaVersion": 1,
        "label": "UM6P OSS projects",
        "message": str(count),
        "color": "#B02035",  # Marrakech / UM6P red
    }

    BADGE_PATH.write_text(json.dumps(badge), encoding="utf-8")

if __name__ == "__main__":
    main()
