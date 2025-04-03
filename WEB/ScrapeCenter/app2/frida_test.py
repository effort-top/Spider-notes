import sys
import frida

device = frida.get_usb_device()
pid = device.spawn(["com.goldze.mvvmhabit"])
session = device.attach(pid)
with open("frida_code.js") as f:
    script = session.create_script(f.read())
def on_message(message, data):
    print(message, data)

script.on("message", on_message)
device.resume(pid)

script.load()
sys.stdin.read()

