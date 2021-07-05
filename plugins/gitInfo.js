//! Dont use this
//! It broek

import { execSync } from 'child_process'

// .slice(0, -1) to remove last trailing newline
const longHash = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).slice(
  0,
  -1
)
const shortHash = execSync('git rev-parse --short HEAD', {
  encoding: 'utf-8',
}).slice(0, -1)

const message = execSync('git log -1 --pretty=format:"%s"')
const date = execSync('git log -1 --pretty=format:"%cd"')

export default (_, inject) => {
  return

  // eslint-disable-next-line no-unreachable
  inject('gitInfo', {
    longHash,
    shortHash,
    message,
    date,
  })
}
