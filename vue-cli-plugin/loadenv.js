const fs = require('fs')
const path = require('path')
const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv)
// const command = args._[0]
const context = process.env.VUE_CLI_CONTEXT || process.cwd()
const loadEnv = require('@vue/cli-service/lib/util/loadEnv.js')
const env = args.env || args.mode || "development"

if (fs.existsSync(path.resolve(context, `env/${env}`))) {
  loadEnv(path.resolve(context, `env/${env}`))
}

if (args.hasOwnProperty('config_path')) {
  const configPath = args.config_path
  process.env.VUE_CLI_SERVICE_CONFIG_PATH = configPath.charAt(0) === '/' ? configPath : path.resolve(context, configPath)
}

module.exports = (api, _projectOptions) => {
  console.log("loadenv::::", api.id)
}

module.exports.args = args
