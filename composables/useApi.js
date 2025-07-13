// API Base URL - you can change this to your Laravel backend URL later
const API_BASE_URL = 'http://localhost:8000/api'

// Generic API fetch function
export const useApiCall = async (endpoint, options = {}) => {
  const { data, pending, error, refresh } = await useFetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers
    },
    ...options
  })

  return { data, pending, error, refresh }
}

// About Me API
export const useAboutMe = () => {
  return useApiCall('/about-me')
}

// Skills API
export const useSkills = () => {
  return useApiCall('/skills')
}

// Projects API
export const useProjects = (params = {}) => {
  const query = new URLSearchParams(params).toString()
  const endpoint = query ? `/projects?${query}` : '/projects'
  return useApiCall(endpoint)
}

// Single Project API
export const useProject = (id) => {
  console.log(id)
  return useApiCall(`/projects/${id}`)
}

// Contact API
export const useContact = () => {
  return useApiCall('/contacts')
}

// Social Links API
export const useSocialLinks = () => {
  return useApiCall('/social-links')
}
