export default function pause(delay) {
  const response = new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
  return response
}
