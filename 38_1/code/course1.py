class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        # return self._buckets[address].name
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
            else:
                return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
    
    def update_value(self, id_num, name):
        address = self.get_address(id_num)
        print('antes', self._buckets[address].name)
        self._buckets[address].name = name
        print('depois', self._buckets[address].name)


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

mapa = HashMap()

for emp_id, name in employees:
    empregado = Employee(emp_id, name)
    mapa.insert(empregado)

mapa.update_value(23, "Johnatas")
print(mapa.get_value(23))

