import time
import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

device = frida.get_usb_device()
pid = device.spawn(["com.yltx.oil.partner"])
device.resume(pid)
session = device.attach(pid)
with open("frida_code.js") as f:
    script = session.create_script(f.read())
def on_message(message, data):
    logger.info(message, data)

script.on("message", on_message)
script.load()
sys.stdin.read()

