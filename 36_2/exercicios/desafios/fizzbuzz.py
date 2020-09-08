def fizzbuzz(number):
    response = []
    for num in range(1, number+1):
        if(num % 3 == 0 and num % 5 == 0):
            response.append("FizzBuzz")
        elif(num % 3 == 0):
            response.append("Fizz")
        elif(num % 5 == 0):
            response.append("Buzz")
        else:
            response.append(num)

    return response
