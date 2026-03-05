#!/usr/bin/env python3
"""Generate HTML content for the growth-demo site from extracted docx text."""

import json
import html
import os

EXTRACTED_DIR = "/Users/fansia/Desktop/growth-demo/scripts/extracted"
OUT_DIR = "/Users/fansia/Desktop/growth-demo/scripts/generated"
os.makedirs(OUT_DIR, exist_ok=True)

def load_extracted(key):
    with open(os.path.join(EXTRACTED_DIR, f"{key}_text.json"), 'r', encoding='utf-8') as f:
        return json.load(f)

def is_chinese(text):
    return any('\u4e00' <= c <= '\u9fff' for c in text)

def escape_html(text):
    return html.escape(text)

# ============================================================
# Day 1: Chinese only - AARRR + Octalysis
# Split at paragraph 66 ("AARRR与八角行为分析法的结合")
# Part1: paras 0-65 (theory + Pinduoduo case)
# Part2: paras 66-end (AARRR x Octalysis cases)
# ============================================================
def generate_day1_html(paragraphs):
    """Convert Day1 paragraphs to HTML."""
    full_html_parts = []

    for p in paragraphs:
        text = p['text']

        # Skip metadata paragraphs
        if text in ['Day1-用户增长万能公式', '穆宁关注', '频道: 社会文化']:
            continue
        if '本文来自微信公众号' in text and paragraphs.index(p) < 5:
            continue
        if '本文来自微信公众号' in text and paragraphs.index(p) > 150:
            continue

        # Detect section headers
        is_header = (
            p['bold'] or
            (len(text) < 30 and not text[0].isdigit() and '。' not in text and '，' not in text) or
            text in ['"AARRR"理论定义', '八角行为分析法的理论定义', '八角行为分析法在用户增长中的应用',
                     '"AARRR"与八角行为分析法的结合', '万字长文：一个用户增长的万能公式']
        )

        escaped = escape_html(text)

        if is_header:
            if text == '万字长文：一个用户增长的万能公式':
                full_html_parts.append(f'<h2 class="article-title">{escaped}</h2>')
            elif text in ['"AARRR"理论定义', '八角行为分析法的理论定义', '八角行为分析法在用户增长中的应用',
                         '"AARRR"与八角行为分析法的结合']:
                full_html_parts.append(f'<h3 class="section-header">{escaped}</h3>')
            elif text.startswith(('1. 获取层', '2. 激活层', '3. 留存层', '4. 变现层')):
                full_html_parts.append(f'<h4 class="subsection-header">{escaped}</h4>')
            elif text.startswith(('（1）', '（2）', '（3）')):
                full_html_parts.append(f'<h5 class="method-header">{escaped}</h5>')
            else:
                full_html_parts.append(f'<h4 class="subsection-header">{escaped}</h4>')
        else:
            if text[0].isdigit() and '. ' in text[:5]:
                full_html_parts.append(f'<p class="zh-text list-item">{escaped}</p>')
            else:
                full_html_parts.append(f'<p class="zh-text">{escaped}</p>')

    return '\n'.join(full_html_parts)


def generate_day1():
    paragraphs = load_extracted("day1")

    # Find split point: paragraph with text "AARRR"与八角行为分析法的结合"
    split_idx = None
    for i, p in enumerate(paragraphs):
        if p['text'] == '"AARRR"与八角行为分析法的结合':
            split_idx = i
            break
    if split_idx is None:
        split_idx = 66  # fallback
    print(f"  Day1: Split at paragraph {split_idx}")

    part1_html = generate_day1_html(paragraphs[:split_idx])
    part2_html = generate_day1_html(paragraphs[split_idx:])

    return part1_html, part2_html


