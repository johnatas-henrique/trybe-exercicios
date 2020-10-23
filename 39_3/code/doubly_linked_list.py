from doubly_node import DoublyNode


class DoublyLinkedList:

    def __init__(self):
        self.head = DoublyNode("HEAD")
        self.tail = DoublyNode("TAIL")
        self.head.next = self.tail
        self.tail.previous = self.head
        self.__length = 0

    def __str__(self):
        return f"DoublyLinkedList(len={self.__length} value={self.head})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        node_value = DoublyNode(value)
        node_value.next = self.head.next
        node_value.previous = self.head
        node_value.next.previous = node_value
        self.head.next = node_value
        self.__length += 1

    def insert_last(self, value):
        node_value = DoublyNode(value)
        node_value.previous = self.tail.previous
        node_value.next = self.tail
        node_value.previous.next = node_value
        self.tail.previous = node_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        new_node = DoublyNode(value)
        position_node = self.__get_node_at(position)
        new_node.next = position_node
        new_node.previous = position_node.previous
        new_node.previous.next = new_node
        position_node.previous = new_node
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.head.next
            element_later_than_removed = value_to_be_removed.next
            self.head.next = element_later_than_removed
            element_later_than_removed.previous = self.head
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.tail.previous
            element_later_than_removed = value_to_be_removed.previous
            self.tail.previous = element_later_than_removed
            element_later_than_removed.next = self.tail
            value_to_be_removed.reset()
            self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        value_to_be_removed = None
        if not self.is_empty():
            value_to_be_removed = self.__get_node_at(position)

            previous_to_be_removed = value_to_be_removed.previous
            next_to_be_removed = value_to_be_removed.next

            previous_to_be_removed.next = next_to_be_removed
            next_to_be_removed.previous = previous_to_be_removed

            value_to_be_removed.reset()
            self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = DoublyNode(value_to_be_returned.value)
        return value_returned

    def __get_node_at(self, position):
        value_to_be_returned = None
        if self.head.next != self.tail:
            value_to_be_returned = self.head.next
            while position > 0:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def is_empty(self):
        return not self.__length


# Para testar, apenas rode o arquivo com: `python3 doubly_linked_list.py` :)
if __name__ == "__main__":
    doubly_linked_list = DoublyLinkedList()

    print(doubly_linked_list.is_empty()) # saída: True
    doubly_linked_list.insert_first(1)
    print(doubly_linked_list) # saída: DoublyLinkedList(len=1 value=Node(value=HEAD next=Node(value=1 next=Node(value=TAIL next=None))))

    doubly_linked_list.insert_first(2)
    print(doubly_linked_list) # saída: DoublyLinkedList(len=2 value=Node(value=HEAD next=Node(value=2 next=Node(value=1 next=Node(value=TAIL next=None)))))

    doubly_linked_list.insert_last(3)
    print(doubly_linked_list) # saída: DoublyLinkedList(len=3 value=Node(value=HEAD next=Node(value=2 next=Node(value=1 next=Node(value=3 next=Node(value=TAIL next=None))))))

    doubly_linked_list.remove_last()
    print(doubly_linked_list) # saída: DoublyLinkedList(len=2 value=Node(value=HEAD next=Node(value=2 next=Node(value=1 next=Node(value=TAIL next=None)))))

    doubly_linked_list.remove_first()
    print(doubly_linked_list) # saída: DoublyLinkedList(len=1 value=Node(value=HEAD next=Node(value=1 next=Node(value=TAIL next=None))))

    doubly_linked_list.insert_at(5, 1)
    print(doubly_linked_list) # saída: DoublyLinkedList(len=2 value=Node(value=HEAD next=Node(value=1 next=Node(value=5 next=Node(value=TAIL next=None)))))

    doubly_linked_list.remove_at(0)
    print(doubly_linked_list) # saída: DoublyLinkedList(len=1 value=Node(value=HEAD next=Node(value=5 next=Node(value=TAIL next=None))))

    doubly_linked_list.insert_at(6, 1)
    doubly_linked_list.insert_at(7, 2)
    doubly_linked_list.insert_at(8, 3)
    doubly_linked_list.insert_at(9, 4)
    print(doubly_linked_list.get_element_at(3)) # saída: Node(value=8 next=None)
