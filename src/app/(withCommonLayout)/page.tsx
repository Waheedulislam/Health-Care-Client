import HeroSections from "@/Components/Ui/HomePage/HeroSection/HeroSections";
import Specialist from "@/Components/Ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/Components/Ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/Components/Ui/HomePage/WhyUs/WhyUs";



export default function HomePage() {
  return (
    <>
      <HeroSections />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  )
}
