number = int(input("შეიყვანე რიცხვი (0 გასაჩერებლად): "))

total = 0
count = 0

while number != 0:
    total += number
    count += 1
    number = int(input("შეიყვანე რიცხვი (0 გასაჩერებლად): "))

average = total / count

print("საშუალო არის:", average)