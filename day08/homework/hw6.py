num = int(input("Enter a positive number: "))

while num < 0:
    print("Negative number! Try again.")
    num = int(input("Enter a positive number: "))

print("You entered:", num)