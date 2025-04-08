import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

rdev = frida.get_usb_device()

# Application(identifier="com.achievo.vipshop", name="唯品会", pid=23375, parameters={})

# pid = rdev.spawn(["com.achievo.vipshop"])
# session = rdev.attach(pid)
session = rdev.attach("唯品会")
with open("frida_code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(f"message:{message}")
    print(f"data:{data}")

script.on("message", on_message)

script.load()
sys.stdin.read()