x = float(input("Enter first number: "))
y = float(input("Enter second number: "))

c = x > 0 and y > 0
d = x > 100 or y >100

print("Both are positive: " ,c)
print("One of them is over 100: " , d)