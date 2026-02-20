positive = 0
negative = 0

for i in range(5):
    num = float(input("Enter a number: "))
    
    if num > 0:
        positive += 1
    elif num < 0:
        negative += 1

print("Positive numbers:", positive)
print("Negative numbers:", negative)