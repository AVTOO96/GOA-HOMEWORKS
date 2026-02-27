numbers = []

for i in range(6):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

count_10 = numbers.count(10)

if count_10 > 2:
    numbers.remove(10)

print("სია:", numbers)