/**
 * Add JWT token if available
 */
export function useFetchSapiens (url: string, params: Record<string, any> = {}) {
  const { status, token } = useAuth()

  const headers: Record<string, string | null> = {}
  if (status.value === 'authenticated')
    headers['Authorization'] = token.value

  return useFetch(url, {
    ...params,
    headers: {
      ...params.headers,
      ...headers,
    }
  })
}
