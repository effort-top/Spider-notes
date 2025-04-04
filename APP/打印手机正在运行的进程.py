import frida

rdev = frida.get_remote_device()

processes = rdev.enumerate_processes()
for process in processes:
    print(process)

# 获取手机前台在运行的应用
front_app = rdev.get_frontmost_application()
print(front_app)