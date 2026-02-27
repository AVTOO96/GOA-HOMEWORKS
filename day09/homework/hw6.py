
numbers = [3, 8, 15, 22, 7, 10, 19, 4, 11]

count = 0

for i in range(len(numbers)):
    if numbers[i] % 2 != 0:
        count = count + 1

print("The amount of odd numbers are:", count)