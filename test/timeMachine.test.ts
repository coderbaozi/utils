import { describe, expect, it } from 'vitest'
import { timeMachine } from '../src/time'

describe('timeMachine should be correct work', () => {
 it('should return seconds ago ',() => {
  const date = new Date(Date.now() - 3 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 seconds ago"`)
 })
 it('should return minute ago', () => {
  const date = new Date(Date.now() - 3 * 60 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 minutes ago"`)
 })
 it('should return hour ago', () => {
  const date = new Date(Date.now() - 3 * 60 * 60 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 hours ago"`)
 })
 it('should return day ago', () => {
  const date = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 days ago"`)
 })
 it('should return month ago', () => {
  const date = new Date(Date.now() - 3 * 30 * 24 * 60 * 60 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 months ago"`)
 })
 it('should return year ago', () => {
  const date = new Date(Date.now() - 3 * 12 * 30 * 24 * 60 * 60 * 1000)
  expect(timeMachine(date)).toMatchInlineSnapshot(`"3 years ago"`)
 })
})
