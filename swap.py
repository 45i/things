import os
from bs4 import BeautifulSoup

# Define the meta tags you want to add
meta_tags = """
<meta name="description" content="45i's Personal Shenanigans">
<meta name="og:site_name" content="45i">
<meta property="og:image" content="guy1.png">
<link rel="icon" href="guy1.png" type="image/x-icon">
<meta name="theme-color" content="#262624">
"""

# List of HTML files to update
html_files = [file for file in os.listdir() if file.endswith(".html")]
  # Add all your HTML files here

# Loop through each HTML file and add the meta tags
for file_name in html_files:
    print(file_name)
    with open(file_name, "r") as file:
        html_content = file.read()

    soup = BeautifulSoup(html_content, "html.parser")
    head_tag = soup.find("head")

    if head_tag:
        head_tag.insert(0, BeautifulSoup(meta_tags, "html.parser"))

    with open(file_name, "w") as file:
        file.write(str(soup))
