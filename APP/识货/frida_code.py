import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

rdev = frida.get_usb_device()
pid = rdev.spawn(["com.hupu.shihuo"])
session = rdev.attach(pid)

with open("frida_code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(f"message:{message}")
    print(f"data:{data}")

script.on("message", on_message)
script.load()
rdev.resume(pid)
sys.stdin.read()