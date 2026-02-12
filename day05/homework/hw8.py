x = int(input("Enter number: "))

y1 = x % 2 == 0 and  x > 0
y2 = x % 2 != 0 and x < 0

print("Even and positive:", y1)
print("Odd and negative:", y2)