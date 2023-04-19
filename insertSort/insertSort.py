import random

def insertSort(list):
    for i in range(1,len(list)):
        currval = list[i]
        currpos = i
        while currpos > 0 and list[currpos-1] > currval:
            list[currpos] = list[currpos-1]
            currpos -= 1
        list[currpos] = currval
    return list

if __name__ == '__main__':
    tamano_de_lista = int(input('De que tamano sera la lista?'))

    lista = [random.randint(0,100) for i in range(tamano_de_lista)]
    print(lista)

    lista_ordenada = insertSort(lista)
    print(lista_ordenada)
