export default async function pause(delay) {
  const response = await new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
  return response
}
