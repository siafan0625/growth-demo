#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成HTML格式的Top5阅读材料（无需外部依赖）
"""

import json
import re
from datetime import datetime

# 读取JSON数据
with open('/Users/fansia/Desktop/growth-demo/materials/top5_articles.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def simple_md_to_html(text):
    """简单的Markdown转HTML"""
    # 处理标题
    text = re.sub(r'^### (.+)$', r'<h3>\1</h3>', text, flags=re.MULTILINE)
    text = re.sub(r'^## (.+)$', r'<h2>\1</h2>', text, flags=re.MULTILINE)
    text = re.sub(r'^# (.+)$', r'<h1>\1</h1>', text, flags=re.MULTILINE)
    
    # 处理粗体
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    
    # 处理斜体
    text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
    
    # 处理列表
    lines = text.split('\n')
    result = []
    in_ul = False
    in_ol = False
    
    for line in lines:
        if line.strip().startswith('- ') or line.strip().startswith('* '):
            if not in_ul:
                result.append('<ul>')
                in_ul = True
            content = line.strip()[2:]
            result.append(f'<li>{content}</li>')
        elif re.match(r'^\d+\.', line.strip()):
            if not in_ol:
                result.append('<ol>')
                in_ol = True
            content = re.sub(r'^\d+\.\s*', '', line.strip())
            result.append(f'<li>{content}</li>')
        else:
            if in_ul:
                result.append('</ul>')
                in_ul = False
            if in_ol:
                result.append('</ol>')
                in_ol = False
            result.append(line)
    
    if in_ul:
        result.append('</ul>')
    if in_ol:
        result.append('</ol>')
    
    text = '\n'.join(result)
    
    # 处理引用
    text = re.sub(r'^&gt; (.+)$', r'<blockquote>\1</blockquote>', text, flags=re.MULTILINE)
    
    # 处理分隔线
    text = text.replace('---', '<hr>')
    
    # 处理段落（简单的空行分段）
    paragraphs = text.split('\n\n')
    new_paragraphs = []
    for p in paragraphs:
        p = p.strip()
        if p and not p.startswith('<') and not p.endswith('>'):
            p = f'<p>{p}</p>'
        new_paragraphs.append(p)
    text = '\n\n'.join(new_paragraphs)
    
    return text

# 创建HTML样式
html_template = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>14天增长运营大师课 - 必读Top5完整版</title>
    <style>
        @page {{
            size: A4;
            margin: 2cm;
        }}
        
        * {{
            box-sizing: border-box;
        }}
        
        body {{
            font-family: "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 11pt;
            line-height: 1.8;
            color: #333;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: #fff;
        }}
        
        .cover {{
            text-align: center;
            padding: 120px 40px;
            page-break-after: always;
            background: linear-gradient(135deg, #FF6B9D 0%, #FF8E53 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 0;
            margin: -20px -20px 40px -20px;
        }}
        
        .cover h1 {{
            font-size: 36pt;
            margin-bottom: 20px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }}
        
        .cover .subtitle {{
            font-size: 20pt;
            margin-bottom: 40px;
            opacity: 0.95;
        }}
        
        .cover .meta {{
            font-size: 12pt;
            margin-top: 60px;
            opacity: 0.9;
        }}
        
        h1 {{
            font-size: 22pt;
            color: #FF6B9D;
            border-bottom: 3px solid #FF6B9D;
            padding-bottom: 15px;
            margin-top: 50px;
            page-break-before: always;
        }}
        
        h1:first-of-type {{
            page-break-before: avoid;
        }}
        
        h2 {{
            font-size: 16pt;
            color: #444;
            margin-top: 35px;
            border-left: 5px solid #4A90E2;
            padding-left: 15px;
            background: #f8f9fa;
            padding: 12px 15px;
        }}
        
        h3 {{
            font-size: 13pt;
            color: #555;
            margin-top: 25px;
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
        }}
        
        .article-meta {{
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0 30px 0;
            font-size: 10pt;
            color: #666;
            border-left: 4px solid #FF6B9D;
        }}
        
        .en-block {{
            border-left: 4px solid #4A90E2;
            padding: 15px 20px;
            margin: 20px 0;
            color: #2c3e50;
            background: #f0f7ff;
            font-style: italic;
            border-radius: 0 8px 8px 0;
        }}
        
        .cn-block {{
            border-left: 4px solid #7ED321;
            padding: 15px 20px;
            margin: 20px 0;
            background: #f6fff0;
            border-radius: 0 8px 8px 0;
        }}
        
        .separator {{
            text-align: center;
            color: #ddd;
            margin: 30px 0;
            font-size: 18pt;
            letter-spacing: 10px;
        }}
        
        strong {{
            color: #FF6B9D;
        }}
        
        ul, ol {{
            margin: 15px 0;
            padding-left: 30px;
        }}
        
        li {{
            margin: 10px 0;
        }}
        
        blockquote {{
            border-left: 4px solid #FF6B9D;
            margin: 20px 0;
            padding: 15px 20px;
            background: #fff5f7;
            font-style: italic;
            color: #666;
            border-radius: 0 8px 8px 0;
        }}
        
        .toc {{
            page-break-after: always;
            padding: 40px;
        }}
        
        .toc h2 {{
            border-left: none;
            text-align: center;
            color: #FF6B9D;
            background: transparent;
            font-size: 24pt;
            margin-bottom: 40px;
        }}
        
        .toc ul {{
            list-style: none;
            padding: 0;
            max-width: 500px;
            margin: 0 auto;
        }}
        
        .toc li {{
            padding: 15px 0;
            border-bottom: 1px dotted #ddd;
            font-size: 12pt;
        }}
        
        .toc li strong {{
            color: #FF6B9D;
            display: inline-block;
            width: 70px;
        }}
        
        .note {{
            background: #fff3cd;
            border: 1px solid #ffc107;
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            color: #856404;
        }}
        
        code {{
            background: #f4f4f4;
            padding: 2px 8px;
            border-radius: 4px;
            font-family: "Consolas", "Monaco", monospace;
            font-size: 10pt;
            color: #e83e8c;
        }}
        
        hr {{
            border: none;
            border-top: 2px dashed #ddd;
            margin: 30px 0;
        }}
        
        p {{
            margin: 15px 0;
            text-align: justify;
        }}
        
        @media print {{
            body {{
                padding: 0;
            }}
            .cover {{
                margin: 0;
                border-radius: 0;
            }}
            h1 {{
                page-break-before: always;
            }}
            h1:first-of-type {{
                page-break-before: avoid;
            }}
        }}
    </style>
</head>
<body>
    <div class="cover">
        <h1>📚 14天增长运营大师课</h1>
        <div class="subtitle">必读Top5完整版</div>
        <div class="meta">
            <p>中英对照学习材料</p>
            <p>生成日期：{date}</p>
        </div>
    </div>
    
    <div class="toc">
        <h2>目 录</h2>
        <ul>
            {toc_items}
        </ul>
    </div>
    
    {content}
</body>
</html>
"""

