from content_deque import Deque


class ImprovedDeque(Deque):
    def clear(self):
        self._data = list()

    def exists(self, value):
        return value in self._data

    def peek(self, position, order='front'):
        if abs(position) < len(self._data) and order == 'front':
            return self._data[position]
        elif abs(position) < len(self._data) and order == 'back':
            return self._data[-(position + 1)]
        else:
            return "Posição inválida"


x = ImprovedDeque()

x.push_back(2)
x.push_back(4)
x.push_back(8)
x.push_back(16)
x.push_back(32)
print(x.exists(4))
print(x.peek(3))
print(x.peek(3, 'back'))
