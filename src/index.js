import { wasmBrowserInstantiate } from './Utils/wasmBrowser.js'

const runWasmAdd = async () => {
  const wasmModule = await wasmBrowserInstantiate('../build/untouched.wasm')
  
  const addResult = wasmModule.instance.exports.sum(1, 2)
  const minusResult = wasmModule.instance.exports.minus(5.1, 4)
  
  const DIV = document.createElement('div')
  DIV.textContent = `Hello, World! sumResult: ${addResult}, minusResult: ${minusResult}`
  
  return DIV
}

runWasmAdd().then((node) => {
  document.querySelector('#root').appendChild(node)
})
