import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

rdev = frida.get_usb_device()

session = rdev.attach("哔哩哔哩")
with open("frida-code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(f"message:{message}")
    print(f"data:{data}")

script.on("message", on_message)

script.load()
sys.stdin.read()