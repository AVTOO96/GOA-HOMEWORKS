secret = 7

guess = int(input("გამოიცანი რიცხვი (1-10): "))

while guess != secret:
    print("Try again")
    guess = int(input("გამოიცანი რიცხვი (1-10): "))

print("გილოცავ შენ  სწორად გამოიცანი")