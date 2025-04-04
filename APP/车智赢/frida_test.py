import sys
import frida
from APP.config.logconfig import MyLogger

logger = MyLogger().get_logger()

rdev = frida.get_remote_device()
session = rdev.attach("车智赢+")
with open("frida_code.js", encoding='utf-8') as f:
    script = session.create_script(f.read())
def on_message(message, data):
    logger.info(f"message:{message}")
    logger.info(f"data:{data}")

script.on("message", on_message)
script.load()
sys.stdin.read()