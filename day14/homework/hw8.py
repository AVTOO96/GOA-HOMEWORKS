def word_exists(text, word):
    if text.find(word) != -1:
        return True
    else:
        return False


text = input("Enter text: ")
word = input("Enter word: ")

print(word_exists(text, word))