numbers = []

for i in range(5):
    num = int(input("Enter number: "))
    numbers.append(num)

    numbers.sort()
    largest = numbers[-1]
    numbers.remove(largest)

    print("Last list:",numbers)
