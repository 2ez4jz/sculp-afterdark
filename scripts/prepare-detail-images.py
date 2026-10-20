"""Optional asset task: reproduce the checked-in detail crops; not required by npm build.

Requires Pillow. All crops come from original SCULP photographs. No retouching.
"""
from pathlib import Path
import json
from PIL import Image

root = Path(__file__).resolve().parent.parent
for spec in json.loads((root / 'src/detail-images.json').read_text()):
    image = Image.open(root / spec['source']).convert('RGB')
    target = root / spec['output']
    target.parent.mkdir(parents=True, exist_ok=True)
    image.crop(spec['box']).resize(tuple(spec['size']), Image.Resampling.LANCZOS).save(
        target, 'WEBP', quality=spec['quality'], method=6
    )
