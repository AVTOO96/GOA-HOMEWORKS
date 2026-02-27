numbers = []

for i  in range(4):
    num = int(input("Enter number: "))
    numbers.append(num)

    if sum(numbers) > 100:
        numbers.clear()

        print("List:",numbers)