# ============================================================
# Bilingual HTML generator (shared by Day2, Day3, Day4)
# ============================================================
def generate_bilingual_html(paragraphs):
    """Convert bilingual paragraphs to HTML."""
    full_html_parts = []
    i = 0

    while i < len(paragraphs):
        p = paragraphs[i]
        text = p['text']
        style = p['style']
        is_zh = is_chinese(text)

        if style in ['ChineseTitle', 'ChineseH1', 'ChineseH2']:
            zh_header = escape_html(text)
            en_header = ''
            if i + 1 < len(paragraphs) and paragraphs[i+1]['style'] == 'EnglishText':
                en_header = escape_html(paragraphs[i+1]['text'])
                i += 2
            else:
                i += 1

            if style == 'ChineseTitle':
                full_html_parts.append(f'<div class="bilingual-header title-header"><h2 class="zh-text">{zh_header}</h2>')
                if en_header:
                    full_html_parts.append(f'<h2 class="en-text">{en_header}</h2>')
                full_html_parts.append('</div>')
            elif style == 'ChineseH1':
                full_html_parts.append(f'<div class="bilingual-header h1-header"><h3 class="zh-text">{zh_header}</h3>')
                if en_header:
                    full_html_parts.append(f'<h3 class="en-text">{en_header}</h3>')
                full_html_parts.append('</div>')
            else:
                full_html_parts.append(f'<div class="bilingual-header h2-header"><h4 class="zh-text">{zh_header}</h4>')
                if en_header:
                    full_html_parts.append(f'<h4 class="en-text">{en_header}</h4>')
                full_html_parts.append('</div>')
            continue

        if is_zh and style == 'Normal':
            zh_text = escape_html(text)
            en_text = ''
            if i + 1 < len(paragraphs) and paragraphs[i+1]['style'] == 'EnglishText':
                en_text = escape_html(paragraphs[i+1]['text'])
                i += 2
            else:
                i += 1

            full_html_parts.append('<div class="bilingual-pair">')
            if en_text:
                full_html_parts.append(f'<p class="en-text">{en_text}</p>')
            full_html_parts.append(f'<p class="zh-text">{zh_text}</p>')
            full_html_parts.append('</div>')
            continue

        if style == 'EnglishText':
            full_html_parts.append(f'<div class="bilingual-pair"><p class="en-text">{escape_html(text)}</p></div>')
            i += 1
            continue

        full_html_parts.append(f'<p class="zh-text">{escape_html(text)}</p>')
        i += 1

    return '\n'.join(full_html_parts)


# ============================================================
# Day 2: Bilingual - Duolingo Growth Strategy
# Split at paragraph 154 ("排行榜向量")
# Part1: paras 0-153 (background + Phase1 gamification + Phase2 push + Phase3 data model)
# Part2: paras 154-end (leaderboard + push + streaks + CURR + summary)
# ============================================================
def generate_day2():
    paragraphs = load_extracted("day2")

    split_idx = None
    for i, p in enumerate(paragraphs):
        if p['text'] == '排行榜向量':
            split_idx = i
            break
    if split_idx is None:
        split_idx = 154  # fallback
    print(f"  Day2: Split at paragraph {split_idx}")

    part1_html = generate_bilingual_html(paragraphs[:split_idx])
    part2_html = generate_bilingual_html(paragraphs[split_idx:])

    return part1_html, part2_html


# ============================================================
# Day 3: Bilingual - PMF Levels (upper half: framework + Level 1 + Level 2)
# Split at paragraph 126 ("层级1：初生")
# Part1: paras 0-125 (framework intro)
# Part2: paras 126-311 (Level 1 + Level 2)
# ============================================================
def generate_day3():
    paragraphs = load_extracted("day3")

    # Cut before Level 3 (paragraph "层级3：强劲")
    cutoff = None
    for i, p in enumerate(paragraphs):
        if p['text'] == '层级3：强劲':
            cutoff = i
            break
    if cutoff:
        paragraphs = paragraphs[:cutoff]
        print(f"  Day3: Cut at paragraph {cutoff}, keeping {len(paragraphs)} paragraphs")

    # Find split point for part1/part2
    split_idx = None
    for i, p in enumerate(paragraphs):
        if p['text'] == '层级1：初生':
            split_idx = i
            break
    if split_idx is None:
        split_idx = 126  # fallback
    print(f"  Day3: Split at paragraph {split_idx}")

    part1_html = generate_bilingual_html(paragraphs[:split_idx])
    part2_html = generate_bilingual_html(paragraphs[split_idx:])

    # Add continuation note to part2
    part2_html += '\n<div class="article-note"><p>本篇为上篇内容（框架介绍 + 层级1：初生 + 层级2：发展中），下篇将在 Day4 继续。</p></div>'

    return part1_html, part2_html


