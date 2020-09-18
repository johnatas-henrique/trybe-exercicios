class TV():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 < novo_canal < 99:
            self.__canal = novo_canal
        else:
            raise ValueError

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


ex1 = TV(14)

ex1.modificar_canal(60)
print(ex1._TV__canal)
