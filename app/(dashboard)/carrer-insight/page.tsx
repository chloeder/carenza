import { getCareerInsights } from "@/actions/carrer-insights";
import { CareerInsightsContent } from "../_components/carrer-insight-content";

export default async function CareerInsight() {
  const careerInsight = await getCareerInsights();

  return <CareerInsightsContent careerInsight={careerInsight} />;
}
