import random

def mergeSort(lista):
    if len(lista) > 1:
        medio = len(lista)//2
        derecha = lista[medio:]
        izquierda = lista[:medio]

        #llamado recursivo
        mergeSort(derecha);
        mergeSort(izquierda);

        #iteradores
        i = 0 #iterador para derecha
        j = 0 #iterador para izquierda

        k = 0 #iterador lista principal

        while i < len(derecha) and j < len(izquierda):
            if derecha[i] < izquierda[j]:
                lista[k] = derecha[i]
                i+=1
            else:
                lista[k] = izquierda[j]
                j+=1
            k+=1
        while i < len(derecha):
            lista[k] = derecha[i]
            i+=1
            k+=1
        while j < len(izquierda):
            lista[k] = izquierda[j]
            j+=1
            k+=1
    return lista


if __name__ == "__main__":
    tamano_de_lista = int(input('De que tamano sera la lista?'))

    lista = [random.randint(0,100) for i in range(tamano_de_lista)]
    print(lista)
    print('-' * 20)

    lista_ordenada = mergeSort(lista)
    print(lista_ordenada)
