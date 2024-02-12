
/**
 * @param target HTMLElement | null
 * @description This method, called findElement, takes an HTMLElement or null as a parameter and returns an HTMLElement or null. It searches for a specific element with the class name "ls-carousel-item" by traversing up the DOM tree from the given target element. If the element is found, it is returned; otherwise, null is returned.
 * @return HTMLElement | null
 */
export const findElement = (target: HTMLElement | null): HTMLElement | null => {
  let currentElement = target;

  while (currentElement && currentElement !== document?.documentElement) {
    if (
      currentElement.classList &&
      currentElement.classList.contains("spinetic-item")
    ) {
      return currentElement;
    }

    currentElement = currentElement.parentElement!;
  }

  return null;
}

/**
 * @param array number[]
 * @description The sumCarouselItemsWidths method takes an array of numbers as input and returns the sum of all the numbers in the array. The function uses the reduce method to iterate through the matrix and accumulate the values. The result is then rounded down using the Math.floor function before being returned.
 * @return number
 */
export const sumCarouselItemsWidths = (array: number[]): number => {
  const sum = array?.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return Math.floor(sum);
}

/**
 *
 * @param carouselItemsWidths number[]
 * @param currentIndex number
 * @description The calculateScrollAmount method takes an array of item widths and the current index as input. It returns the amount of scrolling needed to position the carousel at the current index.
 * @returns number
 */
export const calculateScrollAmount = (
  carouselItemsWidths: number[],
  currentIndex: number
): number => {
  return Math.floor(carouselItemsWidths
    ?.slice(0, currentIndex)
    ?.reduce((total, width) => total - width, 0));
}

/**
* Compares two arrays of numbers for equality.
*
* @param {number[]} array1 - The first array to compare.
* @param {number[]} array2 - The second array to compare.
* @returns {boolean} True if both arrays are of equal length and contain identical elements at each index, otherwise false.
*
* @example
* const arrayA = [1, 2, 3];
* const arrayB = [1, 2, 3];
* const result = arraysAreEqual(arrayA, arrayB); // result is true
*/
export const arraysAreEqual = (array1: number[], array2: number[]) => {

  if (array1?.length !== array2?.length || !array1 || !array2) {
    return false;
  }

  return array1?.every((element: any, index: number) => element === array2[index]);
};

type Obj = { [key: string]: any };

function countTotalElements(obj: Obj, visited: Set<object>): number {
  let count = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      count++;

      const value = obj[key];

      if (typeof value === 'object' && value !== null && !visited.has(value)) {
        visited.add(value);
        count += countTotalElements(value, visited);
      }
    }
  }

  return count;
}

function isObjEqual(obj1: Obj, obj2: Obj, maxElements = 500, visited = new Set<object>()): boolean {
  if (!obj1 || !obj2) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  const totalElements1 = countTotalElements(obj1, visited);
  const totalElements2 = countTotalElements(obj2, visited);

  if (totalElements1 > maxElements || totalElements2 > maxElements) {
    return false;
  }

  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === 'object' && value1 !== null &&
      typeof value2 === 'object' && value2 !== null) {
      if (!isObjEqual(value1, value2, maxElements, visited)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }

  return true;
}



type PropsChildren = { props?: { children?: { props?: Obj } } }[] | undefined | null | any;
export function childrenIsEqual(
  children: PropsChildren,
  prevChildren: PropsChildren,
  maxElements = 500
): boolean {
  if (!children || !prevChildren) return false;

  const arePropsEqual = children.every((child: PropsChildren, i: number) => {
    const props1 = child?.props?.children?.props;
    const props2 = prevChildren[i]?.props?.children?.props;

    return isObjEqual(props1, props2, maxElements);
  });

  return arePropsEqual;
}
