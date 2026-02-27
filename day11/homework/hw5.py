numbers = []

for i in range(7):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

numbers.sort()

maximum = numbers[-1]
count_max = numbers.count(maximum)

numbers.remove(maximum)

print("მაქსიმუმი გვხვდება:", count_max, "ჯერ")
print("სია წაშლის შემდეგ:", numbers)