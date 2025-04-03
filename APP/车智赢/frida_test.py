import sys
import frida
from Android_app.config.logconfig import MyLogger

logger = MyLogger().get_logger()

device = frida.get_usb_device()
pid = device.spawn(["com.che168.autotradercloud"])
device.resume(pid)
session = device.attach(pid)
with open("frida_code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    logger.info(f"message:{message}")
    logger.info(f"data:{data}")

script.on("message", on_message)
script.load()
sys.stdin.read()

