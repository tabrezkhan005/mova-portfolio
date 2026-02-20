import PyPDF2
import os

pdf_dir = r'D:\mova-portfolio\public\terms&conditions'
for f in sorted(os.listdir(pdf_dir)):
    if f.endswith('.pdf'):
        print(f'===== {f} =====')
        reader = PyPDF2.PdfReader(os.path.join(pdf_dir, f))
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                print(text)
        print()
