"""Optional Pillow asset task. Resize the exact original reference crop for small UI uses."""
from pathlib import Path
import json
from PIL import Image

root = Path(__file__).resolve().parent.parent
for spec in json.loads((root / 'src/detail-images.json').read_text()):
    if not Path(spec['output']).name.startswith(('fresh-bridal-', 'modern-chinese-', 'classic-glamour-')):
        continue
    crop = Image.open(root / spec['source']).convert('RGB').crop(spec['box'])
    for width in (240, 480):
        height = round(width * spec['size'][1] / spec['size'][0])
        target = root / 'assets/images/details' / str(width) / Path(spec['output']).name
        target.parent.mkdir(parents=True, exist_ok=True)
        crop.resize((width, height), Image.Resampling.LANCZOS).save(target, 'WEBP', quality=84, method=6)
