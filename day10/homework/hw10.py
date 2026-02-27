numbers = []

for i in range (6):
    num = int(input("Enter number: "))
    numbers.append(num)

    count_5 = numbers.count(5)
    print("Number 5 is in this list:",count_5,"times")

    if count_5 > 0:
        numbers.remove(5)

        print("Result:",numbers)

