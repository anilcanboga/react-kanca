export const useEqualObject = (obj1, obj2) => {
  // İki obje aynı referansa sahipse, aynıdır.
  if (obj1 === obj2) return true

  // İki objenin türleri farklıysa, aynı değildir.
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  )
    return false

  // İki objenin özellik sayıları farklıysa, aynı değildir.
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false

  // Her bir özelliği kontrol ederek içeriklerini karşılaştır.
  for (let key of keys1) {
    if (!keys2.includes(key) || !useEqualObject(obj1[key], obj2[key]))
      return false
  }

  return true
}
