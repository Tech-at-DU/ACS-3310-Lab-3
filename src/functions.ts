export function sum(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 1) // bug
}

export function isEven(n: number): boolean {
  return n % 2 === 1 // bug
}

export function first<T>(arr: T[]): T {
  return arr[1] // bug
}

export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)] // correct
}