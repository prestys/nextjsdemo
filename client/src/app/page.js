import "../assets/css/home.css";
import TextBlock from "@/assets/components/TextBlock";

export default function Home() {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="home-page-wrapper">
                  <div className="home-page-content">
                    <TextBlock text="test" heading="test"/>
                  </div>
              </div>
          </div>
      </div>
  );
}
