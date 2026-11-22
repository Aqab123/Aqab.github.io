"""Build the static page from editable data. Python standard library only."""
from pathlib import Path
import json,html,urllib.parse
root=Path(__file__).resolve().parents[1]
pubs=[p for p in json.loads((root/'data/publications.json').read_text()) if p.get('type')=='Journal article'];profile=json.loads((root/'data/profile.json').read_text())
e=html.escape
cards=[]
for p in pubs:
 authors=e(p['authors']).replace('A. Zahoor','<strong>A. Zahoor</strong>')
 url='https://doi.org/'+p['doi'] if p.get('doi') else p['scholar_url']
 cards.append(f'''<article class="publication" data-type="{e(p['type'])}" data-search="{e((p['title']+' '+p['authors']+' '+p['venue']).lower())}"><div class="publication-year">{p['year']}<span>{e(p['type'])}</span></div><div><h3><a href="{e(url)}" target="_blank" rel="noopener noreferrer">{e(p['title'])}</a></h3><p class="authors">{authors}</p><p class="journal">{e(p['venue'])}</p><a class="paper-link" href="{e(url)}" target="_blank" rel="noopener noreferrer">{'View publication · DOI' if p.get('doi') else 'View Scholar record'}</a></div></article>''')
portrait=f'<img src="{e(profile["portrait"])}" alt="Aqab Zahoor" width="360" height="420" fetchpriority="high">' if profile.get('portrait') else '<div class="portrait-pending"><span>AZ</span><p>Professional portrait<br>awaiting photograph</p></div>'
template=(root/'page.template.html').read_text()
(root/'index.html').write_text(template.replace('{{PUBLICATIONS}}','\n'.join(cards)).replace('{{PORTRAIT}}',portrait))
print(f'Built index.html with {len(pubs)} references ({sum(p["type"]=="Journal article" for p in pubs)} journal articles).')
