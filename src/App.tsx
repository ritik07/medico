import Router from "./routes/routes";
import { ConfigProvider } from "antd";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginBottom: "0px",
            titleMarginTop: "0px",
          },
        },
        token: {
          colorPrimary: "#06BBCC",
          borderRadius: 0,
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
