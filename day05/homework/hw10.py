a = int(input("Enter age: "))
b = float(input("Enter balance: "))
vi = input("VIP status (true/False):")

v = vi == "True"

ac = (a >= 18 and b >= 100) or v

print("It has access:",ac)
