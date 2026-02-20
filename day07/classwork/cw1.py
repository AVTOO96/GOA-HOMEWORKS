for i in range (1, 6):
    if i % 2 == 0:
        print(i , "Even")
    else:
        print(i, "Odd")

        count = 0
        while count < 3 :
            num = int(input("Enter number: "))

            if num>= 0:
                print("Positive")
            else:
                print("Negative")

            count += 1

            