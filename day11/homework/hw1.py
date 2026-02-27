numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

smallest = numbers.pop(0)

print("ამოღებული რიცხვი:", smallest)
print("დარჩენილი სია:", numbers)