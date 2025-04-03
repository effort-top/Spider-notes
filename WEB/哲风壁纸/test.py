url = "https://haowallpaper.com/link/common/file/getCroppingImg/e7123122c6a98b125590598b30c872f9"

import requests
import os

def download_image(url, save_path='downloaded_image.jpg'):
    try:
        response = requests.get(url)
        response.raise_for_status()

        with open(save_path, 'wb') as file:
            file.write(response.content)

        print(f"Image downloaded successfully and saved as {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading image: {e}")

# 使用函数下载图片
download_image(url)
