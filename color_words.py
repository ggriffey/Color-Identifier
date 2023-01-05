def process_file(file):
    
    opened_file = open(file)
    
    words = []
    for line in opened_file:
        words += [line.strip()]
    
    fun_words = []
    for word in words:
        acceptable = True   
        for letter in word:
            if letter not in "abcdefABCDEF":
                acceptable = False
        if acceptable:
            fun_words += [word]
    return fun_words


valid_words = process_file("full_dict.txt")
def generate_color_words(valid_words):
    color_words = []
    for word in valid_words:
        if len(word) == 6:
            color_words += [word]
    return color_words

print(generate_color_words(valid_words))
        



