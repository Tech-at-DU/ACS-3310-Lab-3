export function removeNegatives(nums: number[]): number[] {
  return nums.filter(n => n > 0) // bug
}

export function endsWith(text: string, ending: string): boolean {
  return text.startsWith(ending) // bug
}

export function take<T>(arr: T[], count: number): T[] {
  return arr.slice(0, count + 1) // bug
}

export function countBy<T>(arr: T[], fn: (item: T) => string): Record<string, number> {
  const result: Record<string, number> = {}
  for (const item of arr) {
    const key = fn(item)
    result[key] = 1 // bug
  }
  return result
}

export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)] // correct
}