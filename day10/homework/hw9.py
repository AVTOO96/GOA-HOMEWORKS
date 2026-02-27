numbers = []

for i in  range(3):
    num = int(input("Enter number: "))
    numbers.append(num)

numbers.sort()
numbers.pop()

print("Last list:",numbers)
