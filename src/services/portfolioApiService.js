// API Base URL - Update this to match your backend API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://backend-portfolio-lpjj.onrender.com/api';

// API Service for fetching portfolio content
class PortfolioApiService {
  // Helper method for making API requests
  async makeRequest(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch {
      // Return null or default values on error so the app doesn't break
      return null;
    }
  }

  // Hero Section
  async getHeroSection() {
    return await this.makeRequest('/portfoliocontent/hero');
  }

  async updateHeroSection(heroData) {
    return await this.makeRequest('/portfoliocontent/hero', {
      method: 'PUT',
      body: JSON.stringify(heroData),
    });
  }

  // About Section
  async getAboutSection() {
    return await this.makeRequest('/portfoliocontent/about');
  }

  async updateAboutSection(aboutData) {
    return await this.makeRequest('/portfoliocontent/about', {
      method: 'PUT',
      body: JSON.stringify(aboutData),
    });
  }

  // Technologies
  async getTechnologies() {
    return await this.makeRequest('/portfoliocontent/technologies');
  }

  async createTechnology(techData) {
    return await this.makeRequest('/portfoliocontent/technologies', {
      method: 'POST',
      body: JSON.stringify(techData),
    });
  }

  async updateTechnology(id, techData) {
    return await this.makeRequest(`/portfoliocontent/technologies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(techData),
    });
  }

  async deleteTechnology(id) {
    return await this.makeRequest(`/portfoliocontent/technologies/${id}`, {
      method: 'DELETE',
    });
  }

  // Experiences
  async getExperiences() {
    return await this.makeRequest('/portfoliocontent/experiences');
  }

  async createExperience(expData) {
    return await this.makeRequest('/portfoliocontent/experiences', {
      method: 'POST',
      body: JSON.stringify(expData),
    });
  }

  async updateExperience(id, expData) {
    return await this.makeRequest(`/portfoliocontent/experiences/${id}`, {
      method: 'PUT',
      body: JSON.stringify(expData),
    });
  }

  async deleteExperience(id) {
    return await this.makeRequest(`/portfoliocontent/experiences/${id}`, {
      method: 'DELETE',
    });
  }

  // Projects
  async getProjects() {
    return await this.makeRequest('/portfoliocontent/projects');
  }

  async createProject(projectData) {
    return await this.makeRequest('/portfoliocontent/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id, projectData) {
    return await this.makeRequest(`/portfoliocontent/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id) {
    return await this.makeRequest(`/portfoliocontent/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact Info
  async getContactInfo() {
    return await this.makeRequest('/portfoliocontent/contact');
  }

  async updateContactInfo(contactData) {
    return await this.makeRequest('/portfoliocontent/contact', {
      method: 'PUT',
      body: JSON.stringify(contactData),
    });
  }

  // Generative AI Section
  async getGenerativeAISection() {
    return await this.makeRequest('/portfoliocontent/genai-sections');
  }

  async createGenerativeAISection(genaiData) {
    return await this.makeRequest('/portfoliocontent/genai-sections', {
      method: 'POST',
      body: JSON.stringify(genaiData),
    });
  }

  async updateGenerativeAISection(id, genaiData) {
    return await this.makeRequest(`/portfoliocontent/genai-sections/${id}`, {
      method: 'PUT',
      body: JSON.stringify(genaiData),
    });
  }

  async deleteGenerativeAISection(id) {
    return await this.makeRequest(`/portfoliocontent/genai-sections/${id}`, {
      method: 'DELETE',
    });
  }

  // File Upload
  async uploadImage(file, category = 'general') {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);

    try {
      const response = await fetch(`${API_BASE_URL}/fileupload/single`, {
        method: 'POST',
        body: formData, // Don't set Content-Type header for FormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch {
      return null;
    }
  }

  async uploadMultipleImages(files, category = 'general') {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    formData.append('category', category);

    try {
      const response = await fetch(`${API_BASE_URL}/fileupload/bulk`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch {
      return null;
    }
  }

  async getImages(category = null) {
    const endpoint = category ? `/fileupload/images?category=${category}` : '/fileupload/images';
    return await this.makeRequest(endpoint);
  }

  async deleteImage(fileName) {
    return await this.makeRequest(`/fileupload/images/${fileName}`, {
      method: 'DELETE',
    });
  }

  // Helper method to get image URL
  getImageUrl(imagePath) {
    if (!imagePath) return null;
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    // Remove leading slash from imagePath if present to avoid double slashes
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    // Construct full URL for images served by the API
    return `${API_BASE_URL.replace('/api', '')}/${cleanPath}`;
  }
}

// Export a singleton instance
export const portfolioApiService = new PortfolioApiService();
export default portfolioApiService;