def binary_search(array, value):

    middle_index = (len(array) + 0) // 2
    result = None
    while not value or len(array) > 1:
        print(array)
        middle_index = (len(array) + 0) // 2
        if array[middle_index] == value:
            print('passei')
            result = array[middle_index]
            break
        elif array[middle_index] > value:
            print('passei elif')
            array = array[:middle_index+1]
        else:
            print('passei else')
            array = array[middle_index-1:]
    return result


array = [2, 4, 8, 16, 32, 64, 128, 256, 512]
target = 65

result = binary_search(array, target)
print(f"Elemento encontrado na posição: {result}")
