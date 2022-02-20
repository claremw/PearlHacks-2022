# haven -- here, you can implement the following functions 

# create a list of lists to hold words and their definitions 
words = [["word1", "definition"], ["word2", "definition"], ["word3", "definition"]]

# this function should return a random list (like [word1, definition]) from our list 
def random_word(words): 
    

# this function should scramble a word and return the scrambled word 
def scramble_word(word): 
    # convert the string to an array 
    array = list(word)
    # now randomize the array here 

    # then put it back as a string and return that string (I've written this part already)
    scrambled = ""
    for x in range(0, len(array)): 
        scrambled = scrambled + array[x]
    return scrambled 
