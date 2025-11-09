import { useState, useEffect } from 'react';
import portfolioApiService from '../services/portfolioApiService';

// Custom hook for fetching portfolio data with loading and error states
export const usePortfolioData = () => {
  const [data, setData] = useState({
    hero: null,
    about: null,
    technologies: [],
    experiences: [],
    projects: [],
    contact: null,
    genaiSections: [],
  });
  
  const [loading, setLoading] = useState({
    hero: true,
    about: true,
    technologies: true,
    experiences: true,
    projects: true,
    contact: true,
    genaiSections: true,
  });
  
  const [errors, setErrors] = useState({});

  // Fetch all portfolio data
  const fetchAllData = async () => {
    try {
      // Fetch all data in parallel
      const [
        heroResponse,
        aboutResponse,
        technologiesResponse,
        experiencesResponse,
        projectsResponse,
        contactResponse,
        genaiResponse
      ] = await Promise.allSettled([
        portfolioApiService.getHeroSection(),
        portfolioApiService.getAboutSection(),
        portfolioApiService.getTechnologies(),
        portfolioApiService.getExperiences(),
        portfolioApiService.getProjects(),
        portfolioApiService.getContactInfo(),
        portfolioApiService.getGenerativeAISection()
      ]);

      // Process results and handle fallbacks
      const newData = { ...data };
      const newErrors = {};

      // Hero Section
      if (heroResponse.status === 'fulfilled' && heroResponse.value) {
        newData.hero = heroResponse.value;
      } else {
        newErrors.hero = heroResponse.reason || 'Failed to load hero section';
        // Fallback to constants
        newData.hero = {
          content: "Results-driven .NET Backend Engineer with 3+ years of hands-on experience...",
          name: "Kapil Kaushal"
        };
      }

      // About Section
      if (aboutResponse.status === 'fulfilled' && aboutResponse.value) {
        newData.about = aboutResponse.value;
      } else {
        newErrors.about = aboutResponse.reason || 'Failed to load about section';
        newData.about = {
          content: "I am a passionate .NET Backend Engineer with 3+ years of experience...",
        };
      }

      // Technologies
      if (technologiesResponse.status === 'fulfilled' && technologiesResponse.value) {
        newData.technologies = Array.isArray(technologiesResponse.value) ? technologiesResponse.value : [];
      } else {
        newErrors.technologies = technologiesResponse.reason || 'Failed to load technologies';
        newData.technologies = [];
      }

      // Experiences - API returns {value: [], Count: n}
      if (experiencesResponse.status === 'fulfilled' && experiencesResponse.value) {
        const expData = experiencesResponse.value;
        newData.experiences = (expData.value && Array.isArray(expData.value)) ? expData.value : 
                             (Array.isArray(expData) ? expData : []);
      } else {
        newErrors.experiences = experiencesResponse.reason || 'Failed to load experiences';
        newData.experiences = [];
      }

      // Projects - API returns {value: [], Count: n}
      if (projectsResponse.status === 'fulfilled' && projectsResponse.value) {
        const projData = projectsResponse.value;
        newData.projects = (projData.value && Array.isArray(projData.value)) ? projData.value : 
                          (Array.isArray(projData) ? projData : []);
      } else {
        newErrors.projects = projectsResponse.reason || 'Failed to load projects';
        newData.projects = [];
      }

      // Contact
      if (contactResponse.status === 'fulfilled' && contactResponse.value) {
        newData.contact = contactResponse.value;
      } else {
        newErrors.contact = contactResponse.reason || 'Failed to load contact info';
        newData.contact = {
          address: "Mohali, Punjab, India",
          phoneNo: "+91-7807050643",
          email: "kapilkaushal466@gmail.com"
        };
      }

      // Generative AI Sections
      if (genaiResponse.status === 'fulfilled' && genaiResponse.value) {
        newData.genaiSections = Array.isArray(genaiResponse.value) ? genaiResponse.value : [];
      } else {
        newErrors.genaiSections = genaiResponse.reason || 'Failed to load GenAI sections';
        newData.genaiSections = [];
      }

      setData(newData);
      setErrors(newErrors);

    } catch (error) {
      setErrors({ general: 'Failed to load portfolio data' });
    } finally {
      // Set all loading states to false
      setLoading({
        hero: false,
        about: false,
        technologies: false,
        experiences: false,
        projects: false,
        contact: false,
        genaiSections: false,
      });
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return {
    data,
    loading,
    errors,
    refetch: fetchAllData,
    setData, // Allow manual updates
  };
};

// Individual hooks for specific sections
export const useHeroSection = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHero = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getHeroSection();
      if (response) {
        // Map API response to component-friendly format
        setHero({
          name: response.name,
          role: response.role,
          heroContent: response.heroContent,
          contactEmail: response.contactEmail,
          resumeUrl: response.resumeUrl,
          profileImageUrl: response.profileImageUrl
        });
      } else {
        // Fallback data
        setHero({
          name: "Kapil Kaushal",
          role: "Full Stack Developer",
          heroContent: "Results-driven .NET Backend Engineer with 3+ years of hands-on experience in developing scalable enterprise applications using .NET Core and cloud technologies."
        });
      }
    } catch (err) {
      setError(err.message);
      // Fallback data on error
      setHero({
        name: "Kapil Kaushal",
        role: "Full Stack Developer",
        heroContent: "Results-driven .NET Backend Engineer with 3+ years of hands-on experience in developing scalable enterprise applications using .NET Core and cloud technologies."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return { hero, loading, error, refetch: fetchHero };
};

export const useAboutSection = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getAboutSection();
      if (response) {
        // Map API response (aboutText) to component-friendly format (content)
        const aboutData = {
          aboutText: response.aboutText,
          profileImageUrl: response.profileImageUrl,
          content: response.aboutText // Provide both for backward compatibility
        };
        setAbout(aboutData);
      } else {
        // Fallback data
        setAbout({
          content: "I am a passionate .NET Backend Engineer with 3+ years of experience, currently transitioning into the exciting world of Generative AI and enterprise solutions.",
          aboutText: "I am a passionate .NET Backend Engineer with 3+ years of experience, currently transitioning into the exciting world of Generative AI and enterprise solutions."
        });
      }
    } catch (err) {
      setError(err.message);
      // Fallback data
      setAbout({
        content: "I am a passionate .NET Backend Engineer with 3+ years of experience, currently transitioning into the exciting world of Generative AI and enterprise solutions.",
        aboutText: "I am a passionate .NET Backend Engineer with 3+ years of experience, currently transitioning into the exciting world of Generative AI and enterprise solutions."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return { about, loading, error, refetch: fetchAbout };
};

export const useTechnologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTechnologies = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getTechnologies();
      if (response && Array.isArray(response)) {
        setTechnologies(response);
      } else {
        setTechnologies([]);
      }
    } catch (err) {
      setError(err.message);
      setTechnologies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return { technologies, loading, error, refetch: fetchTechnologies };
};

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getExperiences();
      // API returns direct array or {value: [], Count: n} format
      if (response && Array.isArray(response)) {
        // Direct array response
        setExperiences(response);
      } else if (response && response.value && Array.isArray(response.value)) {
        // Wrapped array response
        setExperiences(response.value);
      } else {
        setExperiences([]);
      }
    } catch (err) {
      setError(err.message);
      setExperiences([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return { experiences, loading, error, refetch: fetchExperiences };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getProjects();
      // API returns direct array or {value: [], Count: n} format
      if (response && Array.isArray(response)) {
        // Direct array response
        setProjects(response);
      } else if (response && response.value && Array.isArray(response.value)) {
        // Wrapped array response
        setProjects(response.value);
      } else {
        setProjects([]);
      }
    } catch (err) {
      setError(err.message);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, loading, error, refetch: fetchProjects };
};

export const useContactInfo = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContact = async () => {
    try {
      setLoading(true);
      const response = await portfolioApiService.getContactInfo();
      if (response) {
        setContact(response);
      } else {
        // Fallback data
        setContact({
          address: "Mohali, Punjab, India",
          phoneNo: "+91-7807050643",
          email: "kapilkaushal466@gmail.com"
        });
      }
    } catch (err) {
      setError(err.message);
      // Fallback data
      setContact({
        address: "Mohali, Punjab, India",
        phoneNo: "+91-7807050643",
        email: "kapilkaushal466@gmail.com"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  return { contact, loading, error, refetch: fetchContact };
};