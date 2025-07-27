import { useMemo } from "react"

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  )

  for (let i = 0; i <= a.length; i++) dp[i][0] = i
  for (let j = 0; j <= b.length; j++) dp[0][j] = j

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1].toLowerCase() === b[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }

  return dp[a.length][b.length]
}

export const useFuzzySearch = ({
  query,
  list,
  keySelector = item => String(item),
  threshold = 4
}) => {
  const results = useMemo(() => {
    if (!query.trim()) return list

    return (
      list
        .map(item => {
          const target = keySelector(item)
          const distance = levenshtein(query, target)
          return { item, score: distance }
        })
        .filter(({ score }) => score <= threshold)
        .sort((a, b) => a.score - b.score)
        .map(({ item }) => item)
    )
  }, [query, list, keySelector, threshold])

  return results
}