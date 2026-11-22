"""Generate the static site from the template and structured academic data."""
from pathlib import Path
import html
import json

root=Path(__file__).resolve().parents[1]
records=json.loads((root/'data/publications.json').read_text(encoding='utf-8'))
profile=json.loads((root/'data/profile.json').read_text(encoding='utf-8'))
e=html.escape

groups=[
    ('Journal articles','journal',lambda p:p['type']=='Journal article'),
    ('Conference papers & presentations','conference',lambda p:p['type'] in ('Conference paper','Conference presentation'))
]
sections=[]
for title,group,condition in groups:
    entries=sorted((p for p in records if condition(p)),key=lambda p:int(p['year']),reverse=True)
    if not entries: continue
    cards=[]
    for p in entries:
        authors=e(p['authors']).replace('A. Zahoor','<strong>A. Zahoor</strong>')
        url='https://doi.org/'+p['doi'] if p.get('doi') else p['scholar_url']
        label='View publication · DOI' if p.get('doi') else ('View conference program' if p['type']=='Conference presentation' else 'View Scholar record')
        search=' '.join(str(p[k]) for k in ('title','authors','venue','year')).lower()
        cards.append(f'<article class="publication" data-group="{group}" data-type="{e(p["type"])}" data-search="{e(search)}">'
                     f'<div class="publication-year">{p["year"]}<span>{e(p["type"])}</span></div>'
                     f'<div><h4><a href="{e(url)}" target="_blank" rel="noopener noreferrer">{e(p["title"])}</a></h4>'
                     f'<p class="authors">{authors}</p><p class="journal">{e(p["venue"])}</p>'
                     f'<a class="paper-link" href="{e(url)}" target="_blank" rel="noopener noreferrer">{label}</a></div></article>')
    sections.append(f'<section class="publication-group" data-publication-group="{group}" aria-label="{e(title)}">'
                    f'<h3>{e(title)}</h3><div class="publication-list">'+'\n'.join(cards)+'</div></section>')

portrait=(f'<img src="{e(profile["portrait"])}" alt="Aqab Zahoor" width="360" height="420" fetchpriority="high">'
          if profile.get('portrait') else '<div class="portrait-pending"><span>AZ</span><p>Portrait forthcoming</p></div>')
template=(root/'page.template.html').read_text(encoding='utf-8')
index=template.replace('{{PUBLICATIONS}}','\n'.join(sections)).replace('{{PORTRAIT}}',portrait)
(root/'index.html').write_text(index,encoding='utf-8')
print(f'Built index.html with {len(records)} academic records.')
