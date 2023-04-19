import random

def bubbleSort(list):
    n = len(list)
    for i in range(n):
        print(list)
        for j in range(0,n-i-1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]
    return list

if __name__ == '__main__':
    tamano_de_lista = int(input('De que tamano sera la lista?'))

    list = [random.randint(0,100) for i in range(tamano_de_lista)]
    # print(list)

    lista_ordenada = bubbleSort(list)
    # print(lista_ordenada)
