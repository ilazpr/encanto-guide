#!/usr/bin/env python3
"""Ingest licensed photos into the guide.
Usage: python3 scripts/ingest-photos.py <folder>
Files must be named <place-id>.jpg or <place-id>_1.jpg (ids: see docs/PHOTO_SEARCH_LIST.md); the first per place is used.
Makes public/photos/<id>.jpg (1600w) and <id>-thumb.jpg (520w), reads the photographer from the file's embedded
copyright (macOS mdls), and sets `photo` on that place in src/data/places.ts."""
import json, re, subprocess, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src_dir = pathlib.Path(sys.argv[1]).expanduser()
out = root / 'public' / 'photos'; out.mkdir(parents=True, exist_ok=True)
f = root / 'src/data/places.ts'; src = f.read_text()
i = src.index('= [') + 2; j = src.rindex(']') + 1
places = json.loads(src[i:j]); by = {p['id']: p for p in places}
LIC = "Used with permission from Discover Puerto Rico (confirmed by Encanto, 2026-11-15). Takedown on request."
seen = set(); done = []
for p in sorted(src_dir.iterdir()):
    m = re.match(r'^(.+?)(?:_\d+)?\.(jpe?g)$', p.name, re.I)
    if not m or m.group(1) not in by or m.group(1) in seen: continue
    pid = m.group(1); seen.add(pid)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(p),'-vf','scale=1600:-1','-q:v','4',str(out/f'{pid}.jpg')], check=True)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(p),'-vf','scale=520:-1','-q:v','5',str(out/f'{pid}-thumb.jpg')], check=True)
    md = subprocess.run(['mdls','-raw','-name','kMDItemCopyright',str(p)],capture_output=True,text=True).stdout.strip()
    credit = (md if md and md != '(null)' else 'Photographer not recorded') + ' / Discover Puerto Rico'
    by[pid]['photo'] = {'src': f'photos/{pid}.jpg', 'thumb': f'photos/{pid}-thumb.jpg', 'credit': credit, 'license': LIC, 'sourceUrl': 'https://discoverpuertorico.photoshelter.com/'}
    done.append((pid, credit))
f.write_text(src[:i] + json.dumps(places, indent=2, ensure_ascii=False) + src[j:])
for pid, c in done: print(pid, '|', c)
print(len(done), 'places updated;', len(by) - len(seen), 'still without our own photo')
