even = 0
odd = 0

for i in range(6):
    num = int(input("Enter a number: "))
    
    if num % 2 == 0:
        even += 1
    else:
        odd += 1

print("Even numbers:", even)
print("Odd numbers:", odd)