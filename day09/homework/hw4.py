numbers = []

for i in range(5):
    num = int(input("enter number: "))
    numbers.append(num)

total = 0

for i in range(len(numbers)):
    total = total + numbers[i]

print("Total is:", total)