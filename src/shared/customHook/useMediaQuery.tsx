import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        setMatches(mediaQuery.matches)

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [query])

    return matches
}

export default useMediaQuery
