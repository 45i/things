import os

# Specify the directory path you want to list files from
folder_path = 'renders'  # Replace with your folder path

# Get a list of all files in the specified folder
file_urls = []

for root, dirs, files in os.walk(folder_path):
    for file in files:
        file_path = os.path.join(root, file)
        file_urls.append(file_path)

# Now, the 'file_urls' list contains the URLs (file paths) of all the files in the folder
# You can print or use this list as needed
for url in file_urls:
    print("\""+url+"\",\n")