# 生成目录项和内容
toc_items = []
content_parts = []

for i, article in enumerate(data['articles'], 1):
    # 目录项
    lang_tag = "中英双语" if article['language'] == 'bilingual' else "中文"
    toc_items.append(f'<li><strong>文章{i}</strong> {article["title"]} <span style="color:#999;font-size:10pt;">[{lang_tag}]</span></li>')
    
    # 内容部分
    lang_label = '【中英双语对照】' if article['language'] == 'bilingual' else '【中文原文】'
    
    article_html = f'<h1 id="article-{i}">文章{i}：{article["title"]}</h1>'
    article_html += f'<div class="article-meta">{lang_label}<br>来源：{article.get("source", "N/A")}'
    if 'author' in article:
        article_html += f'<br>作者：{article["author"]}'
    article_html += '</div>'
    
    # 处理内容
    md_content = article['content']
    
    # 分割EN/CN块并添加样式
    parts = re.split(r'\*\*EN:\*\*|\*\*中文：\*\*', md_content)
    
    if len(parts) > 1:
        # 有EN/CN标记的内容
        processed_parts = []
        for idx, part in enumerate(parts):
            if idx == 0:
                if part.strip():
                    processed_parts.append(simple_md_to_html(part))
            elif idx % 2 == 1:  # EN部分
                processed_parts.append(f'<div class="en-block"><strong>EN:</strong> {simple_md_to_html(part)}</div>')
            else:  # CN部分
                processed_parts.append(f'<div class="cn-block"><strong>中文：</strong> {simple_md_to_html(part)}</div>')
        html_content = '\n'.join(processed_parts)
    else:
        # 没有EN/CN标记，直接转换
        html_content = simple_md_to_html(md_content)
    
    # 处理分隔线
    html_content = html_content.replace('---', '<div class="separator">* * *</div>')
    
    article_html += html_content
    content_parts.append(article_html)

# 组装完整HTML
final_html = html_template.format(
    date=datetime.now().strftime('%Y年%m月%d日'),
    toc_items='\n'.join(toc_items),
    content='\n'.join(content_parts)
)

# 保存HTML文件
html_path = '/Users/fansia/Desktop/growth-demo/materials/必读Top5完整版.html'
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"✅ HTML文件已生成：{html_path}")
print(f"📄 文件大小：{len(final_html):,} 字符")

print("\n📚 生成的文件列表：")
print("   1. 必读Top5完整版.md     - Markdown格式")
print("   2. 必读Top5完整版.html   - HTML格式（可在浏览器中打开）")
print("   3. top5_articles.json    - JSON格式（供应用使用）")
print("\n💡 提示：打开HTML文件，按Ctrl+P（Mac: Cmd+P）可打印为PDF")
