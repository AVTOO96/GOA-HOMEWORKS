numbers = []

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

if numbers[0] < 0:
    numbers.clear()

print("სია:", numbers)
