import frida


device = frida.get_usb_device()
print(device)

try:
    pid = device.spawn(["com.yltx.oil.partner"])
    print(pid)
except Exception as e:
    print(f"Error: {e}")
