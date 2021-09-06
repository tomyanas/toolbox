
//________________ Bubble Sort v1.0__________
function bubbleSortV1(array) {
    let length = array.length, aux;
    for (let i = 0; i < length; i++) {
        for(var j = 0 ; j < length - i - 1; j++){
            if (array[j] > array[j + 1]) {
              aux = array[j];
              array[j] = array[j+1];
              array[j + 1] = aux;
            }
        }
    }
    return array;
  }

  //________________ Bubble Sort v2.0__ descriptive________
function bubbleSortV2(array) {
    let length = array.length, left, right;
    for (let i = 0; i < length; i++) {
        for(var j = i ; j < length; j++){
            left = array[j];
            right = array[j + 1]
            if ( left > right ) {
                array[j] = right;
                array[j + 1] = left;
            }
        }
    }
    return array;
  }
  //__________Tests___________

  let arrayUnordered = [5, 2, 8, 9, 0, 3, 1, 4, 6, 7];
  let arrayBubbleV1 = bubbleSortV1(arrayUnordered);
  let arrayBubbleV2 = bubbleSortV2(arrayUnordered);
  console.log('Array Unordered= ', arrayUnordered);
  console.log('Array Ordered BubbleV1= ', arrayBubbleV1);
  console.log('Array Ordered BubbleV2= ', arrayBubbleV2);