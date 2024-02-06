
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
  export const  calculateScrollAmount = (
    carouselItemsWidths: number[],
    currentIndex: number
  ): number => {
    return Math.floor(carouselItemsWidths
      ?.slice(0, currentIndex)
      ?.reduce((total, width) => total - width, 0));
  }

