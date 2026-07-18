import sys
from pathlib import Path
try:
    import fitz
except Exception as e:
    print('fitz_missing', e)
    sys.exit(1)
p = Path('public/resume.pdf')
print('exists', p.exists())
doc = fitz.open(p)
print('pages', doc.page_count)
text = ''.join(page.get_text() for page in doc)
print(text[:40000])