# ============================================================
# Day 4: Bilingual - PMF Levels (lower half: Level 3 + Level 4)
# Uses day3_text.json paragraphs 312-443
# Split at paragraph 380 ("层级4：极致")
# Part1: paras 312-379 (Level 3: Strong)
# Part2: paras 380-443 (Level 4: Extreme)
# ============================================================
def generate_day4():
    all_paragraphs = load_extracted("day3")

    # Find start (Level 3)
    start_idx = None
    for i, p in enumerate(all_paragraphs):
        if p['text'] == '层级3：强劲':
            start_idx = i
            break
    if start_idx is None:
        start_idx = 312  # fallback

    paragraphs = all_paragraphs[start_idx:]
    print(f"  Day4: Using paragraphs {start_idx} to {len(all_paragraphs)-1} ({len(paragraphs)} paragraphs)")

    # Find split point for Level 4
    split_idx = None
    for i, p in enumerate(paragraphs):
        if p['text'] == '层级4：极致':
            split_idx = i
            break
    if split_idx is None:
        split_idx = 380 - start_idx  # fallback
    print(f"  Day4: Split at relative index {split_idx} (absolute {start_idx + split_idx})")

    part1_html = generate_bilingual_html(paragraphs[:split_idx])
    part2_html = generate_bilingual_html(paragraphs[split_idx:])

    return part1_html, part2_html


# ============================================================
# Main
# ============================================================
if __name__ == '__main__':
    print("Generating Day 1...")
    day1_part1, day1_part2 = generate_day1()
    print(f"  Day1 part1: {len(day1_part1)} chars, part2: {len(day1_part2)} chars")

    print("Generating Day 2...")
    day2_part1, day2_part2 = generate_day2()
    print(f"  Day2 part1: {len(day2_part1)} chars, part2: {len(day2_part2)} chars")

    print("Generating Day 3...")
    day3_part1, day3_part2 = generate_day3()
    print(f"  Day3 part1: {len(day3_part1)} chars, part2: {len(day3_part2)} chars")

    print("Generating Day 4...")
    day4_part1, day4_part2 = generate_day4()
    print(f"  Day4 part1: {len(day4_part1)} chars, part2: {len(day4_part2)} chars")

    # Save individual HTML files
    for name, content in [
        ('day1_part1.html', day1_part1), ('day1_part2.html', day1_part2),
        ('day2_part1.html', day2_part1), ('day2_part2.html', day2_part2),
        ('day3_part1.html', day3_part1), ('day3_part2.html', day3_part2),
        ('day4_part1.html', day4_part1), ('day4_part2.html', day4_part2),
    ]:
        with open(os.path.join(OUT_DIR, name), 'w', encoding='utf-8') as f:
            f.write(content)

    # Save as JSON for build_site.py
    content_data = {
        'day1_part1': day1_part1, 'day1_part2': day1_part2,
        'day2_part1': day2_part1, 'day2_part2': day2_part2,
        'day3_part1': day3_part1, 'day3_part2': day3_part2,
        'day4_part1': day4_part1, 'day4_part2': day4_part2,
    }
    with open(os.path.join(OUT_DIR, 'content_data.json'), 'w', encoding='utf-8') as f:
        json.dump(content_data, f, ensure_ascii=False)

    print("\nDone! Generated files in scripts/generated/")
