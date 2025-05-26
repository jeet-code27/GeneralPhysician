// sitemap.js
const URL = "https://gaurnishhealth.in";

export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/preventive-care",
    "/services/chronic-disease",
    "/services/specialized-treatment",
    "/services/nutrition-counseling",
    "/services/meal-planning",
    "/services/weight-management",
    "/blog",
    "/blog/best-general-physician-and-dietician-in-ajmer-gaurnish-health",
    "/blog/best-dietician-in-ajmer-dr-gauri-mehra",
    "/contact",
    "/bookconsultation",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}