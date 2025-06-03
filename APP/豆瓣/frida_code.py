import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

rdev = frida.get_usb_device()

# Application(identifier="com.douban.frodo", name="豆瓣", pid=323, parameters={})
pid = rdev.spawn(["com.douban.frodo"])
session = rdev.attach(pid)
# session = rdev.attach("豆瓣")

with open("frida_code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(f"message:{message}")
    print(f"data:{data}")

script.on("message", on_message)
script.load()

sys.stdin.read()