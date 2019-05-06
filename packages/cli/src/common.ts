import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as path from 'path'

export function getFileContents (fileName?: string) {
  let filePath
  if (fileName) {
    filePath = path.resolve(process.cwd(), fileName)
    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${fileName} does not seem to exist`)
    }
  } else {
    // @todo iterate parent directories
    if (fs.existsSync('.oneci.json')) {
      filePath = path.join(process.cwd(), '.oneci.json')
    } else if (fs.existsSync('.oneci.yaml')) {
      filePath = path.join(process.cwd(), '.oneci.yaml')
    } else if (fs.existsSync('.oneci.yml')) {
      filePath = path.join(process.cwd(), '.oneci.yml')
    } else {
      throw new Error('Could not detect an oneci config file')
    }
  }

  if (filePath.endsWith('.json')) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } else {
    return yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
  }
}
