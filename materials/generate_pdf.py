#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成PDF格式的Top5阅读材料
需要安装: pip install markdown weasyprint
"""

import markdown
import json
from datetime import datetime

# 读取JSON数据
with open('/Users/fansia/Desktop/growth-demo/materials/top5_articles.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 创建HTML样式
html_template = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>14天增长运营大师课 - 必读Top5完整版</title>
    <style>
        @page {
            size: A4;
            margin: 2.5cm;
            @bottom-center {
                content: counter(page);
                font-size: 10pt;
                color: #999;
            }
        }
        
        body {
            font-family: "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
            font-size: 11pt;
            line-height: 1.8;
            color: #333;
            max-width: 100%;
        }
        
        .cover {
            text-align: center;
            padding: 100px 0;
            page-break-after: always;
        }
        
        .cover h1 {
            font-size: 28pt;
            color: #FF6B9D;
            margin-bottom: 20px;
            font-weight: bold;
        }
        
        .cover .subtitle {
            font-size: 16pt;
            color: #666;
            margin-bottom: 40px;
        }
        
        .cover .meta {
            font-size: 12pt;
            color: #999;
            margin-top: 60px;
        }
        
        h1 {
            font-size: 20pt;
            color: #333;
            border-bottom: 3px solid #FF6B9D;
            padding-bottom: 10px;
            margin-top: 40px;
            page-break-before: always;
        }
        
        h1:first-of-type {
            page-break-before: avoid;
        }
        
        h2 {
            font-size: 16pt;
            color: #444;
            margin-top: 30px;
            border-left: 4px solid #4A90E2;
            padding-left: 15px;
        }
        
        h3 {
            font-size: 13pt;
            color: #555;
            margin-top: 20px;
        }
        
        .article-meta {
            background: #f8f9fa;
            padding: 15px 20px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 10pt;
            color: #666;
        }
        
        .en-block {
            border-left: 4px solid #4A90E2;
            padding-left: 20px;
            margin: 20px 0;
            color: #333;
            font-style: italic;
        }
        
        .cn-block {
            border-left: 4px solid #7ED321;
            padding: 15px 20px;
            margin: 20px 0;
            background: #f9f9f9;
        }
        
        .separator {
            text-align: center;
            color: #ccc;
            margin: 30px 0;
            font-size: 14pt;
        }
        
        strong {
            color: #FF6B9D;
        }
        
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        
        li {
            margin: 8px 0;
        }
        
        blockquote {
            border-left: 4px solid #FF6B9D;
            margin: 20px 0;
            padding: 10px 20px;
            background: #fff5f7;
            font-style: italic;
            color: #666;
        }
        
        .toc {
            page-break-after: always;
        }
        
        .toc h2 {
            border-left: none;
            text-align: center;
            color: #FF6B9D;
        }
        
        .toc ul {
            list-style: none;
            padding: 0;
        }
        
        .toc li {
            padding: 10px 0;
            border-bottom: 1px dotted #ddd;
        }
        
        .toc a {
            color: #333;
            text-decoration: none;
        }
        
        .note {
            background: #fff3cd;
            border: 1px solid #ffc107;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: "Consolas", monospace;
            font-size: 10pt;
        }
    </style>
</head>
<body>
    <div class="cover">
        <h1>14天增长运营大师课</h1>
        <div class="subtitle">必读Top5完整版</div>
        <div class="meta">
            <p>中英对照学习材料</p>
            <p>生成日期：{date}</p>
        </div>
    </div>
    
    <div class="toc">
        <h2>目录</h2>
        <ul>
            {toc_items}
        </ul>
    </div>
    
    {content}
</body>
</html>
"""

# 生成目录项
toc_items = []
content_parts = []

for i, article in enumerate(data['articles'], 1):
    # 目录项
    toc_items.append(f'<li><strong>文章{i}</strong>：{article["title"]}</li>')
    
    # 内容部分
    lang_label = '【中英双语】' if article['language'] == 'bilingual' else '【中文】'
    
    article_html = f'''
    <h1 id="article-{i}">文章{i}：{article['title']}</h1>
    <div class="article-meta">
        {lang_label} | 来源：{article.get('source', 'N/A')}
        {f"<br>作者：{article['author']}" if 'author' in article else ''}
    </div>
    '''
    
    # 转换Markdown为HTML
    md_content = article['content']
    
    # 添加样式类到EN/CN标记
    md_content = md_content.replace('**EN:**', '<div class="en-block"><strong>EN:</strong>')
    md_content = md_content.replace('**中文：**', '</div><div class="cn-block"><strong>中文：</strong>')
    md_content = md_content.replace('---', '</div><div class="separator">* * *</div>')
    
    html_content = markdown.markdown(md_content, extensions=['extra', 'nl2br'])
    
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

# 尝试生成PDF
try:
    from weasyprint import HTML, CSS
    
    pdf_path = '/Users/fansia/Desktop/growth-demo/materials/必读Top5完整版.pdf'
    HTML(string=final_html).write_pdf(pdf_path)
    
    print(f"✅ PDF文件已生成：{pdf_path}")
    
except ImportError:
    print("⚠️ 未安装weasyprint，跳过PDF生成")
    print("   如需PDF，请运行：pip install weasyprint")
    print("   或使用浏览器打开HTML文件，选择「打印为PDF」")

print("\n📚 生成的文件列表：")
print("   1. 必读Top5完整版.md - Markdown格式（可导入Notion/Obsidian）")
print("   2. 必读Top5完整版.html - HTML格式（可在浏览器中打开并打印为PDF）")
print("   3. top5_articles.json - JSON格式（供应用使用）")
