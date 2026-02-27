positive = 0
negative = 0

for i in range(5):
    num = int(input("Enter a number: "))
    
    if num > 0:
        positive += 1
    else:
        negative += 1

print("Positive numbers:", positive)
print("Negative numbers:", negative)