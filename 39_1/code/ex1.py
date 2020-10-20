from stack import Stack


class MinValueStack(Stack):
    def min_value(self):
        if self.is_empty():
            return None

        result = self._data[0]
        for item in self._data:
            if item < result:
                result = item
        return result


content_stack = MinValueStack()

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value())  # saída: -2
