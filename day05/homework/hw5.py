numb1 = float(input("Enter first number: "))
numb2 = float(input("Enter second number: "))
numb3 = float(input("Enter third number: "))

x = (numb1 + numb2 + numb3) / 3
y = x > 60 and numb1 > 0 and numb2 > 0 and numb3 > 0

print("Average: ", x)
print("Every number is positive: ", y)
print("Type:",type(y))