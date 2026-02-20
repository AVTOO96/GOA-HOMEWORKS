num1 = float(input("Enter the first number: "))
max_num = num1

for i in range(4):
    num = float(input("Enter a number: "))
    
    if num > max_num:
        max_num = num

print("The largest number is:", max_num)