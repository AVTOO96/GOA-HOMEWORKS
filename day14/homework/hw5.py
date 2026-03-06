text = input("Enter sentence: ")

text = text.lower()

if text.find("python") != -1:
    print("python exists")
else:
    print("python not found")