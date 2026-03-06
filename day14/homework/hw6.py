def count_symbol(text, symbol):
    count = 0
    
    for i in text:
        if i == symbol:
            count += 1
            
    print(count)


text = input("Enter text: ")
symbol = input("Enter symbol: ")

count_symbol(text, symbol)