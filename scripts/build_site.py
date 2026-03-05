#!/usr/bin/env python3
"""Build per-day content JS files from generated HTML content."""

import json
import os

GEN_DIR = "/Users/fansia/Desktop/growth-demo/scripts/generated"
PAGES_DIR = "/Users/fansia/Desktop/growth-demo/pages"

# Load generated content
with open(os.path.join(GEN_DIR, 'content_data.json'), 'r', encoding='utf-8') as f:
    content = json.load(f)

# Escape backticks and ${} for JS template literals
def escape_for_template_literal(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

# ============================================================
# Generate day1-content.js ~ day4-content.js
# ============================================================
day_descriptions = {
    1: "Day1: 用户增长万能公式 (中文) - part1: 理论框架, part2: AARRR×八角案例",
    2: "Day2: 多邻国增长策略 (中英对照) - part1: 背景+三阶段, part2: 排行榜+推送+打卡",
    3: "Day3: PMF层级框架·上篇 (中英对照) - part1: 框架引言, part2: 层级1+2",
    4: "Day4: PMF层级框架·下篇 (中英对照) - part1: 层级3, part2: 层级4",
}

for day_num in range(1, 5):
    part1_key = f'day{day_num}_part1'
    part2_key = f'day{day_num}_part2'
    part1 = escape_for_template_literal(content[part1_key])
    part2 = escape_for_template_literal(content[part2_key])

    js_content = f'''/**
 * 4天增长运营试水课 - {day_descriptions[day_num]}
 */
window.dayContent_{day_num} = {{
    part1: `{part1}`,
    part2: `{part2}`
}};
'''
    filename = f'day{day_num}-content.js'
    filepath = os.path.join(PAGES_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"Generated {filename} ({len(js_content)} chars)")

print("Done!")
