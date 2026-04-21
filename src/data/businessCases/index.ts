import type { BusinessCase } from '../types'
import { novachem } from './novachem'
import { bmu } from './bmu'

// Register new business cases here — they appear in the selector on the Start page
export const businessCases: BusinessCase[] = [novachem, bmu]

export function getBusinessCase(id: string): BusinessCase | undefined {
  return businessCases.find((bc) => bc.id === id)
}
