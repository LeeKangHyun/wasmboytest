// The entry file of your WebAssembly module.

export function sum(a: i32, b: i32): i32 {
  return a + b
}

export function minus(a: i32, b: i32): i32 {
  return a - b
}

export function multi(a: i32, b: i32): i32 {
  return a * b
}

export function divide(a: i32, b: i32): f32 {
  return f32(a) / f32(b)
}
