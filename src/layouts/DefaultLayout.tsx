import AppBar from "@/components/AppBar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <div className="bg-white">
      <AppBar />
      {/* <Container> */}
      {children}
      {/* </Container> */}
      <Footer />
    </div>
  )
}

export const getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;