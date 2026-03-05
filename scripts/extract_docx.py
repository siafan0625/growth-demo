#!/usr/bin/env python3
"""Extract text and images from .docx files for growth-demo site."""

import os
import json
from docx import Document
from docx.opc.constants import RELATIONSHIP_TYPE as RT

SRC_DIR = "/Users/fansia/Desktop/增长运营大师课/00-新增"
OUT_DIR = "/Users/fansia/Desktop/growth-demo/scripts/extracted"
IMG_DIR = "/Users/fansia/Desktop/growth-demo/images"

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(IMG_DIR, exist_ok=True)

files = {
    "day1": "Day1-用户增长万能公式.docx",
    "day2": "Day2_多邻国增长策略_中英文对照.docx",
    "day3": "Day3_Levels_of_PMF_中英文对照_副本.docx",
}

for key, fname in files.items():
    filepath = os.path.join(SRC_DIR, fname)
    print(f"\n{'='*60}")
    print(f"Processing: {fname}")
    print(f"{'='*60}")

    doc = Document(filepath)

    # Extract images
    img_count = 0
    for rel in doc.part.rels.values():
        if "image" in rel.reltype:
            img_count += 1
            img_data = rel.target_part.blob
            ext = rel.target_part.content_type.split('/')[-1]
            if ext == 'jpeg':
                ext = 'jpg'
            img_name = f"{key}_img{img_count}.{ext}"
            img_path = os.path.join(IMG_DIR, img_name)
            with open(img_path, 'wb') as f:
                f.write(img_data)
            print(f"  Saved image: {img_name}")

    # Extract text with paragraph styles
    paragraphs = []
    for i, para in enumerate(doc.paragraphs):
        text = para.text.strip()
        if not text:
            continue
        style = para.style.name if para.style else "Normal"
        # Check for bold runs
        has_bold = any(run.bold for run in para.runs if run.bold)
        paragraphs.append({
            "index": i,
            "text": text,
            "style": style,
            "bold": has_bold,
        })

    # Save extracted text
    out_path = os.path.join(OUT_DIR, f"{key}_text.json")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(paragraphs, f, ensure_ascii=False, indent=2)

    print(f"  Total paragraphs: {len(paragraphs)}")
    print(f"  Total chars: {sum(len(p['text']) for p in paragraphs)}")
    print(f"  Total images: {img_count}")

    # Print first 20 paragraphs as preview
    print(f"\n  --- First 20 paragraphs preview ---")
    for p in paragraphs[:20]:
        prefix = "[H]" if "Heading" in p['style'] else "[B]" if p['bold'] else "   "
        print(f"  {prefix} {p['text'][:100]}")

print("\n\nDone! Check extracted/ directory for full text.")
