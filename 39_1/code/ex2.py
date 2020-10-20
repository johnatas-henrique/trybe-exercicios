from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, max):
        super().__init__()
        self.max = max

    def push(self, value):
        if self.size() + 1 > self.max:
            raise StackOverflow
        super().push(value)

max_stack = LimitStack(4)
max_stack.push(1)
max_stack.push(2)
max_stack.push(3)
max_stack.push(4)
try:
    max_stack.push(5)
except StackOverflow:
    print('FullStackOverflow')
