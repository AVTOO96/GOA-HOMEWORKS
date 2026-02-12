x = float(input("Enter height: "))
y = float(input("Enter weight: "))

a1 = x > 1.70 and y < 90
a2 = x < 1.50 or y > 120

print("Height > 1.70 and weight < 90:", a1)
print("Height < 1.50 or weight > 120:", a2)
