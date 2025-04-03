import base64
import time

from DrissionPage import ChromiumPage, ChromiumOptions
import ddddocr

# 创建对象
page = ChromiumPage()
# 访问网页
page.get('https://captcha1.scrape.center/')
# page.wait.ele_displayed('xpath://*[@id="app"]/div[2]/div/div/div/div/div/form/div[3]/div/button')
btn = page.ele('xpath://*[@id="app"]/div[2]/div/div/div/div/div/form/div[3]/div/button')
btn.click()
time.sleep(5)

js_hide_slice = 'document.getElementsByClassName("geetest_canvas_slice")[0].style.display="none"'
page.run_js(js_hide_slice)
bg_img = page.ele('xpath://canvas[@class="geetest_canvas_bg geetest_absolute"]', timeout=5)
bg_img.get_screenshot()
bg_img_bytes_str = bg_img.get_screenshot(as_bytes='png')

js_hide_gap = 'document.getElementsByClassName("geetest_canvas_bg")[0].style.display="none"'
js_show_slice = 'document.getElementsByClassName("geetest_canvas_slice")[0].style.display="block"'
page.run_js(js_hide_gap + ';' + js_show_slice)
slide_img = page.ele('//canvas[@class="geetest_canvas_slice geetest_absolute"]', timeout=5)
slide_img.get_screenshot()
slide_img_bytes_str = slide_img.get_screenshot(as_bytes='png')


def save_screenshot(data, file_path):
    # 将base64编码的字符串解码为二进制数据
    image_data = base64.b64decode(data)
    # 将二进制数据写入文件
    with open(file_path, 'wb') as file:
        file.write(image_data)
    print(f"Screenshot saved to {file_path}")


# 保存背景图片
save_screenshot(bg_img_bytes_str, 'background.png')
# 保存滑块图片
save_screenshot(slide_img_bytes_str, 'slider.png')

det = ddddocr.DdddOcr(det=False, ocr=False)
# 使用 slide_match 进行滑块匹配
target_position = det.slide_match(bg_img_bytes_str, slide_img_bytes_str)
print(target_position)
