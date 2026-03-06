def count_upper(text):
    count = 0
    
    for i in text:
        if i.isupper():
            count += 1
            
    print(count)


text = input("Enter text: ")
count_upper(text)