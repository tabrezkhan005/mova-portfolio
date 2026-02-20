import PyPDF2
import os
import sys

pdf_dir = r'D:\mova-portfolio\public\terms&conditions'
files = sorted(os.listdir(pdf_dir))
pdf_files = [f for f in files if f.endswith('.pdf')]

# Extract one at a time based on argument
idx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
f = pdf_files[idx]
print(f'===== {f} =====')
reader = PyPDF2.PdfReader(os.path.join(pdf_dir, f))
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if text:
        print(text)
