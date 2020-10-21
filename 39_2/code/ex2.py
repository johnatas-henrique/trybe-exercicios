from content_deque import Deque


class LimitDeque(Deque):
    def __init__(self, capacity=0):
        super().__init__()
        self._capacity = capacity

    def is_max_capacity(self):
        return len(self) == self._capacity

    def push_front(self, value):
        if self.is_max_capacity():
            raise ValueError
        super().push_front(value)

    def push_back(self, value):
        if self.is_max_capacity():
            raise ValueError
        super().push_back(value)

    def pop_front(self):
        if len(self) == 0:
            raise ValueError
        super().pop_front()

    def pop_back(self):
        if len(self) == 0:
            raise ValueError
        super().pop_back()

    def peek_front(self):
        if len(self) == 0:
            raise ValueError
        super().peek_front()

    def peek_back(self):
        if len(self) == 0:
            raise ValueError
        super().peek_back()


x = LimitDeque(4)

try:
    x.peek_back()
except ValueError:
    print('Underflow')
try:
    x.peek_front()
except ValueError:
    print('Underflow')
x.push_back(2)
x.push_back(4)
x.push_back(8)
x.push_back(16)
print(x.is_max_capacity())
try:
    x.push_front(32)
except ValueError:
    print('Overflow')
try:
    x.push_back(32)
except ValueError:
    print('Overflow')
print(x.is_max_capacity())
